import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { getOrganizationSchema } from "@/lib/schema";
import { Button } from "@/components/ui/button";
import { PLACES, AREAS } from "@/lib/mockData";
import { MapPin, Clock, ArrowRight } from "lucide-react";

export default function About() {
  const checkedAreas = AREAS.filter(a => a.placeCount > 0).length;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SEOHead
        title="About The Massage Map: a checked Bali massage directory"
        description="The Massage Map lists massage and spa providers in Bali with published prices, hours and sources, and shows the date each listing was last checked."
        canonicalUrl="/about"
        structuredData={getOrganizationSchema()}
      />
      <Header />

      <div className="bg-teal-900 text-white py-20">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">A directory that shows its work</h1>
          <p className="text-lg text-teal-100 leading-relaxed">
            The Massage Map exists to answer one practical question: which massage or spa in Bali fits what I want, what
            does it cost, and how do I reach it. Every listing answers that with facts taken from the provider's own
            published information, dated, and linked to the source.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-14 max-w-3xl space-y-12">
        <section>
          <h2 className="text-2xl font-bold mb-4">What we publish</h2>
          <p className="text-muted-foreground leading-relaxed mb-3">
            {PLACES.length} providers across {checkedAreas} areas of Bali are listed at the time of writing, and the
            number grows as listings are checked. Each one carries its address, opening hours, contact details, the
            treatments the provider lists, any prices it publishes, and the sources those facts came from.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We deliberately do not publish invented reviews, editorial star ratings, hygiene scores or claims about
            treatments we have never had. There is no "verified" badge here, because a badge that means nothing is worse
            than no badge. Instead, every listing says what was checked and when.
          </p>
        </section>

        <section className="grid sm:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-border/60 bg-white p-6">
            <MapPin className="w-5 h-5 text-teal-700 mb-3" />
            <h3 className="font-bold mb-2">Coverage, area by area</h3>
            <p className="text-sm text-muted-foreground">
              Canggu, Seminyak, Ubud, Sanur, Uluwatu, Kuta, Legian, Jimbaran, Nusa Dua and Denpasar. Areas are worked
              through in order, and empty areas stay marked as in progress rather than filled with placeholder entries.
            </p>
          </div>
          <div className="rounded-2xl border border-border/60 bg-white p-6">
            <Clock className="w-5 h-5 text-teal-700 mb-3" />
            <h3 className="font-bold mb-2">Dating and corrections</h3>
            <p className="text-sm text-muted-foreground">
              Every listing shows when it was last checked. Prices and hours change; if you find something out of date,
              report it and the listing is re-checked against the source rather than patched from memory.
            </p>
          </div>
        </section>

        <section className="bg-slate-50 border border-border/60 rounded-2xl p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-3">How to use it</h2>
          <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
            <li>Start from the area you are staying in.</li>
            <li>Compare published prices and opening hours on the listing itself.</li>
            <li>Contact the provider directly through its own website or phone number.</li>
          </ol>
          <div className="flex flex-wrap gap-3 mt-6">
            <Link href="/bali"><Button className="gap-2">Browse by area <ArrowRight className="w-4 h-4" /></Button></Link>
            <Link href="/how-we-rate"><Button variant="outline">How we check listings</Button></Link>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-3">Are you a provider?</h2>
          <p className="text-muted-foreground leading-relaxed">
            If your business is missing, or a detail is wrong, send the correct information with a link to your own
            published menu and we will check it. Listing is based on verifiable information, not payment; we do not sell
            placements or star ratings.
          </p>
        </section>
      </div>

      <Footer />
    </div>
  );
}
