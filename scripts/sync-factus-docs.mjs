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
import * as cheerio from "cheerio";
import enquirer from "enquirer";
import TurndownService from "turndown";
import { gfm } from "turndown-plugin-gfm";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");

const docTargets = {
  v1: {
    baseUrl: "https://developers.factus.com.co/v1",
    outputName: "v1",
  },
  v2: {
    baseUrl: "https://developers.factus.com.co",
    outputName: "v2",
    excludePathPrefixes: ["/v1"],
  },
};
const defaultTarget = "v1";
const DOCS_INDEX_FILE_NAME = "docs-index.md";
const SKIPPABLE_PATH_PREFIXES = ["/_astro/", "/assets/"];
const SKIPPABLE_PATH_EXTENSIONS = [
  ".xml",
  ".json",
  ".png",
  ".jpg",
  ".jpeg",
  ".svg",
  ".webp",
  ".ico",
  ".css",
  ".js",
];
const NON_HTTP_LINK_PREFIXES = ["#", "mailto:", "tel:"];
const OBFUSCATED_EMAIL_PLACEHOLDER = "example@email.com";
let mirrorDirForErrorReporting;

const base64TrimThreshold = 320;
const turndown = new TurndownService({
  codeBlockStyle: "fenced",
  headingStyle: "atx",
});
turndown.use(gfm);

const log = (...args) => {
  console.log("[factus-docs-sync]", ...args);
};

process.on("uncaughtException", (error) => {
  if (isCancelError(error)) {
    process.exit(0);
  }

  throw error;
});

const run = async () => {
  const target = await resolveSyncTarget();
  const config = createSyncConfig(target);
  mirrorDirForErrorReporting = config.mirrorDir;

  log(`Starting ${config.target.outputName} sync from ${config.base.href}`);
  await rm(config.mirrorDir, { recursive: true, force: true });
  await rm(config.outputDir, { recursive: true, force: true });
  await mkdir(config.mirrorDir, { recursive: true });
  await mkdir(config.outputDir, { recursive: true });

  const usedWget = await mirrorWithWget(config);
  if (!usedWget) {
    await mirrorWithNodeCrawler(config);
  }

  const htmlFiles = await collectHtmlFiles(config.mirrorDir);
  if (htmlFiles.length === 0) {
    throw new Error("No HTML files found after mirroring stage.");
  }

  log(`Transforming ${htmlFiles.length} HTML files into Markdown`);
  const manifest = [];
  const writtenPaths = new Set();

  for (const filePath of htmlFiles) {
    const html = await readFile(filePath, "utf8");
    const sourceUrl = inferSourceUrl(filePath, html, config);
    if (!sourceUrl) continue;

    const relativePath = toMarkdownPath(sourceUrl, config);
    if (!relativePath) continue;

    const markdown = htmlToMarkdown(html, sourceUrl);
    if (!markdown || markdown.length < 40) continue;

    const outputPath = path.join(config.outputDir, relativePath);

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
  await writeManifestFiles(manifest, config);

  log(
    `Done. Generated ${manifest.length} Markdown files at ${relativePathFromRoot(config.outputDir)}`,
  );
};

const createSyncConfig = (target) => ({
  target,
  base: new URL(target.baseUrl),
  mirrorDir: path.join(
    repoRoot,
    ".temp",
    `factus-docs-mirror-${target.outputName}`,
  ),
  outputDir: path.join(repoRoot, "factus-docs", target.outputName),
});

const resolveSyncTarget = async () => {
  if (!process.stdin.isTTY || !process.stdout.isTTY) {
    throw new Error("An interactive terminal is required to choose v1 or v2.");
  }

  const prompt = new enquirer.Select({
    message: "Which Factus docs source should be synced?",
    initial: Object.keys(docTargets).indexOf(defaultTarget),
    choices: Object.entries(docTargets).map(([name, target]) => ({
      name,
      message: `${name} - ${target.baseUrl}`,
    })),
  });

  const answer = await prompt.run();
  return docTargets[answer];
};

const isCancelError = (error) => {
  return (
    error?.code === "ERR_USE_AFTER_CLOSE" ||
    error?.name === "CancelPromptError" ||
    error?.message === "canceled" ||
    error?.message === "Cancelled"
  );
};

const mirrorWithWget = async (config) => {
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
    `--domains=${config.base.hostname}`,
    "--no-host-directories",
    `--directory-prefix=${config.mirrorDir}`,
    config.base.href,
  ];

  for (const prefix of config.target.excludePathPrefixes ?? []) {
    args.splice(
      args.length - 1,
      0,
      `--reject-regex=${escapeWgetRegex(prefix)}(/|$)`,
    );
  }

  const result = await spawnAndWait("wget", args, { allowFailure: true });
  if (result.exitCode === 0) {
    log("wget mirror completed successfully.");
    return true;
  }

  log(
    `wget mirror failed with code ${result.exitCode}. Falling back to built-in Node crawler.`,
  );
  await rm(config.mirrorDir, { recursive: true, force: true });
  await mkdir(config.mirrorDir, { recursive: true });
  return false;
};

const mirrorWithNodeCrawler = async (config) => {
  log("Node crawler started.");

  const queue = [new URL(config.base.href)];
  const visited = new Set();
  let fetched = 0;

  while (queue.length > 0) {
    const current = queue.shift();

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

    const relativeFilePath = urlToHtmlFilePath(normalized, config);
    if (!relativeFilePath) continue;

    const filePath = path.join(config.mirrorDir, relativeFilePath);
    await mkdir(path.dirname(filePath), { recursive: true });
    await writeFile(filePath, html, "utf8");

    const links = extractLinks(html, normalized);
    for (const next of links) {
      if (!isCrawlableUrl(next, config)) continue;
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

    if (entry.isFile() && hasExtension(fullPath, ".html")) {
      files.push(fullPath);
    }
  }

  return files;
};

const inferSourceUrl = (filePath, html, config) => {
  const $ = cheerio.load(html);
  const canonicalHref = $('link[rel="canonical"]').attr("href");

  if (canonicalHref) {
    try {
      const url = new URL(canonicalHref, config.base.href);
      if (isCrawlableUrl(url.href, config)) {
        url.hash = "";
        url.search = "";
        return url.href;
      }
    } catch {
      // Ignore invalid canonical value.
    }
  }

  const relative = path
    .relative(config.mirrorDir, filePath)
    .replaceAll("\\", "/");
  if (!relative) return null;

  const clean = relative
    .replace(/^index\.html$/i, "")
    .replace(/\/index\.html$/i, "/")
    .replace(/\.html$/i, "");

  try {
    return buildSourceUrlFromMirroredPath(clean || "/", config);
  } catch {
    return null;
  }
};

const findTitle = (html, sourceUrl) => {
  const $ = cheerio.load(html);
  const heading = cleanupMarkdown($("h1").first().text());
  if (heading) return heading;

  const title = cleanupMarkdown(
    $("title")
      .first()
      .text()
      .replace(/\s*\|\s*Factus API\s*$/i, ""),
  );
  if (title) return title;

  return new URL(sourceUrl).pathname === "/"
    ? "Inicio"
    : new URL(sourceUrl).pathname;
};

const htmlToMarkdown = (html, sourceUrl) => {
  const $ = cheerio.load(html);
  const contentRoot = $("main, article, .sl-markdown-content").first();
  const content = contentRoot.length > 0 ? contentRoot : $("body");

  content
    .find(
      [
        "script",
        "style",
        "noscript",
        "svg",
        "template",
        "iframe",
        "header",
        "footer",
        "nav",
        "aside",
        "form",
        "button",
        "dialog",
        "select",
        "option",
        "[hidden]",
        '[aria-hidden="true"]',
      ].join(","),
    )
    .remove();

  content.find("a[href]").each((_, element) => {
    const href = $(element).attr("href");
    if (!href || href.startsWith("javascript:")) return;

    try {
      $(element).attr("href", new URL(href, sourceUrl).href);
    } catch {
      // Leave invalid hrefs as-is for Turndown.
    }
  });

  normalizeObfuscatedEmailsInHtml($, content);

  return cleanupMarkdown(
    normalizeObfuscatedEmailsInMarkdown(
      trimLargeBase64Payloads(turndown.turndown(content.html() ?? "")),
    ),
  );
};

const decodeCloudflareEmail = (encoded) => {
  if (
    !encoded ||
    encoded.length < 4 ||
    encoded.length % 2 !== 0 ||
    !/^[\da-f]+$/i.test(encoded)
  ) {
    return null;
  }

  const key = Number.parseInt(encoded.slice(0, 2), 16);
  if (Number.isNaN(key)) return null;

  let out = "";
  for (let index = 2; index < encoded.length; index += 2) {
    const code = Number.parseInt(encoded.slice(index, index + 2), 16);
    if (Number.isNaN(code)) return null;
    out += String.fromCharCode(code ^ key);
  }

  return out.includes("@") ? out : null;
};

const resolveObfuscatedEmail = ($, node) => {
  const candidates = [
    node.find("[data-cfemail]").attr("data-cfemail"),
    node.attr("data-cfemail"),
    node.attr("href")?.match(/email-protection#([0-9a-f]+)/i)?.[1],
  ];

  return (
    candidates.map(decodeCloudflareEmail).find(Boolean) ??
    OBFUSCATED_EMAIL_PLACEHOLDER
  );
};

const mergePartialEmailPrefix = ($, anchor, decodedEmail) => {
  const previous = anchor[0]?.previousSibling;
  if (!previous || previous.type !== "text") {
    return decodedEmail;
  }

  const text = previous.data ?? "";
  const trimmedPrefix = text.trimEnd();
  const shouldMergePrefix =
    /Mail[_\s]/i.test(trimmedPrefix) && !trimmedPrefix.includes("@");

  if (shouldMergePrefix) {
    $(previous).remove();
    return decodedEmail.startsWith("Mail")
      ? decodedEmail
      : `${trimmedPrefix}${decodedEmail}`;
  }

  return decodedEmail;
};

const normalizeObfuscatedEmailsInHtml = ($, root) => {
  root.find('a[href*="email-protection"]').each((_, element) => {
    const node = $(element);
    const decodedEmail = resolveObfuscatedEmail($, node);
    node.replaceWith(mergePartialEmailPrefix($, node, decodedEmail));
  });

  root.find("[data-cfemail], .__cf_email__").each((_, element) => {
    const node = $(element);
    if (node.closest('a[href*="email-protection"]').length > 0) {
      return;
    }

    const decoded = decodeCloudflareEmail(node.attr("data-cfemail"));
    node.replaceWith(decoded ?? OBFUSCATED_EMAIL_PLACEHOLDER);
  });
};

const normalizeObfuscatedEmailsInMarkdown = (markdown) => {
  return markdown
    .replace(
      /\[[^\]]*\]\([^)]*email-protection#([0-9a-f]+)[^)]*\)/gi,
      (_, hash) => decodeCloudflareEmail(hash) ?? OBFUSCATED_EMAIL_PLACEHOLDER,
    )
    .replace(
      /\[[^\]]*\]\([^)]*email-protection[^)]*\)/gi,
      OBFUSCATED_EMAIL_PLACEHOLDER,
    )
    .replace(
      /\\?\[\\?\[?\s*email\s+protected\s*\]?\\?\]/gi,
      OBFUSCATED_EMAIL_PLACEHOLDER,
    )
    .replace(
      // Repair older sync output where a partial prefix was glued to EXAMPLE_EMAIL.
      /Mail\\?_.+?(?:EXAMPLE\\_EMAIL|EXAMPLE_EMAIL)/gi,
      OBFUSCATED_EMAIL_PLACEHOLDER,
    )
    .replace(/EXAMPLE\\_EMAIL/g, OBFUSCATED_EMAIL_PLACEHOLDER)
    .replace(/EXAMPLE_EMAIL/g, OBFUSCATED_EMAIL_PLACEHOLDER);
};

const trimLargeBase64Payloads = (markdown) => {
  const trimValue = (value) => {
    const compact = value.replace(/[\r\n]/g, "");
    return compact.length < base64TrimThreshold
      ? value
      : `[TRIMMED_BASE64_${compact.length}_CHARS]`;
  };

  let out = markdown;

  out = out.replace(
    /((?:"[^"\n]*(?:base64|base_64|b64)[^"\n]*"|[a-zA-Z0-9_.-]*(?:base64|base_64|b64)[a-zA-Z0-9_.-]*)\s*:\s*")([A-Za-z0-9+/=\r\n]+)(")/gi,
    (_, prefix, value, suffix) => `${prefix}${trimValue(value)}${suffix}`,
  );

  out = out.replace(
    /(data:[^;\s]+;base64,)([A-Za-z0-9+/=\r\n]+)/gi,
    (_, prefix, value) => `${prefix}${trimValue(value)}`,
  );

  out = out.replace(/([A-Za-z0-9+/]{420,}={0,2})/g, trimValue);

  return out;
};

const cleanupMarkdown = (value) =>
  value
    .replace(/\u00a0/g, " ")
    .replace(/\t/g, " ")
    .replace(/[ \f\v]+\n/g, "\n")
    .replace(/\n{3,}/g, "\n\n")
    .replace(/[ ]{2,}/g, " ")
    .replace(/\n +/g, "\n")
    .replace(/ +\n/g, "\n")
    .trim();

const extractLinks = (html, sourceUrl) => {
  const $ = cheerio.load(html);
  const links = new Set();

  $("a[href]").each((_, element) => {
    const href = $(element).attr("href");
    if (
      !href ||
      NON_HTTP_LINK_PREFIXES.some((prefix) => href.startsWith(prefix))
    ) {
      return;
    }

    try {
      const url = new URL(href, sourceUrl);
      url.hash = "";
      url.search = "";
      links.add(url.href);
    } catch {
      // Ignore invalid URLs.
    }
  });

  return [...links];
};

const isSkippablePath = (urlString) => {
  const pathname = new URL(urlString).pathname.toLowerCase();
  return (
    SKIPPABLE_PATH_PREFIXES.some((prefix) => pathname.startsWith(prefix)) ||
    SKIPPABLE_PATH_EXTENSIONS.some((extension) => pathname.endsWith(extension))
  );
};

const isCrawlableUrl = (urlString, config) => {
  const url = new URL(urlString);
  const basePath = config.base.pathname.replace(/\/$/, "");
  const pathname = url.pathname.replace(/\/$/, "");

  if (url.origin !== config.base.origin) return false;
  if (isExcludedPath(pathname, config)) return false;
  if (!basePath) return true;

  return pathname === basePath || pathname.startsWith(`${basePath}/`);
};

const isExcludedPath = (pathname, config) => {
  return (config.target.excludePathPrefixes ?? []).some((prefix) => {
    const cleanPrefix = prefix.replace(/\/$/, "");
    return pathname === cleanPrefix || pathname.startsWith(`${cleanPrefix}/`);
  });
};

const escapeWgetRegex = (value) => {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
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

const buildSourceUrlFromMirroredPath = (pathname, config) => {
  const normalizedPathname = normalizePathname(
    `/${String(pathname).replace(/^\/+/u, "")}`,
  );
  const normalizedBasePath = normalizePathname(config.base.pathname);
  const sourcePathname =
    normalizedPathname === "/"
      ? normalizedBasePath
      : normalizedBasePath && normalizedBasePath !== "/"
        ? normalizedPathname === normalizedBasePath ||
          normalizedPathname.startsWith(`${normalizedBasePath}/`)
          ? normalizedPathname
          : `${normalizedBasePath}${normalizedPathname}`
        : normalizedPathname;

  const url = new URL(config.base.origin);
  url.pathname = sourcePathname;
  return url.href;
};

const getPathnameRelativeToBase = (pathname, config) => {
  const normalizedPathname = normalizePathname(pathname);
  const normalizedBasePath = normalizePathname(config.base.pathname);

  if (!normalizedBasePath || normalizedBasePath === "/") {
    return normalizedPathname;
  }

  if (normalizedPathname === normalizedBasePath) {
    return "/";
  }

  if (!normalizedPathname.startsWith(`${normalizedBasePath}/`)) {
    return null;
  }

  return normalizedPathname.slice(normalizedBasePath.length) || "/";
};

const urlToHtmlFilePath = (urlString, config) => {
  const relativePathname = getPathnameRelativeToBase(
    new URL(urlString).pathname,
    config,
  );
  if (relativePathname === null) return null;

  return pathFromRelativePathname(relativePathname, ".html");
};

const toMarkdownPath = (sourceUrl, config) => {
  const url = new URL(sourceUrl);
  const relativePathname = getPathnameRelativeToBase(url.pathname, config);
  if (relativePathname === null) return null;

  return pathFromRelativePathname(relativePathname, ".md");
};

const pathFromRelativePathname = (pathname, extension) => {
  const normalizedPathname = normalizePathname(pathname);
  const basePathname =
    normalizedPathname === "/" ? "/index" : normalizedPathname;
  return `${basePathname}${extension}`
    .replace(/^\//, "")
    .replaceAll("/", path.sep);
};

const normalizePathname = (pathname) => {
  if (!pathname || pathname === "/") {
    return "/";
  }

  return pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
};

const hasExtension = (filePath, extension) => {
  return filePath.toLowerCase().endsWith(extension.toLowerCase());
};

const writeManifestFiles = async (entries, config) => {
  const generatedAt = new Date().toISOString();
  const indexLines = [
    "# External Factus Docs Index",
    "",
    `- Generated at: ${generatedAt}`,
    `- Base URL: ${config.base.href}`,
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
    path.join(config.outputDir, DOCS_INDEX_FILE_NAME),
    `${indexLines.join("\n")}\n`,
    "utf8",
  );

  const manifest = {
    generatedAt,
    baseUrl: config.base.href,
    totalFiles: entries.length,
    entries,
  };

  await writeFile(
    path.join(config.outputDir, "manifest.json"),
    `${JSON.stringify(manifest, null, 2)}\n`,
    "utf8",
  );
};

const relativePathFromRoot = (absolutePath) => {
  return path.relative(repoRoot, absolutePath).replaceAll("\\", "/");
};

run().catch(async (error) => {
  if (isCancelError(error)) {
    process.exitCode = 0;
    return;
  }

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
    const mirrorDir = mirrorDirForErrorReporting;
    if (mirrorDir) {
      const mirrorStats = await stat(mirrorDir);
      if (mirrorStats.isDirectory()) {
        console.error(
          "[factus-docs-sync]",
          `Mirror directory kept for inspection: ${relativePathFromRoot(mirrorDir)}`,
        );
      }
    }
  } catch {
    // Ignore mirror dir stat failures.
  }

  process.exitCode = 1;
});
