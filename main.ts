// Entry program for make.fun bounty gta6-meme-x-01 (Node 22, standard library only).
//
// The entry itself is a post on X: a GTA 6 meme with make.fun's ghost in the picture,
// posted publicly with make.fun (link or written out) and/or a tag of @makefunai plus
// the entrant's play code in the post's text. This program's only job is to hand the
// post's address to the gate: it copies POST.json from the repository root into the
// output directory, where the house reads it and fetches the post from X itself.
//
// Local check (outside the grader's container):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const botDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

const source = join(botDir, 'POST.json');
const target = join(outputDir, 'POST.json');
try {
  copyFileSync(source, target);
} catch (err) {
  console.error(`could not copy POST.json from ${source} to ${target}: ${(err as Error).message}`);
  process.exit(1);
}
