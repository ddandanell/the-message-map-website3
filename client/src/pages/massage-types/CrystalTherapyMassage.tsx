import MassageTypeTemplate from "./MassageTypeTemplate";
import { getMassageTypeBySlug } from "@/data/massageTypes";

export default function CrystalTherapyMassage() {
  const data = getMassageTypeBySlug("crystal-therapy-massage");
  if (!data) return <div>Massage type not found</div>;
  return <MassageTypeTemplate data={data} />;
}
