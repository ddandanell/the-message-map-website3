import { useState } from "react";
import { Link } from "wouter";
import { MapPin, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BALI_AREAS, getAllRegions, getAreasByRegion, REGION_INFO, type Region } from "@/data/baliAreas";
import { Helmet } from "react-helmet";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import heroImage from '@assets/generated_images/luxury_tropical_spa_in_bali.png';

export default function BaliIndex() {
  const [searchTerm, setSearchTerm] = useState("");
  const regions = getAllRegions();

  const filteredAreas = searchTerm.trim()
    ? BALI_AREAS.filter(area =>
        area.displayName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        area.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : BALI_AREAS;

  const groupedByRegion = regions.map(region => ({
    region,
    info: REGION_INFO[region],
    areas: searchTerm.trim()
      ? filteredAreas.filter(area => area.region === region)
      : getAreasByRegion(region)
  })).filter(group => group.areas.length > 0);

  return (
    <>
      <Helmet>
        <title>Bali Massage Service Areas (Villa & Hotel) | The Massage Map</title>
        <meta name="description" content="Professional in-home, villa, and hotel massage services across all areas of Bali. From Seminyak to Ubud, Canggu to Uluwatu - find verified massage therapists in your area." />
        <link rel="canonical" href="https://themassagemap.com/bali/" />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        {/* Hero Section with Background */}
        <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img 
              src={heroImage} 
              alt="Bali Spa Background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
          </div>

          {/* Content */}
          <div className="relative z-10 container mx-auto px-4 py-32 text-center">
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <Badge variant="secondary" className="mb-4 shadow-lg">
                100+ Areas Covered
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                Massage Services Across All of Bali
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto font-light drop-shadow-md">
                Whether you're staying in a villa in Seminyak, a hotel in Ubud, or beachfront in Canggu,
                find verified massage therapists who come to you. Professional in-home massage services
                available island-wide.
              </p>

              {/* Search */}
              <div className="relative max-w-md mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search areas (e.g., Ubud, Canggu...)"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 py-6 text-lg shadow-2xl border-2 focus:border-primary"
                />
              </div>

              {searchTerm && (
                <p className="mt-4 text-sm text-white/80 drop-shadow">
                  Found {filteredAreas.length} area{filteredAreas.length !== 1 ? 's' : ''}
                </p>
              )}
            </div>
          </div>
        </section>

        {/* Regions & Areas */}
        <section className="py-20 px-4 bg-background">
          <div className="container mx-auto max-w-6xl">
            {groupedByRegion.map(({ region, info, areas }) => (
              <div key={region} className="mb-12">
                <div className="mb-6">
                  <h2 className="text-3xl font-bold mb-2">{info.name}</h2>
                  <p className="text-muted-foreground">{info.description}</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {areas.map(area => (
                    <Link key={area.id} href={`/bali/${area.slug}`}>
                      <a>
                        <Card className="p-4 hover:shadow-lg transition-all duration-200 hover:border-primary hover:-translate-y-1 group cursor-pointer">
                          <div className="flex items-start gap-3">
                            <div className="mt-1 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-all duration-200">
                              <MapPin className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors duration-200">
                                {area.displayName}
                              </h3>
                              <p className="text-sm text-muted-foreground line-clamp-2">
                                {area.description}
                              </p>
                            </div>
                          </div>
                        </Card>
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
            ))}

            {filteredAreas.length === 0 && (
              <div className="text-center py-12">
                <p className="text-muted-foreground text-lg">
                  No areas found matching "{searchTerm}"
                </p>
                <button
                  onClick={() => setSearchTerm("")}
                  className="mt-4 text-primary hover:underline"
                >
                  Clear search
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-primary/5">
          <div className="container mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold mb-4">Can't Find Your Area?</h2>
            <p className="text-muted-foreground mb-8">
              We're constantly expanding our coverage across Bali. If your area isn't listed,
              we may still have therapists available nearby.
            </p>
            <Link href="/contact">
              <a className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 hover:scale-105 hover:shadow-lg transition-all duration-200">
                Contact Us for Your Area
              </a>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
