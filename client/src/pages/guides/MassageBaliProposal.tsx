import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Sparkles, MapPin, ShieldCheck, Smartphone, Star, LayoutGrid, Globe2, Heart, MessageCircle, CheckCircle2, Compass, Wallet, Calendar, Languages } from "lucide-react";

const platformStructure = [
  {
    title: "For Clients & Visitors",
    points: ["Browse Freelancers", "Search by Area", "Search by Service Type", "Top Rated Therapists", "New Therapists"]
  },
  {
    title: "For Freelancers",
    points: ["Create Profile (Free)", "Manage Bookings", "Update Availability", "View Reviews"]
  }
];

const profileFields = [
  { title: "Basic Information", items: ["Full/Business Name", "Profile Photo", "Years of Experience", "Certifications & Training", "Languages Spoken"] },
  { title: "Location & Access", items: ["Primary Area + sub-areas", "Mobile service available", "Home studio available"] },
  { title: "Services Offered", items: ["Traditional Balinese", "Deep Tissue", "Swedish", "Thai", "Aromatherapy", "Hot Stone", "Reflexology", "Sports", "Pregnancy", "Couples"] },
  { title: "Pricing", items: ["Per hour", "90 minutes", "2 hours", "Special packages"] },
  { title: "Contact & Availability", items: ["WhatsApp / Phone / Email / Instagram", "Days & hours available", "Advance booking required"] },
  { title: "Quality Signals", items: ["Workspace gallery (4-8 photos)", "Reviews & 5-star rating", "Completed sessions counter"] }
];

const areaBreakdown = [
  { region: "South Bali", areas: ["Seminyak", "Canggu", "Kuta", "Legian", "Jimbaran", "Uluwatu", "Pecatu", "Nusa Dua", "Sanur"] },
  { region: "Central Bali", areas: ["Ubud", "Tegallalang", "Payangan"] },
  { region: "East Bali", areas: ["Amed", "Candidasa", "Padang Bai"] },
  { region: "North Bali", areas: ["Lovina", "Singaraja"] },
  { region: "West Bali", areas: ["Negara", "Medewi"] }
];

const filters = ["Location (map view)", "Service Type", "Price Range (100k - 1M IDR)", "Availability (today / tomorrow / this week)", "Rating (4+ / 4.5+)", "Gender Preference", "Mobile Service", "Home Studio", "Languages"];

const userFeatures = [
  { title: "Map Integration", description: "Interactive map with pins, profile previews, and distance from user location." },
  { title: "Favorites & Alerts", description: "Save therapists and get notifications when they have availability." },
  { title: "Direct Contact", description: "Click-to-call WhatsApp, inquiries, and direct booking requests." },
  { title: "Verified Reviews", description: "Only verified bookings can review; therapists can respond." }
];

const homepageHighlights = ["Hero search with quick filters (Area, Service Type, Available Today)", "Featured: Top Rated, New This Month, Most Booked", "Browse by Area (grid) and Service Type (grid)", "Trust indicators (verified therapists, happy clients, coverage)"];

const registrationSteps = [
  "Basic info: name, photo, location",
  "Professional details: experience, certifications, services",
  "Pricing & availability: rates and schedule",
  "Contact information: WhatsApp, phone, email",
  "Photos: workspace / setup images",
  "Verification: phone, email, optional certificates"
];

const qualityControls = {
  therapists: ["Profile verification", "Certificate validation badge", "Warning system & ability to block clients"],
  clients: ["Verified reviews only", "Report inappropriate profiles", "Safety tips and response-rate transparency"]
};

const additionalFeatures = [
  { title: "Revenue Model (Optional)", items: ["Free basic profiles", "Premium: featured listing, highlighted profile, extra photos, priority support, analytics"] },
  { title: "Mobile First", items: ["Responsive layout", "Quick WhatsApp CTA", "Fast filters & map navigation"] },
  { title: "Content & Community", items: ["Blog & resources", "Therapist forum", "Client testimonials"] },
  { title: "Multi-language", items: ["English (primary)", "Bahasa Indonesia", "Russian", "Optional Chinese & Japanese"] }
];

const strengths = [
  "Free & accessible for local therapists",
  "Structured by area and service",
  "Trust-building through verification and reviews",
  "Direct contact keeps 100% of earnings with therapists",
  "Community-focused support for independent professionals"
];

const nextSteps = [
  "Create wireframes for main pages",
  "Design the profile template",
  "Build search and filter system",
  "Implement freelancer registration flow",
  "Publish profile content guidelines",
  "Beta test with 20-30 therapists"
];

export default function MassageBaliProposal() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <section className="relative overflow-hidden bg-gradient-to-br from-teal-900 via-emerald-800 to-primary pt-24 pb-20">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl space-y-6">
          <Badge variant="secondary" className="mx-auto w-fit gap-2 text-primary">
            <Sparkles className="w-4 h-4" /> Complete Product Proposal
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">Massage Bali Freelancer Platform</h1>
          <p className="text-xl text-teal-50 leading-relaxed">Find Your Perfect Massage in Bali — the full blueprint for a freelancer-first marketplace covering branding, structure, features, and rollout.</p>
          <div className="flex flex-wrap gap-3 justify-center text-sm text-white/80">
            <span className="px-3 py-1 rounded-full border border-white/30 flex items-center gap-2"><MapPin className="w-4 h-4" /> Island-wide coverage</span>
            <span className="px-3 py-1 rounded-full border border-white/30 flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> Verification-first</span>
            <span className="px-3 py-1 rounded-full border border-white/30 flex items-center gap-2"><Smartphone className="w-4 h-4" /> Mobile-first</span>
          </div>
        </div>
      </section>

      <main className="container mx-auto px-4 py-16 space-y-16">
        <section className="grid md:grid-cols-2 gap-6">
          {platformStructure.map(section => (
            <Card key={section.title} className="p-6 border border-border">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-foreground">{section.title}</h2>
                <LayoutGrid className="w-5 h-5 text-primary" />
              </div>
              <ul className="space-y-2 text-muted-foreground">
                {section.points.map(item => <li key={item} className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-primary" /> {item}</li>)}
              </ul>
            </Card>
          ))}
          <Card className="p-6 border border-border">
            <div className="flex items-center gap-3 mb-3">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold text-foreground">Branding & Positioning</h2>
            </div>
            <p className="text-muted-foreground mb-3">New name: <strong>Massage Bali</strong>. Tagline options: “Find Your Perfect Massage in Bali” or “Bali’s Massage Community”.</p>
            <p className="text-muted-foreground">Tone: clean, simple, SEO-friendly; focused on freelancers and direct client contact.</p>
          </Card>
        </section>

        <section className="grid md:grid-cols-3 gap-6">
          {profileFields.map(section => (
            <Card key={section.title} className="p-5 border border-border">
              <h3 className="text-lg font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2 text-muted-foreground text-sm">
                {section.items.map(item => <li key={item} className="flex items-start gap-2"><Star className="w-4 h-4 text-primary mt-0.5" /> <span>{item}</span></li>)}
              </ul>
            </Card>
          ))}
        </section>

        <section className="bg-muted/60 rounded-3xl p-8 border border-border">
          <div className="flex items-center gap-3 mb-6">
            <Compass className="w-5 h-5 text-primary" />
            <h2 className="text-2xl font-bold">Area Breakdown</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {areaBreakdown.map(region => (
              <Card key={region.region} className="p-4 border border-border">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold">{region.region}</h3>
                  <Badge variant="outline">{region.areas.length} areas</Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{region.areas.join(" • ")}</p>
              </Card>
            ))}
          </div>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <MapPin className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Search & Filters</h2>
            </div>
            <div className="flex flex-wrap gap-2">
              {filters.map(filter => (
                <span key={filter} className="px-3 py-1 rounded-full bg-primary/5 text-primary text-sm border border-primary/20">{filter}</span>
              ))}
            </div>
          </Card>
          <Card className="p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">User Features</h2>
            </div>
            <ul className="space-y-3 text-muted-foreground">
              {userFeatures.map(feature => (
                <li key={feature.title} className="flex gap-3">
                  <ShieldCheck className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <p className="font-semibold text-foreground">{feature.title}</p>
                    <p className="text-sm">{feature.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Card>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <LayoutGrid className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Homepage Structure</h2>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              {homepageHighlights.map(item => <li key={item} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> <span>{item}</span></li>)}
            </ul>
          </Card>
          <Card className="p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Freelancer Registration</h2>
            </div>
            <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
              {registrationSteps.map(step => <li key={step}>{step}</li>)}
            </ol>
          </Card>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <ShieldCheck className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Quality Control & Safety</h2>
            </div>
            <div className="space-y-3">
              <div>
                <p className="font-semibold text-foreground mb-2">For Therapists</p>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  {qualityControls.therapists.map(item => <li key={item} className="flex gap-2 items-start"><Star className="w-4 h-4 text-primary mt-0.5" /> {item}</li>)}
                </ul>
              </div>
              <div>
                <p className="font-semibold text-foreground mb-2">For Clients</p>
                <ul className="space-y-1 text-muted-foreground text-sm">
                  {qualityControls.clients.map(item => <li key={item} className="flex gap-2 items-start"><Star className="w-4 h-4 text-primary mt-0.5" /> {item}</li>)}
                </ul>
              </div>
            </div>
          </Card>
          <Card className="p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Wallet className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Revenue, Mobile, Community</h2>
            </div>
            <div className="space-y-3 text-muted-foreground">
              {additionalFeatures.map(feature => (
                <div key={feature.title}>
                  <p className="font-semibold text-foreground">{feature.title}</p>
                  <p className="text-sm">{feature.items.join(" • ")}</p>
                </div>
              ))}
            </div>
          </Card>
        </section>

        <section className="grid md:grid-cols-2 gap-6">
          <Card className="p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <Heart className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Strengths</h2>
            </div>
            <ul className="space-y-2 text-muted-foreground">
              {strengths.map(item => <li key={item} className="flex items-start gap-2"><CheckCircle2 className="w-4 h-4 text-primary mt-0.5" /> {item}</li>)}
            </ul>
          </Card>
          <Card className="p-6 border border-border">
            <div className="flex items-center gap-3 mb-4">
              <MessageCircle className="w-5 h-5 text-primary" />
              <h2 className="text-2xl font-bold">Suggested Next Steps</h2>
            </div>
            <ol className="space-y-2 text-muted-foreground list-decimal list-inside">
              {nextSteps.map(step => <li key={step}>{step}</li>)}
            </ol>
          </Card>
        </section>

        <section className="bg-primary text-primary-foreground rounded-3xl p-8 flex flex-col gap-4">
          <div className="flex flex-wrap gap-3 items-center">
            <Badge variant="secondary" className="bg-white/15 text-primary-foreground border-white/20 gap-2">
              <Globe2 className="w-4 h-4" /> Multi-language ready
            </Badge>
            <Badge variant="secondary" className="bg-white/15 text-primary-foreground border-white/20 gap-2">
              <Languages className="w-4 h-4" /> English • Bahasa • Russian • Optional CN/JP
            </Badge>
          </div>
          <h2 className="text-3xl font-bold">Ready to build “Massage Bali”?</h2>
          <p className="text-primary-foreground/90 max-w-3xl">This proposal outlines the full experience for clients and freelancers: branded identity, structured profiles, island-wide area taxonomy, robust filters, map-first UX, verification, and a growth-friendly revenue model. Next up: wireframes, MVP build, and beta with 20-30 therapists.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
}
