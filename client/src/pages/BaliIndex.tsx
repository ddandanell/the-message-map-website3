import { useState } from "react";
import { Link } from "wouter";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { SEOHead } from "@/components/seo/SEOHead";
import { Breadcrumbs } from "@/components/shared/Breadcrumbs";
import { AREAS, PLACES } from "@/lib/mockData";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

/** Bali index: the areas we actually operate in, with real listing counts. */
export default function BaliIndex() {
  const [searchTerm, setSearchTerm] = useState("");

  const filtered = AREAS.filter(a =>
    searchTerm.trim() ? a.name.toLowerCase().includes(searchTerm.trim().toLowerCase()) : true
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="Bali massage and spa areas: checked local listings"
        description={`Massage and spa providers in ${AREAS.filter(a => a.placeCount > 0).length} Bali areas, each listing checked against the provider's own published prices, hours and menu.`}
        canonicalUrl="/bali"
      />

      <Header />
      <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-800 text-white">
        <div className="container mx-auto px-4 py-14 max-w-4xl">
          <Breadcrumbs items={[{ name: "Bali", href: "/bali" }]} />
          <h1 className="text-4xl md:text-5xl font-bold mt-4 mb-4">Bali area by area</h1>
          <p className="text-lg text-teal-50 leading-relaxed max-w-2xl">
            {PLACES.length} checked {PLACES.length === 1 ? "listing" : "listings"} across {AREAS.filter(a => a.placeCount > 0).length} areas.
            Pick the area you are staying in, or the one you are willing to travel to, and compare published prices and
            hours on the listings themselves.
          </p>
          <div className="relative max-w-md mt-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Filter areas (e.g. Ubud, Canggu)"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="pl-10 py-6 text-base bg-white text-foreground"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map(area => (
            <Link key={area.slug} href={`/bali/${area.slug}`}>
              <a className="block h-full">
                <Card className="p-5 h-full hover:shadow-lg transition-all hover:border-teal-200 group">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 p-2 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors">
                        <MapPin className="w-5 h-5 text-teal-700" />
                      </div>
                      <div>
                        <h2 className="font-semibold text-lg group-hover:text-teal-700 transition-colors">{area.name}</h2>
                        <p className="text-sm text-muted-foreground line-clamp-2">{area.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-xs">
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700 border-transparent">
                      {area.placeCount} {area.placeCount === 1 ? "listing" : "listings"}
                    </Badge>
                    <span className="text-muted-foreground">
                      {area.minPrice !== null ? `from IDR ${Math.round(area.minPrice / 1000)}k` : "prices not published yet"}
                    </span>
                  </div>
                </Card>
              </a>
            </Link>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No area matches "{searchTerm}".</p>
            <button onClick={() => setSearchTerm("")} className="text-teal-700 underline mt-2">Clear filter</button>
          </div>
        )}

        <div className="mt-10 bg-slate-50 border border-border/60 rounded-2xl p-6 text-sm text-muted-foreground">
          <p className="font-medium text-foreground mb-2">Why only these areas?</p>
          <p>
            Bali has dozens of neighbourhoods. A page is published here once at least one provider in that area has been
            checked and listed, so an area with no page means we have not verified anyone there yet, not that there are no
            massage businesses. Areas are added in order as the directory grows.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
