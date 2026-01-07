import MassageTypeTemplate from "./MassageTypeTemplate";
import { getMassageTypeBySlug } from "@/data/massageTypes";

export default function DryBrushingMassage() {
  const data = getMassageTypeBySlug("dry-brushing-massage");
  if (!data) return <div>Massage type not found</div>;
  return <MassageTypeTemplate data={data} />;
}
