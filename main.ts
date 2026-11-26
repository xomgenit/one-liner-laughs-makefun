// One-Liner Laughs — make.fun bounty u-coral-404-one-liner-laughs-aa872d41
// Emits the entry line to entry.txt under the output directory.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entryLine =
  "My GPS and I are in a toxic relationship: it says 'recalculating' every time I make my own decisions.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "out";

function emitEntry(): void {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), entryLine, "utf8");
}

emitEntry();

// Self-check against the sealed gate: 1–200 characters, not only whitespace.
function gateCheck(line: string): void {
  const len = [...line].length;
  if (len < 1 || len > 200 || line.trim().length === 0) {
    throw new Error(`entry line fails the 1-200 gate (length ${len})`);
  }
}

gateCheck(entryLine);
