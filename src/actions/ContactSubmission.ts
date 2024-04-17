"use server";

import axios from "axios";

export const ContactSubmission = async (data: Object) => {
  const contact = await axios.post('https://metaduzey-dashborad.vercel.app/api/contact'
  , data);
  if (contact.status == 200) {
    return { status: 200 };
  } else {
    return { status: contact.status };
  }
};

export default ContactSubmission;
