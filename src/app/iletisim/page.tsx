import Hero from "@/components/ui/Hero"
import Merkez from "./_components/Merkez"
import Sube from "./_components/Sube"
import ContactForm from "./_components/ContactForm"

const page = () => {
  return (
    <div className="bg-slate-200">
        <Hero path="AnaSayfa => iletisim" title="İLETİŞİM"/>
        <Merkez />
        <Sube/>
        <ContactForm/>
    </div>
  )
}

export default page