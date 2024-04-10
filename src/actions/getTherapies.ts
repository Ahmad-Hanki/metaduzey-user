import { TherapyType } from "@/types/types"; // Assuming Therapist interface is defined in "@/types/types"
import axios from "axios";

const getTherapies = async (): Promise<TherapyType[]> => {
  'use server'
  try {
    const res = await axios.get<TherapyType[]>('https://metaduzey-dashborad.vercel.app/api/ekib');
    return await res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default getTherapies;
