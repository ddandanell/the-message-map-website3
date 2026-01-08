import MassageTypeTemplate from "./MassageTypeTemplate";
import { massageTypes } from "@/data/massageTypes";

export default function StoneTherapy() {
  const data = massageTypes.find(type => type.slug === "stone-therapy");
  if (!data) {
    return <div>Massage type not found</div>;
  }
  return <MassageTypeTemplate data={data} />;
}
