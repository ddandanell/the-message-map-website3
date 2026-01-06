import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, Activity, Heart, ShieldCheck, Search, ClipboardCheck, UserCheck } from "lucide-react";
import infographicImage from '@assets/generated_images/massage_rating_methodology_infographic.png';

export default function HowWeRate() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <div className="relative h-[40vh] min-h-[300px] flex items-center justify-center bg-teal-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&q=80')] bg-cover bg-center" />
        <div className="relative z-10 container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our Rating Methodology</h1>
          <p className="text-xl text-teal-100 max-w-2xl mx-auto">
            We don't just list spas. We verify, test, and rate them so you can relax with confidence.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12 items-center mb-20">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold text-teal-900">The 10-Point Inspection</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every "Verified" place on The Massage Map has undergone an anonymous inspection by our local team. We evaluate based on strict criteria designed to ensure safety, quality, and transparency.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Cleanliness & Hygiene Standards",
                "Therapist Certification & Skill",
                "Ambience & Noise Levels",
                "Value for Money",
                "Facility Maintenance",
                "Booking Efficiency"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-white rounded-lg border border-slate-100 shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
            <img 
              src={infographicImage} 
              alt="Rating Methodology" 
              className="rounded-2xl shadow-2xl border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-500"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg text-center hover:-translate-y-1 transition-transform">
            <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ShieldCheck className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-teal-900 mb-3">Hygiene First</h3>
            <p className="text-muted-foreground">
              We check linens, oils, bathroom cleanliness, and sanitization protocols. If it's not spotless, it doesn't get our badge.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg text-center hover:-translate-y-1 transition-transform">
             <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <UserCheck className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-teal-900 mb-3">Skill Assessment</h3>
            <p className="text-muted-foreground">
              Our mystery shoppers book actual treatments to test pressure control, technique, and professional conduct.
            </p>
          </div>
          <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-lg text-center hover:-translate-y-1 transition-transform">
             <div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <ClipboardCheck className="w-8 h-8 text-teal-600" />
            </div>
            <h3 className="text-xl font-bold text-teal-900 mb-3">Price Verification</h3>
            <p className="text-muted-foreground">
              We compare listed prices with actual menu prices to ensure there are no hidden fees or "tourist taxes".
            </p>
          </div>
        </div>

        <div className="bg-teal-50 rounded-3xl p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-teal-900 mb-4">Know a hidden gem?</h2>
          <p className="text-lg text-teal-700 max-w-2xl mx-auto mb-8">
            We are always looking for new places to review. If you've had a great experience, let us know.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="h-12 px-8 text-base">Suggest a Place</Button>
            </Link>
            <Link href="/list-business">
              <Button size="lg" variant="outline" className="h-12 px-8 text-base bg-white border-teal-200 text-teal-700 hover:bg-teal-100">I'm a Business Owner</Button>
            </Link>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
