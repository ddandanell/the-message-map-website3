import { useRoute, Link } from "wouter";
import { MapPin, Clock, Star, CheckCircle2, Phone, ArrowRight, Search } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { getAreaBySlug, REGION_INFO } from "@/data/baliAreas";
import { Helmet } from "react-helmet";

const POPULAR_TREATMENTS = [
  {
    name: "Traditional Balinese Massage",
    duration: "60-90 min",
    price: "IDR 150k-300k",
    icon: "🌺",
    description: "Gentle stretching, acupressure, and aromatherapy oils"
  },
  {
    name: "Deep Tissue Massage",
    duration: "60-90 min",
    price: "IDR 200k-400k",
    icon: "💪",
    description: "Target muscle tension and chronic pain relief"
  },
  {
    name: "Couples Massage",
    duration: "90 min",
    price: "IDR 400k-800k",
    icon: "💑",
    description: "Side-by-side massage experience for two"
  },
  {
    name: "Hot Stone Massage",
    duration: "90 min",
    price: "IDR 300k-500k",
    icon: "🔥",
    description: "Heated stones to melt away tension and stress"
  },
  {
    name: "Prenatal Massage",
    duration: "60 min",
    price: "IDR 200k-400k",
    icon: "🤰",
    description: "Safe, specialized massage for expecting mothers"
  },
  {
    name: "Reflexology",
    duration: "45-60 min",
    price: "IDR 100k-250k",
    icon: "🦶",
    description: "Pressure point therapy focusing on feet and hands"
  }
];

const HOW_IT_WORKS = [
  {
    step: 1,
    title: "Browse & Select",
    description: "Choose from verified massage therapists in your area with transparent pricing and reviews"
  },
  {
    step: 2,
    title: "Book Your Session",
    description: "Contact directly via WhatsApp or phone to schedule your preferred time and treatment"
  },
  {
    step: 3,
    title: "Therapist Arrives",
    description: "Licensed therapist comes to your villa, hotel, or home with professional equipment and oils"
  },
  {
    step: 4,
    title: "Relax & Enjoy",
    description: "Experience a professional massage in the comfort and privacy of your own space"
  }
];

export default function BaliCityPage() {
  const [, params] = useRoute("/bali/:slug");
  const slug = params?.slug || "";
  const area = getAreaBySlug(slug);

  if (!area) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Area Not Found</h1>
          <p className="text-muted-foreground mb-6">
            We couldn't find the area you're looking for.
          </p>
          <Link href="/bali">
            <a>
              <Button>View All Areas</Button>
            </a>
          </Link>
        </div>
      </div>
    );
  }

  const regionInfo = REGION_INFO[area.region];
  const nearbyAreas = area.nearby || [];

  // Generate unique intro based on area characteristics
  const generateIntro = () => {
    const intros = {
      seminyak: "Located in the heart of South Bali's most sophisticated beach resort area, Seminyak offers a perfect blend of luxury spas and professional mobile massage services. Whether you're staying in a beachfront villa or boutique hotel, verified therapists bring premium treatments directly to your door, combining traditional Balinese techniques with modern wellness practices.",
      canggu: "Canggu's laid-back surf culture meets world-class wellness with professional massage therapists serving villas, co-living spaces, and beachside accommodations throughout the area. From post-surf deep tissue treatments to sunset couples massages, local therapists specialize in mobile services that match Canggu's relaxed lifestyle while maintaining the highest standards of professionalism.",
      ubud: "As Bali's spiritual and cultural center, Ubud attracts wellness seekers from around the world. Beyond the famous spa resorts, professional mobile massage therapists bring authentic Balinese healing traditions directly to your villa, guesthouse, or jungle retreat. Experience traditional techniques passed down through generations, enhanced by the serene energy that makes Ubud special.",
      uluwatu: "Perched on dramatic clifftops overlooking the Indian Ocean, Uluwatu combines stunning natural beauty with premium wellness services. Mobile massage therapists serving this exclusive area specialize in luxury villa treatments, offering everything from oceanview relaxation massages to intensive sports therapy for surfers tackling the legendary breaks below.",
      nusadua: "Nusa Dua's pristine beaches and world-class resorts are complemented by professional mobile massage services that bring spa-quality treatments to your hotel room or villa. Therapists serving this premium area are experienced with international wellness standards, offering both traditional Balinese healing and contemporary massage modalities in an atmosphere of five-star luxury.",
      sanur: "Sanur's peaceful beachfront and family-friendly atmosphere extend to its wellness offerings, where professional mobile massage therapists provide relaxing treatments in villas, hotels, and beachside accommodations. Known for gentle, therapeutic approaches, Sanur's therapists excel at creating calming experiences perfect for families, couples, and solo travelers seeking tranquil rejuvenation.",
      kuta: "As Bali's original beach resort destination, Kuta offers accessible wellness services with mobile massage therapists serving hotels, guesthouses, and budget accommodations throughout the bustling beachfront area. Therapists here excel at providing quality treatments at competitive prices, perfect for travelers seeking authentic Balinese massage without luxury resort premiums.",
      default: `Professional mobile massage services in ${area.displayName} bring authentic Balinese wellness traditions directly to your accommodation. Whether you're staying in a luxury villa, boutique hotel, or cozy guesthouse, verified local therapists provide premium treatments in the comfort and privacy of your own space, combining traditional healing techniques with modern convenience.`
    };

    return intros[area.slug as keyof typeof intros] || intros.default;
  };

  // Generate city-specific FAQ
  const generateFAQ = () => [
    {
      question: `How much does in-home massage cost in ${area.displayName}?`,
      answer: `Mobile massage prices in ${area.displayName} typically range from IDR 150,000 for a basic 60-minute traditional Balinese massage to IDR 500,000+ for luxury 90-minute treatments. Prices vary based on treatment type, therapist experience, and whether equipment like massage tables is provided. Many therapists offer package discounts for multiple sessions or group bookings.`
    },
    {
      question: `Are mobile massage therapists in ${area.displayName} licensed and verified?`,
      answer: `All therapists listed on The Massage Map are verified professionals with proper certification and training. We verify licensing, check references, and personally review therapist qualifications before listing. Every profile includes verification badges, recent review dates, and hygiene scores to help you book with confidence.`
    },
    {
      question: `How far in advance should I book a massage in ${area.displayName}?`,
      answer: `During peak season (July-August, December-January), booking 24-48 hours in advance is recommended in ${area.displayName}. However, same-day appointments are often available during quieter periods. Popular therapists and specific time slots (sunset sessions, weekend mornings) book up quickly, so advance booking ensures you get your preferred therapist and time.`
    },
    {
      question: `What areas near ${area.displayName} also have mobile massage coverage?`,
      answer: `We provide comprehensive massage coverage throughout ${regionInfo.name}. Areas close to ${area.displayName} with available therapists include ${nearbyAreas.slice(0, 5).join(', ')}. Many therapists serve multiple nearby areas, so you'll often find the same verified professionals available across the region.`
    },
    {
      question: `Can I book a couples massage at my villa in ${area.displayName}?`,
      answer: `Yes! Couples massage is one of the most popular mobile services in ${area.displayName}. Therapists typically bring two massage tables and all necessary supplies. Sessions are usually 90 minutes and range from IDR 400,000 to IDR 800,000+ depending on treatment type. Book in advance as couples slots require coordination of two therapists' schedules.`
    }
  ];

  const faqItems = generateFAQ();

  // JSON-LD Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `The Massage Map - ${area.displayName}`,
    "description": `Professional mobile massage services in ${area.displayName}, Bali. Licensed therapists provide in-home, villa, and hotel massage treatments.`,
    "areaServed": {
      "@type": "City",
      "name": area.displayName,
      "containedIn": {
        "@type": "State",
        "name": "Bali",
        "containedIn": {
          "@type": "Country",
          "name": "Indonesia"
        }
      }
    },
    "url": `https://themassagemap.com/bali/${area.slug}`,
    "priceRange": "IDR 150,000 - IDR 500,000"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqItems.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>{`${area.displayName} Mobile Massage | In-Home Villa & Hotel Service | The Massage Map`}</title>
        <meta name="description" content={`Professional mobile massage in ${area.displayName}, Bali. Licensed therapists come to your villa, hotel, or home. Traditional Balinese, deep tissue, couples massage & more. Book verified therapists now.`} />
        <link rel="canonical" href={`https://themassagemap.com/bali/${area.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
        {/* Breadcrumb */}
        <nav className="pt-20 pb-4 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Link href="/"><a className="hover:text-primary">Home</a></Link>
              <span>/</span>
              <Link href="/bali"><a className="hover:text-primary">Bali Areas</a></Link>
              <span>/</span>
              <span className="text-foreground">{area.displayName}</span>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <section className="pb-12 px-4">
          <div className="container mx-auto max-w-6xl">
            <Badge variant="secondary" className="mb-4">
              {regionInfo.name}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Mobile Massage in {area.displayName}
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-4xl">
              {generateIntro()}
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/">
                <a>
                  <Button size="lg" className="gap-2">
                    <Search className="w-5 h-5" />
                    Find Therapists in {area.displayName}
                  </Button>
                </a>
              </Link>
              <Link href="/contact">
                <a>
                  <Button size="lg" variant="outline" className="gap-2">
                    <Phone className="w-5 h-5" />
                    Contact Us
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </section>

        {/* Popular Treatments */}
        <section className="py-12 px-4 bg-white">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-2">Popular Massage Treatments</h2>
            <p className="text-muted-foreground mb-8">
              Available for in-home service in {area.displayName}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {POPULAR_TREATMENTS.map((treatment, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">{treatment.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{treatment.name}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {treatment.duration}
                      </span>
                      <span className="font-medium text-primary">{treatment.price}</span>
                    </div>
                    <p className="text-sm text-muted-foreground">{treatment.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold mb-2 text-center">How Mobile Massage Works</h2>
            <p className="text-muted-foreground text-center mb-12">
              Professional spa-quality treatments in your {area.displayName} accommodation
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {HOW_IT_WORKS.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center text-2xl font-bold text-primary mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Coverage */}
        <section className="py-12 px-4 bg-primary/5">
          <div className="container mx-auto max-w-6xl">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-4">
                  Full Coverage Across {area.displayName}
                </h2>
                <p className="text-muted-foreground mb-6">
                  Our verified massage therapists serve all neighborhoods and accommodations
                  throughout {area.displayName}. Whether you're staying in a luxury villa,
                  boutique hotel, guesthouse, or private residence, professional mobile massage
                  services are available 7 days a week.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Licensed therapists with verified credentials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Same-day and advance booking available</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>All equipment and premium oils provided</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Transparent pricing with no hidden fees</span>
                  </li>
                </ul>
              </div>

              <Card className="p-8">
                <h3 className="text-xl font-semibold mb-4">Available Hours</h3>
                <div className="space-y-4 text-sm">
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Monday - Sunday</span>
                    <span className="font-medium">9:00 AM - 10:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2 border-b">
                    <span className="text-muted-foreground">Last Booking</span>
                    <span className="font-medium">8:00 PM</span>
                  </div>
                  <div className="flex justify-between py-2">
                    <span className="text-muted-foreground">Response Time</span>
                    <span className="font-medium">Usually within 1 hour</span>
                  </div>
                </div>
                <p className="text-xs text-muted-foreground mt-6">
                  Individual therapist hours may vary. Check specific profiles for exact availability.
                </p>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-2 text-center">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-center mb-8">
              Everything you need to know about mobile massage in {area.displayName}
            </p>

            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((faq, idx) => (
                <AccordionItem key={idx} value={`item-${idx}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Nearby Areas */}
        {nearbyAreas.length > 0 && (
          <section className="py-12 px-4 bg-muted/30">
            <div className="container mx-auto max-w-6xl">
              <h2 className="text-2xl font-bold mb-6">
                Mobile Massage in Nearby Areas
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
                {nearbyAreas.slice(0, 8).map(nearbySlug => {
                  const nearbyArea = getAreaBySlug(nearbySlug);
                  if (!nearbyArea) return null;
                  return (
                    <Link key={nearbySlug} href={`/bali/${nearbySlug}`}>
                      <a className="flex items-center gap-2 p-3 bg-white rounded-lg hover:shadow-md transition-shadow group">
                        <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-sm font-medium group-hover:text-primary transition-colors">
                          {nearbyArea.displayName}
                        </span>
                      </a>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 px-4 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Book Your Massage in {area.displayName}?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Browse verified therapists, read reviews, and book your perfect in-home massage today
            </p>
            <Link href="/">
              <a>
                <Button size="lg" variant="secondary" className="gap-2">
                  View Available Therapists
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </a>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}
