import { Link } from "wouter";
import { Area } from "@/lib/mockData";

export function AreaCard({ area }: { area: Area }) {
  return (
    <Link href={`/bali/${area.slug}`}>
      <a className="group relative rounded-xl overflow-hidden aspect-[3/4] block shadow-md hover:shadow-xl transition-all duration-300">
        <img 
          src={area.image} 
          alt={area.name} 
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
        
        <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-2xl font-bold text-white mb-1">{area.name}</h3>
          <p className="text-white/80 text-sm mb-3 line-clamp-2">{area.description}</p>
          <div className="flex justify-between items-center text-xs text-white/60 border-t border-white/20 pt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
            <span>{area.placeCount} places</span>
            <span>From {area.minPrice / 1000}k IDR</span>
          </div>
        </div>
      </a>
    </Link>
  );
}
