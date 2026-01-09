import heroImage from '@assets/generated_images/luxury_tropical_spa_in_bali.png';
import spaInterior from '@assets/generated_images/professional_massage_therapy_room.png';
import detailImage from '@assets/generated_images/spa_oils_and_flowers_detail.png';

export interface FreelancerPrice {
  type: string;
  duration: string;
  price: number;
}

export interface FreelancerReview {
  id: string;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface Freelancer {
  id: string;
  name: string;
  slug: string;
  area: string;
  location: string; // More specific location within area
  whatsapp: string;
  email?: string;
  instagram?: string;
  profileImage: string;
  coverImage?: string;
  bio: string;
  specialties: string[];
  priceExamples: FreelancerPrice[];
  verified: boolean;
  verifiedDate?: string;
  rating: number;
  reviewCount: number;
  reviews: FreelancerReview[];
  yearsExperience: number;
  languages: string[];
  certifications: string[];
  availability: string;
  homeService: boolean;
  femaleTherapist: boolean;
  couplesMassage: boolean;
  lastActive: string;
  responseTime: string;
}

const firstNames = [
  'Made', 'Ketut', 'Wayan', 'Nyoman', 'Putu', 'Komang', 'Luh', 'Ni',
  'Sari', 'Dewi', 'Indah', 'Rina', 'Yulia', 'Ayu', 'Sinta', 'Ratna',
  'Maya', 'Lina', 'Diana', 'Rita', 'Sari', 'Eka', 'Ayu', 'Kadek', 'Gede'
];

const lastNames = [
  'Sari', 'Dewi', 'Indah', 'Wati', 'Sari', 'Putri', 'Kusuma', 'Sari',
  'Wardani', 'Sari', 'Dewi', 'Indah', 'Sari', 'Putri', 'Kusuma'
];

const areas = ['Canggu', 'Seminyak', 'Ubud', 'Uluwatu', 'Sanur', 'Nusa Dua', 'Kuta', 'Legian', 'Jimbaran', 'Denpasar'];
const specialties = [
  ['Traditional Balinese', 'Deep Tissue', 'Reflexology'],
  ['Thai Massage', 'Aromatherapy', 'Hot Stone'],
  ['Swedish Massage', 'Sports Massage', 'Therapeutic'],
  ['Prenatal Massage', 'Relaxation', 'Energy Work'],
  ['Couples Massage', 'Luxury Spa', 'Body Scrub'],
  ['Shiatsu', 'Acupressure', 'Traditional Balinese'],
  ['Deep Tissue', 'Injury Recovery', 'Sports Massage'],
  ['Aromatherapy', 'Hot Stone', 'Traditional Balinese'],
  ['Reflexology', 'Foot Massage', 'Traditional Balinese'],
  ['Thai Massage', 'Stretching', 'Therapeutic']
];

const languages = [
  ['English', 'Indonesian', 'Balinese'],
  ['English', 'Indonesian'],
  ['English', 'Indonesian', 'Japanese'],
  ['English', 'Indonesian', 'French'],
  ['English', 'Indonesian', 'German']
];

const certifications = [
  'Certified Massage Therapist',
  'Traditional Balinese Massage Certification',
  'Deep Tissue Specialist',
  'Thai Massage Certification',
  'Aromatherapy Practitioner',
  'Sports Massage Therapist',
  'Prenatal Massage Specialist',
  'Reiki Level 2',
  'Yoga Teacher Training',
  'Ayurvedic Massage Certification'
];

function generateReviews(count: number): FreelancerReview[] {
  const reviewNames = ['Sarah M.', 'John D.', 'Emma L.', 'Michael T.', 'Lisa K.', 'David R.', 'Anna B.', 'Tom W.', 'Maria G.', 'Chris H.'];
  const comments = [
    'Amazing massage! Very professional and skilled.',
    'Best massage I\'ve had in Bali. Highly recommend!',
    'Great technique and very relaxing atmosphere.',
    'Professional service, will definitely book again.',
    'Excellent therapist, very knowledgeable.',
    'Wonderful experience, felt completely rejuvenated.',
    'Skilled hands and great attention to detail.',
    'Perfect pressure and very calming presence.',
    'Highly professional and therapeutic.',
    'Outstanding service, exceeded expectations!'
  ];
  
  return Array.from({ length: count }, (_, i) => ({
    id: `review-${i + 1}`,
    name: reviewNames[i % reviewNames.length],
    rating: 4 + Math.random(),
    comment: comments[i % comments.length],
    date: new Date(2025, 11 - Math.floor(Math.random() * 6), 1 + Math.floor(Math.random() * 28)).toISOString().split('T')[0]
  }));
}

export const FREELANCERS: Freelancer[] = Array.from({ length: 25 }, (_, i) => {
  const firstName = firstNames[i % firstNames.length];
  const lastName = lastNames[Math.floor(i / firstNames.length) % lastNames.length];
  const name = `${firstName} ${lastName}`;
  const area = areas[i % areas.length];
  const specialtySet = specialties[i % specialties.length];
  const langSet = languages[i % languages.length];
  const certSet = certifications.slice(i % 5, (i % 5) + 2 + Math.floor(Math.random() * 2));
  
  const basePrice = 150000 + (i % 4) * 50000;
  const priceExamples: FreelancerPrice[] = [
    { type: specialtySet[0], duration: '60 min', price: basePrice },
    { type: specialtySet[1] || specialtySet[0], duration: '90 min', price: basePrice * 1.5 },
    { type: specialtySet[2] || specialtySet[0], duration: '120 min', price: basePrice * 2 }
  ];

  const reviewCount = 5 + Math.floor(Math.random() * 20);
  const reviews = generateReviews(Math.min(reviewCount, 10));
  const avgRating = reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return {
    id: `freelancer-${i + 1}`,
    name,
    slug: `${firstName.toLowerCase()}-${lastName.toLowerCase()}-${i + 1}`,
    area,
    location: `${area}${i % 3 === 0 ? ' Center' : i % 3 === 1 ? ' Beach' : ' Area'}`,
    whatsapp: `62812345${String(1000 + i).padStart(4, '0')}`,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}@gmail.com`,
    instagram: i % 3 === 0 ? `@${firstName.toLowerCase()}massage` : undefined,
    profileImage: i % 3 === 0 ? heroImage : i % 3 === 1 ? spaInterior : detailImage,
    coverImage: i % 2 === 0 ? heroImage : undefined,
    bio: `Experienced massage therapist specializing in ${specialtySet.join(', ')}. With ${5 + (i % 10)} years of experience, I provide professional and therapeutic massage services. Trained in traditional Balinese techniques and modern therapeutic methods. Available for home visits throughout ${area} and surrounding areas.`,
    specialties: specialtySet,
    priceExamples,
    verified: i % 4 !== 0,
    verifiedDate: i % 4 !== 0 ? `2025-${String(12 - (i % 3)).padStart(2, '0')}-${String(1 + (i % 28)).padStart(2, '0')}` : undefined,
    rating: Math.round(avgRating * 10) / 10,
    reviewCount,
    reviews,
    yearsExperience: 5 + (i % 10),
    languages: langSet,
    certifications: certSet,
    availability: i % 3 === 0 ? 'Available Today' : i % 3 === 1 ? 'Available This Week' : 'Available Next Week',
    homeService: true,
    femaleTherapist: i % 5 !== 0,
    couplesMassage: i % 2 === 0,
    lastActive: i % 3 === 0 ? 'Active now' : i % 3 === 1 ? 'Active 2 hours ago' : 'Active yesterday',
    responseTime: i % 3 === 0 ? '< 1 hour' : i % 3 === 1 ? '1-3 hours' : '3-6 hours'
  };
});

export const getFreelancerBySlug = (slug: string): Freelancer | undefined => {
  return FREELANCERS.find(f => f.slug === slug);
};

export const getFreelancersByArea = (area: string): Freelancer[] => {
  return FREELANCERS.filter(f => f.area.toLowerCase() === area.toLowerCase());
};
