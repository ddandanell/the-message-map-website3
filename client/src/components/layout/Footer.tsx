import { Link } from "wouter";
import { Facebook, Instagram, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-muted pt-16 pb-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-bold text-xl text-primary">The Massage Map</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Your trusted guide to finding the best relaxation spots in Bali. Verified reviews, accurate pricing, and direct booking.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 bg-white rounded-full text-muted-foreground hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white rounded-full text-muted-foreground hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="p-2 bg-white rounded-full text-muted-foreground hover:text-primary transition-colors"><Twitter className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Popular Areas */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Popular Areas</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/bali/canggu"><a className="hover:text-primary hover:underline">Canggu Spas</a></Link></li>
              <li><Link href="/bali/seminyak"><a className="hover:text-primary hover:underline">Seminyak Spas</a></Link></li>
              <li><Link href="/bali/ubud"><a className="hover:text-primary hover:underline">Ubud Wellness</a></Link></li>
              <li><Link href="/bali/uluwatu"><a className="hover:text-primary hover:underline">Uluwatu Massage</a></Link></li>
              <li><Link href="/bali/sanur"><a className="hover:text-primary hover:underline">Sanur Relaxation</a></Link></li>
            </ul>
          </div>

          {/* Massage Types */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Massage Types</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/bali/balinese"><a className="hover:text-primary hover:underline">Traditional Balinese</a></Link></li>
              <li><Link href="/bali/deep-tissue"><a className="hover:text-primary hover:underline">Deep Tissue</a></Link></li>
              <li><Link href="/bali/reflexology"><a className="hover:text-primary hover:underline">Reflexology</a></Link></li>
              <li><Link href="/bali/couples"><a className="hover:text-primary hover:underline">Couples Packages</a></Link></li>
              <li><Link href="/bali/hot-stone"><a className="hover:text-primary hover:underline">Hot Stone</a></Link></li>
            </ul>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about"><a className="hover:text-primary hover:underline">About Us</a></Link></li>
              <li><Link href="/contact"><a className="hover:text-primary hover:underline">Contact</a></Link></li>
              <li><Link href="/add-place"><a className="hover:text-primary hover:underline">Add Your Business</a></Link></li>
              <li><Link href="/privacy"><a className="hover:text-primary hover:underline">Privacy Policy</a></Link></li>
              <li><Link href="/terms"><a className="hover:text-primary hover:underline">Terms of Service</a></Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border/50 pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} The Massage Map. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
