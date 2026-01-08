import MassageTypeTemplate from "./MassageTypeTemplate";
import { massageTypes } from "@/data/massageTypes";

export default function ChiNeiTsang() {
  const data = massageTypes.find(type => type.slug === "chi-nei-tsang");
  if (!data) {
    return <div>Massage type not found</div>;
  }
  return <MassageTypeTemplate data={data} />;
}
