// Types for the Massage Map application
export interface Location {
  lat: number;
  lng: number;
  address: string;
  area: string;
}

export interface Hours {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface Ratings {
  hygiene: number;
  ambience: number;
  pressure: number;
  overall: number;
  count: number;
}

export interface Spa {
  id: string;
  name: string;
  description: string;
  location: Location;
  phone: string;
  whatsappNumber: string;
  priceFrom: number; // in IDR
  priceTo?: number;
  hours: Hours;
  isOpenNow: boolean;
  styles: string[]; // e.g., "Balinese", "Thai", "Swedish", "Deep Tissue"
  goodFor: string[]; // e.g., "surf recovery", "jet lag", "couples", "prenatal"
  mood: string[]; // e.g., "relaxing", "therapeutic", "luxury", "budget-friendly"
  ratings: Ratings;
  imageUrl?: string;
  website?: string;
}

export type FilterType = {
  areas: string[];
  styles: string[];
  budgetRange: [number, number];
  moods: string[];
  goodFor: string[];
  openNow: boolean;
};
