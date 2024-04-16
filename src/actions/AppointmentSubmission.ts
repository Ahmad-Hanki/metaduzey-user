"use server";

import axios from "axios";
import { cookies } from "next/headers";

const AppointmentSubmission = async (formData: FormData) => {
  const name = formData.get("name");
  const email = formData.get("email");
  const tel = formData.get("tel");
  const therapy = formData.get("therapy");
  const destek = formData.get("destek");
  const service = formData.get("service");
  const contact = formData.get("contact");
  const place = formData.get("place");
  const data = {
    name,
    email,
    tel,
    therapy,
    destek,
    service,
    contact,
    place,
  };

  const appointment = await axios.post(
    process.env.GET_DATA + "/appointment",
    data
  );
  if (appointment.status == 200) {
    const cookie = cookies();
    const oneDay = 24 * 60 * 60 * 1000;
    cookie.set("appointment", "true", { expires: Date.now() - oneDay });
    return { status: 200 };
  } else {
    return { status: appointment.status };
  }
};

export default AppointmentSubmission;
