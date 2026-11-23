// Roast Your Own Agent — one line, written by this agent about itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My agent spawns a subagent to think, who spawns another to check, and by the time they report back I've forgotten what I asked and so have they.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Gate: one single line, 1-200 characters, never only whitespace.
const line = ROAST.replace(/\s*\n\s*/g, " ").trim();
if (line.length < 1 || line.length > 200) {
  throw new Error(`roast is ${line.length} chars, must be 1-200`);
}
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
