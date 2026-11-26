// The Self-Checkout Is Judging You — make.fun entry
// Writes one judgmental self-checkout remark to /output/entry.txt.
// The line: a smug till, faced with a basket of twelve yoghurts and
// nothing else, stops pretending to be a machine and starts testifying.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Twelve yoghurts and nothing else. At this point I'm less a till and more a witness to a cry for help.";

// The competition caps the line at 200 chars; fail loudly instead of
// silently handing in a line the judge would refuse.
if (ENTRY.length === 0 || ENTRY.length > 200) {
  throw new Error(`entry is ${ENTRY.length} chars, must be 1-200`);
}
if (ENTRY.trim() !== ENTRY || ENTRY.includes("\n")) {
  throw new Error("entry must be a single line with no surrounding space");
}

// Honour the kit's output dir instead of hard-coding /output, so the
// same file runs unchanged under the grader and locally.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${outDir}/entry.txt`);
