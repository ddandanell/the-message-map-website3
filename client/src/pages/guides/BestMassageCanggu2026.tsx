import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { PLACES } from "@/lib/mockData";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";

const SITE_URL = "https://themassagemap.com";

/**
 * Data-driven Canggu page. Replaces an earlier guide that claimed a team had
 * personally visited and rated dozens of spas; nothing on the site is inspected
 * or rated by us, so this page now reports checked facts and published prices only.
 */
export default function MassageCanggu() {
  const canggu = PLACES.filter(p => p.areaSlug === "canggu");
  const priced = canggu.map(p => p.lowestPrice).filter((n): n is number => typeof n === "number");
  const cheapest = priced.length ? Math.min(...priced) : null;
  const checked = canggu.map(p => p.lastChecked).sort().slice(-1)[0] ?? "2026-10-31";

  const title = "Massage in Canggu: checked spas and published prices".slice(0, 60);
  const description = `Canggu massage and spa listings checked against each provider's own menu, with published IDR prices, hours and contact details. Updated ${checked}.`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <SEOHead
        title={title}
        description={description.slice(0, 155)}
        canonicalUrl="/guides/best-massage-canggu-2026"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Massage and spa providers in Canggu, Bali",
          numberOfItems: canggu.length,
          itemListElement: canggu.map((p, i) => ({
            "@type": "ListItem",
            position: i + 1,
            url: `${SITE_URL}/bali/canggu/${p.slug}`,
            name: p.name,
          })),
        }}
      />

      <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-800 text-white">
        <div className="container mx-auto px-4 py-14 max-w-4xl">
          <Breadcrumbs items={[{ name: "Guides", href: "/guides" }, { name: "Massage in Canggu", href: "/guides/best-massage-canggu-2026" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Massage in Canggu</h1>
          <p className="text-lg text-teal-50 leading-relaxed">
            {canggu.length === 1 ? "One Canggu provider" : `${canggu.length} Canggu providers`} checked against their own published menus
            {cheapest !== null ? `, with massage from IDR ${cheapest.toLocaleString("en-US")}` : ""}. Every entry below links to a listing that
            shows its sources and the date it was last checked — we do not score treatments we have not had.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl space-y-6">
        {canggu.map(p => (
          <article key={p.slug} className="bg-white rounded-2xl border border-border/60 p-6 md:p-8">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="text-2xl font-bold">
                  <Link href={`/bali/${p.areaSlug}/${p.slug}`} className="hover:text-teal-700">{p.name}</Link>
                </h2>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-2">
                  <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{p.address ?? "Canggu"}</span>
                  <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{p.hours ?? "hours not published"}</span>
                  {p.phone && <span className="inline-flex items-center gap-1"><Phone className="w-3.5 h-3.5" />{p.phone}</span>}
                </div>
              </div>
              <Badge variant="secondary" className="bg-teal-50 text-teal-800 border-teal-100">
                checked {p.lastChecked}
              </Badge>
            </div>

            <p className="mt-4 text-muted-foreground leading-relaxed">{p.answerBlock}</p>

            {p.prices.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {p.prices.slice(0, 4).map((pr, i) => (
                  <span key={i} className="rounded-md bg-slate-50 border border-border/60 px-2 py-1">
                    {pr.treatment} · {pr.duration} · IDR {pr.price_idr.toLocaleString("en-US")}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-5 flex flex-wrap gap-3">
              <Link href={`/bali/${p.areaSlug}/${p.slug}`}>
                <Button variant="outline" className="gap-2">Full listing and sources <ArrowRight className="w-4 h-4" /></Button>
              </Link>
              {p.website && (
                <a href={p.website} target="_blank" rel="noopener noreferrer">
                  <Button className="gap-2">Provider website <ArrowRight className="w-4 h-4" /></Button>
                </a>
              )}
            </div>
          </article>
        ))}

        <div className="bg-slate-50 border border-border/60 rounded-2xl p-6 text-sm text-muted-foreground">
          <p className="mb-2 font-medium text-foreground">How this page is built</p>
          <p>
            Providers are included when we can confirm they are operating in Canggu and publish their own menu. Prices, hours and contact
            details are copied from those menus and dated. We add providers as they are checked, so a short list means the area is still
            being worked through, not that nothing else exists. See <Link href="/how-we-rate" className="text-teal-700 underline">how we check listings</Link>.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
