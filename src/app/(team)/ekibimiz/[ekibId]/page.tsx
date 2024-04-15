import EkibSingleCard from "@/components/EkibSingleCard"
import { cookies } from "next/headers"

const SingleEkibPage = () => {
    const cookie = cookies(); 
    const appointment =  cookie.get('appointment');
  return (

    <div>
        <EkibSingleCard appointment={appointment}/>
    </div>
  )
}

export default SingleEkibPage