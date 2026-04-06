import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const docsAppDir = path.resolve(currentDir, "..");
const workspaceRoot = path.resolve(docsAppDir, "..", "..");
const changelogSourcePath = path.join(
  workspaceRoot,
  "packages",
  "factus-js",
  "CHANGELOG.md",
);
const generatedDocsPath = path.join(
  docsAppDir,
  "content",
  "docs",
  "changelog.mdx",
);

const frontmatter = `---
title: Changelog
description: Historial de cambios y versiones del SDK.
---`;

async function main() {
  const changelog = await readFile(changelogSourcePath, "utf8");
  const content = `${frontmatter}\n\n${changelog.trim()}\n`;

  await mkdir(path.dirname(generatedDocsPath), { recursive: true });
  await writeFile(generatedDocsPath, content, "utf8");
}

main().catch((error) => {
  console.error("Failed to generate changelog docs page.");
  console.error(error);
  process.exitCode = 1;
});
