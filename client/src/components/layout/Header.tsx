import { Link, useLocation } from "wouter";
import { Search, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

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
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
        isScrolled || mobileMenuOpen ? "bg-white/95 backdrop-blur-sm shadow-sm border-border" : "bg-transparent text-white"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 font-bold text-2xl tracking-tight hover:opacity-90 transition-opacity">
            <span className={cn("text-primary", !isScrolled && !mobileMenuOpen && "text-white")}>The Massage Map</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/bali/canggu"><a className={cn("font-medium hover:text-primary transition-colors", !isScrolled && "text-white hover:text-white/80")}>Areas</a></Link>
          <Link href="/bali/balinese"><a className={cn("font-medium hover:text-primary transition-colors", !isScrolled && "text-white hover:text-white/80")}>Massage Types</a></Link>
          <Link href="/guides"><a className={cn("font-medium hover:text-primary transition-colors", !isScrolled && "text-white hover:text-white/80")}>Guides</a></Link>
          <Button variant={isScrolled ? "default" : "secondary"} size="sm" className="font-semibold">
            Add Place
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className={cn("w-6 h-6", isScrolled || mobileMenuOpen ? "text-foreground" : "text-white")} />
          ) : (
            <Menu className={cn("w-6 h-6", isScrolled ? "text-foreground" : "text-white")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <Link href="/bali/canggu"><a onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-foreground hover:text-primary">Areas</a></Link>
          <Link href="/bali/balinese"><a onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-foreground hover:text-primary">Massage Types</a></Link>
          <Link href="/guides"><a onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-foreground hover:text-primary">Guides</a></Link>
          <Button className="w-full mt-2">Add Place</Button>
        </div>
      )}
    </header>
  );
}
