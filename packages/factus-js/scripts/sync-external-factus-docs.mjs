#!/usr/bin/env node

import { spawn } from "node:child_process";
import { createHash } from "node:crypto";
import {
    mkdir,
    readdir,
    readFile,
    rm,
    stat,
    writeFile,
} from "node:fs/promises";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, "..");

const BASE_URL =
  process.env.FACTUS_DOCS_BASE_URL ?? "https://developers.factus.com.co/v1/";
const base = new URL(BASE_URL);

const mirrorDir = path.join(packageRoot, ".external-factus-mirror");
const outputDir = path.join(packageRoot, ".external-factus-docs");
const maxPages = Number.parseInt(
  process.env.FACTUS_DOCS_MAX_PAGES ?? "350",
  10,
);
const base64TrimThreshold = Number.parseInt(
  process.env.FACTUS_DOCS_BASE64_TRIM_THRESHOLD ?? "320",
  10,
);

const log = (...args) => {
  console.log("[factus-docs-sync]", ...args);
};

const run = async () => {
  log(`Starting sync from ${base.href}`);
  await rm(mirrorDir, { recursive: true, force: true });
  await rm(outputDir, { recursive: true, force: true });
  await mkdir(mirrorDir, { recursive: true });
  await mkdir(outputDir, { recursive: true });

  const usedWget = await mirrorWithWget();
  if (!usedWget) {
    await mirrorWithNodeCrawler();
  }

  const htmlFiles = await collectHtmlFiles(mirrorDir);
  if (htmlFiles.length === 0) {
    throw new Error("No HTML files found after mirroring stage.");
  }

  log(`Transforming ${htmlFiles.length} HTML files into Markdown`);
  const manifest = [];
  const writtenPaths = new Set();

  for (const filePath of htmlFiles) {
    const html = await readFile(filePath, "utf8");
    const sourceUrl = inferSourceUrl(filePath, html);
    if (!sourceUrl) continue;

    const markdown = htmlToMarkdown(html, sourceUrl);
    if (!markdown || markdown.length < 40) continue;

    const relativePath = toMarkdownPath(sourceUrl);
    const outputPath = path.join(outputDir, relativePath);

    if (writtenPaths.has(outputPath)) continue;
    writtenPaths.add(outputPath);

    await mkdir(path.dirname(outputPath), { recursive: true });
    await writeFile(outputPath, `${markdown.trim()}\n`, "utf8");

    manifest.push({
      title: findTitle(html, sourceUrl),
      sourceUrl,
      path: relativePath,
    });
  }

  manifest.sort((a, b) => a.path.localeCompare(b.path));
  await writeManifestFiles(manifest);

  log(
    `Done. Generated ${manifest.length} Markdown files at ${relativePathFromRoot(outputDir)}`,
  );
};

const mirrorWithWget = async () => {
  const hasWget = await isCommandAvailable("wget", ["--version"]);
  if (!hasWget) {
    log(
      "wget is not available in PATH. Falling back to built-in Node crawler.",
    );
    return false;
  }

  log("wget detected. Running mirror mode.");

  const args = [
    "--mirror",
    "--convert-links",
    "--adjust-extension",
    "--page-requisites",
    "--no-parent",
    `--domains=${base.hostname}`,
    "--no-host-directories",
    `--directory-prefix=${mirrorDir}`,
    base.href,
  ];

  const result = await spawnAndWait("wget", args, { allowFailure: true });
  if (result.exitCode === 0) {
    log("wget mirror completed successfully.");
    return true;
  }

  log(
    `wget mirror failed with code ${result.exitCode}. Falling back to built-in Node crawler.`,
  );
  await rm(mirrorDir, { recursive: true, force: true });
  await mkdir(mirrorDir, { recursive: true });
  return false;
};

const mirrorWithNodeCrawler = async () => {
  log(`Node crawler started (max pages: ${maxPages}).`);

  const queue = [new URL(base.href)];
  const visited = new Set();
  let fetched = 0;

  while (queue.length > 0 && fetched < maxPages) {
    const current = queue.shift();
    if (!current) continue;

    const normalized = normalizeCrawlUrl(current);
    if (visited.has(normalized)) continue;
    visited.add(normalized);

    let response;
    try {
      response = await fetch(normalized, {
        headers: {
          "user-agent":
            "factus-js-docs-sync/1.0 (+https://github.com/sbetav/factus-js)",
          accept: "text/html,application/xhtml+xml",
        },
      });
    } catch {
      continue;
    }

    if (!response.ok) continue;
    const contentType = response.headers.get("content-type") ?? "";
    if (!contentType.includes("text/html")) continue;

    const html = await response.text();
    fetched += 1;

    const filePath = path.join(mirrorDir, urlToHtmlFilePath(normalized));
    await mkdir(path.dirname(filePath), { recursive: true });
    await writeFile(filePath, html, "utf8");

    const links = extractLinks(html, normalized);
    for (const next of links) {
      if (!next.startsWith(base.origin)) continue;
      if (isSkippablePath(next)) continue;
      const nextUrl = new URL(next);
      const nextNormalized = normalizeCrawlUrl(nextUrl);
      if (!visited.has(nextNormalized)) {
        queue.push(new URL(nextNormalized));
      }
    }
  }

  log(`Node crawler fetched ${fetched} pages.`);
};

const isCommandAvailable = async (command, args) => {
  const result = await spawnAndWait(command, args, {
    allowFailure: true,
    quiet: true,
  });
  return result.exitCode === 0;
};

const spawnAndWait = (command, args, options = {}) => {
  const { allowFailure = false, quiet = false } = options;

  return new Promise((resolve, reject) => {
    const child = spawn(command, args, {
      stdio: quiet ? "ignore" : "inherit",
      windowsHide: true,
      shell: false,
    });

    child.on("error", (error) => {
      if (allowFailure) {
        resolve({ exitCode: -1, error });
      } else {
        reject(error);
      }
    });

    child.on("close", (exitCode) => {
      if (!allowFailure && exitCode !== 0) {
        reject(new Error(`${command} failed with exit code ${exitCode}`));
        return;
      }

      resolve({ exitCode: exitCode ?? -1 });
    });
  });
};

const collectHtmlFiles = async (dir) => {
  const files = [];
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      const nested = await collectHtmlFiles(fullPath);
      files.push(...nested);
      continue;
    }

    if (entry.isFile() && fullPath.toLowerCase().endsWith(".html")) {
      files.push(fullPath);
    }
  }

  return files;
};

const inferSourceUrl = (filePath, html) => {
  const canonicalMatch = html.match(/<link[^>]+rel=["']canonical["'][^>]*>/i);
  if (canonicalMatch) {
    const hrefMatch = canonicalMatch[0].match(/href=["']([^"']+)["']/i);
    if (hrefMatch?.[1]) {
      try {
        const url = new URL(hrefMatch[1], base.href);
        if (url.origin === base.origin) {
          url.hash = "";
          url.search = "";
          return url.href;
        }
      } catch {
        // Ignore invalid canonical value.
      }
    }
  }

  const relative = path.relative(mirrorDir, filePath).replaceAll("\\", "/");
  if (!relative) return null;

  const clean = relative
    .replace(/^index\.html$/i, "")
    .replace(/\/index\.html$/i, "/")
    .replace(/\.html$/i, "");

  try {
    const url = new URL(clean || "/", base.href);
    url.hash = "";
    url.search = "";
    return url.href;
  } catch {
    return null;
  }
};

const findTitle = (html, sourceUrl) => {
  const h1 = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (h1?.[1]) {
    const value = decodeHtmlEntities(stripTags(h1[1]).trim());
    if (value) return value;
  }

  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
  if (title?.[1]) {
    const clean = decodeHtmlEntities(stripTags(title[1]))
      .replace(/\s*\|\s*Factus API\s*$/i, "")
      .trim();
    if (clean) return clean;
  }

  return new URL(sourceUrl).pathname === "/"
    ? "Inicio"
    : new URL(sourceUrl).pathname;
};

const htmlToMarkdown = (html, sourceUrl) => {
  const main = extractMainContent(html) ?? extractBody(html) ?? html;
  let content = main;

  content = content.replace(
    /<(script|style|noscript|svg|template|iframe)[^>]*>[\s\S]*?<\/\1>/gi,
    "",
  );
  content = content.replace(
    /<(header|footer|nav|aside|form|button|dialog|select|option)[^>]*>[\s\S]*?<\/\1>/gi,
    "",
  );
  content = content.replace(
    /<([a-z0-9-]+)([^>]*\b(hidden|aria-hidden)=['"]?true['"]?[^>]*)>[\s\S]*?<\/\1>/gi,
    "",
  );

  content = replaceCodeBlocks(content);
  content = replaceTables(content);
  content = replaceLinks(content, sourceUrl);
  content = replaceHeadings(content);
  content = replaceBlockTags(content);
  content = replaceInlineTags(content);

  content = stripTags(content);
  content = decodeHtmlEntities(content);
  content = cleanupMarkdown(content);
  content = trimLargeBase64Payloads(content);

  return content;
};

const trimLargeBase64Payloads = (markdown) => {
  const threshold = Number.isFinite(base64TrimThreshold)
    ? base64TrimThreshold
    : 320;

  let out = markdown;

  out = out.replace(
    /((?:"[^"\n]*(?:base64|base_64|b64)[^"\n]*"|[a-zA-Z0-9_.-]*(?:base64|base_64|b64)[a-zA-Z0-9_.-]*)\s*:\s*")([A-Za-z0-9+/=\r\n]+)(")/gi,
    (match, prefix, value, suffix) => {
      const compact = value.replace(/[\r\n]/g, "");
      if (compact.length < threshold) return match;
      return `${prefix}[TRIMMED_BASE64_${compact.length}_CHARS]${suffix}`;
    },
  );

  out = out.replace(
    /(data:[^;\s]+;base64,)([A-Za-z0-9+/=\r\n]+)/gi,
    (match, prefix, value) => {
      const compact = value.replace(/[\r\n]/g, "");
      if (compact.length < threshold) return match;
      return `${prefix}[TRIMMED_BASE64_${compact.length}_CHARS]`;
    },
  );

  out = out.replace(/([A-Za-z0-9+/]{420,}={0,2})/g, (value) => {
    if (value.length < threshold) return value;
    return `[TRIMMED_BASE64_${value.length}_CHARS]`;
  });

  return out;
};

const extractMainContent = (html) => {
  const selectors = [
    /<main[^>]*>([\s\S]*?)<\/main>/i,
    /<article[^>]*>([\s\S]*?)<\/article>/i,
    /<div[^>]*class=["'][^"']*sl-markdown-content[^"']*["'][^>]*>([\s\S]*?)<\/div>/i,
  ];

  for (const regex of selectors) {
    const match = html.match(regex);
    if (match?.[1]) return match[1];
  }

  return null;
};

const extractBody = (html) => {
  const match = html.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
  return match?.[1] ?? null;
};

const replaceCodeBlocks = (html) => {
  return html.replace(/<pre[^>]*>([\s\S]*?)<\/pre>/gi, (_, preContent) => {
    const codeMatch = preContent.match(/<code([^>]*)>([\s\S]*?)<\/code>/i);
    if (!codeMatch) {
      const plain = decodeHtmlEntities(stripTags(preContent).trim());
      if (!plain) return "\n\n";
      return `\n\n\`\`\`\n${plain}\n\`\`\`\n\n`;
    }

    const attrs = codeMatch[1] ?? "";
    const langMatch = attrs.match(/language-([a-z0-9#+-]+)/i);
    const lang = langMatch?.[1]?.toLowerCase() ?? "";
    const code = decodeHtmlEntities(
      stripTags(codeMatch[2]).replace(/\r/g, ""),
    ).trimEnd();
    if (!code) return "\n\n";
    return `\n\n\`\`\`${lang}\n${code}\n\`\`\`\n\n`;
  });
};

const replaceTables = (html) => {
  return html.replace(
    /<table[^>]*>([\s\S]*?)<\/table>/gi,
    (_, tableContent) => {
      const rows = [...tableContent.matchAll(/<tr[^>]*>([\s\S]*?)<\/tr>/gi)];
      if (rows.length === 0) return "\n\n";

      const matrix = rows.map((row) => {
        const cells = [...row[1].matchAll(/<(th|td)[^>]*>([\s\S]*?)<\/\1>/gi)];
        return cells.map((cell) =>
          cleanupMarkdown(decodeHtmlEntities(stripTags(cell[2]))),
        );
      });

      const width = Math.max(...matrix.map((r) => r.length), 0);
      if (width === 0) return "\n\n";

      const padded = matrix.map((row) => {
        const out = [...row];
        while (out.length < width) out.push("");
        return out;
      });

      const header = padded[0];
      const divider = new Array(width).fill("---");
      const lines = [`| ${header.join(" | ")} |`, `| ${divider.join(" | ")} |`];

      for (let i = 1; i < padded.length; i += 1) {
        lines.push(`| ${padded[i].join(" | ")} |`);
      }

      return `\n\n${lines.join("\n")}\n\n`;
    },
  );
};

const replaceLinks = (html, sourceUrl) => {
  return html.replace(/<a([^>]*)>([\s\S]*?)<\/a>/gi, (_, attrs, text) => {
    const hrefMatch = attrs.match(/href=["']([^"']+)["']/i);
    const rawHref = hrefMatch?.[1] ?? "";
    const label = cleanupMarkdown(decodeHtmlEntities(stripTags(text)));
    if (!label) return "";
    if (!rawHref || rawHref.startsWith("javascript:")) return label;

    let href = rawHref;
    try {
      href = new URL(rawHref, sourceUrl).href;
    } catch {
      href = rawHref;
    }

    return `[${label}](${href})`;
  });
};

const replaceHeadings = (html) => {
  let out = html;
  for (let level = 1; level <= 6; level += 1) {
    const regex = new RegExp(
      `<h${level}[^>]*>([\\s\\S]*?)<\\/h${level}>`,
      "gi",
    );
    out = out.replace(regex, (_, text) => {
      const clean = cleanupMarkdown(decodeHtmlEntities(stripTags(text)));
      if (!clean) return "\n";
      return `\n\n${"#".repeat(level)} ${clean}\n\n`;
    });
  }
  return out;
};

const replaceBlockTags = (html) => {
  let out = html;
  out = out.replace(/<li[^>]*>([\s\S]*?)<\/li>/gi, (_, text) => {
    const clean = cleanupMarkdown(decodeHtmlEntities(stripTags(text)));
    if (!clean) return "";
    return `\n- ${clean}`;
  });
  out = out.replace(
    /<blockquote[^>]*>([\s\S]*?)<\/blockquote>/gi,
    (_, text) => {
      const clean = cleanupMarkdown(decodeHtmlEntities(stripTags(text)));
      if (!clean) return "";
      return `\n> ${clean}\n`;
    },
  );
  out = out.replace(/<(p|div|section|article|ul|ol|br|hr)[^>]*>/gi, "\n");
  out = out.replace(/<\/(p|div|section|article|ul|ol)>/gi, "\n");
  return out;
};

const replaceInlineTags = (html) => {
  let out = html;
  out = out.replace(
    /<(strong|b)[^>]*>([\s\S]*?)<\/\1>/gi,
    (_, _tag, text) =>
      `**${cleanupMarkdown(decodeHtmlEntities(stripTags(text)))}**`,
  );
  out = out.replace(
    /<(em|i)[^>]*>([\s\S]*?)<\/\1>/gi,
    (_, _tag, text) =>
      `*${cleanupMarkdown(decodeHtmlEntities(stripTags(text)))}*`,
  );
  out = out.replace(/<code[^>]*>([\s\S]*?)<\/code>/gi, (_, text) => {
    const clean = cleanupMarkdown(decodeHtmlEntities(stripTags(text)));
    if (!clean.includes("`")) return `\`${clean}\``;
    return `\`${clean.replaceAll("`", "")}\``;
  });
  return out;
};

const stripTags = (value) => value.replace(/<[^>]*>/g, "");

const decodeHtmlEntities = (value) => {
  if (!value) return "";

  const entities = {
    nbsp: " ",
    amp: "&",
    lt: "<",
    gt: ">",
    quot: '"',
    apos: "'",
  };

  return value
    .replace(/&(#x?[0-9a-fA-F]+|[a-zA-Z]+);/g, (match, entity) => {
      if (entity[0] === "#") {
        const isHex = entity[1]?.toLowerCase() === "x";
        const codePoint = Number.parseInt(
          isHex ? entity.slice(2) : entity.slice(1),
          isHex ? 16 : 10,
        );
        if (Number.isFinite(codePoint)) {
          try {
            return String.fromCodePoint(codePoint);
          } catch {
            return match;
          }
        }
        return match;
      }

      return entities[entity] ?? match;
    })
    .replace(/\r\n/g, "\n");
};

const cleanupMarkdown = (value) => {
  let out = value.replace(/\u00a0/g, " ");
  out = out.replace(/\t/g, " ");
  out = out.replace(/[ \f\v]+\n/g, "\n");
  out = out.replace(/\n{3,}/g, "\n\n");
  out = out.replace(/[ ]{2,}/g, " ");
  out = out.replace(/\n +/g, "\n");
  out = out.replace(/ +\n/g, "\n");
  return out.trim();
};

const extractLinks = (html, sourceUrl) => {
  const links = new Set();
  const regex = /<a[^>]+href=["']([^"']+)["'][^>]*>/gi;

  let match;
  while ((match = regex.exec(html)) !== null) {
    const href = match[1];
    if (!href || href.startsWith("#")) continue;
    if (href.startsWith("mailto:") || href.startsWith("tel:")) continue;
    try {
      const url = new URL(href, sourceUrl);
      url.hash = "";
      url.search = "";
      links.add(url.href);
    } catch {
      // Ignore invalid URLs.
    }
  }

  return [...links];
};

const isSkippablePath = (urlString) => {
  const url = new URL(urlString);
  const pathname = url.pathname.toLowerCase();

  if (pathname.startsWith("/_astro/")) return true;
  if (pathname.startsWith("/assets/")) return true;
  if (pathname.endsWith(".xml")) return true;
  if (pathname.endsWith(".json")) return true;
  if (pathname.endsWith(".png")) return true;
  if (pathname.endsWith(".jpg")) return true;
  if (pathname.endsWith(".jpeg")) return true;
  if (pathname.endsWith(".svg")) return true;
  if (pathname.endsWith(".webp")) return true;
  if (pathname.endsWith(".ico")) return true;
  if (pathname.endsWith(".css")) return true;
  if (pathname.endsWith(".js")) return true;

  return false;
};

const normalizeCrawlUrl = (url) => {
  const out = new URL(url.href);
  out.hash = "";
  out.search = "";

  if (!out.pathname) {
    out.pathname = "/";
  }

  if (out.pathname !== "/" && out.pathname.endsWith("/")) {
    out.pathname = out.pathname.slice(0, -1);
  }

  return out.href;
};

const urlToHtmlFilePath = (urlString) => {
  const url = new URL(urlString);
  const pathname = url.pathname === "/" ? "/index" : url.pathname;
  const safePath = pathname.replace(/\/$/, "") || "/index";
  const output = `${safePath}.html`;
  return output.replace(/^\//, "").replaceAll("/", path.sep);
};

const toMarkdownPath = (sourceUrl) => {
  const url = new URL(sourceUrl);
  const pathname = url.pathname === "/" ? "/index" : url.pathname;
  const clean = pathname.replace(/\/$/, "");
  return `${clean.replace(/^\//, "")}.md`;
};

const writeManifestFiles = async (entries) => {
  const generatedAt = new Date().toISOString();
  const indexLines = [
    "# External Factus Docs Index",
    "",
    `- Generated at: ${generatedAt}`,
    `- Base URL: ${base.href}`,
    `- Files: ${entries.length}`,
    "",
  ];

  for (const entry of entries) {
    indexLines.push(`## ${entry.title}`);
    indexLines.push("");
    indexLines.push(`- Source: ${entry.sourceUrl}`);
    indexLines.push(`- File: ${entry.path}`);
    indexLines.push("");
  }

  await writeFile(
    path.join(outputDir, "_index.md"),
    `${indexLines.join("\n")}\n`,
    "utf8",
  );

  const manifest = {
    generatedAt,
    baseUrl: base.href,
    totalFiles: entries.length,
    entries,
  };

  await writeFile(
    path.join(outputDir, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8",
  );
};

const relativePathFromRoot = (absolutePath) => {
  const root = path.resolve(packageRoot, "..", "..");
  return path.relative(root, absolutePath).replaceAll("\\", "/");
};

run().catch(async (error) => {
  const fingerprint = createHash("sha1")
    .update(String(error?.stack ?? error))
    .digest("hex")
    .slice(0, 8);
  console.error(
    "[factus-docs-sync]",
    `Failed (${fingerprint}):`,
    error?.message ?? error,
  );

  try {
    const mirrorStats = await stat(mirrorDir);
    if (mirrorStats.isDirectory()) {
      console.error(
        "[factus-docs-sync]",
        `Mirror directory kept for inspection: ${relativePathFromRoot(mirrorDir)}`,
      );
    }
  } catch {
    // Ignore mirror dir stat failures.
  }

  process.exitCode = 1;
});
