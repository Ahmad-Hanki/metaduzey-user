import Hero from "@/components/ui/Hero"
import EkibimizFlex from "./_components/EkibimizFlex"
import HizmetlerimizButtons from "@/components/HizmetlerimizButtons"

const EkibimizPage = () => {
  return (
    <div>
        <Hero title="Ekibimiz" path="anaSayfa => Ekibimiz"/>
        <EkibimizFlex />
        <HizmetlerimizButtons/>
    </div>
  )
}

export default EkibimizPage