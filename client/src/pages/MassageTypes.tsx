import { useLocation } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CATEGORIES } from "@/lib/mockData";
import { Activity, Flower2, Heart, Flame, Footprints, Droplets, Sparkles, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

// Map icons to Lucide components
const IconMap = {
  'Activity': Activity,
  'Flower2': Flower2,
  'Heart': Heart,
  'Flame': Flame,
  'Footprints': Footprints,
  'Droplets': Droplets
};

// Popular massage types with detailed pages
const FEATURED_MASSAGE_TYPES = [
  {
    id: "balinese-massage",
    slug: "balinese-massage",
    name: "Balinese Massage",
    description: "Traditional Indonesian healing combining acupressure, aromatherapy, and gentle stretching for holistic relaxation.",
    icon: Flower2,
    category: "Traditional"
  },
  {
    id: "swedish-massage",
    slug: "swedish-massage",
    name: "Swedish Massage",
    description: "Classic relaxation technique using long flowing strokes, kneading, and circular movements for stress relief.",
    icon: Heart,
    category: "Relaxation"
  },
  {
    id: "deep-tissue-massage",
    slug: "deep-tissue-massage",
    name: "Deep Tissue Massage",
    description: "Targets deeper muscle layers with firm pressure to release chronic tension and alleviate pain.",
    icon: Activity,
    category: "Therapeutic"
  },
  {
    id: "thai-massage",
    slug: "thai-massage",
    name: "Thai Massage",
    description: "Ancient bodywork combining acupressure and assisted yoga stretches for flexibility and energy flow.",
    icon: Footprints,
    category: "Traditional"
  },
  {
    id: "hot-stone-massage",
    slug: "hot-stone-massage",
    name: "Hot Stone Massage",
    description: "Heated stones warm and loosen tight muscles, promoting deep relaxation and improved circulation.",
    icon: Flame,
    category: "Specialty"
  }
];

export default function MassageTypes() {
  const [, setLocation] = useLocation();

  const handleCategoryClick = (slug: string) => {
    setLocation(`/bali/${slug}`);
  };

  const handleMassageTypeClick = (slug: string) => {
    setLocation(`/massage-types/${slug}`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Find Your Perfect Massage
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto leading-relaxed">
            Whether you need deep healing or gentle relaxation, explore different massage modalities and find the treatment that's right for you.
          </p>
        </div>
      </div>

      {/* Featured Massage Types Section */}
      <section className="py-20 bg-gradient-to-b from-slate-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Popular Massage Types
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore detailed guides for the most sought-after massage modalities in Bali
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {FEATURED_MASSAGE_TYPES.map(massageType => {
              const Icon = massageType.icon;
              return (
                <div
                  key={massageType.id}
                  className="group bg-white rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1"
                  onClick={() => handleMassageTypeClick(massageType.slug)}
                >
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-full bg-primary/5 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8" />
                    </div>
                    <div className="mb-3 text-xs font-semibold text-primary uppercase tracking-wide">
                      {massageType.category}
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {massageType.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {massageType.description}
                    </p>
                    <Button
                      variant="ghost"
                      className="group-hover:bg-primary/5 group-hover:text-primary transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleMassageTypeClick(massageType.slug);
                      }}
                    >
                      Learn More →
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              More massage types coming soon! Including Aromatherapy, Reflexology, Sports Massage, Shiatsu, and many more.
            </p>
          </div>
        </div>
      </section>

      {/* Browse by Category Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Browse Spas by Category
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find spas and wellness centers offering your preferred massage style
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {CATEGORIES.map(category => {
              const Icon = IconMap[category.icon as keyof typeof IconMap] || Sparkles;
              return (
                <div
                  key={category.id}
                  className="group bg-slate-50 rounded-2xl border border-border shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer hover:-translate-y-1"
                  onClick={() => handleCategoryClick(category.slug)}
                >
                  <div className="p-8">
                    <div className="w-16 h-16 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-teal-600 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {category.description}
                    </p>
                    <Button
                      variant="ghost"
                      className="group-hover:bg-teal-50 group-hover:text-teal-600 transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCategoryClick(category.slug);
                      }}
                    >
                      Browse {category.name} Spas →
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-teal-50 to-purple-50 rounded-3xl p-8 md:p-12 border border-teal-100">
            <h2 className="text-3xl font-bold text-center text-teal-900 mb-12">
              Benefits of Regular Massage
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { title: "Stress Relief", desc: "Lower cortisol levels and promote mental clarity" },
                { title: "Pain Management", desc: "Alleviate chronic pain and muscle tension" },
                { title: "Better Sleep", desc: "Improve sleep quality and reduce insomnia" },
                { title: "Circulation", desc: "Enhance blood flow and lymphatic drainage" }
              ].map((benefit, i) => (
                <div key={i} className="text-center">
                  <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-bold text-teal-900 mb-2">{benefit.title}</h3>
                  <p className="text-teal-700 text-sm">{benefit.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ Section */}
          <div className="max-w-3xl mx-auto mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">Common Questions</h2>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-foreground">How do I choose the right massage type?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Consider your goals: relaxation (try Balinese or Aromatherapy), pain relief (Deep Tissue), or
                  holistic healing (Reflexology). When in doubt, ask the spa staff for recommendations based on your needs.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-foreground">What's the typical price range in Bali?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  You can find quality massages from 100,000 IDR (~$7 USD) at local spas up to 1,000,000+ IDR (~$70 USD)
                  at luxury resorts. Most mid-range options fall between 200,000-400,000 IDR.
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                <h3 className="font-bold text-lg mb-2 text-foreground">Should I tip my therapist?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Tipping is appreciated but not mandatory in Bali. If you had an excellent experience, 10-20% or
                  20,000-50,000 IDR is a generous gesture that goes a long way for local therapists.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
