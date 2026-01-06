import { Spa } from '@/types';

// Helper function to determine if a spa is currently open
function isCurrentlyOpen(hours: Spa['hours']): boolean {
  const now = new Date();
  const dayNames = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  const day = dayNames[now.getDay()] as keyof Spa['hours'];
  const currentHours = hours[day];
  
  if (!currentHours || currentHours === 'Closed') return false;
  
  const [openTime, closeTime] = currentHours.split('-').map(t => t.trim());
  const currentTime = now.getHours() * 100 + now.getMinutes();
  
  const parseTime = (time: string) => {
    const match = time.match(/(\d+):(\d+)\s*(AM|PM)/i);
    if (!match) return 0;
    let [, hours, minutes, period] = match;
    let h = parseInt(hours);
    if (period.toUpperCase() === 'PM' && h !== 12) h += 12;
    if (period.toUpperCase() === 'AM' && h === 12) h = 0;
    return h * 100 + parseInt(minutes);
  };
  
  const open = parseTime(openTime);
  const close = parseTime(closeTime);
  
  return currentTime >= open && currentTime <= close;
}

export const sampleSpas: Spa[] = [
  {
    id: '1',
    name: 'Karsa Spa',
    description: 'Traditional Balinese spa with stunning rice field views. Expert therapists specializing in deep tissue and traditional techniques.',
    location: {
      lat: -8.5069,
      lng: 115.2625,
      address: 'Jl. Kelusa No.3, Ubud',
      area: 'Ubud'
    },
    phone: '+62361975825',
    whatsappNumber: '62361975825',
    priceFrom: 250000,
    priceTo: 650000,
    hours: {
      monday: '9:00 AM-9:00 PM',
      tuesday: '9:00 AM-9:00 PM',
      wednesday: '9:00 AM-9:00 PM',
      thursday: '9:00 AM-9:00 PM',
      friday: '9:00 AM-9:00 PM',
      saturday: '9:00 AM-9:00 PM',
      sunday: '9:00 AM-9:00 PM'
    },
    isOpenNow: true,
    styles: ['Balinese', 'Deep Tissue', 'Hot Stone'],
    goodFor: ['surf recovery', 'couples', 'relaxation'],
    mood: ['relaxing', 'traditional', 'scenic'],
    ratings: {
      hygiene: 4.8,
      ambience: 4.9,
      pressure: 4.7,
      overall: 4.8,
      count: 342
    },
    imageUrl: '/images/karsa-spa.jpg'
  },
  {
    id: '2',
    name: 'Sundari Day Spa',
    description: 'Luxury beachfront spa with premium treatments. Perfect for post-surf recovery and couples packages.',
    location: {
      lat: -8.6765,
      lng: 115.1398,
      address: 'Jl. Pantai Seminyak, Seminyak',
      area: 'Seminyak'
    },
    phone: '+62361730666',
    whatsappNumber: '62361730666',
    priceFrom: 400000,
    priceTo: 1200000,
    hours: {
      monday: '10:00 AM-10:00 PM',
      tuesday: '10:00 AM-10:00 PM',
      wednesday: '10:00 AM-10:00 PM',
      thursday: '10:00 AM-10:00 PM',
      friday: '10:00 AM-10:00 PM',
      saturday: '10:00 AM-10:00 PM',
      sunday: '10:00 AM-10:00 PM'
    },
    isOpenNow: true,
    styles: ['Swedish', 'Aromatherapy', 'Sports Massage'],
    goodFor: ['surf recovery', 'jet lag', 'couples', 'luxury'],
    mood: ['luxury', 'beachfront', 'romantic'],
    ratings: {
      hygiene: 4.9,
      ambience: 4.9,
      pressure: 4.6,
      overall: 4.8,
      count: 567
    }
  },
  {
    id: '3',
    name: 'Taksu Spa',
    description: 'Award-winning spa in the heart of Ubud. Holistic treatments combining ancient wisdom with modern techniques.',
    location: {
      lat: -8.5190,
      lng: 115.2629,
      address: 'Jl. Goutama, Ubud',
      area: 'Ubud'
    },
    phone: '+62361479948',
    whatsappNumber: '62361479948',
    priceFrom: 350000,
    priceTo: 850000,
    hours: {
      monday: '9:00 AM-8:00 PM',
      tuesday: '9:00 AM-8:00 PM',
      wednesday: '9:00 AM-8:00 PM',
      thursday: '9:00 AM-8:00 PM',
      friday: '9:00 AM-8:00 PM',
      saturday: '9:00 AM-8:00 PM',
      sunday: '9:00 AM-8:00 PM'
    },
    isOpenNow: true,
    styles: ['Balinese', 'Thai', 'Shiatsu'],
    goodFor: ['jet lag', 'stress relief', 'prenatal'],
    mood: ['therapeutic', 'holistic', 'peaceful'],
    ratings: {
      hygiene: 4.9,
      ambience: 4.8,
      pressure: 4.8,
      overall: 4.8,
      count: 428
    }
  },
  {
    id: '4',
    name: 'Bodyworks Spa',
    description: 'Affordable spa with excellent therapists. Great for quick treatments and sports recovery.',
    location: {
      lat: -8.6890,
      lng: 115.1680,
      address: 'Jl. Raya Seminyak No.17, Seminyak',
      area: 'Seminyak'
    },
    phone: '+62361736134',
    whatsappNumber: '62361736134',
    priceFrom: 150000,
    priceTo: 400000,
    hours: {
      monday: '9:00 AM-11:00 PM',
      tuesday: '9:00 AM-11:00 PM',
      wednesday: '9:00 AM-11:00 PM',
      thursday: '9:00 AM-11:00 PM',
      friday: '9:00 AM-11:00 PM',
      saturday: '9:00 AM-11:00 PM',
      sunday: '9:00 AM-11:00 PM'
    },
    isOpenNow: true,
    styles: ['Deep Tissue', 'Sports Massage', 'Reflexology'],
    goodFor: ['surf recovery', 'budget', 'quick treatment'],
    mood: ['affordable', 'therapeutic', 'casual'],
    ratings: {
      hygiene: 4.5,
      ambience: 4.3,
      pressure: 4.7,
      overall: 4.5,
      count: 891
    }
  },
  {
    id: '5',
    name: 'Cantika Spa',
    description: 'Beachside spa with ocean views. Specializing in couples treatments and romantic packages.',
    location: {
      lat: -8.7982,
      lng: 115.1789,
      address: 'Jl. Pratama, Nusa Dua',
      area: 'Nusa Dua'
    },
    phone: '+62361771906',
    whatsappNumber: '62361771906',
    priceFrom: 500000,
    priceTo: 1500000,
    hours: {
      monday: '8:00 AM-9:00 PM',
      tuesday: '8:00 AM-9:00 PM',
      wednesday: '8:00 AM-9:00 PM',
      thursday: '8:00 AM-9:00 PM',
      friday: '8:00 AM-9:00 PM',
      saturday: '8:00 AM-9:00 PM',
      sunday: '8:00 AM-9:00 PM'
    },
    isOpenNow: true,
    styles: ['Balinese', 'Aromatherapy', 'Hot Stone'],
    goodFor: ['couples', 'honeymoon', 'luxury', 'romantic'],
    mood: ['luxury', 'romantic', 'beachfront'],
    ratings: {
      hygiene: 4.9,
      ambience: 5.0,
      pressure: 4.6,
      overall: 4.8,
      count: 234
    }
  },
  {
    id: '6',
    name: 'Theta Spa',
    description: 'Modern spa with ancient healing techniques. Perfect for jet lag recovery and deep relaxation.',
    location: {
      lat: -8.6945,
      lng: 115.1623,
      address: 'Jl. Kayu Aya, Seminyak',
      area: 'Seminyak'
    },
    phone: '+62361738888',
    whatsappNumber: '62361738888',
    priceFrom: 300000,
    priceTo: 700000,
    hours: {
      monday: '9:00 AM-10:00 PM',
      tuesday: '9:00 AM-10:00 PM',
      wednesday: '9:00 AM-10:00 PM',
      thursday: '9:00 AM-10:00 PM',
      friday: '9:00 AM-10:00 PM',
      saturday: '9:00 AM-10:00 PM',
      sunday: '9:00 AM-10:00 PM'
    },
    isOpenNow: true,
    styles: ['Thai', 'Swedish', 'Reflexology'],
    goodFor: ['jet lag', 'stress relief', 'insomnia'],
    mood: ['therapeutic', 'modern', 'peaceful'],
    ratings: {
      hygiene: 4.8,
      ambience: 4.7,
      pressure: 4.7,
      overall: 4.7,
      count: 312
    }
  },
  {
    id: '7',
    name: 'Bali Botanica',
    description: 'Organic spa using natural Balinese ingredients. Eco-friendly treatments in a garden setting.',
    location: {
      lat: -8.5123,
      lng: 115.2584,
      address: 'Jl. Sanggingan, Ubud',
      area: 'Ubud'
    },
    phone: '+62361975953',
    whatsappNumber: '62361975953',
    priceFrom: 280000,
    priceTo: 600000,
    hours: {
      monday: '10:00 AM-7:00 PM',
      tuesday: '10:00 AM-7:00 PM',
      wednesday: '10:00 AM-7:00 PM',
      thursday: '10:00 AM-7:00 PM',
      friday: '10:00 AM-7:00 PM',
      saturday: '10:00 AM-7:00 PM',
      sunday: '10:00 AM-7:00 PM'
    },
    isOpenNow: true,
    styles: ['Balinese', 'Aromatherapy', 'Herbal'],
    goodFor: ['relaxation', 'organic', 'natural healing'],
    mood: ['eco-friendly', 'natural', 'garden'],
    ratings: {
      hygiene: 4.8,
      ambience: 4.9,
      pressure: 4.5,
      overall: 4.7,
      count: 198
    }
  },
  {
    id: '8',
    name: 'Canggu Wellness',
    description: 'Trendy wellness center popular with surfers. Strong pressure and sports recovery focus.',
    location: {
      lat: -8.6481,
      lng: 115.1384,
      address: 'Jl. Pantai Batu Bolong, Canggu',
      area: 'Canggu'
    },
    phone: '+62361847788',
    whatsappNumber: '62361847788',
    priceFrom: 200000,
    priceTo: 500000,
    hours: {
      monday: '8:00 AM-10:00 PM',
      tuesday: '8:00 AM-10:00 PM',
      wednesday: '8:00 AM-10:00 PM',
      thursday: '8:00 AM-10:00 PM',
      friday: '8:00 AM-10:00 PM',
      saturday: '8:00 AM-10:00 PM',
      sunday: '8:00 AM-10:00 PM'
    },
    isOpenNow: true,
    styles: ['Sports Massage', 'Deep Tissue', 'Thai'],
    goodFor: ['surf recovery', 'sports injuries', 'muscle pain'],
    mood: ['athletic', 'casual', 'beachside'],
    ratings: {
      hygiene: 4.6,
      ambience: 4.5,
      pressure: 4.9,
      overall: 4.7,
      count: 445
    }
  }
];

// Update isOpenNow based on current time
sampleSpas.forEach(spa => {
  spa.isOpenNow = isCurrentlyOpen(spa.hours);
});
