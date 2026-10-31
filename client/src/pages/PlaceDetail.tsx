import { useParams, Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { getPlaceBySlug, getPlacesByArea } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BackToTop } from "@/components/shared/BackToTop";
import { MapPin, Clock, Phone, Globe, CalendarCheck, Info, ArrowUpRight, Check } from "lucide-react";
import NotFound from "./not-found";

const SITE_URL = "https://themassagemap.com";

function fmtDate(iso: string) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime()) ? iso : d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });
}

function fmtIdr(n: number) {
  return "IDR " + n.toLocaleString("en-US");
}

export default function PlaceDetail() {
  const { area, slug } = useParams();
  const place = getPlaceBySlug(area || "", slug || "");

  if (!place) return <NotFound />;

  const url = `${SITE_URL}/bali/${place.areaSlug}/${place.slug}`;
  const title = `${place.name}, ${place.area} — prices, hours and contact`.slice(0, 60);
  const description = (
    place.hours
      ? `${place.name} in ${place.area}, Bali. ${place.hours}. `
      : `${place.name} in ${place.area}, Bali. `
  ) +
    (place.lowestPrice !== null
      ? `Published massage prices from ${fmtIdr(place.lowestPrice)}. `
      : "Massage menu and prices as published by the provider. ") +
    `Details checked ${fmtDate(place.lastChecked)}.`;

  const related = getPlacesByArea(place.areaSlug).filter(p => p.slug !== place.slug).slice(0, 3);

  const structuredData: object[] = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      name: place.name,
      url,
      description: place.answerBlock,
      dateModified: place.lastChecked,
      isPartOf: { "@type": "WebSite", name: "The Massage Map", url: SITE_URL },
      about: {
        "@type": place.provider_type === "spa" ? "DaySpa" : "HealthAndBeautyBusiness",
        name: place.name,
        address: place.address ?? undefined,
        telephone: place.phone ?? undefined,
        url: place.website ?? undefined,
        openingHours: place.hours ?? undefined,
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
        { "@type": "ListItem", position: 2, name: "Bali", item: `${SITE_URL}/bali` },
        { "@type": "ListItem", position: 3, name: place.area, item: `${SITE_URL}/bali/${place.areaSlug}` },
        { "@type": "ListItem", position: 4, name: place.name, item: url },
      ],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <BackToTop />
      <SEOHead title={title} description={description.slice(0, 155)} canonicalUrl={`/bali/${place.areaSlug}/${place.slug}`} structuredData={structuredData} />

      <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-800 text-white">
        <div className="container mx-auto px-4 py-10">
          <Breadcrumbs items={[{ name: "Bali", href: "/bali" }, { name: place.area, href: `/bali/${place.areaSlug}` }, { name: place.name, href: "/bali/" + place.areaSlug + "/" + place.slug }]} />
          <div className="flex flex-wrap items-center gap-2 mt-4 text-xs">
            <Badge variant="secondary" className="bg-white/15 text-white border-0">{place.area}</Badge>
            <Badge variant="secondary" className="bg-white/15 text-white border-0 capitalize">{place.provider_type.replace(/_/g, " ")}</Badge>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2.5 py-1">
              <CalendarCheck className="w-3.5 h-3.5" />
              Details checked {fmtDate(place.lastChecked)}
            </span>
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mt-4 tracking-tight">{place.name}</h1>
          <p className="mt-4 max-w-3xl text-teal-50 leading-relaxed">{place.answerBlock}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <article className="space-y-8">
          <section className="bg-white rounded-2xl border border-border/60 p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-4">About {place.name}</h2>
            {place.description.split("\n\n").map((para, i) => (
              <p key={i} className="text-muted-foreground leading-relaxed mb-4 last:mb-0">{para}</p>
            ))}
          </section>

          {place.prices.length > 0 && (
            <section className="bg-white rounded-2xl border border-border/60 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-1">Published prices</h2>
              <p className="text-sm text-muted-foreground mb-4">Taken from the provider's own menu on {fmtDate(place.lastChecked)}. Confirm at booking.</p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-left border-b border-border/60 text-muted-foreground">
                      <th className="py-2 pr-4 font-medium">Treatment</th>
                      <th className="py-2 pr-4 font-medium">Duration</th>
                      <th className="py-2 pr-4 font-medium">Price</th>
                      <th className="py-2 font-medium">Note</th>
                    </tr>
                  </thead>
                  <tbody>
                    {place.prices.map((p, i) => (
                      <tr key={i} className="border-b border-border/40 last:border-0">
                        <td className="py-2 pr-4">{p.treatment}</td>
                        <td className="py-2 pr-4 whitespace-nowrap">{p.duration}</td>
                        <td className="py-2 pr-4 font-medium whitespace-nowrap">{fmtIdr(p.price_idr)}</td>
                        <td className="py-2 text-muted-foreground">{p.note ?? "—"}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {place.priceNotes && <p className="text-xs text-muted-foreground mt-4">{place.priceNotes}</p>}
            </section>
          )}

          {place.treatments.length > 0 && (
            <section className="bg-white rounded-2xl border border-border/60 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">Treatments listed by the provider</h2>
              <div className="flex flex-wrap gap-2">
                {place.treatments.map(t => (
                  <Badge key={t} variant="secondary" className="bg-teal-50 text-teal-900 border-teal-100 font-normal">{t}</Badge>
                ))}
              </div>
            </section>
          )}

          {place.features.length > 0 && (
            <section className="bg-white rounded-2xl border border-border/60 p-6 md:p-8">
              <h2 className="text-2xl font-bold mb-4">What the listing confirms</h2>
              <ul className="grid sm:grid-cols-2 gap-2">
                {place.features.map(f => (
                  <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <Check className="w-4 h-4 text-teal-600 mt-0.5 shrink-0" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          <section className="bg-slate-50 rounded-2xl border border-border/60 p-6 md:p-8">
            <h2 className="text-2xl font-bold mb-3 flex items-center gap-2">
              <Info className="w-5 h-5 text-teal-700" /> How this listing was checked
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {place.verificationNote ??
                "Every field on this page comes from the provider's own published information. We have not visited this business, so we do not score hygiene, therapist skill or ambience, and we do not describe a treatment we have not had."}
            </p>
            <h3 className="font-semibold text-sm mb-2">Sources</h3>
            <ul className="space-y-1.5 text-sm">
              {place.sources.map(s => (
                <li key={s.url} className="flex flex-wrap items-baseline gap-x-2">
                  <a href={s.url} target="_blank" rel="noopener noreferrer nofollow" className="text-teal-700 underline decoration-dotted break-all">
                    {s.url.replace(/^https?:\/\//, "")}
                  </a>
                  <span className="text-muted-foreground">— {s.confirms ?? "provider page"}</span>
                  <span className="text-xs text-muted-foreground/70">checked {fmtDate(s.checked_date)}</span>
                </li>
              ))}
            </ul>
            <p className="text-xs text-muted-foreground mt-4">
              Spot something out of date? Tell us and we will re-check the source. Listings are re-checked on a rolling basis; this one was last checked {fmtDate(place.lastChecked)}.
            </p>
          </section>
        </article>

        <aside className="space-y-6">
          <div className="bg-white rounded-2xl border border-border/60 p-6 space-y-4">
            <h2 className="text-lg font-bold">Plan your visit</h2>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{place.address ?? `Address not published by the provider. ${place.area}, Bali.`}</span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                <span className="text-muted-foreground">{place.hours ?? "Opening hours not published"}</span>
              </div>
              {place.phone && (
                <div className="flex items-start gap-2">
                  <Phone className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                  <a href={`tel:${place.phone.replace(/\s/g, "")}`} className="text-teal-700 hover:underline">{place.phone}</a>
                </div>
              )}
              {place.website && (
                <div className="flex items-start gap-2">
                  <Globe className="w-4 h-4 text-teal-700 mt-0.5 shrink-0" />
                  <a href={place.website} target="_blank" rel="noopener noreferrer" className="text-teal-700 hover:underline break-all">
                    {place.website.replace(/^https?:\/\//, "")}
                  </a>
                </div>
              )}
            </div>
            <div className="flex flex-col gap-2 pt-2">
              {place.bookingUrl || place.website ? (
                <a href={place.bookingUrl ?? place.website ?? "#"} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full gap-2">
                    Book with the provider <ArrowUpRight className="w-4 h-4" />
                  </Button>
                </a>
              ) : (
                <Button disabled className="w-full">Contact details not published</Button>
              )}
              <Link href={`/bali/${place.areaSlug}`}>
                <Button variant="outline" className="w-full">More in {place.area}</Button>
              </Link>
            </div>
          </div>

          {related.length > 0 && (
            <div className="bg-white rounded-2xl border border-border/60 p-6">
              <h2 className="text-lg font-bold mb-3">Also in {place.area}</h2>
              <ul className="space-y-3 text-sm">
                {related.map(p => (
                  <li key={p.slug}>
                    <Link href={`/bali/${p.areaSlug}/${p.slug}`} className="font-medium text-teal-800 hover:underline">{p.name}</Link>
                    <p className="text-xs text-muted-foreground">
                      {p.hours ?? "Hours not published"}
                      {p.lowestPrice !== null ? ` · from ${fmtIdr(p.lowestPrice)}` : ""}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>

      <Footer />
    </div>
  );
}
