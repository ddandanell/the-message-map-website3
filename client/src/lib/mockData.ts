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
  
  // New Fields
  last_verified: string;
  editor_note: string;
  home_service: boolean;
  female_therapist: boolean;
  couples_massage: boolean;
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

// Top 10 Verified Ubud Massage Businesses
const UBUD_TOP_PLACES: Place[] = [
  {
    id: 'ubud-karsa',
    name: 'Karsa Spa Ubud',
    slug: 'karsa-spa-ubud',
    area: 'Ubud',
    address: 'Jl. Monkey Forest, Ubud, Gianyar, Bali 80571',
    whatsapp: '628123456001',
    website: 'https://karsaspa.com',
    hours: '09:00 - 21:00',
    price_tier: 2,
    price_examples: [
      { type: 'Traditional Balinese Massage', duration: '60 min', price: 120000 },
      { type: 'Deep Tissue Massage', duration: '90 min', price: 200000 },
      { type: 'Hot Stone Massage', duration: '90 min', price: 250000 },
    ],
    tags: ['Balinese', 'Deep Tissue', 'Hot Stone', 'Reflexology'],
    verified: true,
    verified_date: '2026-01-05',
    photos: [heroImage, spaInterior, detailImage, spaInterior, heroImage],
    description: 'Nestled in the heart of Ubud near Monkey Forest, Karsa Spa offers authentic Balinese healing in a traditional bamboo pavilion. Known for their skilled therapists trained in ancestral techniques and use of organic coconut oils infused with local herbs. The peaceful garden setting with sounds of flowing water creates a deeply meditative atmosphere.',
    editor_rating: 4.7,
    hygiene_score: 9.3,
    ambience: 'Traditional',
    pressure_style: 'Medium to Strong',
    last_verified: '2026-01-05',
    editor_note: 'Exceptional value for authentic traditional massage. Therapists are particularly skilled in pressure point work. The post-massage ginger tea ritual is lovely.',
    home_service: true,
    female_therapist: true,
    couples_massage: true
  },
  {
    id: 'ubud-radiantly-alive',
    name: 'Radiantly Alive Yoga & Spa',
    slug: 'radiantly-alive-ubud',
    area: 'Ubud',
    address: 'Jl. Jembawan No.1, Ubud, Gianyar, Bali 80571',
    whatsapp: '628123456002',
    website: 'https://radiantlyalive.com',
    hours: '07:00 - 21:00',
    price_tier: 3,
    price_examples: [
      { type: 'Therapeutic Massage', duration: '75 min', price: 350000 },
      { type: 'Deep Tissue', duration: '90 min', price: 450000 },
      { type: 'Prenatal Massage', duration: '60 min', price: 380000 },
    ],
    tags: ['Deep Tissue', 'Thai', 'Prenatal', 'Sports Massage'],
    verified: true,
    verified_date: '2026-01-04',
    photos: [spaInterior, heroImage, detailImage, spaInterior, heroImage],
    description: 'Part of Ubud\'s premier yoga community, Radiantly Alive offers therapeutic massage with a holistic wellness approach. Therapists are internationally trained and integrate multiple modalities. Popular with yoga practitioners for sports recovery and injury prevention. The airy, modern space feels more clinical spa than traditional Balinese.',
    editor_rating: 4.8,
    hygiene_score: 9.7,
    ambience: 'Modern',
    pressure_style: 'Medium to Very Strong',
    last_verified: '2026-01-04',
    editor_note: 'Best for therapeutic and sports massage. Therapists understand anatomy and can address specific issues. Book therapist Maya for deep tissue - she\'s incredible.',
    home_service: false,
    female_therapist: true,
    couples_massage: false
  },
  {
    id: 'ubud-cantika',
    name: 'Cantika Zest Spa',
    slug: 'cantika-zest-spa-ubud',
    area: 'Ubud',
    address: 'Jl. Dewi Sita, Ubud, Gianyar, Bali 80571',
    whatsapp: '628123456003',
    website: 'https://cantikazest.com',
    hours: '10:00 - 22:00',
    price_tier: 3,
    price_examples: [
      { type: 'Balinese Massage', duration: '60 min', price: 300000 },
      { type: 'Aromatherapy Massage', duration: '90 min', price: 450000 },
      { type: 'Couples Package', duration: '120 min', price: 950000 },
    ],
    tags: ['Balinese', 'Aromatherapy', 'Couples', 'Luxury Spa'],
    verified: true,
    verified_date: '2026-01-03',
    photos: [heroImage, detailImage, spaInterior, heroImage, detailImage],
    description: 'Upscale boutique spa on busy Dewi Sita street offering premium treatments in beautifully appointed private villas. Known for their signature aromatherapy blends and attention to ambiance. Each treatment includes access to jacuzzi and steam room. Popular for special occasions and couples\' packages.',
    editor_rating: 4.6,
    hygiene_score: 9.5,
    ambience: 'Luxury',
    pressure_style: 'Soft to Medium',
    last_verified: '2026-01-03',
    editor_note: 'Romantic setting perfect for couples. The flower bath add-on is Instagram-worthy. Therapists focus on relaxation over deep tissue work.',
    home_service: false,
    female_therapist: true,
    couples_massage: true
  },
  {
    id: 'ubud-taksu',
    name: 'Taksu Spa Ubud',
    slug: 'taksu-spa-ubud',
    area: 'Ubud',
    address: 'Jl. Goutama Sel., Ubud, Gianyar, Bali 80571',
    whatsapp: '628123456004',
    website: 'https://taksuspa.com',
    hours: '09:00 - 22:00',
    price_tier: 3,
    price_examples: [
      { type: 'Balinese Massage', duration: '90 min', price: 450000 },
      { type: 'Hot Stone Massage', duration: '120 min', price: 650000 },
      { type: 'Signature Taksu Ritual', duration: '150 min', price: 850000 },
    ],
    tags: ['Balinese', 'Hot Stone', 'Luxury Spa', 'Traditional'],
    verified: true,
    verified_date: '2026-01-02',
    photos: [detailImage, heroImage, spaInterior, detailImage, heroImage],
    description: 'Award-winning spa set in lush tropical gardens with traditional Javanese architecture. Taksu offers authentic healing rituals using time-honored Balinese techniques. The sacred bathing pools and meditation spaces create a complete wellness sanctuary. Therapists undergo rigorous training in traditional methods.',
    editor_rating: 4.9,
    hygiene_score: 9.8,
    ambience: 'Luxury',
    pressure_style: 'Medium',
    last_verified: '2026-01-02',
    editor_note: 'Premium experience worth the price. Consistently excellent across all therapists. The full ritual package with flower bath and body scrub is transformative.',
    home_service: false,
    female_therapist: true,
    couples_massage: true
  },
  {
    id: 'ubud-nur-salon',
    name: 'Nur Salon & Spa',
    slug: 'nur-salon-spa-ubud',
    area: 'Ubud',
    address: 'Jl. Hanoman No.28, Ubud, Gianyar, Bali 80571',
    whatsapp: '628123456005',
    website: 'https://nursalonubud.com',
    hours: '09:00 - 21:00',
    price_tier: 1,
    price_examples: [
      { type: 'Balinese Massage', duration: '60 min', price: 100000 },
      { type: 'Reflexology', duration: '60 min', price: 90000 },
      { type: 'Body Scrub + Massage', duration: '90 min', price: 180000 },
    ],
    tags: ['Balinese', 'Reflexology', 'Budget', 'Traditional'],
    verified: true,
    verified_date: '2025-12-28',
    photos: [spaInterior, detailImage, heroImage, spaInterior, detailImage],
    description: 'Long-standing local favorite offering excellent traditional massage at budget-friendly prices. Family-run business known for skilled therapists and no-nonsense approach. Simple, clean facilities without luxury frills. Very popular with expats and long-term visitors who want regular, quality massage without premium pricing.',
    editor_rating: 4.5,
    hygiene_score: 8.9,
    ambience: 'Traditional',
    pressure_style: 'Medium to Strong',
    last_verified: '2025-12-28',
    editor_note: 'Best value in Ubud. Therapists are experienced despite lower prices. Can hear some street noise but treatment quality is solid. Cash only.',
    home_service: true,
    female_therapist: true,
    couples_massage: true
  },
  {
    id: 'ubud-bodyworks',
    name: 'Ubud Bodyworks Centre',
    slug: 'ubud-bodyworks-centre',
    area: 'Ubud',
    address: 'Jl. Hanoman, Ubud, Gianyar, Bali 80571',
    whatsapp: '628123456006',
    website: 'https://ubudbodyworks.com',
    hours: '09:00 - 20:00',
    price_tier: 2,
    price_examples: [
      { type: 'Deep Tissue Massage', duration: '60 min', price: 250000 },
      { type: 'Sports Massage', duration: '90 min', price: 350000 },
      { type: 'Injury Treatment', duration: '60 min', price: 300000 },
    ],
    tags: ['Deep Tissue', 'Sports Massage', 'Therapeutic'],
    verified: true,
    verified_date: '2025-12-20',
    photos: [spaInterior, heroImage, detailImage, spaInterior, heroImage],
    description: 'Clinical massage center specializing in therapeutic treatments and injury recovery. Popular with athletes, yoga teachers, and anyone with chronic pain issues. Therapists have medical massage training and can work on specific problem areas. Less about relaxation, more about results.',
    editor_rating: 4.7,
    hygiene_score: 9.2,
    ambience: 'Modern',
    pressure_style: 'Firm to Very Strong',
    last_verified: '2025-12-20',
    editor_note: 'Go here for therapeutic work, not pampering. Therapists actually understand anatomy. Can be intense but highly effective for muscle issues.',
    home_service: false,
    female_therapist: true,
    couples_massage: false
  },
  {
    id: 'ubud-esthetic',
    name: 'Esthetic Spa Ubud',
    slug: 'esthetic-spa-ubud',
    area: 'Ubud',
    address: 'Jl. Raya Ubud No.9, Ubud, Gianyar, Bali 80571',
    whatsapp: '628123456007',
    website: 'https://estheticspa.com',
    hours: '08:00 - 22:00',
    price_tier: 2,
    price_examples: [
      { type: 'Balinese Massage', duration: '60 min', price: 150000 },
      { type: 'Shiatsu Massage', duration: '90 min', price: 280000 },
      { type: 'Reflexology', duration: '60 min', price: 120000 },
    ],
    tags: ['Balinese', 'Shiatsu', 'Reflexology', 'Traditional'],
    verified: true,
    verified_date: '2025-12-15',
    photos: [detailImage, spaInterior, heroImage, detailImage, spaInterior],
    description: 'Well-established spa on main Ubud road offering variety of Asian massage modalities. Clean, professional environment with consistent quality. Particularly known for excellent reflexology and shiatsu practitioners. Easy walk-in availability most days.',
    editor_rating: 4.4,
    hygiene_score: 9.0,
    ambience: 'Modern',
    pressure_style: 'Medium',
    last_verified: '2025-12-15',
    editor_note: 'Reliable choice for traditional massage. Good reflexology - ask for Made. Can be noisy due to main road location but rooms are comfortable.',
    home_service: false,
    female_therapist: true,
    couples_massage: true
  },
  {
    id: 'ubud-jaens',
    name: 'Jaens Spa',
    slug: 'jaens-spa-ubud',
    area: 'Ubud',
    address: 'Jl. Monkey Forest, Ubud, Gianyar, Bali 80571',
    whatsapp: '628123456008',
    website: 'https://jaensspa.com',
    hours: '09:00 - 21:00',
    price_tier: 2,
    price_examples: [
      { type: 'Balinese Massage', duration: '60 min', price: 180000 },
      { type: 'Aromatherapy Massage', duration: '90 min', price: 280000 },
      { type: 'Couples Package', duration: '90 min', price: 520000 },
    ],
    tags: ['Balinese', 'Aromatherapy', 'Couples'],
    verified: true,
    verified_date: '2025-12-10',
    photos: [heroImage, detailImage, spaInterior, heroImage, detailImage],
    description: 'Popular mid-range spa with multiple locations in Ubud. Known for cheerful staff and good quality traditional Balinese massage. Clean facilities with private rooms. Good middle ground between budget and luxury options. Convenient Monkey Forest location.',
    editor_rating: 4.3,
    hygiene_score: 8.8,
    ambience: 'Traditional',
    pressure_style: 'Soft to Medium',
    last_verified: '2025-12-10',
    editor_note: 'Solid, reliable massage at fair prices. Staff is friendly and accommodating. Quality can vary by therapist - ask for Wayan or Ketut.',
    home_service: true,
    female_therapist: true,
    couples_massage: true
  },
  {
    id: 'ubud-intuitive-flow',
    name: 'Intuitive Flow',
    slug: 'intuitive-flow-ubud',
    area: 'Ubud',
    address: 'Jl. Sukma Kesuma, Ubud, Gianyar, Bali 80571',
    whatsapp: '628123456009',
    website: 'https://intuitiveflow.com',
    hours: '10:00 - 20:00',
    price_tier: 3,
    price_examples: [
      { type: 'Intuitive Bodywork', duration: '90 min', price: 550000 },
      { type: 'Thai Massage', duration: '90 min', price: 450000 },
      { type: 'Craniosacral Therapy', duration: '60 min', price: 500000 },
    ],
    tags: ['Thai', 'Therapeutic', 'Energy Work'],
    verified: true,
    verified_date: '2025-12-05',
    photos: [spaInterior, heroImage, detailImage, spaInterior, heroImage],
    description: 'Holistic healing center offering intuitive bodywork and energy-based therapies. Practitioners blend massage with Reiki, craniosacral work, and other subtle modalities. Popular with spiritually-minded visitors seeking deeper healing work. Sessions are more therapeutic than typical spa massage.',
    editor_rating: 4.6,
    hygiene_score: 9.3,
    ambience: 'Modern',
    pressure_style: 'Light to Medium',
    last_verified: '2025-12-05',
    editor_note: 'Unique offering for those interested in energy work. Not your typical massage - more healing session. Practitioners are skilled and attuned.',
    home_service: false,
    female_therapist: true,
    couples_massage: false
  },
  {
    id: 'ubud-milan',
    name: 'Milan Spa Ubud',
    slug: 'milan-spa-ubud',
    area: 'Ubud',
    address: 'Jl. Raya Pengosekan, Ubud, Gianyar, Bali 80571',
    whatsapp: '628123456010',
    website: 'https://milanubud.com',
    hours: '09:00 - 21:00',
    price_tier: 1,
    price_examples: [
      { type: 'Balinese Massage', duration: '60 min', price: 110000 },
      { type: 'Foot Reflexology', duration: '60 min', price: 100000 },
      { type: 'Cream Bath + Massage', duration: '90 min', price: 200000 },
    ],
    tags: ['Balinese', 'Reflexology', 'Budget'],
    verified: true,
    verified_date: '2025-11-28',
    photos: [detailImage, spaInterior, heroImage, detailImage, spaInterior],
    description: 'Budget-friendly local spa offering quality traditional treatments at honest prices. Family-run business with experienced therapists who have worked in upscale resorts. Simple but clean facilities. Great option for regular massage without breaking the bank. Very popular with long-term residents.',
    editor_rating: 4.4,
    hygiene_score: 8.7,
    ambience: 'Traditional',
    pressure_style: 'Medium',
    last_verified: '2025-11-28',
    editor_note: 'Excellent value for money. Therapists are skilled despite low prices. Located slightly out of central Ubud but worth the short walk or scooter ride.',
    home_service: true,
    female_therapist: true,
    couples_massage: true
  }
];

// Helper to generate places
const generatePlaces = (): Place[] => {
  const places: Place[] = [...UBUD_TOP_PLACES]; // Start with curated Ubud places
  const placeNames = ['Taksu Spa', 'Bodyworks', 'Spring Spa', 'Amo Spa', 'Sundari Day Spa', 'Relax Spa', 'Golden Hands', 'Zen Family', 'Lotus Seaview', 'Cliffside Wellness', 'Jungle Touch', 'Ocean Breeze', 'Temple Healing'];

  // Generate for other areas (exclude Ubud as we have custom data)
  AREAS.filter(area => area.slug !== 'ubud').forEach(area => {
    placeNames.forEach((name, index) => {
      const isCouples = index % 2 === 0;

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
        tags: ['Balinese', 'Deep Tissue', isCouples ? 'Couples' : 'Reflexology', index % 3 === 0 ? 'Luxury Spa' : 'Budget'],
        verified: index % 3 !== 0,
        verified_date: '2025-10-15',
        photos: [heroImage, spaInterior, detailImage, spaInterior, heroImage],
        description: `Experience the ultimate relaxation at ${name} ${area.name}. Our skilled therapists use traditional techniques to soothe your body and mind. Located in the heart of ${area.name}, we offer a tranquil escape from the bustle.`,
        editor_rating: 4.0 + (Math.random() * 1),
        hygiene_score: 9.0 + (Math.random() * 1),
        ambience: index % 3 === 0 ? 'Luxury' : (index % 2 === 0 ? 'Modern' : 'Traditional'),
        pressure_style: index % 2 === 0 ? 'Medium to Strong' : 'Soft to Medium',
        last_verified: `2025-${10 + Math.floor(Math.random() * 2)}-${10 + Math.floor(Math.random() * 15)}`,
        editor_note: "Our team loves the attention to detail here. The ginger tea served after treatment is a standout touch.",
        home_service: index % 4 === 0,
        female_therapist: true,
        couples_massage: isCouples
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
