#!/usr/bin/env node
/**
 * Static prerender + sitemap + 404 for The Massage Map.
 *
 * Why: the site is a client-rendered SPA. Before this step every URL returned the
 * same 1.7 KB shell with no <title>, no meta description, no canonical and no
 * content, and unknown URLs returned HTTP 200. This script writes a real HTML file
 * per route (head tags + crawlable body) into dist/public, so Vercel serves a
 * distinct page with the correct status, and anything not generated 404s.
 *
 * Data source: client/src/data/providers.generated.json, generated from the
 * shared SEO Postgres database (public.seo_providers, site-005) by publish.py.
 */
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const DIST = path.join(ROOT, "dist/public");
const SITE = "https://www.themassagemap.com";
const DATA = JSON.parse(fs.readFileSync(path.join(ROOT, "client/src/data/providers.generated.json"), "utf8"));
const PROVIDERS = DATA.providers ?? [];

const AREAS = [
  ["Canggu", "canggu"], ["Seminyak", "seminyak"], ["Ubud", "ubud"], ["Sanur", "sanur"],
  ["Uluwatu", "uluwatu"], ["Kuta", "kuta"], ["Legian", "legian"], ["Jimbaran", "jimbaran"],
  ["Nusa Dua", "nusa-dua"], ["Denpasar", "denpasar"],
];

let BASE_HTML = fs.readFileSync(path.join(DIST, "index.html"), "utf8");
// strip default head metadata so each page injects exactly one set
BASE_HTML = BASE_HTML
  .replace(/<title>[\s\S]*?<\/title>\s*/i, "")
  .replace(/<meta name="description"[^>]*>\s*/gi, "")
  .replace(/<link rel="canonical"[^>]*>\s*/gi, "")
  .replace(/<meta name="robots"[^>]*>\s*/gi, "")
  .replace(/<meta property="og:[^>]*>\s*/gi, "")
  .replace(/<meta name="twitter:[^>]*>\s*/gi, "");
const routes = [];   // { path, title, description, canonical, indexable, html, jsonld }
const problems = [];

/* ------------------------------ helpers ------------------------------ */

const esc = (s) => String(s ?? "")
  .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
  .replace(/"/g, "&quot;");

const words = (s) => (String(s ?? "").match(/[A-Za-z0-9'’\-]+/g) ?? []).length;

function fitTitle(base, suffixes) {
  const cands = [base, ...suffixes.map(sfx => base + sfx)];
  const ok = cands.find(c => c.length >= 50 && c.length <= 60);
  if (ok) return ok;
  const longest = cands.filter(c => c.length <= 60).sort((a, b) => b.length - a.length)[0];
  if (longest) return longest;
  return base.slice(0, 60).replace(/[\s|—\-:,]+\S*$/, "") || base.slice(0, 60);
}

function fitMeta(base, extras) {
  let t = base.trim();
  for (const e of extras) {
    if (t.length >= 120) break;
    if ((t + " " + e).length <= 155) t = t + " " + e;
  }
  return t.length > 155 ? t.slice(0, 152).replace(/\s+\S*$/, "") + "." : t;
}

function fmtDate(iso) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? String(iso)
    : d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

const idr = (n) => "IDR " + Number(n).toLocaleString("en-US");

function head({ title, description, canonical, indexable, jsonld }) {
  const robots = indexable
    ? "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
    : "noindex, follow";
  const ld = (Array.isArray(jsonld) ? jsonld : jsonld ? [jsonld] : [])
    .map((o) => `<script type="application/ld+json">${JSON.stringify(o)}</script>`).join("\n    ");
  return `<title>${esc(title)}</title>
    <meta name="description" content="${esc(description)}" />
    <link rel="canonical" href="${SITE}${canonical}" />
    <meta name="robots" content="${robots}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="The Massage Map" />
    <meta property="og:title" content="${esc(title)}" />
    <meta property="og:description" content="${esc(description)}" />
    <meta property="og:url" content="${SITE}${canonical}" />
    <meta property="og:image" content="${SITE}/opengraph.jpg" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${esc(title)}" />
    <meta name="twitter:description" content="${esc(description)}" />
    <meta name="twitter:image" content="${SITE}/opengraph.jpg" />
    ${ld}`;
}

const ORG_LD = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "The Massage Map",
  url: SITE,
  description: "A checked directory of massage and spa providers in Bali.",
};

function crumbs(items) {
  return items.map((i, n) => `<li><a href="${i[1]}">${esc(i[0])}</a>${n < items.length - 1 ? " ›" : ""}</li>`).join("");
}

function add(route) {
  route.title = fitTitle(route.title, route.titleSuffixes ?? [" — Bali", " | The Massage Map", " (Bali)"]);
  route.description = fitMeta(route.description, route.metaExtras ?? []);
  if (route.indexable) {
    if (route.title.length < 50 || route.title.length > 60) problems.push(`${route.path}: title ${route.title.length} chars — "${route.title}"`);
    if (route.description.length < 120 || route.description.length > 155) problems.push(`${route.path}: meta ${route.description.length} chars`);
  }
  routes.push(route);
}

/* ------------------------------ provider pages ------------------------------ */

for (const p of PROVIDERS) {
  const path_ = `/bali/${p.area_slug}/${p.slug}`;
  const prices = [...(p.prices ?? [])].sort((a, b) => a.price_idr - b.price_idr);
  const priceRows = prices.map((pr) =>
    `<tr><td>${esc(pr.treatment)}</td><td>${esc(pr.duration)}</td><td>${esc(idr(pr.price_idr))}</td><td>${esc(pr.note ?? "")}</td></tr>`
  ).join("");
  const sources = (p.sources ?? []).map((s) =>
    `<li><a href="${esc(s.url)}" rel="nofollow noopener">${esc(s.url.replace(/^https?:\/\//, ""))}</a> — ${esc(s.confirms ?? "provider page")} (checked ${esc(fmtDate(s.checked_date))})</li>`
  ).join("");
  const features = (p.features ?? []).map((f) => `<li>${esc(f)}</li>`).join("");
  const treatments = (p.treatments ?? []).map((t) => `<li>${esc(t)}</li>`).join("");
  const paras = String(p.description ?? "").split(/\n\n+/).map((t) => `<p>${esc(t)}</p>`).join("");
  const contact = [
    p.address ? `<p><strong>Address:</strong> ${esc(p.address)}</p>` : `<p><strong>Address:</strong> not published by the provider (${esc(p.area)}, Bali).</p>`,
    `<p><strong>Hours:</strong> ${esc(p.hours ?? "not published")}</p>`,
    p.phone ? `<p><strong>Phone:</strong> <a href="tel:${esc(p.phone.replace(/\s/g, ""))}">${esc(p.phone)}</a></p>` : "",
    p.website ? `<p><strong>Website:</strong> <a href="${esc(p.website)}" rel="nofollow noopener">${esc(p.website.replace(/^https?:\/\//, ""))}</a></p>` : "",
  ].filter(Boolean).join("");

  const html = `
    <nav aria-label="Breadcrumb"><ol>${crumbs([["Home", "/"], ["Bali", "/bali"], [p.area, `/bali/${p.area_slug}`], [p.name, path_]])}</ol></nav>
    <h1>${esc(p.name)}, ${esc(p.area)}</h1>
    <p><em>Details checked ${esc(fmtDate(p.last_checked))}</em></p>
    <p>${esc(p.answer_block)}</p>
    ${paras}
    ${prices.length ? `<h2>Published prices</h2><table><thead><tr><th>Treatment</th><th>Duration</th><th>Price</th><th>Note</th></tr></thead><tbody>${priceRows}</tbody></table><p>${esc(p.price_notes ?? "")}</p>` : `<h2>Prices</h2><p>This provider does not publish a price list that we could confirm, so no prices are shown.</p>`}
    <h2>Treatments the provider lists</h2><ul>${treatments}</ul>
    <h2>What the listing confirms</h2><ul>${features}</ul>
    <h2>Contact and hours</h2>${contact}
    <h2>How this listing was checked</h2>
    <p>${esc(p.verification_note ?? "Every field comes from the provider's own published information.")} We have not visited this business and we do not score hygiene, therapist skill or ambience.</p>
    <h2>Sources</h2><ul>${sources}</ul>
    <p><a href="/bali/${p.area_slug}">More massage and spa listings in ${esc(p.area)}</a></p>`;

  add({
    path: path_,
    title: p.name.toLowerCase().includes(p.area.toLowerCase())
      ? `${p.name}: prices, hours and contact`
      : `${p.name}, ${p.area}: prices and hours`,
    titleSuffixes: [" | The Massage Map", " — Bali", " 2026"],
    description: p.answer_block,
    metaExtras: [
      p.hours ? `Open ${p.hours.replace(/^Daily\s*/i, "daily ")}.` : "",
      prices.length ? `Published prices from ${idr(prices[0].price_idr)}.` : "",
      `Details checked ${fmtDate(p.last_checked)}.`,
    ].filter(Boolean),
    canonical: path_,
    indexable: true,
    html,
    jsonld: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: p.name,
        url: `${SITE}${path_}`,
        description: p.answer_block,
        dateModified: p.last_checked,
        isPartOf: { "@type": "WebSite", name: "The Massage Map", url: SITE },
        about: {
          "@type": p.provider_type === "spa" ? "DaySpa" : "HealthAndBeautyBusiness",
          name: p.name,
          address: p.address ?? undefined,
          telephone: p.phone ?? undefined,
          url: p.website ?? undefined,
          openingHours: p.hours ?? undefined,
        },
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${SITE}/` },
          { "@type": "ListItem", position: 2, name: "Bali", item: `${SITE}/bali` },
          { "@type": "ListItem", position: 3, name: p.area, item: `${SITE}/bali/${p.area_slug}` },
          { "@type": "ListItem", position: 4, name: p.name, item: `${SITE}${path_}` },
        ],
      },
    ],
  });
}

/* ------------------------------ area pages ------------------------------ */

for (const [name, slug] of AREAS) {
  const inArea = PROVIDERS.filter((p) => p.area_slug === slug);
  const path_ = `/bali/${slug}`;
  const prices = inArea.map((p) => Math.min(...(p.prices ?? []).map((x) => x.price_idr))).filter((n) => Number.isFinite(n));
  const cheapest = prices.length ? Math.min(...prices) : null;
  const list = inArea.map((p) => {
    const low = (p.prices ?? []).length ? Math.min(...p.prices.map((x) => x.price_idr)) : null;
    return `<li><h2><a href="/bali/${slug}/${p.slug}">${esc(p.name)}</a></h2>
      <p>${esc(p.answer_block)}</p>
      <p>${esc(p.address ?? `${p.area}, Bali`)} · ${esc(p.hours ?? "hours not published")}${low !== null ? ` · from ${esc(idr(low))}` : ""} · checked ${esc(fmtDate(p.last_checked))}</p></li>`;
  }).join("");

  const html = `
    <nav aria-label="Breadcrumb"><ol>${crumbs([["Home", "/"], ["Bali", "/bali"], [name, path_]])}</ol></nav>
    <h1>Massage and spas in ${esc(name)}, Bali</h1>
    <p>${inArea.length
      ? `${inArea.length} checked ${inArea.length === 1 ? "listing" : "listings"} in ${esc(name)}${cheapest !== null ? `, with published prices from ${esc(idr(cheapest))}` : ""}. Prices, hours and contact details are copied from each provider's own website and dated with the day we read them.`
      : `We have not published a checked listing in ${esc(name)} yet.`}</p>
    <ul>${list}</ul>
    <h2>How these listings are built</h2>
    <p>A provider is listed once we can confirm it is operating in the area and publishes its own menu or business details. We do not rate businesses, we do not sell placements, and any figure shown is taken from the provider's own source on the date stated. If a provider's details change, the listing is corrected or withdrawn.</p>
    <p><a href="/bali">All Bali areas</a> · <a href="/how-we-rate">How we check listings</a></p>`;

  add({
    path: path_,
    title: `Massage and spas in ${name}, Bali — checked listings`,
    titleSuffixes: [" 2026", " | The Massage Map"],
    description: inArea.length
      ? `${inArea.length} massage and spa ${inArea.length === 1 ? "provider" : "providers"} in ${name}, Bali, checked against their own published menus with prices, hours and contact details.`
      : `We are still checking massage and spa providers in ${name}, Bali, and have not published a listing yet.`,
    metaExtras: [cheapest !== null ? `Published prices from ${idr(cheapest)}.` : "", "Updated October 2026."],
    canonical: path_,
    indexable: inArea.length > 0,
    html,
    jsonld: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: `Massage and spas in ${name}, Bali`,
      url: `${SITE}${path_}`,
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: inArea.length,
        itemListElement: inArea.map((p, i) => ({ "@type": "ListItem", position: i + 1, name: p.name, url: `${SITE}/bali/${slug}/${p.slug}` })),
      },
    },
  });
}

/* ------------------------------ core pages ------------------------------ */

const totalProviders = PROVIDERS.length;
const withListings = AREAS.filter(([, slug]) => PROVIDERS.some((p) => p.area_slug === slug)).length;
const latestCheck = PROVIDERS.map((p) => p.last_checked).sort().slice(-1)[0] ?? "2026-10-31";

add({
  path: "/",
  title: "Massage in Bali: checked spa and massage listings 2026",
  description: `${totalProviders} massage and spa providers across ${withListings} Bali areas, each checked against the provider's own menu. Prices, hours, contact details and sources, dated.`,
  metaExtras: ["No invented ratings.", "Every listing shows when it was last checked."],
  canonical: "/",
  indexable: true,
  jsonld: ORG_LD,
  html: `
    <h1>Massage and spas in Bali, checked and dated</h1>
    <p>${totalProviders} providers across ${withListings} areas. Every listing is built from the provider's own published information: address, hours, contact details, the treatments it lists and any prices it publishes. Each one carries the date we read the source.</p>
    <h2>Areas</h2>
    <ul>${AREAS.filter(([, s]) => PROVIDERS.some((p) => p.area_slug === s)).map(([n, s]) => `<li><a href="/bali/${s}">${esc(n)}</a> — ${PROVIDERS.filter((p) => p.area_slug === s).length} listings</li>`).join("")}</ul>
    <h2>Recent listings</h2>
    <ul>${PROVIDERS.slice(0, 12).map((p) => `<li><a href="/bali/${p.area_slug}/${p.slug}">${esc(p.name)}</a>, ${esc(p.area)} — ${esc(p.answer_block.slice(0, 120))}…</li>`).join("")}</ul>
    <h2>What we do not do</h2>
    <p>We do not visit every business, we do not score hygiene or therapist skill, we do not publish invented reviews and we do not sell star ratings. A listing means the provider was operating and advertising massage when we checked, and that the facts shown come from its own source. <a href="/how-we-rate">How checking works</a>.</p>`,
});

add({
  path: "/bali",
  title: "Bali massage and spa areas: checked local listings 2026",
  description: `${totalProviders} checked massage and spa listings across ${withListings} Bali areas, with published prices, opening hours and the date each listing was verified.`,
  metaExtras: ["Start from the area you are staying in.", "Compare published prices on the listing."],
  canonical: "/bali",
  indexable: true,
  html: `
    <h1>Bali, area by area</h1>
    <p>${totalProviders} checked listings across ${withListings} areas. Pick the area you are staying in and compare published prices and hours on the listings themselves.</p>
    <ul>${AREAS.map(([n, s]) => {
      const c = PROVIDERS.filter((p) => p.area_slug === s).length;
      return `<li><a href="/bali/${s}">${esc(n)}</a> — ${c ? `${c} ${c === 1 ? "listing" : "listings"}` : "no checked listings yet"}</li>`;
    }).join("")}</ul>
    <p>Areas without listings are still being checked. We publish a page for an area once at least one provider there meets the standard, rather than filling it with unchecked entries.</p>`,
  jsonld: ORG_LD,
});

add({
  path: "/how-we-rate",
  title: "How The Massage Map checks Bali massage listings",
  description: "Our method: what we verify, how we date it, and what we deliberately do not claim — no visits, no inspection scores, no invented reviews or star ratings.",
  metaExtras: ["Sources and check dates on every listing."],
  canonical: "/how-we-rate",
  indexable: true,
  html: `
    <h1>How we check listings</h1>
    <p>The Massage Map is a directory of massage and spa providers in Bali. We publish what a provider states about itself, dated and sourced, and we say plainly what we have not done.</p>
    <h2>1. We read the provider's own sources</h2>
    <p>Every listing starts with the business's website, its published menu and its own business profile. We record the URL we read and the date we read it, and that date appears on the listing.</p>
    <h2>2. We cross-check the basics</h2>
    <p>Name, area, address, opening hours and phone number are compared with a second public source where one exists. If two sources disagree, the disputed field stays blank rather than being guessed.</p>
    <h2>3. We separate what we know from what we do not</h2>
    <p>Prices appear only where the provider publishes them. Ratings appear only with a named source, a scale, a review count and an observation date. Everything else is marked as not published.</p>
    <h2>What a listing does not mean</h2>
    <p>It does not mean we visited, booked or received a treatment there. It does not mean hygiene, therapist skill or ambience has been assessed by us. It does not rank the provider against others: we list, we do not score quality.</p>
    <h2>Corrections</h2>
    <p>Providers can ask for a correction or removal and we act on either. If a price, address or owner changes, the listing is re-checked against the source rather than patched from memory. <a href="/contact">Report a correction</a>.</p>`,
  jsonld: ORG_LD,
});

add({
  path: "/about",
  title: "About The Massage Map: a checked Bali massage directory",
  description: `The Massage Map lists ${totalProviders} massage and spa providers in Bali with published prices, hours and sources, and shows the date each listing was last checked.`,
  metaExtras: ["No fabricated reviews.", "No paid placements."],
  canonical: "/about",
  indexable: true,
  html: `
    <h1>A directory that shows its work</h1>
    <p>The Massage Map answers a practical question: which massage or spa in Bali fits what I want, what does it cost, and how do I reach it. Every listing answers that with facts taken from the provider's own published information, dated and linked to the source.</p>
    <p>${totalProviders} providers across ${withListings} areas are listed, most recently checked on ${fmtDate(latestCheck)}. We do not publish invented reviews, editorial star ratings, hygiene scores or claims about treatments we have never had.</p>
    <p>If your business is missing or a detail is wrong, send the correct information with a link to your published menu and we will check it. Listing is based on verifiable information, not payment. <a href="/contact">Contact us</a>.</p>`,
  jsonld: ORG_LD,
});

const simple = [
  {
    path: "/contact",
    title: "Contact The Massage Map: corrections and listing requests",
    description: "Send a correction, suggest a provider, or ask for a listing to be changed or removed. We re-check the source rather than guessing.",
    body: `<p>Use this page to report anything wrong in the directory, to suggest a provider, or to ask for a listing to be changed or removed. Corrections are handled by re-reading the source, not by editing from memory, so the fastest way to get something fixed is to send the listing URL together with the provider page that shows the correct detail.</p>
      <p>For a correction, include: the listing URL, the field that is wrong (price, hours, address, phone), and the URL where the provider currently publishes the correct information. If a business has closed, say so and, where possible, point to something public that shows it.</p>
      <p>For a new listing, send the provider's own website or public business profile. A listing is added once the business is confirmed to be operating in Bali and publishes its own menu or business details.</p>
      <p>Providers can request removal of their listing at any time and we will action it. We do not charge for a listing, for a correction, or for removal, and we do not sell placements or star ratings.</p>`,
  },
  {
    path: "/list-business",
    title: "Add or correct a Bali massage listing",
    description: "Send your published menu, address and opening hours and we will check them against your own website before listing. No payment is involved.",
    body: `<p>Listing on The Massage Map is free and is based on verifiable information rather than payment. We add a business once we can confirm it is operating in Bali and publishes its own details.</p>
      <p>What helps us check a business quickly: the official website or public business profile; the treatment menu with prices and durations, if you publish one; the street address and the area it sits in; opening hours; and the phone number or booking link you want people to use.</p>
      <p>What we cannot use: prices that only exist in a message, reviews you have written about yourself, or claims such as "best in Bali" that no source supports. We also do not publish invented ratings, and we do not accept payment to move a listing up a page or to add stars.</p>
      <p>Every listing shows the date it was last checked and links to the source we read. If a price or an opening time changes, send the update and it will be corrected against your published menu.</p>`,
  },
  {
    path: "/guides",
    title: "Bali massage guides: areas, treatments and pricing",
    description: "Practical guides to massage in Bali built from checked listings: what an area offers, what providers publish, and what to confirm before booking.",
    body: `<p>These guides are built from the same checked listings as the rest of the directory, so the prices and hours they quote are the prices and hours providers publish, dated with the day we read them.</p>
      <p><a href="/guides/best-massage-canggu-2026">Massage in Canggu</a> lists the Canggu providers we have checked, with their published prices, opening hours and contact details, and links to the full listing and its sources.</p>
      <p><a href="/guides/traditional-balinese-massage">Traditional Balinese massage</a> explains what the treatment involves, how it differs from Thai and deep-tissue work, and which questions to ask a provider before booking.</p>
      <p>We do not publish "top ten" rankings, because ranking a massage we have not received would be an invented judgement. What we can do is show you what each provider states about itself, what it charges, when it is open, and how to reach it.</p>`,
  },
  {
    path: "/guides/best-massage-canggu-2026",
    title: "Massage in Canggu: checked spas and prices",
    description: "Canggu massage and spa listings checked against each provider's own menu, with published IDR prices, hours and contact details.",
    body: `<p>Canggu has a dense strip of day spas, recovery bathhouses and walk-in massage rooms, and the prices vary more than the treatments do. This page gathers the Canggu providers whose own menus we have checked, and states what each one publishes.</p>
      <p>Entries show the published price range, opening hours and the date the provider's site was read. Where a spa publishes "from" prices, the entry says so, because the final price usually depends on the duration booked. Where a provider adds tax or a service charge at payment, the listing says that too.</p>
      <p>What the page deliberately does not do is rank the spas or score their therapists. We have not received treatments at these businesses, so a ranking would be invented. <a href="/bali/canggu">See all Canggu listings</a> for addresses, treatments and sources.</p>`,
  },
  {
    path: "/guides/traditional-balinese-massage",
    title: "Traditional Balinese massage: what to expect",
    description: "What traditional Balinese massage involves, how it differs from Thai and deep tissue work, and what to confirm with a provider before booking.",
    body: `<p>Traditional Balinese massage combines palm pressure, long flowing strokes, skin rolling and gentle stretching, usually with oil and often with attention to the feet. Pressure is applied along the body rather than in the short, targeted strokes of deep tissue work, which is why it is generally described as firm but relaxing rather than clinical.</p>
      <p>It differs from Thai massage in two practical ways: oil is used, and stretching plays a smaller role. A Thai session is often done on a mat in loose clothing and involves more movement of the limbs; a Balinese session is usually on a table, under a sheet, with the therapist working through oil.</p>
      <p>When booking, ask three questions: the duration and price including any tax, whether the therapist can adjust pressure during the session, and whether the spa publishes a menu you can read before you arrive. If you are pregnant, recovering from surgery or managing a condition, say so when booking and ask whether the provider has therapists trained for it.</p>
      <p>Prices in Bali vary widely by area and setting. The listings in this directory show only prices the provider publishes itself. <a href="/bali">Browse areas</a> to compare.</p>`,
  },
];
for (const item of simple) {
  add({
    path: item.path,
    title: item.title,
    description: item.description,
    metaExtras: ["Every listing carries its source and check date.", "Corrections are re-checked against the provider."],
    canonical: item.path,
    indexable: true,
    html: `<h1>${esc(item.title.split(":")[0])}</h1>${item.body}
      <p>This directory publishes what each provider states about itself, dated and sourced. We do not visit every business, we do not score treatments we have not had, and we do not invent reviews. Start from the <a href="/bali">Bali area index</a> or read <a href="/how-we-rate">how we check listings</a>.</p>`,
    jsonld: ORG_LD,
  });
}

/* ------------------------- every remaining app route ------------------------- */
/* Keeps existing URLs alive (no 404s for previously indexed pages) while the
   content is rebuilt. They are noindex,follow until they carry real listings. */

const appSrc = fs.readFileSync(path.join(ROOT, "client/src/App.tsx"), "utf8");
const appRoutes = [...appSrc.matchAll(/path="([^"]+)"/g)].map((m) => m[1]).filter((p) => p.startsWith("/") && !p.includes(":"));
const generated = new Set(routes.map((r) => r.path));
const titleCase = (s) => s.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");

for (const p of appRoutes) {
  if (generated.has(p)) continue;
  const label = titleCase(p.split("/").filter(Boolean).pop() ?? "Page");
  add({
    path: p,
    title: `${label} — The Massage Map`,
    description: `${label} page on The Massage Map, a Bali massage directory built from provider-published facts and check dates.`,
    canonical: p,
    indexable: false,
    html: `<h1>${esc(label)}</h1><p>This page is being rebuilt around checked listings. Until it carries verifiable content it is not indexed.</p><p><a href="/bali">Bali area index</a> · <a href="/how-we-rate">How we check listings</a></p>`,
  });
}

/* ------------------------------ write files ------------------------------ */

function writePage(route) {
  const rel = route.path === "/" ? "index.html" : path.join(route.path.replace(/^\//, ""), "index.html");
  const out = path.join(DIST, rel);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  let html = BASE_HTML;
  const headTags = head(route);
  html = html.replace("</head>", `  ${headTags}\n  </head>`);
  html = html.replace('<div id="root"></div>', `<div id="root"><div id="prerendered">${route.html}</div></div>`);
  fs.writeFileSync(out, html);
}

routes.forEach(writePage);

/* 404 */
const notFound = BASE_HTML
  .replace(/<title>.*?<\/title>\s*/is, "")
  .replace("</head>", `  ${head({ title: "Page not found — The Massage Map", description: "This page does not exist.", canonical: "/404", indexable: false })}\n  </head>`)
  .replace('<div id="root"></div>', `<div id="root"><div id="prerendered"><h1>Page not found</h1><p>That URL is not part of the directory.</p><p><a href="/bali">Browse Bali areas</a> · <a href="/">Home</a></p></div></div>`);
fs.writeFileSync(path.join(DIST, "404.html"), notFound);

/* sitemap from indexable routes only */
const indexable = routes.filter((r) => r.indexable).map((r) => r.path).sort();
const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${indexable.map((p) => `  <url><loc>${SITE}${p === "/" ? "/" : p}</loc><lastmod>${today}</lastmod><changefreq>weekly</changefreq></url>`).join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(DIST, "sitemap.xml"), sitemap);
fs.writeFileSync(path.join(DIST, "robots.txt"), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`);

/* report */
const report = {
  generated_at: new Date().toISOString(),
  providers: totalProviders,
  areas_with_listings: withListings,
  pages_written: routes.length,
  indexable: indexable.length,
  noindex: routes.length - indexable.length,
  problems,
};
fs.writeFileSync(path.join(ROOT, "seo-prerender-report.json"), JSON.stringify(report, null, 2));

console.log(`prerender: ${routes.length} pages, ${indexable.length} indexable, ${routes.length - indexable.length} noindex`);
if (problems.length) {
  console.error("SEO problems:");
  problems.forEach((p) => console.error("  -", p));
  process.exit(1);
}
