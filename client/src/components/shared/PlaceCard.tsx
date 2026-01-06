import { Link } from "wouter";
import { Star, MapPin, BadgeCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { Place } from "@/lib/mockData";

interface PlaceCardProps {
  place: Place;
}

export function PlaceCard({ place }: PlaceCardProps) {
  const lowestPrice = Math.min(...place.price_examples.map(p => p.price));

  return (
    <Link href={`/bali/${place.area.toLowerCase()}/${place.slug}`}>
      <a className="group block bg-white rounded-xl overflow-hidden border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-300">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <img 
            src={place.photos[0]} 
            alt={place.name}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
          {place.verified && (
            <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
              <BadgeCheck className="w-3 h-3 fill-primary text-white" />
              Verified
            </div>
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
              <h3 className="font-bold text-lg text-foreground leading-tight group-hover:text-primary transition-colors">
                {place.name}
              </h3>
              <div className="flex items-center text-muted-foreground text-sm mt-1">
                <MapPin className="w-3.5 h-3.5 mr-1" />
                {place.area}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center bg-green-50 text-green-700 px-1.5 py-0.5 rounded text-sm font-bold">
                {place.editor_rating.toFixed(1)}
                <Star className="w-3 h-3 ml-1 fill-green-700" />
              </div>
              <span className="text-xs text-muted-foreground mt-1">92 reviews</span>
            </div>
          </div>
          
          <div className="mt-3 flex flex-wrap gap-2">
            {place.tags.slice(0, 3).map(tag => (
              <Badge key={tag} variant="secondary" className="text-xs font-normal bg-slate-100 hover:bg-slate-200 text-slate-700 border-transparent">
                {tag}
              </Badge>
            ))}
            {place.tags.length > 3 && (
              <span className="text-xs text-muted-foreground self-center">+{place.tags.length - 3}</span>
            )}
          </div>
          
          <div className="mt-4 pt-3 border-t border-dashed border-border flex justify-between items-center">
            <div className="text-xs text-muted-foreground">Starting from</div>
            <div className="font-semibold text-primary">
              IDR {(lowestPrice / 1000).toFixed(0)}k
            </div>
          </div>
        </div>
      </a>
    </Link>
  );
}
