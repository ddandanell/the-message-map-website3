import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FreelancerCard } from "@/components/shared/FreelancerCard";
import { FREELANCERS } from "@/lib/freelancerData";
import { Search, Users, Star, MapPin, Filter } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";

export default function Freelancers() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArea, setSelectedArea] = useState<string>("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("rating");

  const areas = Array.from(new Set(FREELANCERS.map(f => f.area))).sort();
  const specialties = Array.from(new Set(FREELANCERS.flatMap(f => f.specialties))).sort();

  let filteredFreelancers = [...FREELANCERS];

  // Filter by search query
  if (searchQuery) {
    filteredFreelancers = filteredFreelancers.filter(f =>
      f.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      f.specialties.some(s => s.toLowerCase().includes(searchQuery.toLowerCase()))
    );
  }

  // Filter by area
  if (selectedArea !== "all") {
    filteredFreelancers = filteredFreelancers.filter(f => f.area === selectedArea);
  }

  // Filter by specialty
  if (selectedSpecialty !== "all") {
    filteredFreelancers = filteredFreelancers.filter(f => f.specialties.includes(selectedSpecialty));
  }

  // Sort
  filteredFreelancers.sort((a, b) => {
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "reviews") return b.reviewCount - a.reviewCount;
    if (sortBy === "price") {
      const aPrice = Math.min(...a.priceExamples.map(p => p.price));
      const bPrice = Math.min(...b.priceExamples.map(p => p.price));
      return aPrice - bPrice;
    }
    return 0;
  });

  const verifiedCount = FREELANCERS.filter(f => f.verified).length;
  const avgRating = FREELANCERS.reduce((sum, f) => sum + f.rating, 0) / FREELANCERS.length;

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <div className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-gradient-to-br from-teal-900 via-teal-800 to-teal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Independent Massage Therapists
          </h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Connect directly with verified freelance massage therapists across Bali. Book private sessions with skilled professionals who come to you.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm border border-white/20">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">{FREELANCERS.length}</div>
              <div className="text-teal-200 text-sm font-medium">Therapists</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm border border-white/20">
                <Star className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">{avgRating.toFixed(1)}</div>
              <div className="text-teal-200 text-sm font-medium">Avg Rating</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center mb-3 backdrop-blur-sm border border-white/20">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-white">{areas.length}</div>
              <div className="text-teal-200 text-sm font-medium">Areas Covered</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filters and Search */}
      <section className="py-8 bg-white border-b border-border sticky top-16 z-40 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search therapists, specialties, or areas..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12"
              />
            </div>
            <Select value={selectedArea} onValueChange={setSelectedArea}>
              <SelectTrigger className="w-full md:w-[200px] h-12">
                <SelectValue placeholder="All Areas" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Areas</SelectItem>
                {areas.map(area => (
                  <SelectItem key={area} value={area}>{area}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
              <SelectTrigger className="w-full md:w-[200px] h-12">
                <SelectValue placeholder="All Specialties" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Specialties</SelectItem>
                {specialties.map(specialty => (
                  <SelectItem key={specialty} value={specialty}>{specialty}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-[180px] h-12">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">Highest Rated</SelectItem>
                <SelectItem value="reviews">Most Reviews</SelectItem>
                <SelectItem value="price">Lowest Price</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h2 className="text-2xl font-bold mb-2">
                {filteredFreelancers.length} {filteredFreelancers.length === 1 ? 'Therapist' : 'Therapists'} Found
              </h2>
              <p className="text-muted-foreground">
                {verifiedCount} verified professionals ready to help you relax
              </p>
            </div>
          </div>

          {filteredFreelancers.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground text-lg">No therapists found matching your criteria.</p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedArea("all");
                  setSelectedSpecialty("all");
                }}
              >
                Clear Filters
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredFreelancers.map(freelancer => (
                <FreelancerCard key={freelancer.id} freelancer={freelancer} />
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
