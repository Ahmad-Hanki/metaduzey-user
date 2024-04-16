import Hero from "@/components/ui/Hero"
import Merkez from "./_components/Merkez"
import Sube from "./_components/Sube"

const page = () => {
  return (
    <div>
        <Hero path="AnaSayfa => iletisim" title="İLETİŞİM"/>
        <Merkez />
        <Sube/>
    </div>
  )
}

export default page