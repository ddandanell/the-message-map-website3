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

// Massage Type Pages
import SwedishMassage from "@/pages/massage-types/SwedishMassage";
import DeepTissueMassage from "@/pages/massage-types/DeepTissueMassage";
import ThaiMassage from "@/pages/massage-types/ThaiMassage";
import HotStoneMassage from "@/pages/massage-types/HotStoneMassage";
import BalineseMassage from "@/pages/massage-types/BalineseMassage";
// New Massage Type Pages
import CraniosacralTherapy from "@/pages/massage-types/CraniosacralTherapy";
import RolfingStructuralIntegration from "@/pages/massage-types/RolfingStructuralIntegration";
import Acupressure from "@/pages/massage-types/Acupressure";
import AyurvedicMassage from "@/pages/massage-types/AyurvedicMassage";
import LomiLomiMassage from "@/pages/massage-types/LomiLomiMassage";
import ChairMassage from "@/pages/massage-types/ChairMassage";
import CuppingTherapy from "@/pages/massage-types/CuppingTherapy";
import BambooMassage from "@/pages/massage-types/BambooMassage";
import Watsu from "@/pages/massage-types/Watsu";
import TuiNa from "@/pages/massage-types/TuiNa";
import NeuromuscularTherapy from "@/pages/massage-types/NeuromuscularTherapy";
import BowenTherapy from "@/pages/massage-types/BowenTherapy";
import Abhyanga from "@/pages/massage-types/Abhyanga";
import EsalenMassage from "@/pages/massage-types/EsalenMassage";
import CranialMassage from "@/pages/massage-types/CranialMassage";
import IndianHeadMassage from "@/pages/massage-types/IndianHeadMassage";
import ManualLymphaticDrainage from "@/pages/massage-types/ManualLymphaticDrainage";
import PregnancyReflexology from "@/pages/massage-types/PregnancyReflexology";
import ReikiMassage from "@/pages/massage-types/ReikiMassage";
import TragerApproach from "@/pages/massage-types/TragerApproach";
import VisceralManipulation from "@/pages/massage-types/VisceralManipulation";
import ZeroBalancing from "@/pages/massage-types/ZeroBalancing";
import Ashiatsu from "@/pages/massage-types/Ashiatsu";
import ChavuttiThirumal from "@/pages/massage-types/ChavuttiThirumal";
import GuaShaMassage from "@/pages/massage-types/GuaShaMassage";
import KinesioTapingMassage from "@/pages/massage-types/KinesioTapingMassage";
import MarmaPointMassage from "@/pages/massage-types/MarmaPointMassage";

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

      {/* Massage Type Detail Pages */}
      <Route path="/massage-types/swedish-massage" component={SwedishMassage} />
      <Route path="/massage-types/deep-tissue-massage" component={DeepTissueMassage} />
      <Route path="/massage-types/thai-massage" component={ThaiMassage} />
      <Route path="/massage-types/hot-stone-massage" component={HotStoneMassage} />
      <Route path="/massage-types/balinese-massage" component={BalineseMassage} />
      {/* New Massage Type Pages */}
      <Route path="/massage-types/craniosacral-therapy" component={CraniosacralTherapy} />
      <Route path="/massage-types/rolfing-structural-integration" component={RolfingStructuralIntegration} />
      <Route path="/massage-types/acupressure" component={Acupressure} />
      <Route path="/massage-types/ayurvedic-massage" component={AyurvedicMassage} />
      <Route path="/massage-types/lomi-lomi-massage" component={LomiLomiMassage} />
      <Route path="/massage-types/chair-massage" component={ChairMassage} />
      <Route path="/massage-types/cupping-therapy" component={CuppingTherapy} />
      <Route path="/massage-types/bamboo-massage" component={BambooMassage} />
      <Route path="/massage-types/watsu" component={Watsu} />
      <Route path="/massage-types/tui-na" component={TuiNa} />
      <Route path="/massage-types/neuromuscular-therapy" component={NeuromuscularTherapy} />
      <Route path="/massage-types/bowen-therapy" component={BowenTherapy} />
      <Route path="/massage-types/abhyanga" component={Abhyanga} />
      <Route path="/massage-types/esalen-massage" component={EsalenMassage} />
      <Route path="/massage-types/cranial-massage" component={CranialMassage} />
      <Route path="/massage-types/indian-head-massage" component={IndianHeadMassage} />
      <Route path="/massage-types/manual-lymphatic-drainage" component={ManualLymphaticDrainage} />
      <Route path="/massage-types/pregnancy-reflexology" component={PregnancyReflexology} />
      <Route path="/massage-types/reiki-massage" component={ReikiMassage} />
      <Route path="/massage-types/trager-approach" component={TragerApproach} />
      <Route path="/massage-types/visceral-manipulation" component={VisceralManipulation} />
      <Route path="/massage-types/zero-balancing" component={ZeroBalancing} />
      <Route path="/massage-types/ashiatsu" component={Ashiatsu} />
      <Route path="/massage-types/chavutti-thirumal" component={ChavuttiThirumal} />
      <Route path="/massage-types/gua-sha-massage" component={GuaShaMassage} />
      <Route path="/massage-types/kinesio-taping-massage" component={KinesioTapingMassage} />
      <Route path="/massage-types/marma-point-massage" component={MarmaPointMassage} />

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
