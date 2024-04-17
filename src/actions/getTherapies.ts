import prisma from "@/db/client";
import { TherapyType } from "@/types/types";
import axios from "axios";

const getTherapies = async (): Promise<TherapyType[]> => {
  "use server";

  try {
    const therapy = await prisma.therapy.findMany({
      include: {
        therapyPlaces: {
          select: {
            therapyPlace: true,
          },
        },
        therapyTypes: {
          select: {
            therapyType: true,
          },
        },
        therapyUnvans: {
          select: {
            therapyUnvan: true,
          },
        },
      },
    });
    await prisma.$disconnect();

    return therapy as TherapyType[];
  } catch (err) {
    console.log(err);
    await prisma.$disconnect();

    throw err;
  }
};

export default getTherapies;
