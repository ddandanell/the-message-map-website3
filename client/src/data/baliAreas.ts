export type Region = 'south' | 'central' | 'east' | 'north' | 'west' | 'nusa';

export interface BaliArea {
  id: string;
  displayName: string;
  slug: string;
  region: Region;
  synonyms?: string[];
  nearby?: string[];
  description: string; // Unique 1-line snippet for index page
}

export const BALI_AREAS: BaliArea[] = [
  // SOUTH BALI (Denpasar/Badung)
  { id: 'kuta', displayName: 'Kuta', slug: 'kuta', region: 'south', description: 'Beachfront relaxation near the airport and surf breaks', nearby: ['legian', 'tuban', 'seminyak', 'jimbaran', 'denpasar'] },
  { id: 'legian', displayName: 'Legian', slug: 'legian', region: 'south', description: 'Lively beach town between Kuta and Seminyak', nearby: ['kuta', 'seminyak', 'kerobokan', 'canggu'] },
  { id: 'seminyak', displayName: 'Seminyak', slug: 'seminyak', region: 'south', description: 'Upscale beach clubs and luxury villas', nearby: ['legian', 'kerobokan', 'petitenget', 'canggu', 'kuta'] },
  { id: 'canggu', displayName: 'Canggu', slug: 'canggu', region: 'south', description: 'Surf and wellness hub with rice field views', nearby: ['pererenan', 'seminyak', 'echo-beach', 'tibubeneng', 'kerobokan'] },
  { id: 'pererenan', displayName: 'Pererenan', slug: 'pererenan', region: 'south', description: 'Tranquil beachside escape north of Canggu', nearby: ['canggu', 'cemagi', 'tibubeneng', 'seminyak'] },
  { id: 'uluwatu', displayName: 'Uluwatu', slug: 'uluwatu', region: 'south', description: 'Clifftop luxury and world-class surf spots', nearby: ['pecatu', 'ungasan', 'jimbaran', 'padang-padang', 'bingin'] },
  { id: 'jimbaran', displayName: 'Jimbaran', slug: 'jimbaran', region: 'south', description: 'Seafood dining and calm bay beaches', nearby: ['kuta', 'uluwatu', 'nusa-dua', 'ungasan', 'denpasar'] },
  { id: 'nusa-dua', displayName: 'Nusa Dua', slug: 'nusa-dua', region: 'south', description: 'Gated resort enclave with pristine beaches', nearby: ['jimbaran', 'sanur', 'benoa', 'ungasan', 'uluwatu'] },
  { id: 'sanur', displayName: 'Sanur', slug: 'sanur', region: 'south', description: 'Family-friendly beachfront with morning markets', nearby: ['denpasar', 'nusa-dua', 'serangan', 'ketewel', 'sidakarya'] },
  { id: 'denpasar', displayName: 'Denpasar', slug: 'denpasar', region: 'south', description: 'Capital city with shopping and cultural sites', nearby: ['sanur', 'kuta', 'seminyak', 'renon', 'kesiman'] },

  { id: 'batubelig', displayName: 'Batubelig', slug: 'batubelig', region: 'south', description: 'Quiet beaches between Seminyak and Canggu', nearby: ['seminyak', 'kerobokan', 'canggu', 'petitenget'] },
  { id: 'kerobokan', displayName: 'Kerobokan', slug: 'kerobokan', region: 'south', description: 'Residential area with boutique cafes', nearby: ['seminyak', 'canggu', 'legian', 'batubelig', 'petitenget'] },
  { id: 'petitenget', displayName: 'Petitenget', slug: 'petitenget', region: 'south', description: 'Upscale Seminyak neighborhood near beach', nearby: ['seminyak', 'batubelig', 'kerobokan', 'canggu'] },
  { id: 'echo-beach', displayName: 'Echo Beach', slug: 'echo-beach', region: 'south', description: 'Surf break and sunset spot in Canggu', nearby: ['canggu', 'pererenan', 'tibubeneng', 'cemagi'] },
  { id: 'tibubeneng', displayName: 'Tibubeneng', slug: 'tibubeneng', region: 'south', description: 'Rice field villas near Canggu core', nearby: ['canggu', 'pererenan', 'echo-beach', 'cemagi'] },
  { id: 'cemagi', displayName: 'Cemagi', slug: 'cemagi', region: 'south', description: 'Peaceful coastal village west of Canggu', nearby: ['pererenan', 'canggu', 'tibubeneng', 'tanah-lot'] },
  { id: 'pecatu', displayName: 'Pecatu', slug: 'pecatu', region: 'south', description: 'Cliff-edge villas near Uluwatu Temple', nearby: ['uluwatu', 'ungasan', 'padang-padang', 'bingin', 'jimbaran'] },
  { id: 'ungasan', displayName: 'Ungasan', slug: 'ungasan', region: 'south', description: 'Luxury estates on the Bukit Peninsula', nearby: ['uluwatu', 'pecatu', 'jimbaran', 'nusa-dua'] },
  { id: 'bingin', displayName: 'Bingin', slug: 'bingin', region: 'south', description: 'Hidden beach and surf retreat', nearby: ['uluwatu', 'pecatu', 'padang-padang', 'ungasan'] },
  { id: 'padang-padang', displayName: 'Padang Padang', slug: 'padang-padang', region: 'south', description: 'Famous surf beach and laid-back cafes', nearby: ['uluwatu', 'pecatu', 'bingin', 'ungasan'] },
  { id: 'benoa', displayName: 'Benoa', slug: 'benoa', region: 'south', description: 'Harbor town with water sports', nearby: ['nusa-dua', 'sanur', 'jimbaran', 'serangan'] },
  { id: 'serangan', displayName: 'Serangan', slug: 'serangan', region: 'south', description: 'Turtle conservation island near Sanur', nearby: ['sanur', 'benoa', 'denpasar'] },
  { id: 'renon', displayName: 'Renon (Denpasar)', slug: 'renon', region: 'south', synonyms: ['Renon'], description: 'Government district with parks', nearby: ['denpasar', 'sanur', 'kesiman', 'sidakarya'] },
  { id: 'kesiman', displayName: 'Kesiman (Denpasar)', slug: 'kesiman', region: 'south', synonyms: ['Kesiman'], description: 'Eastern Denpasar residential area', nearby: ['denpasar', 'sanur', 'renon', 'batubulan'] },
  { id: 'sidakarya', displayName: 'Sidakarya (Denpasar)', slug: 'sidakarya', region: 'south', synonyms: ['Sidakarya'], description: 'South Denpasar near Sanur', nearby: ['denpasar', 'sanur', 'renon'] },
  { id: 'sesetan', displayName: 'Sesetan (Denpasar)', slug: 'sesetan', region: 'south', synonyms: ['Sesetan'], description: 'Central Denpasar neighborhood', nearby: ['denpasar', 'sanur', 'sidakarya'] },
  { id: 'kutuh', displayName: 'Kutuh', slug: 'kutuh', region: 'south', description: 'Traditional village near GWK statue', nearby: ['ungasan', 'jimbaran', 'uluwatu', 'nusa-dua'] },
  { id: 'bumbak', displayName: 'Bumbak', slug: 'bumbak', region: 'south', description: 'Quiet area near Umalas', nearby: ['kerobokan', 'canggu', 'seminyak'] },
  { id: 'beraban', displayName: 'Beraban (Tanah Lot)', slug: 'beraban', region: 'south', synonyms: ['Beraban', 'Tanah Lot'], description: 'Home to iconic Tanah Lot temple', nearby: ['cemagi', 'tabanan', 'canggu', 'pererenan'] },
  { id: 'nyanyi', displayName: 'Nyanyi', slug: 'nyanyi', region: 'south', description: 'Black sand beach west of Tanah Lot', nearby: ['beraban', 'tabanan', 'cemagi'] },

  // CENTRAL BALI (Ubud/Gianyar/Bangli)
  { id: 'ubud', displayName: 'Ubud', slug: 'ubud', region: 'central', description: 'Jungle wellness and cultural heart of Bali', nearby: ['tegallalang', 'mas', 'peliatan', 'pengosekan', 'kedewatan'] },
  { id: 'tegallalang', displayName: 'Tegallalang', slug: 'tegallalang', region: 'central', description: 'Rice terraces and artisan villages', nearby: ['ubud', 'kintamani', 'tampaksiring', 'keliki'] },
  { id: 'kintamani', displayName: 'Kintamani', slug: 'kintamani', region: 'central', description: 'Volcanic highlands with lake views', nearby: ['tegallalang', 'ubud', 'tampaksiring', 'toya-bungkah', 'bangli'] },
  { id: 'gianyar', displayName: 'Gianyar', slug: 'gianyar', region: 'central', description: 'Market town and weaving center', nearby: ['ubud', 'batubulan', 'sukawati', 'celuk', 'denpasar'] },
  { id: 'batubulan', displayName: 'Batubulan', slug: 'batubulan', region: 'central', description: 'Stone carving and dance village', nearby: ['gianyar', 'denpasar', 'celuk', 'sukawati', 'sanur'] },
  { id: 'sukawati', displayName: 'Sukawati', slug: 'sukawati', region: 'central', description: 'Art market and traditional crafts', nearby: ['gianyar', 'batubulan', 'celuk', 'ubud'] },
  { id: 'celuk', displayName: 'Celuk', slug: 'celuk', region: 'central', description: 'Silver and gold jewelry village', nearby: ['sukawati', 'batubulan', 'gianyar', 'ubud'] },
  { id: 'bedugul', displayName: 'Bedugul', slug: 'bedugul', region: 'central', description: 'Mountain lakes and botanical gardens', nearby: ['munduk', 'tabanan', 'kintamani', 'pupuan'] },
  { id: 'tampaksiring', displayName: 'Tampaksiring', slug: 'tampaksiring', region: 'central', description: 'Holy springs and presidential palace', nearby: ['tegallalang', 'ubud', 'kintamani', 'pejeng'] },
  { id: 'mas', displayName: 'Mas (Ubud area)', slug: 'mas', region: 'central', synonyms: ['Mas'], description: 'Wood carving masters near Ubud', nearby: ['ubud', 'peliatan', 'sukawati', 'gianyar'] },
  { id: 'peliatan', displayName: 'Peliatan', slug: 'peliatan', region: 'central', description: 'Traditional dance and art village', nearby: ['ubud', 'mas', 'pengosekan', 'gianyar'] },
  { id: 'pengosekan', displayName: 'Pengosekan', slug: 'pengosekan', region: 'central', description: 'Art studios south of Ubud center', nearby: ['ubud', 'mas', 'peliatan', 'gianyar'] },
  { id: 'kedewatan', displayName: 'Kedewatan', slug: 'kedewatan', region: 'central', description: 'Valley views and luxury resorts', nearby: ['ubud', 'sayan', 'tegallalang', 'payangan'] },
  { id: 'sayan', displayName: 'Sayan', slug: 'sayan', region: 'central', description: 'Ayung River valley hideaway', nearby: ['ubud', 'kedewatan', 'pengosekan'] },
  { id: 'penestanan', displayName: 'Penestanan', slug: 'penestanan', region: 'central', description: 'Hillside village with rice views', nearby: ['ubud', 'sayan', 'kedewatan'] },
  { id: 'keliki', displayName: 'Keliki', slug: 'keliki', region: 'central', description: 'Rural retreat near Tegallalang', nearby: ['tegallalang', 'ubud', 'tampaksiring'] },
  { id: 'pejeng', displayName: 'Pejeng', slug: 'pejeng', region: 'central', description: 'Ancient temples and archaeology', nearby: ['ubud', 'tampaksiring', 'gianyar', 'tegallalang'] },
  { id: 'sebatu', displayName: 'Sebatu', slug: 'sebatu', region: 'central', description: 'Holy water pools and terraces', nearby: ['tegallalang', 'tampaksiring', 'ubud', 'pejeng'] },
  { id: 'toya-bungkah', displayName: 'Toya Bungkah', slug: 'toya-bungkah', region: 'central', description: 'Mount Batur base camp', nearby: ['kintamani', 'tampaksiring', 'tegallalang'] },
  { id: 'mengwi', displayName: 'Mengwi', slug: 'mengwi', region: 'central', description: 'Royal temple and ceremonies', nearby: ['tabanan', 'denpasar', 'bedugul', 'kerobokan'] },
  { id: 'belalang', displayName: 'Belalang', slug: 'belalang', region: 'central', description: 'Quiet hills near Ubud', nearby: ['ubud', 'tegallalang', 'tampaksiring'] },
  { id: 'kenderan', displayName: 'Kenderan', slug: 'kenderan', region: 'central', description: 'River valley near Ubud', nearby: ['ubud', 'tegallalang', 'sayan'] },
  { id: 'blimbingsari', displayName: 'Blimbingsari', slug: 'blimbingsari', region: 'central', description: 'Traditional village near Gianyar', nearby: ['gianyar', 'batubulan', 'ubud', 'sukawati'] },
  { id: 'belimbing', displayName: 'Belimbing', slug: 'belimbing', region: 'central', description: 'Scenic terraces and waterfalls', nearby: ['tabanan', 'pupuan', 'bedugul'] },
  { id: 'pupuan', displayName: 'Pupuan', slug: 'pupuan', region: 'central', description: 'Coffee plantations and cool climate', nearby: ['tabanan', 'bedugul', 'belimbing', 'munduk'] },

  // EAST BALI (Karangasem/Klungkung)
  { id: 'candidasa', displayName: 'Candidasa', slug: 'candidasa', region: 'east', description: 'Quiet beach town and diving base', nearby: ['padangbai', 'amed', 'manggis', 'amuk-bay', 'sidemen'] },
  { id: 'amed', displayName: 'Amed', slug: 'amed', region: 'east', description: 'Black sand beaches and snorkeling', nearby: ['tulamben', 'candidasa', 'tirtagangga', 'kubu'] },
  { id: 'tulamben', displayName: 'Tulamben', slug: 'tulamben', region: 'east', description: 'USSA Liberty wreck diving site', nearby: ['amed', 'kubu', 'tejakula', 'candidasa'] },
  { id: 'sidemen', displayName: 'Sidemen', slug: 'sidemen', region: 'east', description: 'Valley retreat with Mount Agung views', nearby: ['candidasa', 'rendang', 'selat', 'manggis', 'semarapura'] },
  { id: 'padangbai', displayName: 'Padangbai', slug: 'padangbai', region: 'east', description: 'Ferry port and Blue Lagoon beach', nearby: ['candidasa', 'manggis', 'semarapura', 'amuk-bay'] },
  { id: 'semarapura', displayName: 'Semarapura (Klungkung)', slug: 'semarapura', region: 'east', synonyms: ['Klungkung', 'Semarapura'], description: 'Historic royal court and markets', nearby: ['padangbai', 'candidasa', 'sidemen', 'gianyar', 'kusamba'] },
  { id: 'amuk-bay', displayName: 'Amuk Bay', slug: 'amuk-bay', region: 'east', description: 'Coastal development near Candidasa', nearby: ['candidasa', 'manggis', 'padangbai', 'kusamba'] },
  { id: 'manggis', displayName: 'Manggis (Candidasa region)', slug: 'manggis', region: 'east', synonyms: ['Manggis'], description: 'Seaside village near Candidasa', nearby: ['candidasa', 'padangbai', 'amuk-bay', 'sidemen'] },
  { id: 'tirtagangga', displayName: 'Tirtagangga area', slug: 'tirtagangga', region: 'east', synonyms: ['Tirtagangga'], description: 'Water palace and rice terraces', nearby: ['amed', 'candidasa', 'kubu', 'selat'] },
  { id: 'rendang', displayName: 'Rendang', slug: 'rendang', region: 'east', description: 'Gateway to Mount Agung treks', nearby: ['sidemen', 'selat', 'semarapura', 'candidasa'] },
  { id: 'selat', displayName: 'Selat (Karangasem)', slug: 'selat', region: 'east', synonyms: ['Selat'], description: 'Mountain village near Agung', nearby: ['rendang', 'sidemen', 'tirtagangga', 'amed'] },
  { id: 'kusamba', displayName: 'Kusamba', slug: 'kusamba', region: 'east', description: 'Traditional salt farming coast', nearby: ['semarapura', 'padangbai', 'candidasa', 'amuk-bay'] },
  { id: 'kubu', displayName: 'Kubu', slug: 'kubu', region: 'east', description: 'Peaceful fishing village', nearby: ['amed', 'tulamben', 'tirtagangga', 'tejakula'] },
  { id: 'duda', displayName: 'Duda', slug: 'duda', region: 'east', description: 'Traditional village in East Bali', nearby: ['selat', 'rendang', 'sidemen', 'candidasa'] },

  // NORTH BALI (Buleleng)
  { id: 'lovina', displayName: 'Lovina', slug: 'lovina', region: 'north', synonyms: ['Kalibukbuk'], description: 'Dolphin watching and calm black sand', nearby: ['singaraja', 'munduk', 'pemuteran', 'kalibukbuk', 'seririt'] },
  { id: 'kalibukbuk', displayName: 'Kalibukbuk (Lovina)', slug: 'kalibukbuk', region: 'north', synonyms: ['Kalibukbuk'], description: 'Lovina center with cafes and dive shops', nearby: ['lovina', 'singaraja', 'munduk', 'seririt'] },
  { id: 'singaraja', displayName: 'Singaraja', slug: 'singaraja', region: 'north', description: 'North coast capital and trade hub', nearby: ['lovina', 'munduk', 'kalibukbuk', 'tejakula', 'seririt'] },
  { id: 'munduk', displayName: 'Munduk', slug: 'munduk', region: 'north', description: 'Misty mountain coffee plantations', nearby: ['bedugul', 'lovina', 'singaraja', 'pupuan'] },
  { id: 'pemuteran', displayName: 'Pemuteran', slug: 'pemuteran', region: 'north', description: 'Coral reef restoration and diving', nearby: ['gilimanuk', 'lovina', 'singaraja', 'seririt'] },
  { id: 'tejakula', displayName: 'Tejakula', slug: 'tejakula', region: 'north', description: 'Hot springs and quiet coast', nearby: ['singaraja', 'tulamben', 'amed', 'kubu'] },
  { id: 'seririt', displayName: 'Seririt', slug: 'seririt', region: 'north', description: 'Market town en route to West Bali', nearby: ['lovina', 'pemuteran', 'singaraja', 'munduk'] },
  { id: 'anturan', displayName: 'Anturan', slug: 'anturan', region: 'north', description: 'Fishing village near Lovina', nearby: ['lovina', 'singaraja', 'kalibukbuk'] },
  { id: 'bondalem', displayName: 'Bondalem', slug: 'bondalem', region: 'north', description: 'Coastal village near Tejakula', nearby: ['tejakula', 'singaraja', 'tulamben'] },
  { id: 'temukus', displayName: 'Temukus', slug: 'temukus', region: 'north', description: 'North coast village near Singaraja', nearby: ['singaraja', 'tejakula', 'bondalem'] },
  { id: 'les', displayName: 'Les', slug: 'les', region: 'north', description: 'Peaceful bay with waterfalls', nearby: ['tejakula', 'singaraja', 'amed'] },

  // WEST BALI (Tabanan/Jembrana)
  { id: 'tabanan', displayName: 'Tabanan', slug: 'tabanan', region: 'west', description: 'Rice bowl capital and temples', nearby: ['mengwi', 'bedugul', 'beraban', 'pupuan', 'denpasar'] },
  { id: 'medewi', displayName: 'Medewi', slug: 'medewi', region: 'west', description: 'Long left surf break and black sand', nearby: ['gilimanuk', 'tabanan', 'yeh-sumbul'] },
  { id: 'gilimanuk', displayName: 'Gilimanuk', slug: 'gilimanuk', region: 'west', description: 'Java ferry port and national park', nearby: ['pemuteran', 'medewi', 'seririt'] },
  { id: 'selemadeg', displayName: 'Selemadeg', slug: 'selemadeg', region: 'west', description: 'Coastal rice terraces west of Tabanan', nearby: ['tabanan', 'medewi', 'yeh-gangga'] },
  { id: 'penebel', displayName: 'Penebel', slug: 'penebel', region: 'west', description: 'Mountain slopes near Bedugul', nearby: ['tabanan', 'bedugul', 'pupuan'] },
  { id: 'kediri-tabanan', displayName: 'Kediri (Tabanan)', slug: 'kediri-tabanan', region: 'west', synonyms: ['Kediri'], description: 'Traditional village in Tabanan', nearby: ['tabanan', 'mengwi', 'bedugul'] },
  { id: 'jatiluwih', displayName: 'Jatiluwih', slug: 'jatiluwih', region: 'west', description: 'UNESCO rice terraces', nearby: ['tabanan', 'penebel', 'bedugul', 'pupuan'] },
  { id: 'yeh-gangga', displayName: 'Yeh Gangga', slug: 'yeh-gangga', region: 'west', description: 'Remote surf beach west coast', nearby: ['tabanan', 'selemadeg', 'medewi'] },
  { id: 'yeh-sumbul', displayName: 'Yeh Sumbul', slug: 'yeh-sumbul', region: 'west', description: 'Quiet beach between Medewi and Gilimanuk', nearby: ['medewi', 'gilimanuk', 'selemadeg'] },
  { id: 'darmasaba', displayName: 'Darmasaba', slug: 'darmasaba', region: 'west', description: 'Rural village near Tabanan', nearby: ['tabanan', 'selemadeg', 'mengwi'] },
  { id: 'dencarik', displayName: 'Dencarik', slug: 'dencarik', region: 'west', description: 'Traditional area in Tabanan', nearby: ['tabanan', 'selemadeg', 'kediri-tabanan'] },
  { id: 'saba', displayName: 'Saba', slug: 'saba', region: 'west', description: 'Coastal village near Gianyar', nearby: ['gianyar', 'keramas', 'sanur', 'denpasar'] },
  { id: 'keramas', displayName: 'Keramas', slug: 'keramas', region: 'west', description: 'Surf break and beach near Gianyar', nearby: ['saba', 'gianyar', 'sanur', 'ketewel'] },
  { id: 'ketewel', displayName: 'Ketewel', slug: 'ketewel', region: 'west', description: 'Beach village between Sanur and Gianyar', nearby: ['sanur', 'gianyar', 'keramas', 'saba'] },
  { id: 'guwang', displayName: 'Guwang', slug: 'guwang', region: 'west', description: 'Beach spot near Sanur', nearby: ['sanur', 'gianyar', 'ketewel'] },
  { id: 'cepaka', displayName: 'Cepaka', slug: 'cepaka', region: 'west', description: 'Village in Tabanan regency', nearby: ['tabanan', 'mengwi', 'kediri-tabanan'] },
  { id: 'wongaya-gede', displayName: 'Wongaya Gede', slug: 'wongaya-gede', region: 'west', description: 'Traditional village in Tabanan', nearby: ['tabanan', 'penebel', 'bedugul'] },

  // NUSA ISLANDS
  { id: 'nusa-penida', displayName: 'Nusa Penida', slug: 'nusa-penida', region: 'nusa', description: 'Dramatic cliffs and pristine beaches', nearby: ['nusa-lembongan', 'nusa-ceningan', 'sanur', 'padangbai'] },
  { id: 'nusa-lembongan', displayName: 'Nusa Lembongan', slug: 'nusa-lembongan', region: 'nusa', description: 'Island escape with surf and snorkeling', nearby: ['nusa-ceningan', 'nusa-penida', 'jungut-batu', 'sanur'] },
  { id: 'nusa-ceningan', displayName: 'Nusa Ceningan', slug: 'nusa-ceningan', region: 'nusa', description: 'Small island between Lembongan and Penida', nearby: ['nusa-lembongan', 'nusa-penida', 'sanur'] },
  { id: 'jungut-batu', displayName: 'Jungut Batu (Nusa Lembongan)', slug: 'jungut-batu', region: 'nusa', synonyms: ['Jungut Batu'], description: 'Main village on Nusa Lembongan', nearby: ['nusa-lembongan', 'nusa-ceningan', 'nusa-penida'] },
];

export const REGION_INFO: Record<Region, { name: string; description: string }> = {
  south: {
    name: 'South Bali',
    description: 'Beach resorts, nightlife, and tourist hubs from Kuta to Uluwatu'
  },
  central: {
    name: 'Central Bali',
    description: 'Cultural heart with Ubud, rice terraces, and mountain temples'
  },
  east: {
    name: 'East Bali',
    description: 'Quiet diving spots, Mount Agung, and traditional villages'
  },
  north: {
    name: 'North Bali',
    description: 'Peaceful coast, dolphin tours, and coffee plantations'
  },
  west: {
    name: 'West Bali',
    description: 'Surf breaks, national park, and rural rice landscapes'
  },
  nusa: {
    name: 'Nusa Islands',
    description: 'Island escapes with dramatic cliffs and crystal waters'
  }
};

export function getAreaBySlug(slug: string): BaliArea | undefined {
  return BALI_AREAS.find(area => area.slug === slug);
}

export function getAreasByRegion(region: Region): BaliArea[] {
  return BALI_AREAS.filter(area => area.region === region);
}

export function getAllRegions(): Region[] {
  return ['south', 'central', 'east', 'north', 'west', 'nusa'];
}

export function getTopAreas(limit: number = 10): BaliArea[] {
  // Return most popular tourist areas
  const popularSlugs = ['seminyak', 'canggu', 'ubud', 'uluwatu', 'sanur', 'nusa-dua', 'kuta', 'legian', 'jimbaran', 'denpasar'];
  return BALI_AREAS.filter(area => popularSlugs.includes(area.slug)).slice(0, limit);
}
