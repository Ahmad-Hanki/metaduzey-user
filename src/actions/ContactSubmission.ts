"use server";

import prisma from "@/db/client";
import axios from "axios";

export const ContactSubmission = async (formData: FormData) => {
  const name = formData.get("name")?.toString();
  const email = formData.get("email")?.toString();
  const phone = formData.get("phone")?.toString();
  const title = formData.get("title")?.toString();
  const message = formData.get("message")?.toString();

  if (!name) {
    return null;
  }
  if (!email) {
    return null;
  }
  if (!phone) {
    return null;
  }
  if (!title) {
    return null;
  }
  if (!message) {
    return null;
  }

  try {
    await prisma.contact.create({
      data: {
        name,
        email,
        phone,
        title,
        message,
      },
    });
    await prisma.$disconnect();
    return { status: 200 };
  } catch (err) {
  } finally {
    await prisma.$disconnect();
  }
};

export default ContactSubmission;
