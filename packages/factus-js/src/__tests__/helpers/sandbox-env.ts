import { existsSync, readFileSync } from "fs";
import { resolve } from "path";

export interface SandboxEnv {
  clientId: string;
  clientSecret: string;
  username: string;
  password: string;
}

function loadEnvFile(fileName: string): void {
  const filePath = resolve(process.cwd(), fileName);
  if (!existsSync(filePath)) return;

  const content = readFileSync(filePath, "utf8");
  const lines = content.split(/\r?\n/);

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) continue;

    const index = line.indexOf("=");
    if (index <= 0) continue;

    const key = line.slice(0, index).trim();
    const value = line.slice(index + 1).trim();

    if (!(key in process.env)) {
      process.env[key] = value;
    }
  }
}

loadEnvFile(".env");
loadEnvFile(".env.local");

export function shouldRunSandboxTests(): boolean {
  return process.env.RUN_SANDBOX_TESTS === "true";
}

export function readSandboxEnv(): SandboxEnv {
  const clientId = process.env.FACTUS_CLIENT_ID;
  const clientSecret = process.env.FACTUS_CLIENT_SECRET;
  const username = process.env.FACTUS_USERNAME;
  const password = process.env.FACTUS_PASSWORD;

  if (!clientId || !clientSecret || !username || !password) {
    throw new Error(
      "Missing sandbox env vars. Required: FACTUS_CLIENT_ID, FACTUS_CLIENT_SECRET, FACTUS_USERNAME, FACTUS_PASSWORD",
    );
  }

  return {
    clientId,
    clientSecret,
    username,
    password,
  };
}

export function uniqueRef(prefix: string): string {
  const now = Date.now();
  const random = Math.floor(Math.random() * 10000)
    .toString()
    .padStart(4, "0");
  return `${prefix}-${now}-${random}`;
}
