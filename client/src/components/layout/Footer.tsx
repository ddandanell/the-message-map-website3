import { Link } from "wouter";
import { Facebook, Instagram, Twitter, Flag } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted pt-16 pb-8 border-t border-border mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-primary">The Massage Map</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted guide to finding the best relaxation spots in Bali. Verified reviews, accurate pricing, and direct booking.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white rounded-full text-muted-foreground hover:text-primary transition-colors hover:shadow-sm" aria-label="Instagram"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white rounded-full text-muted-foreground hover:text-primary transition-colors hover:shadow-sm" aria-label="Facebook"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white rounded-full text-muted-foreground hover:text-primary transition-colors hover:shadow-sm" aria-label="Twitter"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Popular Areas */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Popular Areas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/bali/canggu"><a className="hover:text-primary hover:underline transition-colors">Canggu Spas</a></Link></li>
              <li><Link href="/bali/seminyak"><a className="hover:text-primary hover:underline transition-colors">Seminyak Spas</a></Link></li>
              <li><Link href="/bali/ubud"><a className="hover:text-primary hover:underline transition-colors">Ubud Wellness</a></Link></li>
              <li><Link href="/bali/uluwatu"><a className="hover:text-primary hover:underline transition-colors">Uluwatu Massage</a></Link></li>
              <li><Link href="/bali/sanur"><a className="hover:text-primary hover:underline transition-colors">Sanur Relaxation</a></Link></li>
            </ul>
          </div>

          {/* Massage Types */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Massage Types</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/bali/balinese"><a className="hover:text-primary hover:underline transition-colors">Traditional Balinese</a></Link></li>
              <li><Link href="/bali/deep-tissue"><a className="hover:text-primary hover:underline transition-colors">Deep Tissue</a></Link></li>
              <li><Link href="/bali/reflexology"><a className="hover:text-primary hover:underline transition-colors">Reflexology</a></Link></li>
              <li><Link href="/bali/couples"><a className="hover:text-primary hover:underline transition-colors">Couples Packages</a></Link></li>
              <li><Link href="/bali/hot-stone"><a className="hover:text-primary hover:underline transition-colors">Hot Stone</a></Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/how-we-rate"><a className="hover:text-primary hover:underline transition-colors">How We Rate</a></Link></li>
              <li><Link href="/about"><a className="hover:text-primary hover:underline transition-colors">About Us</a></Link></li>
              <li><Link href="/list-business"><a className="hover:text-primary hover:underline transition-colors">List Your Business</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary hover:underline transition-colors">Contact</a></Link></li>
              <li><Link href="/privacy"><a className="hover:text-primary hover:underline transition-colors">Privacy Policy</a></Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <div>&copy; {new Date().getFullYear()} The Massage Map. All rights reserved.</div>
          
          <div className="flex items-center gap-4">
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white rounded-md border border-border shadow-sm cursor-pointer hover:bg-slate-50 transition-colors">
               <span className="w-5 h-5 rounded-full bg-slate-200 overflow-hidden flex items-center justify-center text-[10px] font-bold">🇬🇧</span>
               <span className="font-medium text-foreground">English</span>
             </div>
             <div className="flex items-center gap-2 px-3 py-1.5 bg-white/50 rounded-md border border-transparent cursor-pointer hover:bg-white hover:border-border transition-all opacity-50 hover:opacity-100">
               <span className="w-5 h-5 rounded-full bg-red-100 overflow-hidden flex items-center justify-center text-[10px] font-bold border border-red-200 text-red-600">🇮🇩</span>
               <span className="font-medium">Indonesia</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
