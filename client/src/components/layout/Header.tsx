import { Link, useLocation } from "wouter";
import { Search, MapPin, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import logoImage from '@assets/generated_images/minimalist_lotus_spa_logo.png';
import { TRANSPARENT_HEADER_PAGES } from "@/lib/constants";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  // Pages with hero images that need transparent header initially
  const needsTransparentHeader = TRANSPARENT_HEADER_PAGES.includes(location);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Always show solid header when scrolled or mobile menu is open
  const showSolidHeader = isScrolled || mobileMenuOpen || !needsTransparentHeader;

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        showSolidHeader 
          ? "bg-white/98 backdrop-blur-md shadow-md border-b border-border" 
          : "bg-gradient-to-b from-black/40 to-transparent"
      )}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-3 font-bold text-2xl tracking-tight hover:opacity-90 transition-all duration-200">
            <img src={logoImage} alt="The Massage Map Logo" className="w-8 h-8 object-contain" />
            <span className={cn(
              "transition-colors duration-200",
              showSolidHeader ? "text-primary" : "text-white drop-shadow-lg"
            )}>
              The Massage Map
            </span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/bali">
            <a className={cn(
              "font-medium transition-all duration-200 relative group",
              showSolidHeader 
                ? "text-foreground hover:text-primary" 
                : "text-white drop-shadow-lg hover:text-white/80"
            )}>
              Bali Areas
              <span className={cn(
                "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full",
                showSolidHeader ? "bg-primary" : "bg-white"
              )} />
            </a>
          </Link>
          <Link href="/massage-types">
            <a className={cn(
              "font-medium transition-all duration-200 relative group",
              showSolidHeader 
                ? "text-foreground hover:text-primary" 
                : "text-white drop-shadow-lg hover:text-white/80"
            )}>
              Massage Types
              <span className={cn(
                "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full",
                showSolidHeader ? "bg-primary" : "bg-white"
              )} />
            </a>
          </Link>
          <Link href="/guides">
            <a className={cn(
              "font-medium transition-all duration-200 relative group",
              showSolidHeader 
                ? "text-foreground hover:text-primary" 
                : "text-white drop-shadow-lg hover:text-white/80"
            )}>
              Guides
              <span className={cn(
                "absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-200 group-hover:w-full",
                showSolidHeader ? "bg-primary" : "bg-white"
              )} />
            </a>
          </Link>
          <Link href="/list-business">
            <a>
              <Button 
                variant={showSolidHeader ? "default" : "secondary"} 
                size="sm" 
                className="font-semibold transition-all duration-200 hover:scale-105 hover:shadow-lg"
              >
                Add Place
              </Button>
            </a>
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 transition-transform duration-200 hover:scale-110"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className={cn("w-6 h-6", showSolidHeader ? "text-foreground" : "text-white drop-shadow-lg")} />
          ) : (
            <Menu className={cn("w-6 h-6", showSolidHeader ? "text-foreground" : "text-white drop-shadow-lg")} />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border shadow-xl animate-in slide-in-from-top-5 duration-200">
          <div className="p-6 flex flex-col gap-1">
            <Link href="/bali">
              <a 
                onClick={() => setMobileMenuOpen(false)} 
                className="block py-3 px-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-150"
              >
                Bali Areas
              </a>
            </Link>
            <Link href="/massage-types">
              <a 
                onClick={() => setMobileMenuOpen(false)} 
                className="block py-3 px-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-150"
              >
                Massage Types
              </a>
            </Link>
            <Link href="/guides">
              <a 
                onClick={() => setMobileMenuOpen(false)} 
                className="block py-3 px-4 text-lg font-medium text-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-all duration-150"
              >
                Guides
              </a>
            </Link>
            <div className="mt-4 px-4">
              <Link href="/list-business">
                <a onClick={() => setMobileMenuOpen(false)}>
                  <Button className="w-full">Add Place</Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
