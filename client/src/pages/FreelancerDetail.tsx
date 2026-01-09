import { useParams, Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { getFreelancerBySlug } from "@/lib/freelancerData";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BackToTop } from "@/components/shared/BackToTop";
import {
  BadgeCheck, Star, MapPin, Clock, MessageCircle, Home, Users, Mail, Phone, Instagram,
  Award, Globe, Calendar, CheckCircle2, ArrowLeft
} from "lucide-react";
import NotFound from "./not-found";

export default function FreelancerDetail() {
  const { slug } = useParams();
  const freelancer = getFreelancerBySlug(slug || '');

  if (!freelancer) return <NotFound />;

  const lowestPrice = Math.min(...freelancer.priceExamples.map(p => p.price));

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      <BackToTop />

      {/* Cover Image */}
      <div className="relative h-[40vh] md:h-[50vh] bg-gradient-to-br from-teal-900 to-teal-700">
        {freelancer.coverImage ? (
          <img 
            src={freelancer.coverImage} 
            alt={freelancer.name}
            className="w-full h-full object-cover opacity-60"
          />
        ) : null}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="container mx-auto">
            <Link href="/freelancers">
              <Button variant="ghost" size="sm" className="mb-4 text-white hover:bg-white/20">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Therapists
              </Button>
            </Link>
            <div className="flex items-end gap-6">
              <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white overflow-hidden bg-white shadow-xl">
                <img 
                  src={freelancer.profileImage} 
                  alt={freelancer.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 pb-2">
                <div className="flex items-center gap-2 mb-2">
                  {freelancer.verified && (
                    <Badge className="bg-green-600 text-white border-0 gap-1.5">
                      <BadgeCheck className="w-3.5 h-3.5" />
                      Verified
                    </Badge>
                  )}
                  <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                    {freelancer.area}
                  </Badge>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{freelancer.name}</h1>
                <div className="flex items-center gap-4 text-white/90">
                  <div className="flex items-center gap-1">
                    <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-bold text-lg">{freelancer.rating.toFixed(1)}</span>
                    <span className="text-sm">({freelancer.reviewCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Award className="w-4 h-4" />
                    <span className="text-sm">{freelancer.yearsExperience} years experience</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Main Content */}
          <div className="flex-1">
            {/* About */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border mb-6">
              <h2 className="text-2xl font-bold mb-4">About {freelancer.name.split(' ')[0]}</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">{freelancer.bio}</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 border-t border-border">
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Location</div>
                  <div className="font-semibold flex items-center gap-1">
                    <MapPin className="w-4 h-4 text-primary" />
                    {freelancer.location}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Availability</div>
                  <div className="font-semibold flex items-center gap-1">
                    <Calendar className="w-4 h-4 text-primary" />
                    {freelancer.availability}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Response Time</div>
                  <div className="font-semibold flex items-center gap-1">
                    <MessageCircle className="w-4 h-4 text-primary" />
                    {freelancer.responseTime}
                  </div>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground mb-1">Last Active</div>
                  <div className="font-semibold text-green-600">{freelancer.lastActive}</div>
                </div>
              </div>
            </div>

            {/* Specialties */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border mb-6">
              <h2 className="text-2xl font-bold mb-4">Specialties</h2>
              <div className="flex flex-wrap gap-2">
                {freelancer.specialties.map(specialty => (
                  <Badge key={specialty} variant="secondary" className="text-sm px-3 py-1.5">
                    {specialty}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Pricing */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border mb-6">
              <h2 className="text-2xl font-bold mb-4">Pricing</h2>
              <div className="space-y-3">
                {freelancer.priceExamples.map((price, index) => (
                  <div key={index} className="flex justify-between items-center p-4 bg-slate-50 rounded-lg border border-border">
                    <div>
                      <div className="font-semibold">{price.type}</div>
                      <div className="text-sm text-muted-foreground">{price.duration}</div>
                    </div>
                    <div className="text-xl font-bold text-primary">
                      {(price.price / 1000).toFixed(0)}k IDR
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            {freelancer.certifications.length > 0 && (
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border mb-6">
                <h2 className="text-2xl font-bold mb-4">Certifications & Training</h2>
                <div className="space-y-2">
                  {freelancer.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Languages */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border mb-6">
              <h2 className="text-2xl font-bold mb-4">Languages</h2>
              <div className="flex flex-wrap gap-2">
                {freelancer.languages.map(lang => (
                  <Badge key={lang} variant="outline" className="text-sm">
                    {lang}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-border">
              <h2 className="text-2xl font-bold mb-4">Reviews ({freelancer.reviewCount})</h2>
              <div className="space-y-4">
                {freelancer.reviews.map(review => (
                  <div key={review.id} className="border-b border-border pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <div className="font-semibold">{review.name}</div>
                        <div className="text-sm text-muted-foreground">{new Date(review.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</div>
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="font-semibold">{review.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground">{review.comment}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 space-y-6">
            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-border sticky top-24">
              <h3 className="text-xl font-bold mb-4">Contact & Booking</h3>
              
              <div className="space-y-3 mb-6">
                <Button 
                  className="w-full bg-green-600 hover:bg-green-700 text-white" 
                  size="lg"
                  onClick={() => window.open(`https://wa.me/${freelancer.whatsapp}`, '_blank')}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
                
                {freelancer.email && (
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    size="lg"
                    onClick={() => window.location.href = `mailto:${freelancer.email}`}
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Email
                  </Button>
                )}

                {freelancer.instagram && (
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    size="lg"
                    onClick={() => window.open(`https://instagram.com/${freelancer.instagram!.replace('@', '')}`, '_blank')}
                  >
                    <Instagram className="w-5 h-5 mr-2" />
                    Instagram
                  </Button>
                )}
              </div>

              <div className="pt-6 border-t border-border space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Starting from</span>
                  <span className="text-2xl font-bold text-primary">
                    {(lowestPrice / 1000).toFixed(0)}k IDR
                  </span>
                </div>
                
                <div className="space-y-2 text-sm">
                  {freelancer.homeService && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Home className="w-4 h-4 text-primary" />
                      <span>Home Service Available</span>
                    </div>
                  )}
                  {freelancer.couplesMassage && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>Couples Massage</span>
                    </div>
                  )}
                  {freelancer.femaleTherapist && (
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Users className="w-4 h-4 text-primary" />
                      <span>Female Therapist</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
