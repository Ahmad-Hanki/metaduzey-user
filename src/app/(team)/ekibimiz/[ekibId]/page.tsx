import EkibSingleCard from "@/components/EkibSingleCard"
import EkibimizSwipper from "@/components/EkibimizSwipper";
import { cookies } from "next/headers"

const SingleEkibPage = () => {
    const cookie = cookies(); 
    const appointment =  cookie.get('appointment');
  return (

    <div>
        <EkibSingleCard appointment={appointment}/>
        <EkibimizSwipper />
    </div>
  )
}

export default SingleEkibPage