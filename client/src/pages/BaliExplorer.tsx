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
import { 
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { SlidersHorizontal, ChevronDown } from "lucide-react";
import { useState, useMemo } from "react";
import { cn } from "@/lib/utils";

export default function BaliExplorer() {
  const { slug } = useParams();
  
  // Determine if slug is area or category
  const isArea = AREAS.some(a => a.slug === slug);
  const currentArea = AREAS.find(a => a.slug === slug);
  const currentCategory = CATEGORIES.find(c => c.slug === slug);

  // If slug doesn't match either, maybe 404 (handled by layout logic or just empty result)
  // For prototype, if not found, default to showing all or redirect.
  // We'll assume valid links for now.

  const title = isArea ? currentArea?.name : currentCategory?.name;
  const description = isArea ? currentArea?.description : currentCategory?.description;
  const heroImage = isArea ? currentArea?.image : "/attached_assets/generated_images/professional_massage_therapy_room.png";

  // Filter State
  const [priceRange, setPriceRange] = useState([500000]);
  const [openNow, setOpenNow] = useState(false);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

  // Filter Logic
  const filteredPlaces = useMemo(() => {
    let results = PLACES;

    if (isArea) {
      results = results.filter(p => p.area === currentArea?.name);
    } else if (currentCategory) {
      // Filter by tag/category match
      results = results.filter(p => p.tags.some(t => t.toLowerCase().includes(currentCategory.name.toLowerCase())));
    }

    // Apply Price Filter (Approximation using lowest price example)
    results = results.filter(p => {
      const lowest = Math.min(...p.price_examples.map(ex => ex.price));
      return lowest <= priceRange[0];
    });

    // Apply Type Filter
    if (selectedTypes.length > 0) {
      results = results.filter(p => p.tags.some(t => selectedTypes.includes(t)));
    }
    
    // Open Now (Mock)
    if (openNow) {
      // Randomly filter out some
      results = results.filter((_, i) => i % 2 === 0); 
    }

    return results;
  }, [slug, priceRange, openNow, selectedTypes]);

  const toggleType = (type: string) => {
    if (selectedTypes.includes(type)) {
      setSelectedTypes(selectedTypes.filter(t => t !== type));
    } else {
      setSelectedTypes([...selectedTypes, type]);
    }
  };

  const FilterPanel = () => (
    <div className="space-y-8">
      {/* Price Range */}
      <div>
        <h3 className="font-semibold mb-4">Max Price (IDR)</h3>
        <Slider 
          value={priceRange} 
          onValueChange={setPriceRange} 
          max={1000000} 
          step={50000} 
          className="mb-2"
        />
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>0</span>
          <span>{(priceRange[0]/1000).toFixed(0)}k</span>
        </div>
      </div>

      {/* Open Now */}
      <div className="flex items-center justify-between">
        <Label htmlFor="open-now" className="font-semibold">Open Now</Label>
        <Switch id="open-now" checked={openNow} onCheckedChange={setOpenNow} />
      </div>

      {/* Massage Types (If on Area page) */}
      {isArea && (
        <div>
          <h3 className="font-semibold mb-4">Massage Type</h3>
          <div className="space-y-3">
            {CATEGORIES.map(cat => (
              <div key={cat.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={`cat-${cat.id}`} 
                  checked={selectedTypes.includes(cat.name)}
                  onCheckedChange={() => toggleType(cat.name)}
                />
                <Label htmlFor={`cat-${cat.id}`} className="font-normal cursor-pointer">{cat.name}</Label>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Rating */}
       <div>
          <h3 className="font-semibold mb-4">Rating</h3>
          <div className="space-y-3">
            {[4, 3, 2].map(rating => (
               <div key={rating} className="flex items-center space-x-2">
                <Checkbox id={`rating-${rating}`} />
                <Label htmlFor={`rating-${rating}`} className="font-normal cursor-pointer flex items-center gap-1">
                  {rating}+ Stars 
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
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24 bg-white p-6 rounded-xl border border-border shadow-sm">
              <FilterPanel />
            </div>
          </aside>

          {/* Mobile Filter Toggle */}
          <div className="lg:hidden mb-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full flex justify-between">
                  <span>Filters</span>
                  <SlidersHorizontal className="w-4 h-4" />
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader>
                  <SheetTitle>Filter Results</SheetTitle>
                  <SheetDescription>Refine your search for the perfect massage.</SheetDescription>
                </SheetHeader>
                <div className="py-6">
                  <FilterPanel />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Results */}
          <main className="flex-1">
            <div className="flex justify-between items-center mb-6">
              <p className="text-muted-foreground">Showing {filteredPlaces.length} places</p>
              <div className="flex items-center gap-2 text-sm font-medium">
                Sort by: <span className="text-primary cursor-pointer flex items-center">Recommended <ChevronDown className="w-4 h-4 ml-1" /></span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {filteredPlaces.map(place => (
                <PlaceCard key={place.id} place={place} />
              ))}
            </div>

            {filteredPlaces.length === 0 && (
               <div className="text-center py-20 bg-slate-50 rounded-xl border border-dashed">
                 <h3 className="text-xl font-bold text-muted-foreground mb-2">No places found</h3>
                 <p className="text-muted-foreground">Try adjusting your filters to see more results.</p>
                 <Button variant="link" onClick={() => {setPriceRange([1000000]); setOpenNow(false); setSelectedTypes([])}}>Clear all filters</Button>
               </div>
            )}
          </main>
        </div>
      </div>

      <Footer />
    </div>
  );
}
