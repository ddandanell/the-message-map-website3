import { Link, useLocation } from "wouter";
import { Search, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logoImage from '@assets/generated_images/minimalist_lotus_spa_logo.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  // Pages that should have solid white header from start (no hero image)
  const solidHeaderPages = [
    '/guides/best-massage-canggu-2026',
    '/guides/traditional-balinese-massage-guide',
    '/guides/budget-massage-ubud',
    '/guides/couples-massage-romantic-spas',
    '/guides/deep-tissue-vs-swedish-massage',
    '/guides/spa-etiquette-bali',
    '/guides/luxury-spas-seminyak',
    '/guides/prenatal-massage-safety-bali',
    '/how-we-rate',
    '/about',
    '/list-business',
    '/contact',
    '/privacy',
    '/bali'
  ];

  const needsSolidHeader = solidHeaderPages.some(path => location.startsWith(path));

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled || mobileMenuOpen || needsSolidHeader 
          ? "bg-white/95 backdrop-blur-sm shadow-sm border-border" 
          : "bg-black/40 backdrop-blur-md border-white/20"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-3 font-bold text-2xl tracking-tight hover:opacity-90 transition-opacity">
            <img src={logoImage} alt="Massage Bali Logo" className="w-8 h-8 object-contain" />
            <span className={cn(
              "transition-colors",
              isScrolled || mobileMenuOpen || needsSolidHeader ? "text-primary" : "text-white"
            )}>Massage Bali</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/bali"><a className={cn(
            "font-medium transition-colors",
            isScrolled || needsSolidHeader 
              ? "text-foreground hover:text-primary" 
              : "text-white hover:text-white/80 drop-shadow-sm"
          )}>Bali Areas</a></Link>
          <Link href="/massage-types"><a className={cn(
            "font-medium transition-colors",
            isScrolled || needsSolidHeader 
              ? "text-foreground hover:text-primary" 
              : "text-white hover:text-white/80 drop-shadow-sm"
          )}>Massage Types</a></Link>
          <Link href="/guides"><a className={cn(
            "font-medium transition-colors",
            isScrolled || needsSolidHeader 
              ? "text-foreground hover:text-primary" 
              : "text-white hover:text-white/80 drop-shadow-sm"
          )}>Guides</a></Link>
          <Link href="/list-business"><a>
            <Button variant={isScrolled || needsSolidHeader ? "default" : "secondary"} size="sm" className="font-semibold shadow-md">
              Add Place
            </Button>
          </a></Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled || mobileMenuOpen || needsSolidHeader ? "text-foreground" : "text-white drop-shadow-sm")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled || needsSolidHeader ? "text-foreground" : "text-white drop-shadow-sm")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <Link href="/bali"><a onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-foreground hover:text-primary transition-colors">Bali Areas</a></Link>
          <Link href="/massage-types"><a onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-foreground hover:text-primary transition-colors">Massage Types</a></Link>
          <Link href="/guides"><a onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-foreground hover:text-primary transition-colors">Guides</a></Link>
          <Link href="/list-business"><a onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full mt-2">Add Place</Button>
          </a></Link>
        </div>
      )}
    </header>
  );
}
