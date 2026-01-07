// Shared constants for the application

// Hero image imports
import heroImage from '@assets/generated_images/luxury_tropical_spa_in_bali.png';
import spaInterior from '@assets/generated_images/professional_massage_therapy_room.png';

// Pages that should have transparent headers (with hero images)
export const TRANSPARENT_HEADER_PAGES = [
  '/',
  '/areas',
  '/massage-types',
  '/guides'
];

// Shared hero images
export const HERO_IMAGES = {
  LUXURY_SPA: heroImage,
  SPA_INTERIOR: spaInterior
};

// Shared CSS classes for hero sections
export const HERO_CLASSES = {
  HEADING: 'text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg',
  SUBTEXT: 'text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-md',
  CONTAINER: 'relative z-10 container mx-auto px-4 py-32 text-center',
  ANIMATION: 'animate-in fade-in slide-in-from-bottom-4 duration-700'
};
