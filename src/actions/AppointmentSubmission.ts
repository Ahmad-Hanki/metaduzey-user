"use server";

import prisma from "@/db/client";
import axios from "axios";
import { cookies } from "next/headers";

const AppointmentSubmission = async (formData: FormData) => {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const tel = formData.get("tel")?.toString();
  const therapy = formData.get("therapy")?.toString();
  const destek = formData.get("destek")?.toString();
  const service = formData.get("service")?.toString();
  const contact = formData.get("contact")?.toString();
  const place = formData.get("place")?.toString();

  if (!name) {
    return null;
  }
  if (!email) {
    return null;
  }
  if (!tel) {
    return null;
  }
  if (!therapy) {
    return null;
  }
  if (!destek) {
    return null;
  }
  if (!service) {
    return null;
  }
  if (!contact) {
    return null;
  }
  if (!place) {
    return null;
  }

  try {
    await prisma.$disconnect();

    await prisma.appointment.create({
      data: {
        name,
        email,
        tel,
        destek,
        service,
        contact,
        place,
        therapyId: therapy,
      },
    });

    await prisma.$disconnect();
    const cookie = cookies();
    const oneDay = 24 * 60 * 60 * 1000;
    cookie.set("appointment", "true", { expires: Date.now() - oneDay });
    return { status: 200 };
  } catch (err) {
  } finally {
    await prisma.$disconnect();
  }
};

export default AppointmentSubmission;
