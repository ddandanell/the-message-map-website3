import heroImage from '@assets/generated_images/luxury_tropical_spa_in_bali.png';
import spaInterior from '@assets/generated_images/professional_massage_therapy_room.png';
import detailImage from '@assets/generated_images/spa_oils_and_flowers_detail.png';

export interface PriceExample {
  type: string;
  duration: string;
  price: number;
}

export interface Place {
  id: string;
  name: string;
  slug: string;
  area: string;
  address: string;
  whatsapp: string;
  website: string;
  hours: string;
  price_tier: 1 | 2 | 3 | 4; // 1 = Budget, 4 = Luxury
  price_examples: PriceExample[];
  tags: string[];
  verified: boolean;
  verified_date?: string;
  photos: string[];
  description: string;
  editor_rating: number;
  hygiene_score: number;
  ambience: string;
  pressure_style: string;
  lat?: number;
  lng?: number;
}

export interface Area {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  placeCount: number;
  minPrice: number;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  icon: string; // Lucide icon name or image url
  description: string;
}

export const AREAS: Area[] = [
  { id: '1', name: 'Canggu', slug: 'canggu', image: spaInterior, description: 'Surfer vibes and modern wellness hubs.', placeCount: 42, minPrice: 150000 },
  { id: '2', name: 'Seminyak', slug: 'seminyak', image: detailImage, description: 'Upscale spas and trendy boutiques.', placeCount: 35, minPrice: 200000 },
  { id: '3', name: 'Ubud', slug: 'ubud', image: heroImage, description: 'The spiritual heart of Bali, surrounded by jungle.', placeCount: 50, minPrice: 100000 },
  { id: '4', name: 'Uluwatu', slug: 'uluwatu', image: spaInterior, description: 'Clifftop luxury and surf breaks.', placeCount: 20, minPrice: 250000 },
  { id: '5', name: 'Sanur', slug: 'sanur', image: detailImage, description: 'Laid-back seaside charm.', placeCount: 18, minPrice: 120000 },
  { id: '6', name: 'Nusa Dua', slug: 'nusa-dua', image: heroImage, description: 'High-end resorts and pristine beaches.', placeCount: 15, minPrice: 300000 },
];

export const CATEGORIES: Category[] = [
  { id: '1', name: 'Balinese', slug: 'balinese', icon: 'Flower2', description: 'Traditional full-body massage using gentle stretches and acupressure.' },
  { id: '2', name: 'Deep Tissue', slug: 'deep-tissue', icon: 'Activity', description: 'Focuses on realigning deeper layers of muscles and connective tissue.' },
  { id: '3', name: 'Couples', slug: 'couples', icon: 'Heart', description: 'Shared relaxation experience in a private suite.' },
  { id: '4', name: 'Reflexology', slug: 'reflexology', icon: 'Footprints', description: 'Pressure points on the feet aimed at restoring balance.' },
  { id: '5', name: 'Hot Stone', slug: 'hot-stone', icon: 'Flame', description: 'Smooth, heated stones placed on specific parts of the body.' },
  { id: '6', name: 'Aromatherapy', slug: 'aromatherapy', icon: 'Droplets', description: 'Massage with essential oils to enhance physical and emotional well-being.' },
];

// Helper to generate places
const generatePlaces = (): Place[] => {
  const places: Place[] = [];
  const placeNames = ['Taksu Spa', 'Bodyworks', 'Spring Spa', 'Amo Spa', 'Sundari Day Spa', 'Karsa Spa', 'Putri Bali', 'Relax Spa', 'Golden Hands', 'Zen Family', 'Lotus Seaview', 'Cliffside Wellness', 'Jungle touch', 'Ocean Breeze', 'Temple Healing'];
  
  AREAS.forEach(area => {
    placeNames.forEach((name, index) => {
      places.push({
        id: `${area.slug}-${index}`,
        name: `${name} ${area.name}`,
        slug: `${name.toLowerCase().replace(/\s+/g, '-')}-${area.slug}`,
        area: area.name,
        address: `Jalan Raya ${area.name} No. ${index + 10}, Bali`,
        whatsapp: '6281234567890',
        website: 'https://example.com',
        hours: '09:00 - 22:00',
        price_tier: (index % 4 + 1) as 1 | 2 | 3 | 4,
        price_examples: [
          { type: 'Balinese Massage', duration: '60 min', price: 150000 + (index * 20000) },
          { type: 'Deep Tissue', duration: '90 min', price: 250000 + (index * 30000) },
        ],
        tags: ['Balinese', 'Deep Tissue', index % 2 === 0 ? 'Couples' : 'Reflexology', index % 3 === 0 ? 'Luxury Spa' : 'Budget'],
        verified: index % 3 !== 0,
        verified_date: '2025-10-15',
        photos: [heroImage, spaInterior, detailImage, spaInterior, heroImage], // Rotating images
        description: `Experience the ultimate relaxation at ${name} ${area.name}. Our skilled therapists use traditional techniques to soothe your body and mind. Located in the heart of ${area.name}, we offer a tranquil escape from the bustle.`,
        editor_rating: 4.0 + (Math.random() * 1), // Random rating 4.0 - 5.0
        hygiene_score: 9.5,
        ambience: 'Tranquil & Modern',
        pressure_style: 'Medium to Strong',
      });
    });
  });
  return places;
};

export const PLACES = generatePlaces();

export const getPlaceBySlug = (areaSlug: string, placeSlug: string) => {
  const area = AREAS.find(a => a.slug === areaSlug);
  if (!area) return undefined;
  return PLACES.find(p => p.slug === placeSlug && p.area === area.name);
};
