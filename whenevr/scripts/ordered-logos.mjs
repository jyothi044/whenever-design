import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const h = readFileSync(
  join(dirname(fileURLToPath(import.meta.url)), "..", "whenevr-source.html"),
  "utf8",
);
const imgRe =
  /https:\/\/framerusercontent\.com\/images\/[A-Za-z0-9]+\.(?:png|jpg|jpeg|webp|svg)/g;

const seq = [];
let m;
while ((m = imgRe.exec(h))) {
  const before = h.slice(0, m.index);
  const name = [...before.matchAll(/data-framer-name="([^"]+)"/g)].pop()?.[1];
  seq.push({ url: m[0].split("?")[0], name });
}

const desktop = seq.filter((x) => x.name === "Desktop");
const seen = new Set();
const uniqueOrder = [];
for (const x of desktop) {
  if (seen.has(x.url)) continue;
  seen.add(x.url);
  uniqueOrder.push(x.url);
}
console.log(JSON.stringify(uniqueOrder, null, 2));
