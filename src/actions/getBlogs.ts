import prisma from "@/db/client";
import { Blog } from "@/types/types"; 
import axios from "axios";

const getBlogs = async (): Promise<Blog[]> => {
  "use server";
  await new Promise((resolve) => setTimeout(resolve, 2000)); 

  try {
    await prisma.$disconnect();

    const blog = await prisma.blog.findMany({
      include: {
        blogCategories:{
          select:{
            category:true
          }
        }
      }
    }) 
    await prisma.$disconnect()

    return blog;
  } catch (err) {
    await prisma.$disconnect()

    console.log(err);
    throw err;
  }
};

export default getBlogs;
