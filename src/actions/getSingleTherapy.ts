import { TherapyType } from "@/types/types"; // Assuming Therapist interface is defined in "@/types/types"
import axios from "axios";

const getSingleTherapy = async (id:string): Promise<TherapyType> => {
  'use server'
  try {
    const res = await axios.get<TherapyType>(`${process.env.GET_DATA}/ekib/${id}`);
    return await res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default getSingleTherapy;
