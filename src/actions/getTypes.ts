import prisma from "@/db/client";
import { therapyTypes } from "@/types/types"; // Assuming Therapist interface is defined in "@/types/types"
import axios from "axios";

const getTypes = async (): Promise<therapyTypes[]> => {
  "use server";
  try {
    const types = await prisma.therapyType.findMany();
    prisma.$disconnect();
    return types;
  } catch (err) {
    console.log(err);
    prisma.$disconnect();

    throw err;
  }
};

export default getTypes;
