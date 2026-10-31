import heroImage from '@assets/generated_images/luxury_tropical_spa_in_bali.png';
import spaInterior from '@assets/generated_images/professional_massage_therapy_room.png';
import detailImage from '@assets/generated_images/spa_oils_and_flowers_detail.png';
import snapshot from '@/data/providers.generated.json';

/**
 * Directory data layer.
 *
 * Source of truth: public.seo_providers in the shared SEO Postgres database
 * (site-005). The repo holds a generated snapshot, refreshed by publish.py in
 * the operating bot's home. Never hand-edit providers.generated.json.
 *
 * Honesty rules baked into the types:
 *  - there is no "verified" flag; verification_status says what was checked
 *    (checked_online / owner_confirmed / site_visited) and last_checked says when
 *  - ratings only exist when an attributable source states value, scale and count
 *  - prices only exist when the provider publishes them
 *  - there is no editor rating, hygiene score or ambience score, because nothing
 *    in this directory involves a visit or an inspection
 */

export type VerificationStatus = 'checked_online' | 'owner_confirmed' | 'site_visited';

export interface PriceExample {
  treatment: string;
  duration: string;
  price: number;
  note?: string;
}

export interface ProviderPrice {
  treatment: string;
  duration: string;
  price_idr: number;
  note?: string;
}

export interface ProviderRating {
  value: number;
  scale: number;
  count?: number | null;
  source_url: string;
  observed_date: string;
}

export interface ProviderSource {
  url: string;
  confirms?: string;
  checked_date: string;
}

export interface Place {
  id: string;
  name: string;
  slug: string;
  provider_type: string;
  area: string;
  areaSlug: string;
  address: string | null;
  website: string | null;
  bookingUrl: string | null;
  phone: string | null;
  whatsapp: string | null;
  instagram: string | null;
  hours: string | null;
  treatments: string[];
  prices: ProviderPrice[];
  priceNotes: string | null;
  answerBlock: string;
  description: string;
  features: string[];
  rating: ProviderRating | null;
  sources: ProviderSource[];
  verificationStatus: VerificationStatus;
  verificationNote: string | null;
  lastChecked: string;
  /** derived, may be empty: no provider photography is licensed yet */
  photos: string[];
  /** cheapest published price, or null when the provider publishes none */
  lowestPrice: number | null;
  tags: string[];
}

export interface Area {
  id: string;
  name: string;
  slug: string;
  region: string;
  image: string;
  description: string;
  placeCount: number;
  minPrice: number | null;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
}

interface RawProvider {
  stable_id: string;
  name: string;
  slug: string;
  provider_type: string;
  area: string;
  area_slug: string;
  address: string | null;
  website: string | null;
  booking_url: string | null;
  phone: string | null;
  whatsapp: string | null;
  instagram: string | null;
  hours: string | null;
  treatments: string[];
  prices: ProviderPrice[];
  price_notes: string | null;
  answer_block: string;
  description: string;
  features: string[];
  rating: ProviderRating | null;
  sources: ProviderSource[];
  verification_status: VerificationStatus;
  verification_note: string | null;
  last_checked: string;
}

const RAW: RawProvider[] = ((snapshot as unknown as { providers?: RawProvider[] }).providers ?? []) as RawProvider[];

const TAG_LIMIT = 4;

function toPlace(p: RawProvider): Place {
  const prices = (p.prices ?? []).slice().sort((a, b) => a.price_idr - b.price_idr);
  return {
    id: p.stable_id,
    name: p.name,
    slug: p.slug,
    provider_type: p.provider_type,
    area: p.area,
    areaSlug: p.area_slug,
    address: p.address ?? null,
    website: p.website ?? null,
    bookingUrl: p.booking_url ?? null,
    phone: p.phone ?? null,
    whatsapp: p.whatsapp ?? null,
    instagram: p.instagram ?? null,
    hours: p.hours ?? null,
    treatments: p.treatments ?? [],
    prices,
    priceNotes: p.price_notes ?? null,
    answerBlock: p.answer_block ?? '',
    description: p.description ?? '',
    features: p.features ?? [],
    rating: p.rating ?? null,
    sources: p.sources ?? [],
    verificationStatus: p.verification_status,
    verificationNote: p.verification_note ?? null,
    lastChecked: p.last_checked,
    photos: [],
    lowestPrice: prices.length ? prices[0].price_idr : null,
    tags: (p.treatments ?? []).slice(0, TAG_LIMIT),
  };
}

export const PLACES: Place[] = RAW.map(toPlace);

/** Areas we operate in. Counts come from published records only. */
export const AREA_DEFS: { name: string; slug: string; region: string; description: string; image: string }[] = [
  { name: 'Canggu', slug: 'canggu', region: 'badung', description: 'Beach-road spas, recovery bathhouses and walk-in massage rooms between Berawa and Pererenan.', image: spaInterior },
  { name: 'Seminyak', slug: 'seminyak', region: 'badung', description: 'Day spas and outcall therapists serving villas around Petitenget and Oberoi.', image: detailImage },
  { name: 'Ubud', slug: 'ubud', region: 'gianyar', description: 'Rice-field and jungle spas, family-run massage houses and longer ritual treatments.', image: heroImage },
  { name: 'Sanur', slug: 'sanur', region: 'denpasar', description: 'Neighbourhood day spas with nails, hair and family-friendly menus.', image: detailImage },
  { name: 'Uluwatu', slug: 'uluwatu', region: 'badung', description: 'Bukit peninsula spas in Ungasan and Pecatu, often open late.', image: spaInterior },
  { name: 'Kuta', slug: 'kuta', region: 'badung', description: 'High-volume massage and beauty shops close to the airport strip.', image: detailImage },
  { name: 'Legian', slug: 'legian', region: 'badung', description: 'Mid-range spas between Kuta and Seminyak.', image: spaInterior },
  { name: 'Jimbaran', slug: 'jimbaran', region: 'badung', description: 'Resort spas and independent therapists along the bay.', image: heroImage },
  { name: 'Nusa Dua', slug: 'nusa-dua', region: 'badung', description: 'Resort-strip spas in Benoa and Tanjung Benoa.', image: heroImage },
  { name: 'Denpasar', slug: 'denpasar', region: 'denpasar', description: 'City spas and clinics serving residents rather than tourists.', image: detailImage },
];

export const AREAS: Area[] = AREA_DEFS.map((def, i) => {
  const inArea = PLACES.filter(p => p.areaSlug === def.slug);
  const prices = inArea.map(p => p.lowestPrice).filter((n): n is number => typeof n === 'number');
  return {
    id: String(i + 1),
    name: def.name,
    slug: def.slug,
    region: def.region,
    image: def.image,
    description: def.description,
    placeCount: inArea.length,
    minPrice: prices.length ? Math.min(...prices) : null,
  };
});

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Balinese', slug: 'balinese', icon: 'Flower2', description: 'Traditional full-body massage with palm pressure, long strokes and stretches.' },
  { id: '2', name: 'Deep Tissue', slug: 'deep-tissue', icon: 'Activity', description: 'Slow, firm pressure on deeper muscle layers.' },
  { id: '3', name: 'Couples', slug: 'couples', icon: 'Heart', description: 'Two guests treated side by side in the same room.' },
  { id: '4', name: 'Reflexology', slug: 'reflexology', icon: 'Footprints', description: 'Pressure-point work on the feet and lower legs.' },
  { id: '5', name: 'Hot Stone', slug: 'hot-stone', icon: 'Flame', description: 'Heated stones used alongside oil massage.' },
  { id: '6', name: 'Aromatherapy', slug: 'aromatherapy', icon: 'Droplets', description: 'Massage with a chosen essential-oil blend.' },
];

export const getPlaceBySlug = (areaSlug: string, placeSlug: string): Place | undefined =>
  PLACES.find(p => p.slug === placeSlug && (p.areaSlug === areaSlug || p.area.toLowerCase() === areaSlug.toLowerCase()));

export const getPlacesByArea = (areaSlug: string): Place[] =>
  PLACES.filter(p => p.areaSlug === areaSlug);

export const getAreaBySlug = (areaSlug: string): Area | undefined =>
  AREAS.find(a => a.slug === areaSlug);

export const TOTAL_PLACES = PLACES.length;

export const PLACES_IN_RESEARCH = ((snapshot as unknown as { count?: number }).count ?? 0) - PLACES.length;
