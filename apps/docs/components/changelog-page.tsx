import { getMDXComponents } from "@/components/mdx";
import { Markdown } from "fumadocs-core/content";
import { readFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const currentDir = path.dirname(fileURLToPath(import.meta.url));
const changelogPath = path.resolve(
  currentDir,
  "..",
  "..",
  "..",
  "packages",
  "factus-js",
  "CHANGELOG.md",
);

export async function ChangelogPage() {
  let changelog = "";

  try {
    changelog = await readFile(changelogPath, "utf8");
  } catch {
    changelog = `# Changelog no disponible

  No se pudo cargar el historial de cambios, intente más tarde.
`;
  }

  return (
    <div className="prose prose-neutral max-w-none dark:prose-invert">
      <Markdown components={getMDXComponents()}>{changelog}</Markdown>
    </div>
  );
}
