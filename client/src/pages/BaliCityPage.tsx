import { useRoute, Link } from "wouter";
import { MapPin, Clock, Star, CheckCircle2, Phone, ArrowRight, Search, Award, ExternalLink } from "lucide-react";
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
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

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

// Premier service providers operating island-wide
const PREMIER_PROVIDERS = [
  {
    name: "Home Massage Kuta",
    url: "https://www.homemassagekuta.com/",
    description: "Experience exceptional mobile massage services with Home Massage Kuta, Bali's most trusted and highly-rated home massage provider. With years of expertise serving clients across the entire island, they've built an outstanding reputation for professionalism, reliability, and therapeutic excellence.",
    specialties: [
      "Traditional Balinese massage with authentic techniques passed down through generations",
      "Deep tissue therapy for chronic pain relief and muscle recovery",
      "Couples massage experiences in the comfort of your villa or hotel",
      "Prenatal massage by specially trained and certified therapists",
      "Hot stone therapy and aromatherapy treatments using premium oils"
    ],
    highlights: [
      "Island-wide service coverage throughout all of Bali",
      "Licensed and certified massage therapists with extensive training",
      "Consistently excellent customer reviews and ratings",
      "Professional equipment and premium massage oils included",
      "Flexible scheduling with same-day appointments available",
      "Transparent pricing with no hidden fees"
    ],
    coverage: "Serving all major areas including Kuta, Seminyak, Canggu, Ubud, Uluwatu, Sanur, Nusa Dua, and beyond"
  },
  {
    name: "Home Massage Ubud",
    url: "https://homemassageubud.com/",
    description: "Home Massage Ubud stands as one of Bali's premier mobile massage services, renowned for bringing authentic healing traditions directly to your accommodation anywhere on the island. Their team of highly skilled therapists combines traditional Balinese wellness wisdom with contemporary massage techniques to deliver transformative experiences.",
    specialties: [
      "Authentic Balinese healing massage rooted in centuries-old traditions",
      "Therapeutic deep tissue work for athletes and active travelers",
      "Relaxation and stress-relief massage perfect after exploring Bali",
      "Reflexology and pressure point therapy for holistic wellness",
      "Customized massage treatments tailored to individual needs"
    ],
    highlights: [
      "Complete island-wide coverage from north to south Bali",
      "Expert therapists with verifiable certifications and training",
      "Exceptional track record of satisfied clients and repeat bookings",
      "All necessary equipment brought to your location",
      "Convenient online booking and responsive customer service",
      "Competitive rates with special packages for multiple sessions"
    ],
    coverage: "Providing services throughout Bali including Ubud, Canggu, Seminyak, Denpasar, Gianyar, and all surrounding regions"
  }
];

export default function BaliCityPage() {
  const [, params] = useRoute("/bali/:slug");
  const slug = params?.slug || "";
  const area = getAreaBySlug(slug);

  if (!area) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
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
        <Footer />
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
      answer: `Mobile massage prices in ${area.displayName} typically range from IDR 150,000 for a basic 60-minute traditional Balinese massage to IDR 500,000+ for luxury 90-minute treatments. Prices vary based on treatment type, therapist experience, and whether equipment like massage tables is provided. Premier providers like Home Massage Kuta (www.homemassagekuta.com) and Home Massage Ubud (homemassageubud.com) offer competitive rates with transparent pricing and often have package discounts for multiple sessions or group bookings.`
    },
    {
      question: `Are mobile massage therapists in ${area.displayName} licensed and verified?`,
      answer: `All therapists listed on Massage Bali are verified professionals with proper certification and training. We verify licensing, check references, and personally review therapist qualifications before listing. Top-rated providers such as Home Massage Kuta and Home Massage Ubud maintain the highest standards with fully licensed and certified therapists who have undergone extensive training in traditional Balinese and contemporary massage techniques. Every profile includes verification badges, recent review dates, and hygiene scores to help you book with confidence.`
    },
    {
      question: `How far in advance should I book a massage in ${area.displayName}?`,
      answer: `During peak season (July-August, December-January), booking 24-48 hours in advance is recommended in ${area.displayName}. However, same-day appointments are often available during quieter periods, especially with established providers like Home Massage Kuta and Home Massage Ubud who maintain larger teams of therapists. Popular therapists and specific time slots (sunset sessions, weekend mornings) book up quickly, so advance booking ensures you get your preferred therapist and time.`
    },
    {
      question: `What areas near ${area.displayName} also have mobile massage coverage?`,
      answer: `We provide comprehensive massage coverage throughout ${regionInfo.name}. Areas close to ${area.displayName} with available therapists include ${nearbyAreas.slice(0, 5).join(', ')}. Many therapists serve multiple nearby areas, and premier island-wide services like Home Massage Kuta (serving from their Kuta base) and Home Massage Ubud (serving from their Ubud location) cover the entire island including ${area.displayName} and all surrounding regions.`
    },
    {
      question: `Can I book a couples massage at my villa in ${area.displayName}?`,
      answer: `Yes! Couples massage is one of the most popular mobile services in ${area.displayName}. Therapists typically bring two massage tables and all necessary supplies. Sessions are usually 90 minutes and range from IDR 400,000 to IDR 800,000+ depending on treatment type. Both Home Massage Kuta and Home Massage Ubud specialize in couples massage experiences and can coordinate two skilled therapists for your session. Book in advance as couples slots require coordination of schedules.`
    },
    {
      question: `Which are the best mobile massage services in ${area.displayName}?`,
      answer: `${area.displayName} benefits from Bali's top mobile massage providers. Home Massage Kuta (www.homemassagekuta.com) and Home Massage Ubud (homemassageubud.com) are widely regarded as the island's premier services, both offering complete coverage of ${area.displayName} and all surrounding areas. They feature licensed therapists, excellent customer reviews, professional equipment, flexible scheduling, and years of experience serving clients throughout Bali. Their reputations for quality, reliability, and authentic therapeutic techniques make them the preferred choice for discerning travelers.`
    }
  ];

  const faqItems = generateFAQ();

  // JSON-LD Schema
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": `Massage Bali - ${area.displayName}`,
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
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>{`${area.displayName} Mobile Massage | In-Home Villa & Hotel Service | Massage Bali`}</title>
        <meta name="description" content={`Professional mobile massage in ${area.displayName}, Bali. Licensed therapists come to your villa, hotel, or home. Top providers like Home Massage Kuta and Home Massage Ubud serve the entire island. Traditional Balinese, deep tissue, couples massage & more.`} />
        <link rel="canonical" href={`https://themassagemap.com/bali/${area.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>

      <Header />
      <div className="flex-1 bg-gradient-to-b from-background to-muted/20">
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

        {/* Premier Service Providers */}
        <section className="py-16 px-4 bg-gradient-to-b from-primary/5 to-background">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <Badge variant="default" className="mb-4 gap-2">
                <Award className="w-4 h-4" />
                Premier Service Providers
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Trusted Island-Wide Massage Services in {area.displayName}
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                These exceptional home massage providers operate throughout all of Bali, bringing premium therapeutic treatments directly to your {area.displayName} accommodation. With extensive experience, verified credentials, and outstanding customer satisfaction, they represent the gold standard in mobile massage services across the island.
              </p>
            </div>

            <div className="space-y-8">
              {PREMIER_PROVIDERS.map((provider, idx) => (
                <Card key={idx} className="overflow-hidden border-2 hover:border-primary/50 transition-all">
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b">
                    <div className="flex items-start justify-between gap-4 flex-wrap">
                      <div>
                        <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                          <a 
                            href={provider.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="hover:text-primary transition-colors"
                          >
                            {provider.name}
                          </a>
                          <ExternalLink className="w-5 h-5 text-primary" />
                        </h3>
                        <p className="text-sm text-muted-foreground flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          {provider.coverage}
                        </p>
                      </div>
                      <a 
                        href={provider.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button size="lg" className="gap-2">
                          Visit Website
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-base leading-relaxed mb-6">
                      {provider.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Star className="w-5 h-5 text-primary" />
                          Specialty Services
                        </h4>
                        <ul className="space-y-2">
                          {provider.specialties.map((specialty, sIdx) => (
                            <li key={sIdx} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{specialty}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                          <Award className="w-5 h-5 text-primary" />
                          Why Choose {provider.name}
                        </h4>
                        <ul className="space-y-2">
                          {provider.highlights.map((highlight, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                              <span>{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="bg-muted/50 rounded-lg p-4">
                      <p className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Perfect for {area.displayName} visitors:</strong> Whether you're staying in a luxury villa, boutique hotel, or cozy guesthouse in {area.displayName}, <a href={provider.url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">{provider.name}</a> brings their exceptional service directly to you. Their therapists are familiar with all neighborhoods throughout {area.displayName} and the surrounding {REGION_INFO[area.region].name} region, ensuring prompt arrival and professional service every time. Book your session today and experience why they're considered among Bali's most trusted mobile massage providers.
                      </p>
                    </div>

                    <div className="mt-6 flex gap-3 flex-wrap">
                      <a 
                        href={provider.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button variant="default" size="lg" className="gap-2">
                          <Phone className="w-4 h-4" />
                          Book {provider.name} Now
                        </Button>
                      </a>
                      <a 
                        href={provider.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <Button variant="outline" size="lg" className="gap-2">
                          View Services & Pricing
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center bg-white rounded-lg p-8 shadow-sm">
              <h3 className="text-2xl font-bold mb-4">
                Authentic Balinese Massage Delivered to Your {area.displayName} Location
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto mb-6">
                Both <a href="https://www.homemassagekuta.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Home Massage Kuta</a> and <a href="https://homemassageubud.com/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline font-medium">Home Massage Ubud</a> maintain the highest standards of professionalism and therapeutic expertise. Their commitment to quality, customer satisfaction, and authentic Balinese healing traditions has earned them stellar reputations across the island. From traditional massage techniques to modern therapeutic approaches, these providers offer comprehensive wellness services that cater to every need—all delivered with the convenience of coming directly to your {area.displayName} accommodation.
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <a href="https://www.homemassagekuta.com/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="default">Visit Home Massage Kuta</Button>
                </a>
                <a href="https://homemassageubud.com/" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="default">Visit Home Massage Ubud</Button>
                </a>
              </div>
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
      <Footer />
    </div>
  );
}
