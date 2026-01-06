import { useLocation, useParams } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getPlaceBySlug, PLACES } from "@/lib/mockData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogTrigger, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { BackToTop } from "@/components/shared/BackToTop";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { BadgeCheck, Star, MapPin, Clock, Share2, MessageCircle, Maximize2, ShieldCheck, ThermometerSun, Volume2, UserCheck, Quote, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import NotFound from "./not-found";
import { useState } from "react";

export default function PlaceDetail() {
  const { area, slug } = useParams();
  const place = getPlaceBySlug(area || '', slug || '');
  const [photoIndex, setPhotoIndex] = useState(0);

  if (!place) return <NotFound />;

  const lowestPrice = Math.min(...place.price_examples.map(p => p.price));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <BackToTop />

      {/* Image Gallery - Enhanced */}
      <div className="relative h-[40vh] md:h-[60vh] bg-black group">
        <Dialog>
           <DialogTrigger asChild>
             <div className="w-full h-full cursor-pointer relative">
               <Carousel className="w-full h-full" opts={{ loop: true }}>
                  <CarouselContent className="h-full ml-0">
                    {place.photos.map((photo, index) => (
                      <CarouselItem key={index} className="h-full pl-0">
                        <div className="w-full h-full flex items-center justify-center bg-zinc-900 overflow-hidden">
                          <img src={photo} alt={`${place.name} ${index + 1}`} className="w-full h-full object-cover opacity-90 transition-opacity hover:opacity-100" />
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="absolute bottom-6 right-6 flex gap-2 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                     <Button variant="secondary" size="sm" className="bg-black/50 text-white border-0 hover:bg-black/70 backdrop-blur-md">
                        <Maximize2 className="w-4 h-4 mr-2" /> View Gallery
                     </Button>
                  </div>
                  <div className="absolute top-1/2 left-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                     <CarouselPrevious className="static translate-y-0 bg-white/10 hover:bg-white/20 border-0 text-white" />
                  </div>
                  <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                     <CarouselNext className="static translate-y-0 bg-white/10 hover:bg-white/20 border-0 text-white" />
                  </div>
                </Carousel>
                <div className="absolute bottom-6 left-6 z-10 bg-black/50 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-medium">
                  1 / {place.photos.length}
                </div>
             </div>
           </DialogTrigger>
           <DialogContent className="max-w-[95vw] w-full h-[90vh] p-0 bg-black border-none overflow-hidden sm:rounded-xl">
             <DialogTitle className="sr-only">Image Gallery</DialogTitle>
             <DialogDescription className="sr-only">View full size images</DialogDescription>
              <div className="relative w-full h-full flex items-center justify-center">
                 <img src={place.photos[0]} className="max-w-full max-h-full object-contain" alt="Gallery View" />
                 <div className="absolute bottom-4 left-0 right-0 text-center text-white/70 text-sm">
                   Interior view showing the couples treatment room
                 </div>
              </div>
           </DialogContent>
        </Dialog>
      </div>

      <div className="container mx-auto px-4 py-8 -mt-20 relative z-20">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-black/5 border border-border">
              
              {/* Header */}
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary" className="bg-teal-50 text-teal-700 hover:bg-teal-100">{place.area}</Badge>
                    {place.verified && (
                      <Badge variant="outline" className="border-green-200 bg-green-50 text-green-700 gap-1.5 px-2">
                        <ShieldCheck className="w-3.5 h-3.5 fill-green-100" /> Verified Place
                      </Badge>
                    )}
                  </div>
                  <h1 className="text-3xl md:text-5xl font-bold text-foreground mb-3 tracking-tight">{place.name}</h1>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                     <span className="flex items-center bg-yellow-50 text-yellow-700 px-2 py-0.5 rounded font-bold border border-yellow-100">
                       <Star className="w-4 h-4 fill-yellow-400 text-yellow-500 mr-1" />
                       {place.editor_rating.toFixed(1)}
                     </span>
                     <span className="font-medium underline decoration-dotted decoration-muted-foreground/50">128 Verified Reviews</span>
                     <span className="hidden md:block w-1 h-1 bg-gray-300 rounded-full" />
                     <span className="flex items-center text-green-600 font-medium">
                       <Clock className="w-3.5 h-3.5 mr-1" /> Open Now
                     </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="icon" className="rounded-full hover:bg-slate-50 border-slate-200">
                    <Share2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8 border-b border-border/50 pb-8">
                {place.tags.map(tag => (
                  <Badge key={tag} variant="secondary" className="px-3 py-1.5 text-sm font-normal bg-slate-100 hover:bg-slate-200 text-slate-700">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              {/* Trust Section */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 p-5 bg-slate-50 rounded-xl border border-border/50">
                 <div className="space-y-1">
                   <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Hygiene</div>
                   <div className="font-bold flex items-center gap-1.5">
                     <CheckCircle2 className="w-4 h-4 text-green-600" /> {place.hygiene_score}/10
                   </div>
                 </div>
                 <div className="space-y-1">
                   <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Last Verified</div>
                   <div className="font-semibold text-sm">
                     {place.last_verified}
                   </div>
                 </div>
                 <div className="space-y-1">
                   <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Ambience</div>
                   <div className="font-semibold text-sm flex items-center gap-1.5">
                     <Volume2 className="w-4 h-4 text-primary" /> {place.ambience}
                   </div>
                 </div>
                 <div className="space-y-1">
                   <div className="text-xs uppercase tracking-wider text-muted-foreground font-semibold">Pressure</div>
                   <div className="font-semibold text-sm flex items-center gap-1.5">
                     <UserCheck className="w-4 h-4 text-primary" /> {place.pressure_style}
                   </div>
                 </div>
              </div>

              {/* Editor's Note */}
              <div className="mb-10 relative pl-8 border-l-4 border-primary/20 italic">
                <Quote className="absolute -top-1 -left-10 w-8 h-8 text-primary/10 fill-primary/10" />
                <h3 className="text-primary font-bold text-sm uppercase tracking-wide mb-2">Editor's Note</h3>
                <p className="text-lg text-foreground/80 leading-relaxed font-serif">
                  "{place.editor_note}"
                </p>
                <div className="mt-2 text-xs text-muted-foreground">— The Massage Map Team</div>
              </div>

              {/* Description */}
              <div className="prose max-w-none text-muted-foreground mb-10">
                <h3 className="text-foreground font-semibold text-xl mb-3">About this place</h3>
                <p className="leading-relaxed">{place.description}</p>
              </div>

              {/* Menu / Prices */}
              <div className="mb-10">
                <h3 className="text-foreground font-semibold text-xl mb-6 flex items-center justify-between">
                  Popular Treatments
                  <span className="text-sm font-normal text-muted-foreground hidden sm:block">Prices in IDR</span>
                </h3>
                <div className="space-y-4">
                  {place.price_examples.map((item, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 rounded-xl bg-white border border-border hover:border-primary/50 hover:shadow-sm transition-all group">
                      <div>
                        <div className="font-bold text-foreground group-hover:text-primary transition-colors">{item.type}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-1">
                          <Clock className="w-3 h-3" /> {item.duration}
                        </div>
                      </div>
                      <div className="font-bold text-lg text-foreground">
                        {(item.price / 1000).toFixed(0)}k
                      </div>
                    </div>
                  ))}
                  <div className="text-center mt-4">
                     <Button variant="outline" className="text-primary border-primary/20 hover:bg-primary/5">View Full Menu (PDF)</Button>
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
                    <div className="aspect-video bg-slate-100 rounded-lg flex items-center justify-center text-muted-foreground text-xs relative overflow-hidden group cursor-pointer">
                      <div className="absolute inset-0 bg-slate-200 animate-pulse" />
                      <span className="relative z-10 font-medium">View on Google Maps</span>
                    </div>
                 </div>
              </div>

            </div>
          </div>

          {/* Sticky Booking Card - Desktop */}
          <div className="lg:w-96 flex-shrink-0">
             <div className="sticky top-24 space-y-4">
                <div className="bg-white rounded-xl p-6 shadow-xl shadow-slate-200/50 border border-slate-100 relative overflow-hidden">
                   <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary" />
                   
                   <div className="mb-8">
                      <p className="text-sm text-muted-foreground mb-1 font-medium">Starting from</p>
                      <div className="flex items-baseline gap-1.5">
                         <span className="text-4xl font-extrabold text-foreground tracking-tight">{(lowestPrice / 1000).toFixed(0)}k</span>
                         <span className="text-lg text-muted-foreground">IDR</span>
                      </div>
                      <p className="text-xs text-green-600 mt-2 flex items-center gap-1 bg-green-50 w-fit px-2 py-0.5 rounded-full font-medium">
                        <CheckCircle2 className="w-3 h-3" /> Best price guarantee
                      </p>
                   </div>
                   
                   <div className="space-y-4">
                      <Button size="lg" className="w-full h-14 text-lg font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-green-200 transition-all hover:-translate-y-0.5">
                        <MessageCircle className="w-6 h-6 mr-2 fill-white" />
                        Book via WhatsApp
                      </Button>
                      <Button variant="outline" size="lg" className="w-full h-12 border-2 border-slate-200 text-slate-600 hover:text-primary hover:border-primary/30 hover:bg-primary/5 font-semibold">
                        Get Directions
                      </Button>
                   </div>

                   <div className="mt-4 text-center">
                     <span className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
                       <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                       Usually responds in 5 minutes
                     </span>
                   </div>
                   
                   <div className="mt-8 pt-6 border-t border-dashed border-border space-y-4">
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                            <ShieldCheck className="w-5 h-5 text-slate-600" />
                         </div>
                         <div className="text-sm">
                            <p className="font-bold text-foreground">Verified Listing</p>
                            <p className="text-muted-foreground text-xs">Inspected by our team</p>
                         </div>
                      </div>
                      <div className="flex items-center gap-3">
                         <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
                            <UserCheck className="w-5 h-5 text-slate-600" />
                         </div>
                         <div className="text-sm">
                            <p className="font-bold text-foreground">Certified Therapists</p>
                            <p className="text-muted-foreground text-xs">Professional & trained staff</p>
                         </div>
                      </div>
                   </div>
                </div>
                
                {/* Similar Places */}
                <div className="hidden lg:block pt-4">
                  <h4 className="font-bold text-sm text-foreground uppercase tracking-wider mb-4 pl-1">You might also like</h4>
                  <div className="space-y-3">
                    {PLACES.filter(p => p.area === place.area && p.id !== place.id).slice(0, 3).map(p => (
                      <a key={p.id} href={`/bali/${p.area.toLowerCase()}/${p.slug}`} className="block group">
                        <div className="flex gap-4 bg-white p-3 rounded-xl border border-border hover:shadow-lg hover:shadow-slate-200/50 hover:border-primary/20 transition-all">
                          <img src={p.photos[0]} alt={p.name} className="w-20 h-20 rounded-lg object-cover" />
                          <div className="flex flex-col justify-center">
                            <div className="font-bold text-foreground group-hover:text-primary transition-colors line-clamp-1">{p.name}</div>
                            <div className="text-xs text-muted-foreground mb-1">{p.area}</div>
                            <div className="text-sm font-bold text-primary">IDR {(Math.min(...p.price_examples.map(pr => pr.price)) / 1000).toFixed(0)}k</div>
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
      
      {/* Mobile Sticky CTA - Enhanced */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-[0_-5px_20px_rgba(0,0,0,0.05)] p-4 z-50 flex gap-4 pb-safe animate-in slide-in-from-bottom-5 duration-500">
        <div className="flex-1 flex flex-col justify-center">
           <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide">Starting from</div>
           <div className="font-extrabold text-xl text-foreground">
             <span className="text-primary">{(lowestPrice / 1000).toFixed(0)}k</span> <span className="text-sm font-normal text-muted-foreground">IDR</span>
           </div>
        </div>
        <Button className="flex-[1.5] h-12 text-base font-bold bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg shadow-green-200">
           <MessageCircle className="w-5 h-5 mr-2 fill-white" />
           Book Now
        </Button>
      </div>

      <Footer />
    </div>
  );
}
