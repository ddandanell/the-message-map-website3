import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { CheckCircle, MapPin, Clock, ArrowRight } from "lucide-react";
import { PLACES } from "@/lib/mockData";
import { PlaceCard } from "@/components/shared/PlaceCard";
import guideImage from '@assets/generated_images/guide:_best_massage_in_canggu.png';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      {/* Hero */}
      <div className="relative py-24 bg-teal-900 text-white overflow-hidden">
         <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
         <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
           <h1 className="text-4xl md:text-6xl font-bold mb-6">Relaxation, Verified.</h1>
           <p className="text-xl text-teal-100 leading-relaxed">
             The Massage Map is Bali's first curated directory dedicated to quality, safe, and transparent wellness experiences.
           </p>
         </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        
        {/* Story Section */}
        <div className="max-w-3xl mx-auto mb-20">
           <h2 className="text-3xl font-bold text-teal-950 mb-6">Our Mission</h2>
           <div className="prose prose-lg text-muted-foreground">
             <p className="mb-4">
               Finding a good massage in Bali used to be a gamble. You rely on outdated reviews, haggle over prices, or wander into places that don't match the photos. We built The Massage Map to change that.
             </p>
             <p className="mb-4">
               Our team of locals and expats personally visits every "Verified" partner. We check the linens, test the pressure, and verify the prices so you don't have to.
             </p>
             <p>
               We believe that relaxation should start the moment you begin your search, not just when you lie down on the table.
             </p>
           </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center text-teal-950 mb-12">Meet the Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
             {[
               { name: "Sarah W.", role: "Founder & Chief Relaxation Officer", img: "https://randomuser.me/api/portraits/women/44.jpg" },
               { name: "Budi Santoso", role: "Head of Partnerships", img: "https://randomuser.me/api/portraits/men/32.jpg" },
               { name: "Jessica Lim", role: "Content Editor", img: "https://randomuser.me/api/portraits/women/68.jpg" }
             ].map((member, i) => (
               <div key={i} className="group">
                  <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white shadow-lg group-hover:scale-105 transition-transform">
                    <img src={member.img} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground">{member.name}</h3>
                  <p className="text-teal-600 font-medium">{member.role}</p>
               </div>
             ))}
          </div>
        </div>

        {/* Featured Guide Preview */}
        <div className="bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 flex flex-col md:flex-row">
           <div className="md:w-1/2 relative min-h-[300px]">
             <img src={guideImage} alt="Best Massage Canggu" className="absolute inset-0 w-full h-full object-cover" />
           </div>
           <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
              <div className="uppercase tracking-wider text-xs font-bold text-teal-600 mb-2">Editor's Guide</div>
              <h3 className="text-3xl font-bold text-slate-900 mb-4">The Ultimate Guide to Massage in Canggu (2026 Edition)</h3>
              <p className="text-slate-600 mb-8 leading-relaxed">
                From luxury beachside spas to hidden affordable gems, we've ranked the top 10 places you need to visit in Bali's trendiest neighborhood.
              </p>
              <Button variant="default" className="w-fit">Read the Guide <ArrowRight className="w-4 h-4 ml-2" /></Button>
           </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
