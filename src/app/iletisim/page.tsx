import Hero from "@/components/ui/Hero"
import Merkez from "./_components/Merkez"
import Sube from "./_components/Sube"
import ContactForm from "./_components/ContactForm"
import GoogleMaps from "./_components/GoogleMaps"

const page = () => {
  return (
    <div className="bg-slate-200">
        <Hero path="AnaSayfa => iletisim" title="İLETİŞİM"/>
        <Merkez />
        <Sube/>
        <ContactForm/>
        <GoogleMaps />
    </div>
  )
}

export default page