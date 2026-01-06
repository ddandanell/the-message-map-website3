import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AreaCard } from "@/components/shared/AreaCard";
import { AREAS } from "@/lib/mockData";
import { MapPin, Users, TrendingUp } from "lucide-react";

export default function Areas() {
  const totalPlaces = AREAS.reduce((sum, area) => sum + area.placeCount, 0);
  const avgMinPrice = Math.floor(AREAS.reduce((sum, area) => sum + area.minPrice, 0) / AREAS.length);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Explore Bali by Area
          </h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            From the surf breaks of Canggu to the spiritual heart of Ubud, discover the best massage and spa experiences in every corner of Bali.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm border border-white/20">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">{AREAS.length}</div>
              <div className="text-teal-200 text-sm font-medium">Areas Covered</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm border border-white/20">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">{totalPlaces}+</div>
              <div className="text-teal-200 text-sm font-medium">Verified Places</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm border border-white/20">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">{(avgMinPrice / 1000).toFixed(0)}k+</div>
              <div className="text-teal-200 text-sm font-medium">From IDR</div>
            </div>
          </div>
        </div>
      </div>

      {/* Areas Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Choose Your Perfect Location</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Each area of Bali has its own unique vibe and specialties. Whether you're looking for luxury resort spas,
              budget-friendly local gems, or traditional healers, we'll help you find exactly what you need.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {AREAS.map(area => (
              <AreaCard key={area.id} area={area} />
            ))}
          </div>

          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl border border-border shadow-sm">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Not sure where to go?</h3>
              <p className="text-muted-foreground mb-4">
                Check out our curated guides to help you find the perfect area based on your travel style, budget, and wellness goals.
              </p>
              <a href="/guides" className="text-primary font-semibold hover:underline inline-flex items-center gap-1">
                Browse Guides →
              </a>
            </div>

            <div className="bg-teal-50 p-8 rounded-2xl border border-teal-100">
              <h3 className="text-xl font-bold text-teal-900 mb-3">Local Tip</h3>
              <p className="text-teal-700">
                Prices tend to be lower in Ubud and Sanur compared to Seminyak and Uluwatu. However, all areas offer
                a mix of budget and luxury options.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
