import MassageTypeTemplate from "./MassageTypeTemplate";
import { massageTypes } from "@/data/massageTypes";

export default function Breema() {
  const data = massageTypes.find(type => type.slug === "breema");
  if (!data) {
    return <div>Massage type not found</div>;
  }
  return <MassageTypeTemplate data={data} />;
}
