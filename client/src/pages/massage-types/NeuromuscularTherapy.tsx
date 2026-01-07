import MassageTypeTemplate from "./MassageTypeTemplate";
import { massageTypes } from "@/data/massageTypes";

export default function NeuromuscularTherapy() {
  const data = massageTypes.find(type => type.slug === "neuromuscular-therapy");
  if (!data) {
    return <div>Massage type not found</div>;
  }
  return <MassageTypeTemplate data={data} />;
}
