import EkibSingleCard from "@/components/EkibSingleCard"
import EkibimizSwipper from "@/components/EkibimizSwipper";
import { Metadata } from "next";
import { cookies } from "next/headers"

const SingleEkibPage = async () => {
  
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
