"use server";

import axios from "axios";

export const ContactSubmission = async (data: Object) => {
  const contact = await axios.post(process.env.GET_DATA + "/contact", data);
  if (contact.status == 200) {
    return { status: 200 };
  } else {
    return { status: contact.status };
  }
};

export default ContactSubmission;
