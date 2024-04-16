import Hero from "@/components/ui/Hero"
import EkibimizFlex from "./_components/EkibimizFlex"
import { Metadata } from "next";
  export const metadata: Metadata = {
    title: "Ekibimiz",
  }; 
const EkibimizPage = () => {

  return (
    <div>
        <Hero title="Ekibimiz" path="anaSayfa => Ekibimiz"/>
        <EkibimizFlex />
    </div>
  )
}

export default EkibimizPage