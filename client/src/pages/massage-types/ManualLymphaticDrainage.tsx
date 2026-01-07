import MassageTypeTemplate from "./MassageTypeTemplate";
import { massageTypes } from "@/data/massageTypes";

export default function ManualLymphaticDrainage() {
  const data = massageTypes.find(type => type.slug === "manual-lymphatic-drainage");
  if (!data) {
    return <div>Massage type not found</div>;
  }
  return <MassageTypeTemplate data={data} />;
}
