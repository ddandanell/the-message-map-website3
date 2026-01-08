import MassageTypeTemplate from "./MassageTypeTemplate";
import { massageTypes } from "@/data/massageTypes";

export default function TantricMassageTherapeutic() {
  const data = massageTypes.find(type => type.slug === "tantric-massage-therapeutic");
  if (!data) {
    return <div>Massage type not found</div>;
  }
  return <MassageTypeTemplate data={data} />;
}
