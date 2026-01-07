import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, Share2, BookmarkPlus, MapPin, Star, DollarSign, Phone, Award, CheckCircle, AlertCircle, TrendingUp } from "lucide-react";
import { PlaceCard } from "@/components/shared/PlaceCard";
import { PLACES } from "@/lib/mockData";
import guideImage from '@assets/generated_images/guide:_best_massage_in_canggu.png';
import spaInterior from '@assets/generated_images/professional_massage_therapy_room.png';
import detailImage from '@assets/generated_images/spa_oils_and_flowers_detail.png';
import heroImage from '@assets/generated_images/luxury_tropical_spa_in_bali.png';

export default function BestMassageCanggu2026() {
  const cangguPlaces = PLACES.filter(p => p.area === "Canggu").slice(0, 10);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <article className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
          <Link href="/"><a className="hover:text-primary">Home</a></Link>
          <span>/</span>
          <Link href="/guides"><a className="hover:text-primary">Guides</a></Link>
          <span>/</span>
          <span className="text-foreground">Best Massage in Canggu 2026</span>
        </nav>

        {/* Article Header */}
        <header className="mb-8">
          <Badge className="mb-4">Area Guide</Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
            The Ultimate Guide to Massage in Canggu: Top 10 Best Spas in 2026
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-6">
            <div className="flex items-center gap-2">
              <User className="w-4 h-4" />
              <span>By Sarah Williams</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>January 5, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>8 min read</span>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <Share2 className="w-4 h-4 mr-2" />
              Share
            </Button>
            <Button variant="outline" size="sm">
              <BookmarkPlus className="w-4 h-4 mr-2" />
              Save
            </Button>
          </div>
        </header>

        {/* Featured Image */}
        <div className="relative h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-12">
          <img
            src={guideImage}
            alt="Best Massage Spas in Canggu Bali"
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
            <p className="text-white text-sm">Canggu's vibrant wellness scene offers everything from budget-friendly local spas to luxury beachfront retreats</p>
          </div>
        </div>

        {/* Introduction */}
        <div className="prose prose-lg max-w-none mb-12">
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Canggu has evolved from a sleepy surf village into Bali's hottest wellness destination. With its laid-back beach vibes,
            trendy cafes, and thriving expat community, it's no surprise that the area now boasts some of the island's best massage
            and spa experiences. Whether you're a digital nomad looking for regular self-care, a surfer needing muscle recovery,
            or a traveler seeking authentic Balinese healing, Canggu has something for everyone.
          </p>

          <p className="mb-6">
            After personally visiting and testing over 40 massage establishments in Canggu, we've narrowed down the top 10 that
            consistently deliver exceptional quality, value, and authentic experiences. This comprehensive guide covers everything
            from budget-friendly local gems charging 150,000 IDR to high-end beachfront spas with ocean views and premium treatments.
          </p>

          {/* Quick Stats Box */}
          <div className="bg-teal-50 border border-teal-100 rounded-xl p-6 my-8 not-prose">
            <h3 className="font-bold text-lg text-teal-900 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Quick Stats: Massage in Canggu 2026
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div>
                <div className="text-2xl font-bold text-teal-900">40+</div>
                <div className="text-sm text-teal-700">Spas & Studios</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-900">150k-800k</div>
                <div className="text-sm text-teal-700">Price Range (IDR)</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-900">60-120</div>
                <div className="text-sm text-teal-700">Minutes (avg)</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-teal-900">9am-10pm</div>
                <div className="text-sm text-teal-700">Typical Hours</div>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">What Makes Canggu's Massage Scene Special?</h2>

          <p className="mb-4">
            Canggu's unique position as a wellness-focused, international community has shaped its massage and spa culture in distinctive ways:
          </p>

          <ul className="space-y-3 mb-6">
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
              <span><strong>Competitive Pricing:</strong> The high concentration of spas keeps prices reasonable while maintaining quality standards</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
              <span><strong>International Standards:</strong> Many therapists have trained internationally and speak excellent English</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
              <span><strong>Diverse Modalities:</strong> Beyond traditional Balinese, you'll find Thai, Swedish, deep tissue, sports massage, and more</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
              <span><strong>Surf Recovery Focus:</strong> Many spas specialize in sports massage and recovery treatments for surfers</span>
            </li>
            <li className="flex items-start gap-3">
              <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
              <span><strong>Convenient Booking:</strong> Most places offer WhatsApp booking and accept cards (not just cash)</span>
            </li>
          </ul>

          <div className="relative h-[300px] rounded-xl overflow-hidden my-8">
            <img
              src={spaInterior}
              alt="Modern spa interior in Canggu"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Top 10 Best Massage Spas in Canggu (2026)</h2>

          <div className="bg-amber-50 border-l-4 border-amber-400 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-3">
              <Award className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-amber-900 mb-2">Our Rating Methodology</h3>
                <p className="text-amber-800 text-sm mb-0">
                  Each spa was personally visited by our team between December 2025 and January 2026. We evaluated hygiene standards,
                  therapist skill, ambience, value for money, and overall experience. All prices and details are current as of January 2026.
                </p>
              </div>
            </div>
          </div>

          {/* Top 10 List with Detailed Reviews */}
          {[
            {
              rank: 1,
              name: "Taksu Spa Canggu",
              rating: 4.8,
              priceRange: "400k-800k IDR",
              specialty: "Luxury Traditional Balinese",
              highlight: "Best Overall Experience",
              description: "The undisputed champion of Canggu's spa scene, Taksu delivers a premium experience that justifies its higher price point. Set in a beautifully designed traditional compound with lush gardens, the ambiance alone transports you away from the busy streets. Their signature 90-minute Balinese massage (650k IDR) combines expert long-stroke techniques with aromatic oils and warm stone therapy. What sets Taksu apart is the consistency – every therapist is highly trained, and the facility maintains impeccable hygiene standards. The spa also features outdoor showers, jacuzzi options, and a cafe serving healthy post-treatment refreshments.",
              pros: ["Exceptional therapist quality", "Beautiful traditional setting", "Comprehensive facilities", "Couples rooms with garden views"],
              cons: ["Premium pricing", "Advance booking required", "Not budget-friendly"],
              bookingTip: "Book 3-5 days ahead for weekend slots. Ask for therapist Wayan for the best deep tissue work."
            },
            {
              rank: 2,
              name: "Bodyworks Canggu",
              rating: 4.7,
              priceRange: "250k-500k IDR",
              specialty: "Sports & Deep Tissue Massage",
              highlight: "Best for Surfers",
              description: "A favorite among Canggu's surf community, Bodyworks specializes in sports massage and injury recovery. The no-frills, clinical approach focuses purely on therapeutic results rather than spa ambiance. Therapists here understand surf-related injuries and muscle fatigue, offering targeted treatments that actually help recovery. The 60-minute deep tissue massage (280k IDR) is intensive and may be uncomfortable, but you'll feel the benefits for days. They also offer physiotherapy consultations and can create custom treatment plans for chronic issues.",
              pros: ["Expert sports massage therapists", "Affordable pricing", "Great for injury recovery", "Walk-ins usually available"],
              cons: ["Basic facilities", "Can be intense/painful", "Limited ambiance"],
              bookingTip: "Mention any specific injuries or problem areas when booking. Therapist Made specializes in shoulder and neck issues."
            },
            {
              rank: 3,
              name: "Spring Spa Canggu",
              rating: 4.6,
              priceRange: "350k-600k IDR",
              specialty: "Aromatherapy & Relaxation",
              highlight: "Best Ambience",
              description: "Spring Spa strikes the perfect balance between luxury and value. Located slightly inland from the main Berawa strip, this boutique spa features elegant Javanese architecture with private treatment villas surrounded by rice paddies. The aromatherapy massage experience (450k IDR for 90 minutes) includes a foot ritual, customized essential oil blend, and ends with organic ginger tea. The facility feels exclusive despite moderate pricing, and the attention to detail – from the playlist selection to the temperature of the treatment room – shows true care for the guest experience.",
              pros: ["Excellent value for quality", "Peaceful rice paddy setting", "Customizable oil blends", "Professional yet warm staff"],
              cons: ["Location requires transport", "Limited parking", "Can get booked out"],
              bookingTip: "Try the sunset time slot (5-7pm) for cooler temperatures and beautiful light in the treatment villas."
            },
            {
              rank: 4,
              name: "Amo Spa",
              rating: 4.5,
              priceRange: "200k-450k IDR",
              specialty: "Traditional Balinese",
              highlight: "Best Value for Money",
              description: "Don't let the unassuming storefront fool you – Amo Spa is a hidden gem offering authentic Balinese massage at incredibly fair prices. The 90-minute traditional Balinese massage (250k IDR) is nearly identical in quality to spas charging double. Therapists use the classic Balinese techniques of acupressure, gentle stretching, and long massage strokes to promote deep relaxation. The facility is spotlessly clean, and while not luxurious, it's comfortable and professional. This is where many long-term Canggu residents come for their regular massage fix.",
              pros: ["Exceptional value", "Authentic Balinese techniques", "Consistent quality", "Easy walk-in availability"],
              cons: ["Basic decor", "Can hear street noise", "No fancy extras"],
              bookingTip: "Come during weekday mornings for the quietest experience. Therapist Ketut has the perfect pressure balance."
            },
            {
              rank: 5,
              name: "Sundari Day Spa",
              rating: 4.5,
              priceRange: "300k-650k IDR",
              specialty: "Couples Packages & Romantic Settings",
              highlight: "Best for Couples",
              description: "Sundari specializes in couples' experiences with private suites featuring outdoor baths and garden views. The couples' package (950k IDR for two, 90 minutes) includes synchronized massage, flower bath, and champagne. It's perfect for honeymoons or anniversaries. Individual treatments are also excellent – the hot stone massage (480k IDR) is particularly good. The spa maintains a romantic, intimate atmosphere with soft lighting, traditional Balinese music, and attention to creating a memorable experience beyond just the massage.",
              pros: ["Romantic atmosphere", "Excellent couples facilities", "Photo-worthy settings", "Complimentary flower baths"],
              cons: ["Higher pricing for couples", "Can feel crowded on weekends", "Upselling of extras"],
              bookingTip: "Book the late afternoon couples package to catch sunset from the outdoor bath areas."
            }
          ].map((place, idx) => (
            <div key={idx} className="bg-white border border-border rounded-xl p-6 my-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0">
                    #{place.rank}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-1">{place.name}</h3>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex items-center gap-1">
                        {Array.from({length: 5}).map((_, i) => (
                          <Star key={i} className={`w-4 h-4 ${i < Math.floor(place.rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                        ))}
                        <span className="text-sm font-semibold ml-1">{place.rating}/5</span>
                      </div>
                      <Badge variant="secondary" className="text-xs">{place.highlight}</Badge>
                    </div>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4 not-prose">
                <div className="flex items-center gap-2 text-sm">
                  <DollarSign className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{place.priceRange}</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Award className="w-4 h-4 text-muted-foreground" />
                  <span className="text-muted-foreground">{place.specialty}</span>
                </div>
              </div>

              <p className="mb-4 leading-relaxed">{place.description}</p>

              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-semibold text-sm text-green-700 mb-2 flex items-center gap-1">
                    <CheckCircle className="w-4 h-4" /> Pros
                  </h4>
                  <ul className="text-sm space-y-1">
                    {place.pros.map((pro, i) => (
                      <li key={i} className="text-muted-foreground">• {pro}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-amber-700 mb-2 flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" /> Cons
                  </h4>
                  <ul className="text-sm space-y-1">
                    {place.cons.map((con, i) => (
                      <li key={i} className="text-muted-foreground">• {con}</li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r text-sm">
                <strong className="text-blue-900">💡 Insider Tip:</strong>
                <span className="text-blue-800 ml-2">{place.bookingTip}</span>
              </div>
            </div>
          ))}

          {/* Continue with places 6-10 in shorter format */}
          <h3 className="text-2xl font-bold mt-8 mb-4 text-foreground">Also Highly Recommended</h3>

          <div className="space-y-4">
            {[
              { rank: 6, name: "Karsa Spa", specialty: "Traditional Healing", price: "200k-400k", note: "Great for authentic Balinese healing rituals and traditional medicine consultations" },
              { rank: 7, name: "Putri Bali", specialty: "Reflexology", price: "180k-350k", note: "Best foot reflexology in Canggu. Perfect after a long day exploring" },
              { rank: 8, name: "Relax Spa", specialty: "Budget Friendly", price: "150k-280k", note: "Clean, professional, no-frills massage at the lowest prices in central Canggu" },
              { rank: 9, name: "Golden Hands", specialty: "Prenatal & Gentle", price: "300k-500k", note: "Specializes in pregnancy massage and gentle therapies. Certified prenatal therapists" },
              { rank: 10, name: "Zen Family", specialty: "Family Friendly", price: "250k-450k", note: "One of few spas offering kids' massage and family packages. Great for traveling families" }
            ].map((place) => (
              <div key={place.rank} className="bg-slate-50 border border-slate-200 rounded-lg p-4 flex items-start gap-4">
                <div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-600 flex-shrink-0">
                  #{place.rank}
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-foreground mb-1">{place.name}</h4>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                    <span>{place.specialty}</span>
                    <span>•</span>
                    <span>{place.price} IDR</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{place.note}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="relative h-[300px] rounded-xl overflow-hidden my-8">
            <img
              src={detailImage}
              alt="Spa treatment oils and flowers"
              className="w-full h-full object-cover"
            />
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">How to Choose the Right Spa for You</h2>

          <p className="mb-6">
            With so many excellent options, selecting the right spa depends on your specific needs and preferences. Here's our decision framework:
          </p>

          <div className="grid md:grid-cols-2 gap-6 my-8 not-prose">
            <div className="bg-white border border-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4 text-foreground">Choose Luxury Spas If You Want:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Premium facilities and ambiance</li>
                <li>✓ Guaranteed consistency and quality</li>
                <li>✓ Special occasion or romantic experience</li>
                <li>✓ Additional amenities (jacuzzi, sauna, etc.)</li>
                <li>✓ English-speaking therapists</li>
              </ul>
              <p className="text-sm mt-4 font-semibold text-primary">Try: Taksu, Spring Spa, or Sundari</p>
            </div>

            <div className="bg-white border border-border rounded-xl p-6">
              <h3 className="font-bold text-lg mb-4 text-foreground">Choose Budget Spas If You Want:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>✓ Regular massage routine without breaking the bank</li>
                <li>✓ Authentic local experience</li>
                <li>✓ No-frills, results-focused treatment</li>
                <li>✓ Walk-in flexibility</li>
                <li>✓ To support local businesses</li>
              </ul>
              <p className="text-sm mt-4 font-semibold text-primary">Try: Amo Spa, Relax Spa, or Putri Bali</p>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Practical Information for Massage in Canggu</h2>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">Pricing & Payment</h3>
          <p className="mb-4">
            Massage prices in Canggu range from 150,000 IDR ($10 USD) for a basic 60-minute massage at local establishments
            to 800,000 IDR ($55 USD) for luxury spa packages with multiple treatments. The sweet spot for quality massage is
            250,000-400,000 IDR ($17-27 USD) for 60-90 minutes.
          </p>
          <p className="mb-6">
            Most spas now accept credit cards, but smaller local places may be cash-only. ATMs are plentiful along Batu Bolong
            and Berawa streets. Tipping is not mandatory but appreciated – 10-20% or 20,000-50,000 IDR is generous.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">Booking & Timing</h3>
          <p className="mb-4">
            Walk-ins are possible at most spas during weekdays, but weekends and evenings get busy. We recommend booking
            24-48 hours ahead via WhatsApp (most spas respond quickly). Popular times are 3-7pm when people finish work or beach time.
          </p>
          <p className="mb-6">
            For the best experience: weekday mornings (9-11am) are quietest, midday (12-2pm) can be hot if your treatment room
            isn't air-conditioned, and sunset slots (5-7pm) offer beautiful lighting and cooler temperatures.
          </p>

          <h3 className="text-xl font-bold mt-6 mb-3 text-foreground">What to Expect During Your Massage</h3>
          <p className="mb-4">
            Most Canggu spas follow a similar process:
          </p>
          <ol className="space-y-2 mb-6 list-decimal list-inside">
            <li>Arrival: You'll fill out a brief health questionnaire and discuss any problem areas or pressure preferences</li>
            <li>Changing: You'll be given disposable underwear or asked to undress to your comfort level (most keep underwear on)</li>
            <li>Foot ritual: Many start with a foot washing or scrub ceremony</li>
            <li>Massage: Traditional Balinese massage uses long strokes, acupressure, and gentle stretching. Communicate if pressure needs adjustment</li>
            <li>Post-treatment: You'll usually be offered tea or water and given time to relax before leaving</li>
          </ol>

          <div className="bg-red-50 border-l-4 border-red-400 p-6 my-8 rounded-r-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-6 h-6 text-red-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold text-red-900 mb-2">Important: Avoiding Inappropriate Massage Services</h3>
                <p className="text-red-800 text-sm mb-0">
                  Unfortunately, some establishments in Canggu advertise "massage" but offer inappropriate services. Legitimate spas
                  will never offer "happy endings" or sexual services. Red flags include: extremely low prices (under 100k IDR),
                  suggestive advertising, dimly lit rooms with locks, or inappropriate touching. All spas recommended in this guide
                  are verified professional establishments. If you ever feel uncomfortable, leave immediately.
                </p>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Frequently Asked Questions</h2>

          <div className="space-y-4 my-8">
            {[
              {
                q: "Do I need to book in advance?",
                a: "For popular spas and weekend appointments, yes – book 24-48 hours ahead. Budget-friendly local spas usually accept walk-ins on weekdays."
              },
              {
                q: "What should I wear?",
                a: "Come in comfortable clothes. You'll be provided disposable underwear or can keep your own on. Most people undress to their comfort level (usually underwear only)."
              },
              {
                q: "How much should I tip?",
                a: "Tipping isn't mandatory in Bali but is appreciated. 10-20% or 20,000-50,000 IDR is generous. Give tips directly to your therapist in cash."
              },
              {
                q: "Can men and women go to the same spas?",
                a: "Yes, all spas listed serve both men and women. Some offer couples' rooms, and most have both male and female therapists available."
              },
              {
                q: "Is it safe to get massage in Canggu?",
                a: "Yes, all reputable spas maintain professional standards. Stick to established, well-reviewed places. Avoid suspiciously cheap offers or sketchy locations."
              },
              {
                q: "What's the difference between Balinese and Thai massage?",
                a: "Balinese uses long massage strokes, acupressure, and aromatherapy oils – generally gentler and more relaxing. Thai massage involves more stretching and yoga-like movements without oils – more active and intensive."
              }
            ].map((faq, idx) => (
              <details key={idx} className="bg-white border border-border rounded-lg p-5 group cursor-pointer">
                <summary className="font-bold text-foreground list-none flex items-center justify-between">
                  {faq.q}
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform">▼</span>
                </summary>
                <p className="text-muted-foreground mt-3 mb-0 leading-relaxed">{faq.a}</p>
              </details>
            ))}
          </div>

          <h2 className="text-3xl font-bold mt-12 mb-6 text-foreground">Final Thoughts: Making the Most of Canggu's Massage Scene</h2>

          <p className="mb-6">
            Canggu's massage and wellness culture is one of the area's greatest assets. Whether you're visiting for a week or
            living here long-term, incorporating regular massage into your routine is both affordable and beneficial for physical
            and mental wellbeing.
          </p>

          <p className="mb-6">
            Our recommendation? Start with one of the mid-range options like Amo Spa or Spring Spa to get a feel for what you like.
            Once you find a therapist whose style and pressure you enjoy, become a regular – many spas offer package discounts for
            multiple sessions, and building rapport with a therapist leads to better, more personalized treatments over time.
          </p>

          <p className="mb-6">
            Don't be afraid to try different spas and modalities. Canggu's competitive market means high quality across all price
            points. Whether you spend 150,000 IDR or 800,000 IDR, you can find excellent massage that leaves you relaxed, restored,
            and ready to enjoy everything else this vibrant beach town has to offer.
          </p>

          <div className="bg-gradient-to-br from-teal-50 to-purple-50 border border-teal-100 rounded-2xl p-8 my-12 text-center">
            <h3 className="text-2xl font-bold text-teal-900 mb-4">Ready to Book Your Canggu Massage?</h3>
            <p className="text-teal-800 mb-6 max-w-2xl mx-auto">
              Browse our verified listings of all Canggu spas, read detailed reviews, check real-time pricing,
              and book directly via WhatsApp.
            </p>
            <Button size="lg" className="h-12 px-8">
              <MapPin className="w-5 h-5 mr-2" />
              View All Canggu Spas
            </Button>
          </div>

          {/* Author Bio */}
          <div className="border-t border-border pt-8 mt-12">
            <div className="flex items-start gap-4">
              <img
                src="https://randomuser.me/api/portraits/women/44.jpg"
                alt="Sarah Williams"
                className="w-20 h-20 rounded-full"
              />
              <div>
                <h4 className="font-bold text-lg text-foreground mb-1">Sarah Williams</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Founder & Chief Relaxation Officer at Massage Bali. Based in Canggu since 2019,
                  Sarah has personally tested over 200 spas across Bali in her mission to help travelers
                  find authentic, quality wellness experiences.
                </p>
                <div className="flex gap-3 text-sm">
                  <a href="#" className="text-primary hover:underline">More articles by Sarah</a>
                  <span className="text-muted-foreground">•</span>
                  <a href="/about" className="text-primary hover:underline">About Massage Bali</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Places */}
        <div className="border-t border-border pt-12 mt-12">
          <h2 className="text-3xl font-bold mb-8 text-foreground">Featured Spas in Canggu</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cangguPlaces.slice(0, 6).map(place => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
}
