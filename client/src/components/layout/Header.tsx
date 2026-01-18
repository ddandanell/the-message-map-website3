import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Logo } from "@/components/shared/Logo";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-border bg-white/95 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/bali"><a className="font-medium text-foreground hover:text-primary transition-colors">Cities in Bali</a></Link>
          <Link href="/massage-types"><a className="font-medium text-foreground hover:text-primary transition-colors">Massage Treatments</a></Link>
          <Link href="/freelancers"><a className="font-medium text-foreground hover:text-primary transition-colors">Freelancers</a></Link>
          <Link href="/guides"><a className="font-medium text-foreground hover:text-primary transition-colors">Guides</a></Link>
          <Link href="/list-business"><a>
            <Button variant="default" size="sm" className="font-semibold">
              Add Place
            </Button>
          </a></Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-foreground" />
          ) : (
            <Menu className="w-6 h-6 text-foreground" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-border shadow-lg p-4 flex flex-col gap-4 animate-in slide-in-from-top-5">
          <Link href="/bali"><a onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-foreground hover:text-primary">Cities in Bali</a></Link>
          <Link href="/massage-types"><a onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-foreground hover:text-primary">Massage Treatments</a></Link>
          <Link href="/freelancers"><a onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-foreground hover:text-primary">Freelancers</a></Link>
          <Link href="/guides"><a onClick={() => setMobileMenuOpen(false)} className="block py-2 text-lg font-medium text-foreground hover:text-primary">Guides</a></Link>
          <Link href="/list-business"><a onClick={() => setMobileMenuOpen(false)}>
            <Button className="w-full mt-2">Add Place</Button>
          </a></Link>
        </div>
      )}
    </header>
  );
}
