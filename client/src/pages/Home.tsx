import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AreaCard } from "@/components/shared/AreaCard";
import { PlaceCard } from "@/components/shared/PlaceCard";
import { AREAS, CATEGORIES, PLACES } from "@/lib/mockData";
import { Search, MapPin, Sparkles, Calendar, CheckCircle, ChevronRight, Activity, Flower2, Heart, Flame, Footprints, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useLocation } from "wouter";

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
  const [selectedArea, setSelectedArea] = useState<string>("");
  const [selectedType, setSelectedType] = useState<string>("");

  const handleSearch = () => {
    if (selectedArea) {
      setLocation(`/bali/${selectedArea}`);
    } else if (selectedType) {
      setLocation(`/bali/${selectedType}`);
    } else {
      setLocation('/bali/canggu'); // Default
    }
  };

  const featuredPlaces = PLACES.filter(p => p.verified).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={AREAS[2].image} 
            alt="Bali Spa Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="animate-in slide-in-from-bottom-8 fade-in duration-700">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight drop-shadow-2xl">
              Find Your <span className="text-secondary italic">Perfect</span> <br/> Massage in Bali
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-lg">
              Discover verified spas, hidden gems, and authentic healers across the island. Book directly with confidence.
            </p>

            {/* Search Box */}
            <div className="bg-white p-3 rounded-2xl shadow-2xl max-w-3xl mx-auto flex flex-col md:flex-row gap-3 animate-in slide-in-from-bottom-10 fade-in duration-700 delay-200">
              <div className="flex-1">
                <Select value={selectedArea} onValueChange={setSelectedArea}>
                  <SelectTrigger className="h-12 border-0 bg-slate-50 focus:ring-2 focus:ring-primary text-base transition-all duration-200 hover:bg-slate-100">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-5 h-5 text-primary" />
                      <SelectValue placeholder="Where in Bali?" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {AREAS.map(area => (
                      <SelectItem key={area.id} value={area.slug}>{area.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="w-[1px] bg-slate-200 hidden md:block" />
              <div className="flex-1">
                 <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="h-12 border-0 bg-slate-50 focus:ring-2 focus:ring-primary text-base transition-all duration-200 hover:bg-slate-100">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Sparkles className="w-5 h-5 text-primary" />
                      <SelectValue placeholder="Massage Type" />
                    </div>
                  </SelectTrigger>
                  <SelectContent>
                    {CATEGORIES.map(cat => (
                      <SelectItem key={cat.id} value={cat.slug}>{cat.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Button 
                size="lg" 
                className="h-12 px-8 text-base font-semibold transition-all duration-200 hover:scale-105 hover:shadow-xl" 
                onClick={handleSearch}
              >
                Search
              </Button>
            </div>

            {/* Quick Chips */}
            <div className="mt-8 flex flex-wrap justify-center gap-3 animate-in fade-in duration-700 delay-300">
              {['Open Now', 'Budget Friendly', 'Luxury', 'Couples', 'Home Service'].map(chip => (
                <button 
                  key={chip} 
                  className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm backdrop-blur-sm border border-white/20 transition-all duration-200 hover:scale-105 hover:border-white/40"
                >
                  {chip}
                </button>
              ))}
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
                <div 
                  key={cat.id} 
                  className="cursor-pointer group flex flex-col items-center p-6 bg-white border border-border rounded-xl hover:shadow-xl hover:border-primary/30 hover:-translate-y-1 transition-all duration-200 text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/5 text-primary flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white group-hover:scale-110 transition-all duration-200">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">{cat.name}</h3>
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
