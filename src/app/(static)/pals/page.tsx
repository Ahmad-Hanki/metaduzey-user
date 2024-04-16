import Pals from "@/components/Pals"
import { Metadata } from "next";
  export const metadata: Metadata = {
    title: "Pals",
  }; 
const PalsPage = () => {

  return (
    <div>
        <Pals />
    </div>
  )
}

export default PalsPage