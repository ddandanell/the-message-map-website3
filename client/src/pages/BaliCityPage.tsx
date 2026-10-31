import { useRoute, Link } from "wouter";
import { MapPin, Clock, ExternalLink, ArrowRight, Info } from "lucide-react";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getAreaBySlug, getPlacesByArea } from "@/lib/mockData";
import { REGION_INFO } from "@/data/baliAreas";
import NotFound from "./not-found";

const SITE_URL = "https://themassagemap.com";

function fmtIdr(n: number) {
  return "IDR " + n.toLocaleString("en-US");
}

/**
 * Area page. Lists only providers we have actually checked, with their published
 * prices and hours. It makes no claim about service quality, therapist licensing
 * or coverage beyond what the listings show.
 */
export default function AreaPage() {
  const [, params] = useRoute("/bali/:slug");
  const slug = params?.slug ?? "";
  const area = getAreaBySlug(slug);
  const places = area ? getPlacesByArea(slug) : [];

  if (!area) return <NotFound />;

  const region = REGION_INFO[area.region as keyof typeof REGION_INFO];
  const priced = places.map(p => p.lowestPrice).filter((n): n is number => typeof n === "number");
  const cheapest = priced.length ? Math.min(...priced) : null;
  const latestCheck = places.map(p => p.lastChecked).sort().slice(-1)[0] ?? null;

  const title = `Massage and spas in ${area.name}, Bali: checked listings`.slice(0, 60);
  const description = places.length
    ? `${places.length} massage and spa ${places.length === 1 ? "provider" : "providers"} in ${area.name}, Bali, checked against their own published menus, with hours, contact details and the date each listing was checked.`
    : `We are still checking massage and spa providers in ${area.name}, Bali. No listings are published for this area yet.`;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <SEOHead
        title={title}
        description={description.slice(0, 155)}
        canonicalUrl={`/bali/${area.slug}`}
        noindex={places.length === 0}
        structuredData={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: `Massage and spas in ${area.name}, Bali`,
          url: `${SITE_URL}/bali/${area.slug}`,
          description,
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: places.length,
            itemListElement: places.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              name: p.name,
              url: `${SITE_URL}/bali/${p.areaSlug}/${p.slug}`,
            })),
          },
        }}
      />

      <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-800 text-white">
        <div className="container mx-auto px-4 py-12 max-w-5xl">
          <Breadcrumbs items={[{ name: "Bali", href: "/bali" }, { name: area.name, href: "/bali/" + area.slug }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4">Massage and spas in {area.name}</h1>
          <p className="mt-4 max-w-3xl text-teal-50 leading-relaxed">
            {places.length
              ? `${places.length} ${places.length === 1 ? "provider is" : "providers are"} listed for ${area.name}${cheapest !== null ? `, with published massage prices from ${fmtIdr(cheapest)}` : ""}. ` +
                `Each listing was checked against the provider's own published information${latestCheck ? `, most recently on ${latestCheck}` : ""}. We do not rate or inspect businesses, so no stars, hygiene scores or "verified" badges appear here.`
              : `${area.name} sits in ${region.name}. We are still checking providers here and have not published a listing that meets our bar yet, because publishing an unchecked business would be worse than publishing none.`}
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {places.length === 0 ? (
          <div className="bg-white border border-border/60 rounded-2xl p-8 text-center">
            <Info className="w-6 h-6 text-teal-700 mx-auto mb-3" />
            <h2 className="text-xl font-bold mb-2">No checked listings in {area.name} yet</h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-6">
              We add areas as we verify providers in them. Nearby areas that already have checked listings are a better
              starting point than an empty page.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <Link href="/bali"><Button>Browse areas with listings</Button></Link>
              <Link href="/contact"><Button variant="outline">Suggest a provider here</Button></Link>
            </div>
          </div>
        ) : (
          <div className="space-y-4">
            {places.map(p => (
              <article key={p.slug} className="bg-white border border-border/60 rounded-2xl p-6 hover:border-teal-200 transition-colors">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0">
                    <h2 className="text-xl font-bold">
                      <Link href={`/bali/${p.areaSlug}/${p.slug}`} className="hover:text-teal-700">{p.name}</Link>
                    </h2>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1.5">
                      <span className="inline-flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{p.address ?? `${p.area}, Bali`}</span>
                      <span className="inline-flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{p.hours ?? "hours not published"}</span>
                    </div>
                  </div>
                  <Badge variant="secondary" className="bg-teal-50 text-teal-800 border-teal-100 shrink-0">
                    checked {p.lastChecked}
                  </Badge>
                </div>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed line-clamp-3">{p.answerBlock}</p>
                <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
                  {p.lowestPrice !== null && (
                    <span className="rounded-md bg-slate-50 border border-border/60 px-2 py-1">from {fmtIdr(p.lowestPrice)}</span>
                  )}
                  <Link href={`/bali/${p.areaSlug}/${p.slug}`} className="text-teal-700 font-medium inline-flex items-center gap-1 hover:underline">
                    Full listing <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  {p.website && (
                    <a href={p.website} target="_blank" rel="noopener noreferrer" className="text-teal-700 inline-flex items-center gap-1 hover:underline">
                      Provider site <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <div className="bg-slate-50 border border-border/60 rounded-2xl p-6">
            <h2 className="font-bold mb-2">About {area.name}</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {area.description} It is part of {region.name} in Bali. Area descriptions here are orientation only; they
              are not a judgement about which spa is best.
            </p>
          </div>
          <div className="bg-slate-50 border border-border/60 rounded-2xl p-6">
            <h2 className="font-bold mb-2">How we list {area.name} providers</h2>
            <p className="text-sm text-muted-foreground leading-relaxed">
              A provider appears once we can confirm it is operating here and publishes its own menu or business details.
              Prices and hours come from that source, with the date we read it.{" "}
              <Link href="/how-we-rate" className="text-teal-700 underline">How checking works</Link>.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
