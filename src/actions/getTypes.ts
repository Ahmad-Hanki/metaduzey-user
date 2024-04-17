import { therapyTypes } from "@/types/types"; // Assuming Therapist interface is defined in "@/types/types"
import axios from "axios";

const getTypes = async (): Promise<therapyTypes[]> => {
  'use server'
  try {
    const res = await axios.get<therapyTypes[]>('https://metaduzey-dashborad.vercel.app/api/therapyType');
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default getTypes;
