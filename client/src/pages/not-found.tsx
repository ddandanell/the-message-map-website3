import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SearchX, Home, MapPin } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center bg-slate-50 p-4 text-center">
        <div className="w-24 h-24 bg-teal-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in-50 duration-500">
          <SearchX className="w-12 h-12 text-teal-600" />
        </div>
        
        <h1 className="text-4xl font-bold text-slate-900 mb-3">Page not found</h1>
        <p className="text-lg text-slate-600 max-w-md mb-8">
          Oops! It looks like you've wandered off the path. The page you're looking for doesn't exist or has been moved.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Link href="/">
            <Button size="lg" className="h-12 px-8">
              <Home className="w-4 h-4 mr-2" /> Go Home
            </Button>
          </Link>
          <Link href="/bali/canggu">
            <Button size="lg" variant="outline" className="h-12 px-8 bg-white">
              <MapPin className="w-4 h-4 mr-2" /> Explore Areas
            </Button>
          </Link>
        </div>

        <div className="mt-12 text-sm text-slate-400">
          Error 404
        </div>
      </div>
      <Footer />
    </div>
  );
}
