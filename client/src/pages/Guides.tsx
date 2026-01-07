import { useLocation } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookOpen, TrendingUp, MapPin, Heart, Calendar, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import guideImage from '@assets/generated_images/guide:_best_massage_in_canggu.png';
import spaInterior from '@assets/generated_images/professional_massage_therapy_room.png';
import detailImage from '@assets/generated_images/spa_oils_and_flowers_detail.png';
import { HERO_IMAGES } from "@/lib/constants";

interface Guide {
  id: string;
  title: string;
  slug: string;
  category: string;
  readTime: string;
  publishDate: string;
  image: string;
  excerpt: string;
  featured?: boolean;
}

const GUIDES: Guide[] = [
  {
    id: '1',
    title: 'The Ultimate Guide to Massage in Canggu (2026 Edition)',
    slug: 'best-massage-canggu-2026',
    category: 'Area Guide',
    readTime: '8 min',
    publishDate: '2026-01-05',
    image: guideImage,
    excerpt: 'From luxury beachside spas to hidden affordable gems, we\'ve ranked the top 10 places you need to visit in Bali\'s trendiest neighborhood.',
    featured: true
  },
  {
    id: '2',
    title: 'Traditional Balinese Massage: What to Expect',
    slug: 'traditional-balinese-massage-guide',
    category: 'Massage Types',
    readTime: '5 min',
    publishDate: '2026-01-03',
    image: spaInterior,
    excerpt: 'Learn about the ancient techniques, cultural significance, and health benefits of this iconic Balinese healing practice.',
    featured: true
  },
  {
    id: '3',
    title: 'Budget Massage in Ubud: Quality Under 200k IDR',
    slug: 'budget-massage-ubud',
    category: 'Area Guide',
    readTime: '6 min',
    publishDate: '2025-12-28',
    image: HERO_IMAGES.LUXURY_SPA,
    excerpt: 'You don\'t need to spend a fortune for a great massage. Here are our favorite affordable spots in Ubud that don\'t compromise on quality.'
  },
  {
    id: '4',
    title: 'Couples Massage: Top 5 Romantic Spa Experiences',
    slug: 'couples-massage-romantic-spas',
    category: 'Special Experiences',
    readTime: '7 min',
    publishDate: '2025-12-20',
    image: detailImage,
    excerpt: 'Celebrate love with these intimate spa packages perfect for couples, honeymooners, and special occasions.'
  },
  {
    id: '5',
    title: 'Deep Tissue vs Swedish: Which Should You Choose?',
    slug: 'deep-tissue-vs-swedish-massage',
    category: 'Massage Types',
    readTime: '4 min',
    publishDate: '2025-12-15',
    image: spaInterior,
    excerpt: 'Understanding the difference between massage styles can help you choose the right treatment for your body\'s needs.'
  },
  {
    id: '6',
    title: 'Spa Etiquette in Bali: Do\'s and Don\'ts',
    slug: 'spa-etiquette-bali',
    category: 'Travel Tips',
    readTime: '5 min',
    publishDate: '2025-12-10',
    image: heroImage,
    excerpt: 'Navigate local customs, tipping culture, and expectations to ensure a smooth and respectful spa experience in Bali.'
  },
  {
    id: '7',
    title: 'Best Luxury Spas in Seminyak for Ultimate Indulgence',
    slug: 'luxury-spas-seminyak',
    category: 'Area Guide',
    readTime: '9 min',
    publishDate: '2025-12-05',
    image: detailImage,
    excerpt: 'Treat yourself to world-class facilities, ocean views, and five-star service at these premium wellness destinations.'
  },
  {
    id: '8',
    title: 'Prenatal Massage Safety: What You Need to Know',
    slug: 'prenatal-massage-safety-bali',
    category: 'Health & Wellness',
    readTime: '6 min',
    publishDate: '2025-11-28',
    image: spaInterior,
    excerpt: 'Expecting mothers can safely enjoy massage therapy. Here\'s how to find certified prenatal therapists in Bali.'
  }
];

const CATEGORIES_LIST = Array.from(new Set(GUIDES.map(g => g.category)));

export default function Guides() {
  const [, setLocation] = useLocation();
  const featuredGuides = GUIDES.filter(g => g.featured);
  const regularGuides = GUIDES.filter(g => !g.featured);

  const navigateToGuide = (slug: string) => {
    setLocation(`/guides/${slug}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <div className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={HERO_IMAGES.LUXURY_SPA} 
            alt="Wellness Guides Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 py-32 text-center">
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm border-2 border-white/20">
                <BookOpen className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight drop-shadow-lg">
              Wellness Guides
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Expert advice, area rankings, and insider tips to help you make the most of Bali's incredible spa scene.
            </p>
          </div>
        </div>
      </div>

      {/* Featured Guides */}
      {featuredGuides.length > 0 && (
        <section className="py-16 bg-background border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-3xl font-bold">Featured Guides</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredGuides.map(guide => (
                <div
                  key={guide.id}
                  onClick={() => navigateToGuide(guide.slug)}
                  className="group bg-white rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={guide.image}
                      alt={guide.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-primary text-primary-foreground font-semibold">
                        {guide.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {guide.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                      {guide.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center gap-4">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(guide.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {guide.readTime}
                        </span>
                      </div>
                      <Button variant="ghost" size="sm" className="group-hover:text-primary">
                        Read More <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Category Filter Pills */}
      <section className="py-8 bg-slate-50 border-b border-border sticky top-16 z-30">
        <div className="container mx-auto px-4">
          <div className="flex items-center gap-3 overflow-x-auto pb-2 scrollbar-hide">
            <span className="text-sm font-semibold text-muted-foreground whitespace-nowrap">Filter:</span>
            <button className="px-4 py-2 rounded-full bg-primary text-primary-foreground text-sm font-medium whitespace-nowrap">
              All Guides
            </button>
            {CATEGORIES_LIST.map(cat => (
              <button
                key={cat}
                className="px-4 py-2 rounded-full bg-white border border-border text-sm font-medium whitespace-nowrap hover:bg-slate-100 transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* All Guides Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">All Guides</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularGuides.map(guide => (
              <div
                key={guide.id}
                onClick={() => navigateToGuide(guide.slug)}
                className="group bg-white rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={guide.image}
                    alt={guide.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3">
                    <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm text-foreground font-medium text-xs">
                      {guide.category}
                    </Badge>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="text-lg font-bold mb-2 text-foreground group-hover:text-primary transition-colors line-clamp-2">
                    {guide.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                    {guide.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t border-border">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {new Date(guide.publishDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {guide.readTime}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-gradient-to-br from-teal-50 to-amber-50 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl font-bold mb-4 text-foreground">Get Weekly Wellness Tips</h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Subscribe to our newsletter for new guides, exclusive spa discounts, and the latest wellness trends in Bali.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg" className="whitespace-nowrap">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
