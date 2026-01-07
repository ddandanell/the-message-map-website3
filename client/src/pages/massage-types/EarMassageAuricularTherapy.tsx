import MassageTypeTemplate from "./MassageTypeTemplate";
import { getMassageTypeBySlug } from "@/data/massageTypes";

export default function EarMassageAuricularTherapy() {
  const data = getMassageTypeBySlug("ear-massage-auricular-therapy");
  if (!data) return <div>Massage type not found</div>;
  return <MassageTypeTemplate data={data} />;
}
