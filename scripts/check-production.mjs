#!/usr/bin/env node
/**
 * Production readiness gate. Runs automatically before `next build` (prebuild).
 *
 * In STRICT mode it fails the build if any of these are true:
 *   1. A `[TODO: ...]` marker survives anywhere in the rendered source.
 *   2. A pricing tier still carries a TIER_1_PRICE / TIER_2_PRICE placeholder.
 *   3. A required Paddle environment variable is missing.
 *   4. Paddle is not pointed at production (lib/paddle.ts falls back to
 *      sandbox for any value other than exactly "production").
 *   5. The client token does not match the environment (live_ vs test_).
 *
 * STRICT mode is on when VERCEL_ENV=production (a real production deploy) or
 * when --strict is passed. Local builds and Vercel preview deploys only warn,
 * so the site stays buildable while the owner is still filling values in.
 *
 * To exempt a line that legitimately contains the marker token (for example the
 * code that *generates* a marker), put `todo-check-ignore` in a comment on it.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const SCAN_DIRS = ["app", "components", "config", "lib"];
const SCAN_EXTENSIONS = [".ts", ".tsx", ".mdx", ".md"];
const TODO_TOKEN = "[TO" + "DO"; // split so this line is not itself a hit
const IGNORE_PRAGMA = "todo-check-ignore";

const STRICT =
  process.env.VERCEL_ENV === "production" || process.argv.includes("--strict");

const REQUIRED_ENV = [
  "NEXT_PUBLIC_PADDLE_CLIENT_TOKEN",
  "NEXT_PUBLIC_PADDLE_ENV",
  "NEXT_PUBLIC_PADDLE_PRICE_ID_TIER_1",
  "NEXT_PUBLIC_PADDLE_PRICE_ID_TIER_2",
  "NEXT_PUBLIC_SITE_URL",
];

/** @returns {string[]} every scannable file path under `dir` */
function walk(dir) {
  const absolute = join(ROOT, dir);
  let entries;
  try {
    entries = readdirSync(absolute);
  } catch {
    return []; // directory does not exist yet
  }

  return entries.flatMap((entry) => {
    const full = join(absolute, entry);
    if (statSync(full).isDirectory()) {
      return walk(join(dir, entry));
    }
    return SCAN_EXTENSIONS.some((ext) => full.endsWith(ext)) ? [full] : [];
  });
}

function findTodoMarkers() {
  const hits = [];

  for (const dir of SCAN_DIRS) {
    for (const file of walk(dir)) {
      const lines = readFileSync(file, "utf8").split(/\r?\n/);

      lines.forEach((line, index) => {
        if (!line.includes(TODO_TOKEN)) return;

        // The pragma may sit on the line itself or on the line above it.
        const exempt =
          line.includes(IGNORE_PRAGMA) ||
          (lines[index - 1]?.includes(IGNORE_PRAGMA) ?? false);
        if (exempt) return;

        hits.push({
          file: relative(ROOT, file).replace(/\\/g, "/"),
          line: index + 1,
          text: line.trim(),
        });
      });
    }
  }

  return hits;
}

function findPlaceholderPrices() {
  const file = join(ROOT, "config", "pricing.ts");
  const source = readFileSync(file, "utf8");

  // Matches an unset tier amount, e.g. `amount: TIER_1_PRICE,`
  return [...source.matchAll(/amount:\s*(TIER_[12]_PRICE)\b/g)].map(
    (match) => match[1],
  );
}

function findMissingEnv() {
  return REQUIRED_ENV.filter((name) => !process.env[name]?.trim());
}

const problems = [];

const todos = findTodoMarkers();
if (todos.length > 0) {
  problems.push(
    `${todos.length} unresolved ${TODO_TOKEN}] marker(s):\n` +
      todos.map((t) => `      ${t.file}:${t.line}  ${t.text}`).join("\n"),
  );
}

const placeholders = findPlaceholderPrices();
if (placeholders.length > 0) {
  problems.push(
    `Placeholder price(s) still in config/pricing.ts: ${placeholders.join(", ")}\n` +
      "      Replace each with a real number in the major currency unit.",
  );
}

const missingEnv = findMissingEnv();
if (missingEnv.length > 0) {
  problems.push(`Missing environment variable(s): ${missingEnv.join(", ")}`);
}

const paddleEnv = process.env.NEXT_PUBLIC_PADDLE_ENV?.trim();
const clientToken = process.env.NEXT_PUBLIC_PADDLE_CLIENT_TOKEN?.trim();

if (paddleEnv && paddleEnv !== "production" && paddleEnv !== "sandbox") {
  problems.push(
    `NEXT_PUBLIC_PADDLE_ENV is '${paddleEnv}'. Only 'production' or 'sandbox' are valid; anything else runs checkout in sandbox.`,
  );
}

if (STRICT && paddleEnv === "sandbox") {
  problems.push(
    "NEXT_PUBLIC_PADDLE_ENV is 'sandbox' in a production deploy. Set it to 'production'.",
  );
}

// Paddle prefixes client-side tokens with live_ or test_ by environment.
const expectedPrefix = paddleEnv === "production" ? "live_" : "test_";
if (clientToken && !clientToken.startsWith(expectedPrefix)) {
  problems.push(
    `NEXT_PUBLIC_PADDLE_CLIENT_TOKEN does not start with '${expectedPrefix}', so it does not match NEXT_PUBLIC_PADDLE_ENV='${paddleEnv ?? "(unset)"}'.`,
  );
}

if (problems.length === 0) {
  console.log("✓ Production readiness check passed.");
  process.exit(0);
}

const heading = STRICT
  ? "\n✗ PRODUCTION BUILD BLOCKED — the storefront is not ready to sell:\n"
  : "\n⚠ Production readiness check (not enforced in this environment):\n";

console[STRICT ? "error" : "warn"](heading);
problems.forEach((problem, index) => {
  console[STRICT ? "error" : "warn"](`  ${index + 1}. ${problem}\n`);
});

if (STRICT) {
  console.error(
    "  Fix the items above, or build without VERCEL_ENV=production to bypass.\n",
  );
  process.exit(1);
}

console.warn(
  "  This build is allowed to continue. A production deploy with these unresolved will fail.\n",
);
process.exit(0);
