import MassageTypeTemplate from "./MassageTypeTemplate";
import { massageTypes } from "@/data/massageTypes";

export default function RolfingStructuralIntegration() {
  const data = massageTypes.find(type => type.slug === "rolfing-structural-integration");
  if (!data) {
    return <div>Massage type not found</div>;
  }
  return <MassageTypeTemplate data={data} />;
}
