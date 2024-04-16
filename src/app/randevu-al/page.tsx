import Hero from "@/components/ui/Hero";
import { Metadata } from "next";
import RandevuClient from "./_Components/RandevuClient";

export const metadata: Metadata = {
    title: "Randevu Al",
  };

const RandevuAlPage = () => {
  return (
    <div>
        <Hero path="AnaSayfa => randevu-al" title="RANDEVU AL"/>
        <RandevuClient />
    </div>
  )
}

export default RandevuAlPage