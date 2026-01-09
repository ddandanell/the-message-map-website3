import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AreaCard } from "@/components/shared/AreaCard";
import { PlaceCard } from "@/components/shared/PlaceCard";
import { AREAS, CATEGORIES, PLACES } from "@/lib/mockData";
import { Search, CheckCircle, ChevronRight, Activity, Flower2, Heart, Flame, Footprints, Droplets, Sparkles } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useLocation } from "wouter";
import { BALI_AREAS, REGION_INFO } from "@/data/baliAreas";

// Map icons to Lucide components
const IconMap = {
  'Activity': Activity,
  'Flower2': Flower2,
  'Heart': Heart,
  'Flame': Flame,
  'Footprints': Footprints,
  'Droplets': Droplets
};

export default function Home() {
  const [location, setLocation] = useLocation();
  const [searchQuery, setSearchQuery] = useState<string>("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // Find matching area by slug or display name
      const area = BALI_AREAS.find(
        a => a.slug.toLowerCase() === searchQuery.toLowerCase().trim() ||
             a.displayName.toLowerCase() === searchQuery.toLowerCase().trim() ||
             a.displayName.toLowerCase().includes(searchQuery.toLowerCase().trim())
      );
      if (area) {
        setLocation(`/bali/${area.slug}`);
      }
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const featuredPlaces = PLACES.filter(p => p.verified).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center justify-center mb-6">
              <span className="px-4 py-1.5 bg-orange-500 text-white text-sm font-semibold rounded-full">
                100+ Areas Covered
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-teal-600 tracking-tight">
              Massage Services Across All of Bali
            </h1>

            {/* Description */}
            <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you're staying in a villa in Seminyak, a hotel in Ubud, or beachfront in Canggu, find verified massage therapists who come to you. Professional in-home massage services available island-wide.
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search areas (e.g., Ubud, Canggu...)"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-12 pr-4 h-14 text-base rounded-xl border-gray-300 focus:border-teal-500 focus:ring-teal-500"
                />
              </div>
            </div>

            {/* Quick Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {['Open Now', 'Budget Friendly', 'Luxury', 'Couples', 'Home Service'].map((filter) => (
                <button
                  key={filter}
                  className="px-5 py-2.5 rounded-full bg-white/90 backdrop-blur-sm border border-gray-300 text-black text-sm font-medium hover:bg-white hover:border-teal-500 transition-all shadow-sm"
                >
                  {filter}
                </button>
              ))}
            </div>

            {/* Massage Types - Always Visible */}
            <div className="max-w-4xl mx-auto mb-16">
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-gray-200">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-teal-600" />
                  <h3 className="text-lg font-semibold text-gray-900">Massage Types</h3>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
                  {CATEGORIES.map(cat => {
                    const Icon = IconMap[cat.icon as keyof typeof IconMap] || Sparkles;
                    return (
                      <button
                        key={cat.id}
                        onClick={() => setLocation(`/massage-types/${cat.slug}`)}
                        className="flex flex-col items-center p-4 rounded-xl border border-gray-200 hover:border-teal-500 hover:bg-teal-50 transition-all group"
                      >
                        <div className="w-10 h-10 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center mb-2 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-sm font-medium text-gray-700 group-hover:text-teal-600 transition-colors text-center">
                          {cat.name}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Region Section */}
            <div className="text-left max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {REGION_INFO.south.name}
              </h2>
              <p className="text-gray-600 mb-6">
                {REGION_INFO.south.description}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Massage Types Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Browse by Experience</h2>
              <p className="text-muted-foreground">Find the therapy that suits your needs</p>
            </div>
            <a href="/massage-types" className="text-primary font-medium hover:underline hidden md:flex items-center gap-1">
              View all types <ChevronRight className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {CATEGORIES.map(cat => {
              const Icon = IconMap[cat.icon as keyof typeof IconMap] || Sparkles;
              return (
                <div key={cat.id} className="cursor-pointer group flex flex-col items-center p-6 bg-white border border-border rounded-xl hover:shadow-lg hover:border-primary/30 transition-all text-center">
                  <div className="w-12 h-12 rounded-full bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{cat.name}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Popular Areas */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-center">Popular Areas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
            {AREAS.map(area => (
              <AreaCard key={area.id} area={area} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Places */}
      <section className="py-20 bg-background overflow-hidden">
        <div className="container mx-auto px-4">
           <div className="flex justify-between items-end mb-10">
            <div>
              <h2 className="text-3xl font-bold mb-2">Editor's Picks</h2>
              <p className="text-muted-foreground">Hand-picked top rated spas this week</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPlaces.map(place => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </div>
      </section>

      {/* How We Rate */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-12">How We Rate Places</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Hygiene First</h3>
              <p className="text-primary-foreground/80 leading-relaxed">We verify cleanliness standards and safety protocols for every listed spa.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Activity className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Skill & Technique</h3>
              <p className="text-primary-foreground/80 leading-relaxed">Our mystery shoppers test the therapists' skills and consistency.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">Atmosphere</h3>
              <p className="text-primary-foreground/80 leading-relaxed">We rate the ambiance, noise levels, and overall relaxation factor.</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
