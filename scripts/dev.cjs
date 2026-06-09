#!/usr/bin/env node
/**
 * Démarre Next.js en nettoyant les caches qui provoquent des 404
 * sur /_next/static/chunks/* et des pages [slug] en dev.
 */
const { rmSync, existsSync } = require("fs");
const path = require("path");
const { spawn } = require("child_process");

const root = path.join(__dirname, "..");
const caches = [
  path.join(root, ".next"),
  path.join(root, "node_modules/.cache"),
];

for (const dir of caches) {
  if (existsSync(dir)) {
    rmSync(dir, { recursive: true, force: true });
  }
}

console.log("Cache .next nettoye — demarrage Next.js…\n");

const child = spawn(
  "next",
  ["dev", "-p", "3003", "-H", "0.0.0.0"],
  { stdio: "inherit", shell: true, cwd: root },
);

child.on("exit", (code) => process.exit(code ?? 0));

process.on("SIGINT", () => child.kill("SIGINT"));
process.on("SIGTERM", () => child.kill("SIGTERM"));
