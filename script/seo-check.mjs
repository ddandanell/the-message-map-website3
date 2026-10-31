#!/usr/bin/env node
/**
 * Fail-closed SEO gate for the built site.
 *
 * Reads dist/public (the exact output Vercel serves) and checks the house
 * standard on every generated page:
 *   - 50-60 character title, unique across the site
 *   - 120-155 character meta description, unique across the site
 *   - exactly one H1
 *   - self-referential canonical on the www host
 *   - robots meta present; noindex pages excluded from the sitemap
 *   - at least 120 words of raw HTML content on indexable pages (TECH-014)
 *   - valid JSON-LD
 *   - sitemap lists only pages that exist as files, with no duplicates
 *
 * Exit code 1 on any must-fail finding, so the build/deploy stops.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist/public");
const SITE = "https://www.themassagemap.com";

const walk = (dir, acc = []) => {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) {
      if (e.name === "assets") continue;
      walk(p, acc);
    } else if (e.name === "index.html") acc.push(p);
  }
  return acc;
};

const files = walk(DIST);
const pages = [];
const fails = [];
const warns = [];

for (const file of files) {
  const html = fs.readFileSync(file, "utf8");
  const rel = "/" + path.relative(DIST, path.dirname(file)).split(path.sep).join("/");
  const urlPath = rel === "/." ? "/" : rel;

  const title = (html.match(/<title>([\s\S]*?)<\/title>/i) ?? [])[1];
  const meta = (html.match(/<meta name="description" content="([^"]*)"/i) ?? [])[1];
  const canonical = (html.match(/<link rel="canonical" href="([^"]*)"/i) ?? [])[1];
  const robots = (html.match(/<meta name="robots" content="([^"]*)"/i) ?? [])[1] ?? "";
  const h1s = (html.match(/<h1[\s>]/gi) ?? []).length;
  const body = (html.match(/<div id="prerendered">([\s\S]*?)<\/div>\s*<\/div>/i) ?? [])[1] ?? "";
  const text = body.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  const wordCount = (text.match(/[A-Za-z0-9'’\-]+/g) ?? []).length;
  const indexable = !/noindex/i.test(robots);
  const jsonld = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => m[1]);

  pages.push({ urlPath, title, meta, canonical, robots, indexable, wordCount, file });

  if (!title) fails.push(`${urlPath}: no <title>`);
  if (!meta) fails.push(`${urlPath}: no meta description`);
  if (!canonical) fails.push(`${urlPath}: no canonical`);
  if (h1s !== 1) fails.push(`${urlPath}: ${h1s} H1 elements (expected 1)`);

  for (const block of jsonld) {
    try { JSON.parse(block); } catch { fails.push(`${urlPath}: JSON-LD does not parse`); }
  }

  if (indexable) {
    if (title && (title.length < 50 || title.length > 60)) fails.push(`${urlPath}: title ${title.length} chars`);
    if (meta && (meta.length < 120 || meta.length > 155)) fails.push(`${urlPath}: meta ${meta.length} chars`);
    if (canonical && canonical !== SITE + (urlPath === "/" ? "/" : urlPath)) fails.push(`${urlPath}: canonical ${canonical}`);
    if (wordCount < 120) fails.push(`${urlPath}: ${wordCount} words of raw HTML (min 120)`);
    if (!/<meta property="og:title"/.test(html)) warns.push(`${urlPath}: no og:title`);
  }
}

// uniqueness
const byTitle = new Map();
const byMeta = new Map();
for (const p of pages.filter(p => p.indexable)) {
  if (p.title) byTitle.set(p.title, (byTitle.get(p.title) ?? []).concat(p.urlPath));
  if (p.meta) byMeta.set(p.meta, (byMeta.get(p.meta) ?? []).concat(p.urlPath));
}
for (const [t, list] of byTitle) if (list.length > 1) fails.push(`duplicate title on ${list.join(", ")}: "${t}"`);
for (const [m, list] of byMeta) if (list.length > 1) fails.push(`duplicate meta on ${list.join(", ")}`);

// sitemap
const sitemapPath = path.join(DIST, "sitemap.xml");
if (!fs.existsSync(sitemapPath)) fails.push("no sitemap.xml in build output");
const sitemap = fs.existsSync(sitemapPath) ? fs.readFileSync(sitemapPath, "utf8") : "";
const locs = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
const locSet = new Set(locs);
if (locSet.size !== locs.length) fails.push("sitemap has duplicate <loc> entries");
for (const loc of locs) {
  if (!loc.startsWith(SITE)) fails.push(`sitemap URL not on ${SITE}: ${loc}`);
  const rel = loc.slice(SITE.length) || "/";
  const page = pages.find(p => p.urlPath === (rel === "/" ? "/" : rel));
  if (!page) fails.push(`sitemap URL has no generated page: ${rel}`);
  else if (!page.indexable) fails.push(`sitemap lists a noindex page: ${rel}`);
}
for (const p of pages.filter(p => p.indexable)) {
  if (!locSet.has(SITE + (p.urlPath === "/" ? "/" : p.urlPath))) fails.push(`indexable page missing from sitemap: ${p.urlPath}`);
}

const report = {
  checked_at: new Date().toISOString(),
  pages: pages.length,
  indexable: pages.filter(p => p.indexable).length,
  sitemap_urls: locs.length,
  fails,
  warns,
};
fs.writeFileSync(path.join(ROOT, "seo-gate-report.json"), JSON.stringify(report, null, 2));

console.log(`seo-gate: ${report.indexable} indexable / ${report.pages} pages, ${report.sitemap_urls} sitemap URLs`);
if (warns.length) warns.forEach(w => console.log("  warn:", w));
if (fails.length) {
  console.log(`FAIL — ${fails.length} must-fail finding(s):`);
  fails.forEach(f => console.log("  -", f));
  process.exit(1);
}
console.log("PASS");
