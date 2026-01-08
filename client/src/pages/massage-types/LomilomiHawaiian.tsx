import MassageTypeTemplate from "./MassageTypeTemplate";
import { massageTypes } from "@/data/massageTypes";

export default function LomilomiHawaiian() {
  const data = massageTypes.find(type => type.slug === "lomilomi-hawaiian");
  if (!data) {
    return <div>Massage type not found</div>;
  }
  return <MassageTypeTemplate data={data} />;
}
