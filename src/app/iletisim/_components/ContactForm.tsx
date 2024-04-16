import SubmissionButton from "@/components/SubmissionButton";
import Container from "@/components/ui/Container";
import {
  Phone,
  User,
  Mail,
  MessageCircle,
  LucideAlignStartVertical,
} from "lucide-react";

const ContactForm = () => {
  return (
    <div className="">
      <Container>
        <div className="space-y-6">
          <h1 className="text-center text-3xl text-black/60">İletişim Formu</h1>
          <form className="flex flex-col gap-3">
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
                  name="mail"
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
                  name="name"
                  type="phone"
                  placeholder="Telefon"
                  className="w-full bg-white border border-black/60 min-h-16 rounded-full px-4 pl-14"
                />
              </div>
              <div className="relative flex-1">
                <LucideAlignStartVertical className="absolute top-5 left-5" />
                <input
                  required
                  name="name"
                  type="title"
                  placeholder="Konu"
                  className="w-full bg-white border border-black/60 min-h-16 rounded-full px-4 pl-14"
                />
              </div>
            </div>
            <textarea
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
