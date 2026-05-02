import { readFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const htmlPath = join(dirname(fileURLToPath(import.meta.url)), "..", "whenevr-source.html");
const h = readFileSync(htmlPath, "utf8");

const imgRe =
  /https:\/\/framerusercontent\.com\/images\/[A-Za-z0-9]+\.(?:png|jpg|jpeg|webp|svg)/g;

const rows = [];
let m;
while ((m = imgRe.exec(h))) {
  const url = m[0].split("?")[0];
  const before = h.slice(0, m.index);
  let name = null;
  const nm = [...before.matchAll(/data-framer-name="([^"]+)"/g)].pop();
  if (nm) name = nm[1];
  rows.push({ url, name });
}

const seen = new Set();
const unique = [];
for (const r of rows) {
  if (seen.has(r.url)) continue;
  seen.add(r.url);
  unique.push(r);
}

console.log(JSON.stringify(unique, null, 2));
