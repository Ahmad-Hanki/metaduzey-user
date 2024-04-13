import { Blog } from "@/types/types"; 
import axios from "axios";

const getBlogs = async (): Promise<Blog[]> => {
  "use server";
  await new Promise((resolve) => setTimeout(resolve, 2000)); 

  try {
    const res = await axios.get<Blog[]>(process.env.GET_DATA + "/blog");
    return await res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};

export default getBlogs;
