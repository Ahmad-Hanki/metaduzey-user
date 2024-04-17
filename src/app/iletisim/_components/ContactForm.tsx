"use client";

import ContactSubmission from "@/actions/ContactSubmission";
import SubmissionButton from "@/components/SubmissionButton";
import Container from "@/components/ui/Container";
import { Phone, User, Mail, LucideAlignStartVertical } from "lucide-react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const handleSubmit = async (formData: FormData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const title = formData.get("title");
    const message = formData.get("message");

    if (!name) {
      toast.error("Name is required.");
      return;
    }

    if (!email) {
      toast.error("Email is required.");
      return;
    }

    if (!phone) {
      toast.error("Phone number is required.");
      return;
    }

    const phoneNumber: string =
      typeof phone === "string" ? phone : phone.toString();

    // Regular expression to match phone numbers in any format
    const phoneRegex = /^\d{11}$/;

    if (!phoneRegex.test(phoneNumber)) {
      toast.error("Invalid phone number.");
      return;
    }

    if (!title) {
      toast.error("Title selection is required.");
      return;
    }

    if (!message) {
      toast.error("Tell us your problem so we can help.");
      return;
    }

    const data = {
      name,
      email,
      phone,
      title,
      message,
    };

    try {
      const res = await ContactSubmission(data);
      if (res.status == 200) {
        toast.success("Sended Successfully");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="">
      <Container>
        <div className="space-y-6">
          <h1 className="text-center text-3xl text-black/60">İletişim Formu</h1>
          <form className="flex flex-col gap-3" action={handleSubmit}>
            <div className="flex flex-col lg:flex-row gap-6 ">
              <div className="relative flex-1">
                <User className="absolute top-5 left-5" />
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Adiniz"
                  className="w-full bg-white border border-black/60 min-h-16 rounded-full px-4 pl-14"
                />
              </div>
              <div className="relative flex-1">
                <Mail className="absolute top-5 left-5" />
                <input
                  required
                  name="email"
                  type="text"
                  placeholder="E-mail "
                  className="w-full bg-white border border-black/60 min-h-16 rounded-full px-4 pl-14"
                />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-3 ">
              <div className="relative flex-1">
                <Phone className="absolute top-5 left-5" />
                <input
                  required
                  name="phone"
                  type="tel"
                  placeholder="Telefon"
                  className="w-full bg-white border border-black/60 min-h-16 rounded-full px-4 pl-14"
                />
              </div>
              <div className="relative flex-1">
                <LucideAlignStartVertical className="absolute top-5 left-5" />
                <input
                  required
                  name="title"
                  type="text"
                  placeholder="Konu"
                  className="w-full bg-white border border-black/60 min-h-16 rounded-full px-4 pl-14"
                />
              </div>
            </div>
            <textarea
              name="message"
              required
              placeholder="Message"
              className="flex-1 bg-white border border-black/60 min-h-32 rounded-md p-4"
            />
            <div className="flex-1 flex justify-start">
              <SubmissionButton submit="Gönder" submitting="Gönderliyor" />
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
};

export default ContactForm;
