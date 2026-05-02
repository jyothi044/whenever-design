import { readFileSync, existsSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const htmlPath = join(__dirname, "..", "whenevr-source.html");
const h = readFileSync(htmlPath, "utf8");

const all = new Set();
const re = /https:\/\/framerusercontent\.com\/(?:images|assets)[^"'\\)\s<>]+/g;
for (const m of h.matchAll(re)) {
  all.add(m[0].replace(/&amp;/g, "&").split("?")[0]);
}

// Rough section association: search for image id + nearby data-framer-name
const names = [
  "Trusted",
  "Logo",
  "Hero",
  "How",
  "Feature",
  "Testimonial",
  "Pricing",
  "Blog",
  "Client",
  "Card",
  "Image",
];
const report = [];
for (const url of all) {
  const id = url.split("/").pop();
  const idx = h.indexOf(url);
  const ctx = idx >= 0 ? h.slice(Math.max(0, idx - 200), Math.min(h.length, idx + 200)) : "";
  const match = ctx.match(/data-framer-name="([^"]+)"/);
  report.push({ url, framerName: match?.[1] ?? null });
}

report.sort((a, b) => (a.framerName || "").localeCompare(b.framerName || ""));
console.log(JSON.stringify({ count: all.size, urls: report }, null, 2));
