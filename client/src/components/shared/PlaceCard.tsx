import { Link } from "wouter";
import { MapPin, Clock, CalendarCheck, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Place } from "@/lib/mockData";

interface PlaceCardProps {
  place: Place;
}

function formatDate(iso: string) {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

function formatPrice(idr: number) {
  return `${Math.round(idr / 1000)}k IDR`;
}

/**
 * A listing card. It shows only what we actually hold:
 * - no star rating unless an attributable source gave one
 * - no "verified" badge; the badge says what kind of check was done and when
 * - no photography, because no provider has granted image rights yet
 */
export function PlaceCard({ place }: PlaceCardProps) {
  const label =
    place.verificationStatus === "site_visited"
      ? "Visited by us"
      : place.verificationStatus === "owner_confirmed"
        ? "Owner-confirmed"
        : "Details checked online";

  return (
    <Link href={`/bali/${place.areaSlug}/${place.slug}`}>
      <a className="group flex h-full flex-col bg-white rounded-xl overflow-hidden border border-border/50 hover:shadow-xl hover:shadow-primary/5 hover:border-primary/20 hover:-translate-y-1 transition-all duration-300">
        <div className="relative aspect-[16/9] bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-500 flex items-end p-4">
          <span className="absolute inset-0 opacity-15 bg-[radial-gradient(circle_at_20%_20%,white,transparent_45%)]" />
          <div className="relative">
            <p className="text-white/70 text-[10px] uppercase tracking-[0.18em] font-semibold">{place.area}</p>
            <p className="text-white font-bold text-lg leading-tight line-clamp-2">{place.name}</p>
          </div>
          {place.lowestPrice !== null && (
            <div className="absolute top-3 right-3 bg-black/45 backdrop-blur-md text-white text-xs font-semibold px-2 py-1 rounded-md">
              from {formatPrice(place.lowestPrice)}
            </div>
          )}
        </div>

        <div className="p-4 flex flex-col gap-3 flex-1">
          <div className="flex items-center justify-between gap-2 text-xs">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-teal-100 bg-teal-50 px-2 py-1 font-semibold text-teal-800 cursor-help">
                    <CalendarCheck className="w-3.5 h-3.5" />
                    {label}
                  </span>
                </TooltipTrigger>
                <TooltipContent>
                  <p className="max-w-xs">
                    {place.verificationNote ?? "Checked against the provider's own website."} Last check {formatDate(place.lastChecked)}.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            {place.rating ? (
              <span className="inline-flex items-center gap-1 font-bold text-amber-700 bg-amber-50 border border-amber-100 rounded px-1.5 py-0.5">
                {place.rating.value.toFixed(1)}
                <span className="font-normal text-amber-600/80">/{place.rating.scale}</span>
              </span>
            ) : (
              <span className="text-muted-foreground">No rating source</span>
            )}
          </div>

          <div className="flex items-start gap-1.5 text-sm text-muted-foreground">
            <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 text-primary/60" />
            <span className="line-clamp-2">{place.address ?? `${place.area}, Bali`}</span>
          </div>

          <div className="flex flex-wrap gap-1.5">
            {place.tags.slice(0, 3).map(tag => (
              <Badge key={tag} variant="secondary" className="text-[10px] px-1.5 py-0.5 font-normal bg-slate-100 text-slate-700 border-transparent">
                {tag}
              </Badge>
            ))}
          </div>

          <div className="mt-auto pt-3 border-t border-dashed border-border flex items-center justify-between text-[11px] text-muted-foreground">
            <span className="inline-flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {place.hours ?? "Hours not published"}
            </span>
            {place.website && (
              <span className="inline-flex items-center gap-1 text-primary/80">
                <ExternalLink className="w-3 h-3" />
                Provider site
              </span>
            )}
          </div>
        </div>
      </a>
    </Link>
  );
}
