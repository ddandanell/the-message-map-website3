import MassageTypeTemplate from "./MassageTypeTemplate";
import { getMassageTypeBySlug } from "@/data/massageTypes";

export default function ColumbianMassage() {
  const data = getMassageTypeBySlug("columbian-massage");
  if (!data) return <div>Massage type not found</div>;
  return <MassageTypeTemplate data={data} />;
}
