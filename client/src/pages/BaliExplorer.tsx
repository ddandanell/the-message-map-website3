import { Link, useParams } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { PLACES, AREAS, CATEGORIES, Place } from "@/lib/mockData";
import { PlaceCard } from "@/components/shared/PlaceCard";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Badge } from "@/components/ui/badge";
import { BackToTop } from "@/components/shared/BackToTop";
import { Skeleton } from "@/components/ui/skeleton";
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal, ChevronDown, Filter, X, SearchX, Star } from "lucide-react";
import { useState, useMemo, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function BaliExplorer() {
  const { slug } = useParams();
  const [loading, setLoading] = useState(true);
  
  // Determine if slug is area or category
  const isArea = AREAS.some(a => a.slug === slug);
  const currentArea = AREAS.find(a => a.slug === slug);
  const currentCategory = CATEGORIES.find(c => c.slug === slug);

  const title = isArea ? currentArea?.name : currentCategory?.name;
  const description = isArea ? currentArea?.description : currentCategory?.description;
  const heroImage = isArea ? currentArea?.image : "/attached_assets/generated_images/professional_massage_therapy_room.png";

  // Filter State
  const [priceRange, setPriceRange] = useState([1000000]);
  const [openNow, setOpenNow] = useState(false);
  const [homeService, setHomeService] = useState(false);
  const [couples, setCouples] = useState(false);
  const [femaleTherapist, setFemaleTherapist] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [minRating, setMinRating] = useState<number | null>(null);

  // Loading simulation
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, [slug, priceRange, openNow, homeService, couples, femaleTherapist, selectedTypes, minRating]);

  // Filter Logic
  const filteredPlaces = useMemo(() => {
    let results = PLACES;

    if (isArea) {
      results = results.filter(p => p.area === currentArea?.name);
    } else if (currentCategory) {
      results = results.filter(p => p.tags.some(t => t.toLowerCase().includes(currentCategory.name.toLowerCase())));
    }

    // Apply Price Filter
    results = results.filter(p => {
      const lowest = Math.min(...p.price_examples.map(ex => ex.price));
      return lowest <= priceRange[0];
    });

    // Open Now Logic (Mock implementation)
    // Bali is UTC+8. We'll just check against 9am-10pm for now
    if (openNow) {
      const baliTime = new Date(new Date().toLocaleString("en-US", {timeZone: "Asia/Makassar"}));
      const hours = baliTime.getHours();
      const isOpen = hours >= 9 && hours < 22;
      
      // If currently closed in Bali, mock behavior to show nothing or warning? 
      // For prototype: Assume "Open Now" just filters for places with open status.
      // We'll just randomly filter for demo purposes if we don't have real hours data parsing
      // But since we are mocking, let's just assume all "open" places match the query
      if (!isOpen) {
         // It's night time in Bali, show fewer
         results = results.filter((_, i) => i % 5 === 0);
      } else {
         results = results.filter((_, i) => i % 2 === 0); 
      }
    }

    if (homeService) {
      results = results.filter(p => p.home_service);
    }
    
    if (couples) {
      results = results.filter(p => p.couples_massage);
    }
    
    if (femaleTherapist) {
      results = results.filter(p => p.female_therapist);
    }

    if (selectedTypes.length > 0) {
      results = results.filter(p => p.tags.some(t => selectedTypes.includes(t)));
    }
    
    if (minRating) {
      results = results.filter(p => p.editor_rating >= minRating);
    }

    return results;
  }, [slug, priceRange, openNow, homeService, couples, femaleTherapist, selectedTypes, minRating, isArea, currentArea, currentCategory]);

  const activeFilterCount = [
     priceRange[0] < 1000000,
     openNow,
     homeService,
     couples,
     femaleTherapist,
     selectedTypes.length > 0,
     minRating !== null
  ].filter(Boolean).length;

  const clearAllFilters = () => {
    setPriceRange([1000000]);
    setOpenNow(false);
    setHomeService(false);
    setCouples(false);
    setFemaleTherapist(false);
    setSelectedTypes([]);
    setMinRating(null);
  };

  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const FilterPanel = () => (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex items-center justify-between">
        <h3 className="font-bold text-lg flex items-center gap-2">
          <Filter className="w-4 h-4" /> Filters
          {activeFilterCount > 0 && (
             <Badge variant="secondary" className="bg-primary/10 text-primary h-5 w-5 p-0 flex items-center justify-center rounded-full text-xs">
               {activeFilterCount}
             </Badge>
          )}
        </h3>
        {activeFilterCount > 0 && (
          <Button variant="ghost" size="sm" onClick={clearAllFilters} className="h-8 px-2 text-xs text-muted-foreground hover:text-foreground">
            Clear all
          </Button>
        )}
      </div>

      {/* Price Range */}
      <div>
        <div className="flex justify-between items-baseline mb-4">
          <Label className="font-semibold">Max Price</Label>
          <span className="text-sm font-medium text-primary bg-primary/5 px-2 py-1 rounded">{(priceRange[0]/1000).toFixed(0)}k IDR</span>
        </div>
        <Slider 
          value={priceRange} 
          onValueChange={setPriceRange} 
          max={1000000} 
          step={50000} 
          className="mb-2"
        />
        <div className="flex justify-between text-xs text-muted-foreground mt-2">
          <span>0</span>
          <span>1,000k+</span>
        </div>
      </div>

      {/* Toggles */}
      <div className="space-y-5">
        <div className="flex items-center justify-between">
          <Label htmlFor="open-now" className="font-medium cursor-pointer">Open Now</Label>
          <Switch id="open-now" checked={openNow} onCheckedChange={setOpenNow} />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="home-service" className="font-medium cursor-pointer">Home Service</Label>
          <Switch id="home-service" checked={homeService} onCheckedChange={setHomeService} />
        </div>
        <div className="flex items-center justify-between">
          <Label htmlFor="couples" className="font-medium cursor-pointer">Couples Massage</Label>
          <Switch id="couples" checked={couples} onCheckedChange={setCouples} />
        </div>
        <div className="flex items-center justify-between">
           <Label htmlFor="female" className="font-medium cursor-pointer">Female Therapist</Label>
           <Switch id="female" checked={femaleTherapist} onCheckedChange={setFemaleTherapist} />
        </div>
      </div>

      {/* Massage Types (If on Area page) */}
      {isArea && (
        <div className="pt-4 border-t border-border/50">
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Massage Type</h3>
          <div className="space-y-3">
            {CATEGORIES.map(cat => (
              <div key={cat.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`cat-${cat.id}`} 
                  checked={selectedTypes.includes(cat.name)}
                  onCheckedChange={() => toggleType(cat.name)}
                />
                <Label htmlFor={`cat-${cat.id}`} className="font-normal cursor-pointer text-sm">{cat.name}</Label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Rating */}
       <div className="pt-4 border-t border-border/50">
          <h3 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">Rating</h3>
          <div className="space-y-3">
            {[4, 3, 2].map(rating => (
               <div key={rating} className="flex items-center space-x-2">
                <Checkbox 
                  id={`rating-${rating}`} 
                  checked={minRating === rating}
                  onCheckedChange={(checked) => setMinRating(checked ? rating : null)}
                />
                <Label htmlFor={`rating-${rating}`} className="font-normal cursor-pointer flex items-center gap-1 text-sm">
                  {rating}+ Stars <div className="flex">{Array(rating).fill(0).map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}</div>
                </Label>
              </div>
            ))}
          </div>
        </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <BackToTop />

      {/* Page Hero */}
      <div className="relative h-[40vh] min-h-[300px] flex items-end">
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImage} 
            alt={title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4 pb-12">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
            <Link href="/">Home</Link>
            <span>/</span>
            <span>Bali</span>
            <span>/</span>
            <span className="text-white font-medium">{title}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-2">{title}</h1>
          <p className="text-white/80 max-w-2xl text-lg">{description}</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <div className="sticky top-24 bg-white p-6 rounded-xl border border-border shadow-sm">
              <FilterPanel />
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4 sticky top-16 z-30 -mx-4 px-4 py-2 bg-background/95 backdrop-blur border-b border-border">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full flex justify-between h-12 shadow-sm">
                  <span className="flex items-center gap-2 font-semibold"><Filter className="w-4 h-4" /> Filters {activeFilterCount > 0 && `(${activeFilterCount})`}</span>
                  <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="overflow-y-auto">
                <SheetHeader className="mb-6">
                  <SheetTitle>Filter Results</SheetTitle>
                  <SheetDescription>Refine your search for the perfect massage.</SheetDescription>
                </SheetHeader>
                <FilterPanel />
                <div className="mt-8 pt-4 border-t border-border">
                  <Button className="w-full" onClick={() => document.body.click()}>Show Results</Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Results */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground font-medium">
                {loading ? <Skeleton className="h-4 w-32" /> : `Showing ${filteredPlaces.length} places`}
              </p>
              <div className="flex items-center gap-2 text-sm font-medium">
                Sort by: <span className="text-primary cursor-pointer flex items-center hover:underline">Recommended <ChevronDown className="w-4 h-4 ml-1" /></span>
              </div>
            </div>

            {loading ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 {[1, 2, 3, 4].map(i => (
                   <div key={i} className="rounded-xl overflow-hidden border border-border">
                     <Skeleton className="h-[240px] w-full" />
                     <div className="p-4 space-y-3">
                       <Skeleton className="h-6 w-3/4" />
                       <Skeleton className="h-4 w-1/2" />
                       <div className="flex gap-2 pt-2">
                         <Skeleton className="h-5 w-16" />
                         <Skeleton className="h-5 w-16" />
                       </div>
                     </div>
                   </div>
                 ))}
              </div>
            ) : filteredPlaces.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-500">
                {filteredPlaces.map(place => (
                  <PlaceCard key={place.id} place={place} />
                ))}
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center py-24 bg-slate-50 rounded-2xl border-2 border-dashed border-slate-200 text-center animate-in zoom-in-95 duration-300">
                 <div className="w-20 h-20 bg-slate-100 rounded-full flex items-center justify-center mb-6">
                    <SearchX className="w-10 h-10 text-slate-400" />
                 </div>
                 <h3 className="text-xl font-bold text-foreground mb-2">No places found</h3>
                 <p className="text-muted-foreground max-w-sm mb-8">We couldn't find any places matching your current filters. Try adjusting your price range or removing some filters.</p>
                 <Button onClick={clearAllFilters} size="lg" className="shadow-lg">Clear all filters</Button>
               </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
