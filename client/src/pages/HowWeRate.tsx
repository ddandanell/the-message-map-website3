import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SEOHead } from "@/components/seo/SEOHead";
import { Button } from "@/components/ui/button";
import { CheckCircle2, XCircle, Search, Globe, Flag, RefreshCw } from "lucide-react";

const STEPS = [
  {
    icon: Globe,
    title: "1. We read the provider's own sources",
    body: "Every listing starts with the business's website, its published menu and its own business profile. We record the URL we read and the date we read it, and that date is shown on the listing.",
  },
  {
    icon: Search,
    title: "2. We cross-check the basics",
    body: "Name, area, address, opening hours and phone number are compared against at least one further public source where one exists. If two sources disagree, the disputed field stays blank.",
  },
  {
    icon: Flag,
    title: "3. We separate what we know from what we don't",
    body: "Prices appear only where the provider publishes them. Ratings appear only with a named source, scale, review count and observation date. Anything unconfirmed is marked as not published, not guessed.",
  },
  {
    icon: RefreshCw,
    title: "4. We re-check on a rolling basis",
    body: "Each listing carries its last-checked date. When a price, address or owner changes, the listing is corrected or withdrawn rather than left to rot.",
  },
];

export default function HowWeRate() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <SEOHead
        title="How The Massage Map checks Bali massage listings"
        description="Our method: what we verify, how we date it, and what we deliberately do not claim — no visits, no inspection scores, no invented reviews."
        canonicalUrl="/how-we-rate"
      />

      <div className="bg-gradient-to-br from-teal-900 via-teal-800 to-emerald-800 text-white">
        <div className="container mx-auto px-4 py-16 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">How we check listings</h1>
          <p className="text-lg text-teal-50 leading-relaxed">
            The Massage Map is a directory of massage and spa providers in Bali. We publish what a provider states about
            itself, dated and sourced, and we say plainly what we have not done. We do not visit every business, and we
            do not score treatments we have never had.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-14 max-w-4xl space-y-12">
        <section className="grid gap-6 sm:grid-cols-2">
          {STEPS.map(s => (
            <div key={s.title} className="bg-white rounded-2xl border border-border/60 p-6">
              <s.icon className="w-6 h-6 text-teal-700 mb-3" />
              <h2 className="font-bold text-lg mb-2">{s.title}</h2>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.body}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-emerald-100 bg-emerald-50/60 p-6">
            <h2 className="font-bold text-lg mb-3 text-emerald-900">What a listing does mean</h2>
            <ul className="space-y-2 text-sm text-emerald-900/90">
              {[
                "The business was operating and advertising massage when we checked.",
                "The address, hours, phone and menu shown come from its own published information.",
                "Every factual field is dated with the day we last read it.",
              ].map(t => (
                <li key={t} className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-rose-100 bg-rose-50/60 p-6">
            <h2 className="font-bold text-lg mb-3 text-rose-900">What a listing does not mean</h2>
            <ul className="space-y-2 text-sm text-rose-900/90">
              {[
                "That we have visited, booked or received a treatment there.",
                "That hygiene, therapist skill or ambience has been assessed by us.",
                "That the provider is better than one without a listing — we list, we do not rank by quality.",
              ].map(t => (
                <li key={t} className="flex gap-2">
                  <XCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-border/60 p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4">Ratings and reviews</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            We do not write reviews and we do not generate ratings. If a provider's rating from an identifiable platform
            is shown, it is displayed with the platform it came from, the scale, the number of reviews and the date the
            figure was observed. Ratings from different platforms are never averaged together.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Where we have no attributable rating, the listing says so. A blank is more useful than a number we invented.
          </p>
        </section>

        <section className="bg-white rounded-2xl border border-border/60 p-6 md:p-8">
          <h2 className="text-2xl font-bold mb-4">Corrections and removals</h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Providers can ask for a correction or for their listing to be removed, and we will act on either. If you
            spot an out-of-date price, a closed business or a wrong address, send it through the contact page with the
            listing URL and we will re-check the source.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact"><Button>Report a correction</Button></Link>
            <Link href="/list-business"><Button variant="outline">Add or claim a listing</Button></Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
