import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const h = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), "..", "whenevr-source.html"),
  "utf8",
);
const imgRe =
  /https:\/\/framerusercontent\.com\/images\/[A-Za-z0-9]+\.(?:png|jpg|jpeg|webp|svg)/g;

let m;
const out = [];
while ((m = imgRe.exec(h))) {
  const before = h.slice(0, m.index);
  const name = [...before.matchAll(/data-framer-name="([^"]+)"/g)].pop()?.[1];
  const url = m[0].split("?")[0];
  out.push({ url, name });
}

const picks = [];
for (const x of out) {
  if (!/^Image [1-4]$/.test(x.name ?? "")) continue;
  if (picks.some((p) => p.url === x.url)) continue;
  picks.push(x);
}
console.log(JSON.stringify(picks.slice(0, 8), null, 2));
