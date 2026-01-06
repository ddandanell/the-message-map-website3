import { Link } from "wouter";
import { Star, MapPin, BadgeCheck, Clock, CalendarDays } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { Place } from "@/lib/mockData";

interface PlaceCardProps {
  place: Place;
}

export function PlaceCard({ place }: PlaceCardProps) {
  const lowestPrice = Math.min(...place.price_examples.map(p => p.price));

  return (
    <Link href={`/bali/${place.area.toLowerCase()}/${place.slug}`}>
      <a className="group block bg-white rounded-xl overflow-hidden border border-border/50 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300 relative">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img 
            src={place.photos[0]} 
            alt={place.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
          />
          {place.verified && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-sm text-green-700 text-xs font-bold px-2.5 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm border border-green-100 cursor-help z-10">
                    <BadgeCheck className="w-3.5 h-3.5 fill-green-100 text-green-600" />
                    Verified
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Verified by our team on {place.last_verified}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
          <div className="absolute bottom-3 right-3 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-2 py-1 rounded-md">
            {place.price_tier === 1 && "$"}
            {place.price_tier === 2 && "$$"}
            {place.price_tier === 3 && "$$$"}
            {place.price_tier === 4 && "$$$$"}
          </div>
        </div>
        
        <div className="p-4">
          <div className="flex justify-between items-start mb-2">
            <div>
              <h3 className="font-bold text-lg text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-1">
                {place.name}
              </h3>
              <div className="flex items-center text-muted-foreground text-sm mt-1">
                <MapPin className="w-3.5 h-3.5 mr-1 text-primary/60" />
                {place.area}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center bg-green-50 text-green-700 px-1.5 py-0.5 rounded text-sm font-bold border border-green-100">
                {place.editor_rating.toFixed(1)}
                <Star className="w-3 h-3 ml-1 fill-green-700 text-green-700" />
              </div>
              <span className="text-[10px] text-muted-foreground mt-1">100+ reviews</span>
            </div>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-2 h-6 overflow-hidden">
            {place.tags.slice(0, 3).map(tag => (
              <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0.5 h-5 font-normal bg-slate-100 group-hover:bg-slate-200 text-slate-700 border-transparent transition-colors">
                {tag}
              </Badge>
            ))}
          </div>
          
          <div className="mt-4 pt-3 border-t border-dashed border-border flex justify-between items-center">
            <div className="flex flex-col">
               <span className="text-[10px] text-muted-foreground uppercase tracking-wider font-medium">Starts from</span>
               <span className="font-bold text-primary">
                 {(lowestPrice / 1000).toFixed(0)}k IDR
               </span>
            </div>
            <div className="flex items-center text-[10px] text-muted-foreground/70 bg-slate-50 px-2 py-1 rounded-full">
              <CalendarDays className="w-3 h-3 mr-1" />
              Updated {place.last_verified.split('-')[1]}/{place.last_verified.split('-')[0]}
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
