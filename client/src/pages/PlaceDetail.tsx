import { useLocation, useParams } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getPlaceBySlug, PLACES } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BadgeCheck, Star, MapPin, Clock, Phone, Globe, Share2, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";
import NotFound from "./not-found";

export default function PlaceDetail() {
  const { area, slug } = useParams();
  const place = getPlaceBySlug(area || '', slug || '');

  if (!place) return <NotFound />;

  const lowestPrice = Math.min(...place.price_examples.map(p => p.price));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Image Gallery */}
      <div className="relative h-[40vh] md:h-[60vh] bg-black">
        <Carousel className="w-full h-full">
          <CarouselContent className="h-full">
            {place.photos.map((photo, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="w-full h-full flex items-center justify-center bg-zinc-900 overflow-hidden">
                  <img src={photo} alt={`${place.name} ${index + 1}`} className="w-full h-full object-cover opacity-90" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="absolute bottom-8 right-8 flex gap-2 z-10">
             <CarouselPrevious className="static translate-y-0" />
             <CarouselNext className="static translate-y-0" />
          </div>
        </Carousel>
      </div>

      <div className="container mx-auto px-4 py-8 -mt-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
              
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-teal-50 text-teal-700 hover:bg-teal-100">{place.area}</Badge>
                    {place.verified && (
                      <Badge variant="outline" className="border-primary/20 text-primary gap-1">
                        <BadgeCheck className="w-3 h-3 fill-primary text-white" /> Verified
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-2">{place.name}</h1>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                     <span className="flex items-center text-foreground font-semibold">
                       <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
                       {place.editor_rating}
                     </span>
                     <span>(128 Reviews)</span>
                     <span className="w-1 h-1 bg-gray-300 rounded-full" />
                     <span className="text-green-600 font-medium">Open Now</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {place.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="px-3 py-1 text-sm font-normal">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Description */}
              <div className="prose max-w-none text-muted-foreground mb-10">
                <h3 className="text-foreground font-semibold text-xl mb-3">About this place</h3>
                <p className="leading-relaxed">{place.description}</p>
                <p className="leading-relaxed mt-4">
                  Known for its {place.ambience.toLowerCase()} ambience and {place.pressure_style.toLowerCase()} pressure style, this is a favorite among locals and tourists alike.
                </p>
              </div>

              {/* Menu / Prices */}
              <div className="mb-10">
                <h3 className="text-foreground font-semibold text-xl mb-6">Popular Treatments</h3>
                <div className="space-y-4">
                  {place.price_examples.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 rounded-xl bg-slate-50 border border-border/50 hover:border-primary/30 transition-colors">
                      <div>
                        <div className="font-semibold text-foreground">{item.type}</div>
                        <div className="text-sm text-muted-foreground">{item.duration}</div>
                      </div>
                      <div className="font-bold text-primary">
                        IDR {(item.price / 1000).toFixed(0)}k
                      </div>
                    </div>
                  ))}
                  <div className="text-center mt-4">
                     <Button variant="link" className="text-primary">View Full Menu</Button>
                  </div>
                </div>
              </div>

              {/* Info Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8 border-t border-border pt-8">
                 <div>
                    <h4 className="font-semibold mb-4 flex items-center gap-2"><Clock className="w-4 h-4" /> Opening Hours</h4>
                    <table className="text-sm w-full">
                      <tbody>
                        <tr className="border-b border-dashed border-border/50">
                          <td className="py-2 text-muted-foreground">Mon - Sun</td>
                          <td className="py-2 text-right font-medium">{place.hours}</td>
                        </tr>
                      </tbody>
                    </table>
                 </div>
                 <div>
                    <h4 className="font-semibold mb-4 flex items-center gap-2"><MapPin className="w-4 h-4" /> Location</h4>
                    <p className="text-sm text-muted-foreground mb-4">{place.address}</p>
                    <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center text-muted-foreground text-xs">
                      Google Maps Embed Placeholder
                    </div>
                 </div>
              </div>

            </div>
          </div>

          {/* Sticky Booking Card */}
          <div className="lg:w-80 flex-shrink-0">
             <div className="sticky top-24 space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-border">
                   <div className="mb-6">
                      <p className="text-sm text-muted-foreground mb-1">Starting from</p>
                      <div className="flex items-baseline gap-1">
                         <span className="text-2xl font-bold text-primary">IDR {(lowestPrice / 1000).toFixed(0)}k</span>
                         <span className="text-sm text-muted-foreground">/ person</span>
                      </div>
                   </div>
                   
                   <div className="space-y-3">
                      <Button className="w-full h-12 text-base font-semibold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-md shadow-green-200">
                        <MessageCircle className="w-5 h-5 mr-2" />
                        Chat on WhatsApp
                      </Button>
                      <Button variant="outline" className="w-full h-12 border-primary/20 text-primary hover:bg-primary/5">
                        Get Directions
                      </Button>
                   </div>
                   
                   <div className="mt-6 pt-6 border-t border-dashed border-border space-y-3 text-sm">
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Hygiene Score</span>
                        <span className="font-bold text-foreground flex items-center gap-1">
                          <span className="w-2 h-2 rounded-full bg-green-500"></span>
                          {place.hygiene_score}/10
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-muted-foreground">Ambience</span>
                        <span className="font-medium text-foreground">{place.ambience}</span>
                      </div>
                   </div>
                </div>
                
                {/* Similar Places */}
                <div className="hidden lg:block">
                  <h4 className="font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3 pl-1">Similar Places</h4>
                  <div className="space-y-3">
                    {PLACES.filter(p => p.area === place.area && p.id !== place.id).slice(0, 2).map(p => (
                      <a key={p.id} href={`/bali/${p.area.toLowerCase()}/${p.slug}`} className="block group">
                        <div className="flex gap-3 bg-white p-2 rounded-lg border border-border hover:shadow-md transition-all">
                          <img src={p.photos[0]} alt={p.name} className="w-16 h-16 rounded-md object-cover" />
                          <div>
                            <div className="font-semibold text-sm group-hover:text-primary transition-colors line-clamp-1">{p.name}</div>
                            <div className="text-xs text-muted-foreground">{p.area}</div>
                            <div className="text-xs font-bold text-primary mt-1">IDR {(Math.min(...p.price_examples.map(pr => pr.price)) / 1000).toFixed(0)}k</div>
                          </div>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>

             </div>
          </div>

        </div>
      </div>
      
      {/* Mobile Sticky CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border p-4 z-50 flex gap-3 pb-safe">
        <div className="flex-1">
           <div className="text-xs text-muted-foreground">Starting from</div>
           <div className="font-bold text-lg text-primary">IDR {(lowestPrice / 1000).toFixed(0)}k</div>
        </div>
        <Button className="flex-1 bg-[#25D366] hover:bg-[#20bd5a] text-white">
           <MessageCircle className="w-4 h-4 mr-2" />
           WhatsApp
        </Button>
      </div>

      <Footer />
    </div>
  );
}
