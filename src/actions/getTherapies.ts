import { TherapyType } from "@/types/types"; 
import axios from "axios";

const getTherapies = async (): Promise<TherapyType[]> => {
  'use server'
  try {
    const res = await axios.get<TherapyType[]>(process.env.GET_DATA+'/ekib');
    return await res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default getTherapies;
