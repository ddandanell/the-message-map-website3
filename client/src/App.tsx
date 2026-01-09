import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ScrollToTop } from "@/components/shared/ScrollToTop";
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
import Freelancers from "@/pages/Freelancers";
import FreelancerDetail from "@/pages/FreelancerDetail";

// Bali Area Pages
import BaliIndex from "@/pages/BaliIndex";
import BaliCityPage from "@/pages/BaliCityPage";

// Guide Detail Pages
import BestMassageCanggu2026 from "@/pages/guides/BestMassageCanggu2026";
import TraditionalBalineseMassage from "@/pages/guides/TraditionalBalineseMassage";
import MassageBaliProposal from "@/pages/guides/MassageBaliProposal";

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
// Additional New Massage Types
import SportsMassage from "@/pages/massage-types/SportsMassage";
import AromatherapyMassage from "@/pages/massage-types/AromatherapyMassage";
import PrenatalMassage from "@/pages/massage-types/PrenatalMassage";
import Reflexology from "@/pages/massage-types/Reflexology";
import ShiatsuMassage from "@/pages/massage-types/ShiatsuMassage";
import MyofascialRelease from "@/pages/massage-types/MyofascialRelease";
import LymphaticMassage from "@/pages/massage-types/LymphaticMassage";
import TriggerPointTherapy from "@/pages/massage-types/TriggerPointTherapy";
import StoneTherapy from "@/pages/massage-types/StoneTherapy";
import CuppingMassageCombined from "@/pages/massage-types/CuppingMassageCombined";
import OncologyMassage from "@/pages/massage-types/OncologyMassage";
import GeriatricMassage from "@/pages/massage-types/GeriatricMassage";
import PediatricMassage from "@/pages/massage-types/PediatricMassage";
import MedicalMassage from "@/pages/massage-types/MedicalMassage";
import LomilomiHawaiian from "@/pages/massage-types/LomilomiHawaiian";
import RussianSportsMassage from "@/pages/massage-types/RussianSportsMassage";
import Hilot from "@/pages/massage-types/Hilot";
import TantricMassageTherapeutic from "@/pages/massage-types/TantricMassageTherapeutic";
import ChiNeiTsang from "@/pages/massage-types/ChiNeiTsang";
import Breema from "@/pages/massage-types/Breema";
import PolarityTherapy from "@/pages/massage-types/PolarityTherapy";
import BiodynamicMassage from "@/pages/massage-types/BiodynamicMassage";
import SargaBodywork from "@/pages/massage-types/SargaBodywork";
import FeldenkraisFunctionalIntegration from "@/pages/massage-types/FeldenkraisFunctionalIntegration";
import OrthopedicMassage from "@/pages/massage-types/OrthopedicMassage";
import BambooFusion from "@/pages/massage-types/BambooFusion";
import LastoneTherapy from "@/pages/massage-types/LastoneTherapy";
import BarefootLomi from "@/pages/massage-types/BarefootLomi";
import FireCupping from "@/pages/massage-types/FireCupping";
// Additional Treatment Pages
import FootMassage from "@/pages/massage-types/FootMassage";
import FourHandMassage from "@/pages/massage-types/FourHandMassage";
import FrictionMassage from "@/pages/massage-types/FrictionMassage";
import GrastonTechnique from "@/pages/massage-types/GrastonTechnique";
import HammamMassage from "@/pages/massage-types/HammamMassage";
import HandMassage from "@/pages/massage-types/HandMassage";
import HawaiianTempleStyleLomiLomi from "@/pages/massage-types/HawaiianTempleStyleLomiLomi";
import HealingTouchMassage from "@/pages/massage-types/HealingTouchMassage";
import HoneyMassage from "@/pages/massage-types/HoneyMassage";
import HydrotherapyMassage from "@/pages/massage-types/HydrotherapyMassage";
import InfantMassage from "@/pages/massage-types/InfantMassage";
import IntegratedManualTherapy from "@/pages/massage-types/IntegratedManualTherapy";
import IntegrativeMassage from "@/pages/massage-types/IntegrativeMassage";
import IntraoralMassage from "@/pages/massage-types/IntraoralMassage";
import JinShinJyutsu from "@/pages/massage-types/JinShinJyutsu";
import KahunaMassage from "@/pages/massage-types/KahunaMassage";
import KalaripayattuMassage from "@/pages/massage-types/KalaripayattuMassage";
import KatiBasti from "@/pages/massage-types/KatiBasti";
import KineticChainRelease from "@/pages/massage-types/KineticChainRelease";
import KneadingMassagePetrissage from "@/pages/massage-types/KneadingMassagePetrissage";
import KoreanHandTherapy from "@/pages/massage-types/KoreanHandTherapy";
import KundaliniMassage from "@/pages/massage-types/KundaliniMassage";
import LaotianMassage from "@/pages/massage-types/LaotianMassage";
import LavenderOilMassage from "@/pages/massage-types/LavenderOilMassage";
import LegMassage from "@/pages/massage-types/LegMassage";
import LomilomiPohaku from "@/pages/massage-types/LomilomiPohaku";
import LowLevelLaserMassage from "@/pages/massage-types/LowLevelLaserMassage";
import LymphMassage from "@/pages/massage-types/LymphMassage";
import MakkoHoMassage from "@/pages/massage-types/MakkoHoMassage";
import MarnitzTherapy from "@/pages/massage-types/MarnitzTherapy";
import MassageEnvyStyle from "@/pages/massage-types/MassageEnvyStyle";
import MedicalQiGongMassage from "@/pages/massage-types/MedicalQiGongMassage";
import MeridianMassage from "@/pages/massage-types/MeridianMassage";
import MigraineReliefMassage from "@/pages/massage-types/MigraineReliefMassage";
import MobilizationMassage from "@/pages/massage-types/MobilizationMassage";
import MotherRoastingPostpartumMassage from "@/pages/massage-types/MotherRoastingPostpartumMassage";
import MoxibustionMassage from "@/pages/massage-types/MoxibustionMassage";
import MuscleEnergyTechnique from "@/pages/massage-types/MuscleEnergyTechnique";
import NadiVigyanMassage from "@/pages/massage-types/NadiVigyanMassage";
import NagaMassage from "@/pages/massage-types/NagaMassage";
import NuatPhaenBoran from "@/pages/massage-types/NuatPhaenBoran";
import NursingMassage from "@/pages/massage-types/NursingMassage";
import OiledMassageAbhyanga from "@/pages/massage-types/OiledMassageAbhyanga";
import OsteopathicManipulativeTreatment from "@/pages/massage-types/OsteopathicManipulativeTreatment";
import Palming from "@/pages/massage-types/Palming";
import PassiveMovementTherapy from "@/pages/massage-types/PassiveMovementTherapy";
import PercussionMassage from "@/pages/massage-types/PercussionMassage";
import PerinealMassage from "@/pages/massage-types/PerinealMassage";
import PetMassage from "@/pages/massage-types/PetMassage";
import PinchandRollMassage from "@/pages/massage-types/PinchandRollMassage";
import PindaSweda from "@/pages/massage-types/PindaSweda";
import PlantarFasciitisMassage from "@/pages/massage-types/PlantarFasciitisMassage";
import PositionalReleaseTherapy from "@/pages/massage-types/PositionalReleaseTherapy";
import PostSurgicalMassage from "@/pages/massage-types/PostSurgicalMassage";
import PostpartumAbdominalMassage from "@/pages/massage-types/PostpartumAbdominalMassage";
import PoulticeMassage from "@/pages/massage-types/PoulticeMassage";
import PregnancyAcupressure from "@/pages/massage-types/PregnancyAcupressure";
import PressurePointMassage from "@/pages/massage-types/PressurePointMassage";
import PulsingTherapy from "@/pages/massage-types/PulsingTherapy";
import QiHealingMassage from "@/pages/massage-types/QiHealingMassage";
import QuantumTouchMassage from "@/pages/massage-types/QuantumTouchMassage";
import RaindropTherapy from "@/pages/massage-types/RaindropTherapy";
import RapidNeurofascialReset from "@/pages/massage-types/RapidNeurofascialReset";
import RasulMassage from "@/pages/massage-types/RasulMassage";
import ReconstructiveTherapyMassage from "@/pages/massage-types/ReconstructiveTherapyMassage";
import RejuvenationMassage from "@/pages/massage-types/RejuvenationMassage";
import RestorativeMassage from "@/pages/massage-types/RestorativeMassage";
import RhythmicMassage from "@/pages/massage-types/RhythmicMassage";
import RosenMethodBodywork from "@/pages/massage-types/RosenMethodBodywork";
import SacroOccipitalTechnique from "@/pages/massage-types/SacroOccipitalTechnique";
import SaltGlowMassage from "@/pages/massage-types/SaltGlowMassage";
import ScalpMassage from "@/pages/massage-types/ScalpMassage";
import ScarTissueMassage from "@/pages/massage-types/ScarTissueMassage";
import SeatedAcupressure from "@/pages/massage-types/SeatedAcupressure";
import SelfMassage from "@/pages/massage-types/SelfMassage";
import SenobiMassage from "@/pages/massage-types/SenobiMassage";
import SensoryMassage from "@/pages/massage-types/SensoryMassage";
import ShantalaBabyMassage from "@/pages/massage-types/ShantalaBabyMassage";
import Shirodhara from "@/pages/massage-types/Shirodhara";
import SiliconeCupping from "@/pages/massage-types/SiliconeCupping";
import SingingBowlMassage from "@/pages/massage-types/SingingBowlMassage";
import SkinRolling from "@/pages/massage-types/SkinRolling";
import SlowStrokeMassage from "@/pages/massage-types/SlowStrokeMassage";
import SomaticExperiencingMassage from "@/pages/massage-types/SomaticExperiencingMassage";
import SoundTherapyMassage from "@/pages/massage-types/SoundTherapyMassage";
import SpaMassage from "@/pages/massage-types/SpaMassage";
import SpinalTouchTherapy from "@/pages/massage-types/SpinalTouchTherapy";
import SportSpecificMassage from "@/pages/massage-types/SportSpecificMassage";
import StrainCounterstrain from "@/pages/massage-types/StrainCounterstrain";
import StressReliefMassage from "@/pages/massage-types/StressReliefMassage";
import StretchingMassage from "@/pages/massage-types/StretchingMassage";
import SuboccipitalRelease from "@/pages/massage-types/SuboccipitalRelease";
import SuctionCupMassage from "@/pages/massage-types/SuctionCupMassage";
import SwedishEsalenFusion from "@/pages/massage-types/SwedishEsalenFusion";
import SynergisticMassage from "@/pages/massage-types/SynergisticMassage";
import TableThaiMassage from "@/pages/massage-types/TableThaiMassage";
import TapasAcupressureTechnique from "@/pages/massage-types/TapasAcupressureTechnique";
import TargetSpecificMassage from "@/pages/massage-types/TargetSpecificMassage";
import TensionReliefMassage from "@/pages/massage-types/TensionReliefMassage";
import ThaiAromatherapyMassage from "@/pages/massage-types/ThaiAromatherapyMassage";
import ThaiFootMassage from "@/pages/massage-types/ThaiFootMassage";
import ThaiHerbalCompressMassage from "@/pages/massage-types/ThaiHerbalCompressMassage";
import ThaiOilMassage from "@/pages/massage-types/ThaiOilMassage";
import ThaiTokSen from "@/pages/massage-types/ThaiTokSen";
import TherapeuticMassage from "@/pages/massage-types/TherapeuticMassage";
import TherapeuticTouch from "@/pages/massage-types/TherapeuticTouch";
import ThermalStoneMassage from "@/pages/massage-types/ThermalStoneMassage";
import TibetanKuNyeMassage from "@/pages/massage-types/TibetanKuNyeMassage";
import TissueMobilization from "@/pages/massage-types/TissueMobilization";
import TokenRingMassage from "@/pages/massage-types/TokenRingMassage";
import TraditionalChineseMassageTuiNa from "@/pages/massage-types/TraditionalChineseMassageTuiNa";
import TragerPsychophysicalIntegration from "@/pages/massage-types/TragerPsychophysicalIntegration";
import TranscutaneousElectricalNerveStimulationMassage from "@/pages/massage-types/TranscutaneousElectricalNerveStimulationMassage";
import TraumaInformedMassage from "@/pages/massage-types/TraumaInformedMassage";
import TriggerPointDryNeedlingwithMassage from "@/pages/massage-types/TriggerPointDryNeedlingwithMassage";
import TurkishBathMassage from "@/pages/massage-types/TurkishBathMassage";
import Udvartana from "@/pages/massage-types/Udvartana";

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
      <Route path="/guides/massage-bali-freelancer-platform" component={MassageBaliProposal} />

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
      {/* Additional New Massage Type Routes */}
      <Route path="/massage-types/sports-massage" component={SportsMassage} />
      <Route path="/massage-types/aromatherapy-massage" component={AromatherapyMassage} />
      <Route path="/massage-types/prenatal-massage" component={PrenatalMassage} />
      <Route path="/massage-types/reflexology" component={Reflexology} />
      <Route path="/massage-types/shiatsu-massage" component={ShiatsuMassage} />
      <Route path="/massage-types/myofascial-release" component={MyofascialRelease} />
      <Route path="/massage-types/lymphatic-massage" component={LymphaticMassage} />
      <Route path="/massage-types/trigger-point-therapy" component={TriggerPointTherapy} />
      <Route path="/massage-types/stone-therapy" component={StoneTherapy} />
      <Route path="/massage-types/cupping-massage-combined" component={CuppingMassageCombined} />
      <Route path="/massage-types/oncology-massage" component={OncologyMassage} />
      <Route path="/massage-types/geriatric-massage" component={GeriatricMassage} />
      <Route path="/massage-types/pediatric-massage" component={PediatricMassage} />
      <Route path="/massage-types/medical-massage" component={MedicalMassage} />
      <Route path="/massage-types/lomilomi-hawaiian" component={LomilomiHawaiian} />
      <Route path="/massage-types/russian-sports-massage" component={RussianSportsMassage} />
      <Route path="/massage-types/hilot" component={Hilot} />
      <Route path="/massage-types/tantric-massage-therapeutic" component={TantricMassageTherapeutic} />
      <Route path="/massage-types/chi-nei-tsang" component={ChiNeiTsang} />
      <Route path="/massage-types/breema" component={Breema} />
      <Route path="/massage-types/polarity-therapy" component={PolarityTherapy} />
      <Route path="/massage-types/biodynamic-massage" component={BiodynamicMassage} />
      <Route path="/massage-types/sarga-bodywork" component={SargaBodywork} />
      <Route path="/massage-types/feldenkrais-functional-integration" component={FeldenkraisFunctionalIntegration} />
      <Route path="/massage-types/orthopedic-massage" component={OrthopedicMassage} />
      <Route path="/massage-types/bamboo-fusion" component={BambooFusion} />
      <Route path="/massage-types/lastone-therapy" component={LastoneTherapy} />
      <Route path="/massage-types/barefoot-lomi" component={BarefootLomi} />
      <Route path="/massage-types/fire-cupping" component={FireCupping} />
      {/* Additional Treatment Routes */}
      <Route path="/massage-types/foot-massage" component={FootMassage} />
      <Route path="/massage-types/four-hand-massage" component={FourHandMassage} />
      <Route path="/massage-types/friction-massage" component={FrictionMassage} />
      <Route path="/massage-types/graston-technique" component={GrastonTechnique} />
      <Route path="/massage-types/hammam-massage" component={HammamMassage} />
      <Route path="/massage-types/hand-massage" component={HandMassage} />
      <Route path="/massage-types/hawaiian-temple-style-lomi-lomi" component={HawaiianTempleStyleLomiLomi} />
      <Route path="/massage-types/healing-touch-massage" component={HealingTouchMassage} />
      <Route path="/massage-types/honey-massage" component={HoneyMassage} />
      <Route path="/massage-types/hydrotherapy-massage" component={HydrotherapyMassage} />
      <Route path="/massage-types/infant-massage" component={InfantMassage} />
      <Route path="/massage-types/integrated-manual-therapy" component={IntegratedManualTherapy} />
      <Route path="/massage-types/integrative-massage" component={IntegrativeMassage} />
      <Route path="/massage-types/intraoral-massage" component={IntraoralMassage} />
      <Route path="/massage-types/jin-shin-jyutsu" component={JinShinJyutsu} />
      <Route path="/massage-types/kahuna-massage" component={KahunaMassage} />
      <Route path="/massage-types/kalaripayattu-massage" component={KalaripayattuMassage} />
      <Route path="/massage-types/kati-basti" component={KatiBasti} />
      <Route path="/massage-types/kinetic-chain-release" component={KineticChainRelease} />
      <Route path="/massage-types/kneading-massage-petrissage" component={KneadingMassagePetrissage} />
      <Route path="/massage-types/korean-hand-therapy" component={KoreanHandTherapy} />
      <Route path="/massage-types/kundalini-massage" component={KundaliniMassage} />
      <Route path="/massage-types/la-stone-therapy" component={LastoneTherapy} />
      <Route path="/massage-types/laotian-massage" component={LaotianMassage} />
      <Route path="/massage-types/lavender-oil-massage" component={LavenderOilMassage} />
      <Route path="/massage-types/leg-massage" component={LegMassage} />
      <Route path="/massage-types/lomilomi-pohaku" component={LomilomiPohaku} />
      <Route path="/massage-types/low-level-laser-massage" component={LowLevelLaserMassage} />
      <Route path="/massage-types/lymph-massage" component={LymphMassage} />
      <Route path="/massage-types/makko-ho-massage" component={MakkoHoMassage} />
      <Route path="/massage-types/marnitz-therapy" component={MarnitzTherapy} />
      <Route path="/massage-types/massage-envy-style" component={MassageEnvyStyle} />
      <Route path="/massage-types/medical-qi-gong-massage" component={MedicalQiGongMassage} />
      <Route path="/massage-types/meridian-massage" component={MeridianMassage} />
      <Route path="/massage-types/migraine-relief-massage" component={MigraineReliefMassage} />
      <Route path="/massage-types/mobilization-massage" component={MobilizationMassage} />
      <Route path="/massage-types/mother-roasting-postpartum-massage" component={MotherRoastingPostpartumMassage} />
      <Route path="/massage-types/moxibustion-massage" component={MoxibustionMassage} />
      <Route path="/massage-types/muscle-energy-technique" component={MuscleEnergyTechnique} />
      <Route path="/massage-types/nadi-vigyan-massage" component={NadiVigyanMassage} />
      <Route path="/massage-types/naga-massage" component={NagaMassage} />
      <Route path="/massage-types/nuat-phaen-boran" component={NuatPhaenBoran} />
      <Route path="/massage-types/nursing-massage" component={NursingMassage} />
      <Route path="/massage-types/oiled-massage-abhyanga" component={OiledMassageAbhyanga} />
      <Route path="/massage-types/osteopathic-manipulative-treatment" component={OsteopathicManipulativeTreatment} />
      <Route path="/massage-types/palming" component={Palming} />
      <Route path="/massage-types/passive-movement-therapy" component={PassiveMovementTherapy} />
      <Route path="/massage-types/percussion-massage" component={PercussionMassage} />
      <Route path="/massage-types/perineal-massage" component={PerinealMassage} />
      <Route path="/massage-types/pet-massage" component={PetMassage} />
      <Route path="/massage-types/pinch-and-roll-massage" component={PinchandRollMassage} />
      <Route path="/massage-types/pinda-sweda" component={PindaSweda} />
      <Route path="/massage-types/plantar-fasciitis-massage" component={PlantarFasciitisMassage} />
      <Route path="/massage-types/positional-release-therapy" component={PositionalReleaseTherapy} />
      <Route path="/massage-types/post-surgical-massage" component={PostSurgicalMassage} />
      <Route path="/massage-types/postpartum-abdominal-massage" component={PostpartumAbdominalMassage} />
      <Route path="/massage-types/poultice-massage" component={PoulticeMassage} />
      <Route path="/massage-types/pregnancy-acupressure" component={PregnancyAcupressure} />
      <Route path="/massage-types/pressure-point-massage" component={PressurePointMassage} />
      <Route path="/massage-types/pulsing-therapy" component={PulsingTherapy} />
      <Route path="/massage-types/qi-healing-massage" component={QiHealingMassage} />
      <Route path="/massage-types/quantum-touch-massage" component={QuantumTouchMassage} />
      <Route path="/massage-types/raindrop-therapy" component={RaindropTherapy} />
      <Route path="/massage-types/rapid-neurofascial-reset" component={RapidNeurofascialReset} />
      <Route path="/massage-types/rasul-massage" component={RasulMassage} />
      <Route path="/massage-types/reconstructive-therapy-massage" component={ReconstructiveTherapyMassage} />
      <Route path="/massage-types/rejuvenation-massage" component={RejuvenationMassage} />
      <Route path="/massage-types/restorative-massage" component={RestorativeMassage} />
      <Route path="/massage-types/rhythmic-massage" component={RhythmicMassage} />
      <Route path="/massage-types/rosen-method-bodywork" component={RosenMethodBodywork} />
      <Route path="/massage-types/sacro-occipital-technique" component={SacroOccipitalTechnique} />
      <Route path="/massage-types/salt-glow-massage" component={SaltGlowMassage} />
      <Route path="/massage-types/scalp-massage" component={ScalpMassage} />
      <Route path="/massage-types/scar-tissue-massage" component={ScarTissueMassage} />
      <Route path="/massage-types/seated-acupressure" component={SeatedAcupressure} />
      <Route path="/massage-types/self-massage" component={SelfMassage} />
      <Route path="/massage-types/senobi-massage" component={SenobiMassage} />
      <Route path="/massage-types/sensory-massage" component={SensoryMassage} />
      <Route path="/massage-types/shantala-baby-massage" component={ShantalaBabyMassage} />
      <Route path="/massage-types/shirodhara" component={Shirodhara} />
      <Route path="/massage-types/silicone-cupping" component={SiliconeCupping} />
      <Route path="/massage-types/singing-bowl-massage" component={SingingBowlMassage} />
      <Route path="/massage-types/skin-rolling" component={SkinRolling} />
      <Route path="/massage-types/slow-stroke-massage" component={SlowStrokeMassage} />
      <Route path="/massage-types/somatic-experiencing-massage" component={SomaticExperiencingMassage} />
      <Route path="/massage-types/sound-therapy-massage" component={SoundTherapyMassage} />
      <Route path="/massage-types/spa-massage" component={SpaMassage} />
      <Route path="/massage-types/spinal-touch-therapy" component={SpinalTouchTherapy} />
      <Route path="/massage-types/sport-specific-massage" component={SportSpecificMassage} />
      <Route path="/massage-types/strain-counterstrain" component={StrainCounterstrain} />
      <Route path="/massage-types/stress-relief-massage" component={StressReliefMassage} />
      <Route path="/massage-types/stretching-massage" component={StretchingMassage} />
      <Route path="/massage-types/suboccipital-release" component={SuboccipitalRelease} />
      <Route path="/massage-types/suction-cup-massage" component={SuctionCupMassage} />
      <Route path="/massage-types/swedish-esalen-fusion" component={SwedishEsalenFusion} />
      <Route path="/massage-types/synergistic-massage" component={SynergisticMassage} />
      <Route path="/massage-types/table-thai-massage" component={TableThaiMassage} />
      <Route path="/massage-types/tapas-acupressure-technique" component={TapasAcupressureTechnique} />
      <Route path="/massage-types/target-specific-massage" component={TargetSpecificMassage} />
      <Route path="/massage-types/tension-relief-massage" component={TensionReliefMassage} />
      <Route path="/massage-types/thai-aromatherapy-massage" component={ThaiAromatherapyMassage} />
      <Route path="/massage-types/thai-foot-massage" component={ThaiFootMassage} />
      <Route path="/massage-types/thai-herbal-compress-massage" component={ThaiHerbalCompressMassage} />
      <Route path="/massage-types/thai-oil-massage" component={ThaiOilMassage} />
      <Route path="/massage-types/thai-tok-sen" component={ThaiTokSen} />
      <Route path="/massage-types/therapeutic-massage" component={TherapeuticMassage} />
      <Route path="/massage-types/therapeutic-touch" component={TherapeuticTouch} />
      <Route path="/massage-types/thermal-stone-massage" component={ThermalStoneMassage} />
      <Route path="/massage-types/tibetan-ku-nye-massage" component={TibetanKuNyeMassage} />
      <Route path="/massage-types/tissue-mobilization" component={TissueMobilization} />
      <Route path="/massage-types/token-ring-massage" component={TokenRingMassage} />
      <Route path="/massage-types/traditional-chinese-massage-tui-na" component={TraditionalChineseMassageTuiNa} />
      <Route path="/massage-types/trager-psychophysical-integration" component={TragerPsychophysicalIntegration} />
      <Route path="/massage-types/transcutaneous-electrical-nerve-stimulation-massage" component={TranscutaneousElectricalNerveStimulationMassage} />
      <Route path="/massage-types/trauma-informed-massage" component={TraumaInformedMassage} />
      <Route path="/massage-types/trigger-point-dry-needling-with-massage" component={TriggerPointDryNeedlingwithMassage} />
      <Route path="/massage-types/turkish-bath-massage" component={TurkishBathMassage} />
      <Route path="/massage-types/udvartana" component={Udvartana} />

      <Route path="/list-business" component={ListBusiness} />
      <Route path="/how-we-rate" component={HowWeRate} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy" component={Privacy} />
      <Route path="/freelancers" component={Freelancers} />
      <Route path="/freelancers/:slug" component={FreelancerDetail} />

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
        <ScrollToTop />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
