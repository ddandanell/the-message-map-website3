import MassageTypeTemplate from "./MassageTypeTemplate";
import { getMassageTypeBySlug } from "@/data/massageTypes";

export default function CompassionateTouch() {
  const data = getMassageTypeBySlug("compassionate-touch");
  if (!data) return <div>Massage type not found</div>;
  return <MassageTypeTemplate data={data} />;
}
