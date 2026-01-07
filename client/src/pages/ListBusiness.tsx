import { Link } from "wouter";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { CheckCircle2, ArrowRight, Store, Mail } from "lucide-react";
import teamImage from '@assets/generated_images/team_of_wellness_experts.png';

export default function ListBusiness() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="flex-1 space-y-8">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-teal-950 mb-4">Grow your spa business with Massage Bali</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Join Bali's most trusted wellness directory. Connect with thousands of customers looking for quality relaxation every month.
              </p>
            </div>

            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100">
               <h3 className="font-bold text-lg text-teal-900 mb-4">Why partner with us?</h3>
               <ul className="space-y-3">
                 {[
                   "Direct bookings via WhatsApp (0% commission)",
                   "SEO optimized profile page",
                   "Verified badge for qualified businesses",
                   "Professional photography support",
                   "Monthly performance insights"
                 ].map((item, i) => (
                   <li key={i} className="flex items-center gap-3">
                     <CheckCircle2 className="w-5 h-5 text-teal-600 flex-shrink-0" />
                     <span className="text-teal-800">{item}</span>
                   </li>
                 ))}
               </ul>
            </div>

            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-xl">
              <img src={teamImage} alt="Wellness Team" className="object-cover w-full h-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                <p className="text-white font-medium italic">"Since listing on Massage Bali, our bookings from international guests have doubled." — Sarah, Owner of Lotus Spa</p>
              </div>
            </div>
          </div>

          <div className="lg:w-[480px] bg-white p-8 rounded-2xl shadow-xl border border-slate-100 h-fit sticky top-24">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center text-teal-700">
                <Store className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold">List Your Business</h2>
                <p className="text-sm text-muted-foreground">Get started in 2 minutes</p>
              </div>
            </div>

            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" />
                </div>
                <div className="space-y-2">
                   <Label htmlFor="lastName">Last Name</Label>
                   <Input id="lastName" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="businessName">Business Name</Label>
                <Input id="businessName" placeholder="e.g. Bali Bliss Spa" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                  <Input id="email" type="email" placeholder="you@example.com" className="pl-9" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="location">Location / Area</Label>
                <Input id="location" placeholder="e.g. Canggu" />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Anything else?</Label>
                <Textarea id="message" placeholder="Tell us a bit about your spa..." />
              </div>

              <Button size="lg" className="w-full text-base font-semibold mt-2">
                Submit Request <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              
              <p className="text-xs text-center text-muted-foreground mt-4">
                By submitting, you agree to our <a href="#" className="underline">Terms</a> and <a href="#" className="underline">Privacy Policy</a>.
              </p>
            </form>
          </div>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}
