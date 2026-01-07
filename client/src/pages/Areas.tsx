import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AreaCard } from "@/components/shared/AreaCard";
import { AREAS } from "@/lib/mockData";
import { MapPin, Users, TrendingUp } from "lucide-react";
import heroImage from '@assets/generated_images/luxury_tropical_spa_in_bali.png';

export default function Areas() {
  const totalPlaces = AREAS.reduce((sum, area) => sum + area.placeCount, 0);
  const avgMinPrice = Math.floor(AREAS.reduce((sum, area) => sum + area.minPrice, 0) / AREAS.length);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt="Bali Areas Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
              Explore Bali by Area
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed drop-shadow-md">
              From the surf breaks of Canggu to the spiritual heart of Ubud, discover the best massage and spa experiences in every corner of Bali.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm border-2 border-white/20">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white drop-shadow-lg">{AREAS.length}</div>
                <div className="text-white/90 text-sm font-medium drop-shadow">Areas Covered</div>
              </div>
              <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-200">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm border-2 border-white/20">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white drop-shadow-lg">{totalPlaces}+</div>
                <div className="text-white/90 text-sm font-medium drop-shadow">Verified Places</div>
              </div>
              <div className="flex flex-col items-center animate-in fade-in slide-in-from-bottom-6 duration-700 delay-300">
                <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm border-2 border-white/20">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white drop-shadow-lg">{(avgMinPrice / 1000).toFixed(0)}k+</div>
                <div className="text-white/90 text-sm font-medium drop-shadow">From IDR</div>
              </div>
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
              <div key={area.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <AreaCard area={area} />
              </div>
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
