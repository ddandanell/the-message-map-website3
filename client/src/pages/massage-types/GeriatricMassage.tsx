import MassageTypeTemplate from "./MassageTypeTemplate";
import { massageTypes } from "@/data/massageTypes";

export default function GeriatricMassage() {
  const data = massageTypes.find(type => type.slug === "geriatric-massage");
  if (!data) {
    return <div>Massage type not found</div>;
  }
  return <MassageTypeTemplate data={data} />;
}
