import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import BaliExplorer from "@/pages/BaliExplorer";
import PlaceDetail from "@/pages/PlaceDetail";

import ListBusiness from "@/pages/ListBusiness";
import HowWeRate from "@/pages/HowWeRate";
import About from "@/pages/About";
import Areas from "@/pages/Areas";
import MassageTypes from "@/pages/MassageTypes";
import Guides from "@/pages/Guides";
import Contact from "@/pages/Contact";
import Privacy from "@/pages/Privacy";

// Bali Area Pages
import BaliIndex from "@/pages/BaliIndex";
import BaliCityPage from "@/pages/BaliCityPage";

// Guide Detail Pages
import BestMassageCanggu2026 from "@/pages/guides/BestMassageCanggu2026";
import TraditionalBalineseMassage from "@/pages/guides/TraditionalBalineseMassage";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/areas" component={Areas} />
      <Route path="/massage-types" component={MassageTypes} />
      <Route path="/guides" component={Guides} />

      {/* Guide Detail Pages */}
      <Route path="/guides/best-massage-canggu-2026" component={BestMassageCanggu2026} />
      <Route path="/guides/traditional-balinese-massage-guide" component={TraditionalBalineseMassage} />

      <Route path="/list-business" component={ListBusiness} />
      <Route path="/how-we-rate" component={HowWeRate} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />

      {/* Bali Area Pages - Must come before old routes */}
      <Route path="/bali" component={BaliIndex} />
      <Route path="/bali/:slug" component={BaliCityPage} />

      {/* Legacy Bali Explorer Routes */}
      <Route path="/bali/:area/:slug" component={PlaceDetail} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
