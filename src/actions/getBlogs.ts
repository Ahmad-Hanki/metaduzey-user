import { Blog } from "@/types/types"; // Assuming Therapist interface is defined in "@/types/types"
import axios from "axios";

const getBlogs = async (): Promise<Blog[]> => {
  'use server'
  try {
    const res = await axios.get<Blog[]>(process.env.GET_DATA+'/blog');
    return await res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
}

export default getBlogs;
