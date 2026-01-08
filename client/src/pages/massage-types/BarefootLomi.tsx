import MassageTypeTemplate from "./MassageTypeTemplate";
import { massageTypes } from "@/data/massageTypes";

export default function BarefootLomi() {
  const data = massageTypes.find(type => type.slug === "barefoot-lomi");
  if (!data) {
    return <div>Massage type not found</div>;
  }
  return <MassageTypeTemplate data={data} />;
}
