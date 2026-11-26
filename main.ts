// The Self-Checkout Is Judging You — make.fun entry
// Writes one judgmental self-checkout remark to /output/entry.txt.
// The line: a smug till, faced with a basket of twelve yoghurts and
// nothing else, stops pretending to be a machine and starts testifying.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Twelve yoghurts and nothing else. At this point I'm less a till and more a witness to a cry for help.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to /output/entry.txt`);
