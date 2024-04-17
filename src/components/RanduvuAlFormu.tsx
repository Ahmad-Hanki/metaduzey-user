"use client";

import toast from "react-hot-toast";
import { EkibComboBox } from "./EkibComboBox";
import { SelectedContact } from "./SelectedContactWay";
import { PlaceSelected } from "./SelectedPlace";
import { SelectedService } from "./SelectedService";
import SubmissionButton from "./SubmissionButton";
import axios from "axios";
import AppointmentSubmission from "@/actions/AppointmentSubmission";
import { cn } from "@/lib/utils";

interface RanduvuAlFormuProps {
  id?: string;
  size?: true;
}
const RanduvuAlFormu = ({ id, size }: RanduvuAlFormuProps) => {
  const handleSubmitAction = async (formData: FormData) => {
    const name = formData.get("name");
    const email = formData.get("email");
    const tel = formData.get("tel");
    const therapy = formData.get("therapy");
    const destek = formData.get("destek");
    const service = formData.get("service");
    const contact = formData.get("contact");
    const place = formData.get("place");

    if (!name) {
      toast.error("Name is required.");
      return;
    }

    if (!email) {
      toast.error("Email is required.");
      return;
    }

    if (!tel) {
      toast.error("Phone number is required.");
      return;
    }

    if (!therapy) {
      toast.error("Therapy selection is required.");
      return;
    }

    if (!destek) {
      toast.error("Tell us your problem so we can help.");
      return;
    }

    if (!service) {
      toast.error("Service selection is required.");
      return;
    }

    if (!contact) {
      toast.error("Contact method selection is required.");
      return;
    }

    if (!place) {
      toast.error("Place selection is required.");
      return;
    }

    const appointment = await AppointmentSubmission(formData);
    if (appointment?.status == 200) {
      toast.success("Appointment booked successfully!");
    } else {
      toast.error("Something went wrong");
    }
  };
  return (
    <div>
      <form className="flex flex-col gap-6 w-full" action={handleSubmitAction}>
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-3">
          <input
            type="text"
            className={cn(
              "input-xl flex-1 w-96 aspect-[1/0.16] bg-slate-300 px-5",
              size ? "w-full xl:w-[600px] " : ""
            )}
            placeholder="Adiniz"
            name="name"
          />
          <input
            type="email"
            className={cn(
              "input-xl flex-1 w-96 aspect-[1/0.16] bg-slate-300 px-5",
              size ? "w-full xl:w-[600px] " : ""
            )}
            placeholder="Email"
            name="email"
          />
        </div>
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-3">
          <input
            type="tel"
            className={cn(
              "input-xl flex-1 w-96 aspect-[1/0.16] bg-slate-300 px-5",
              size ? "w-full xl:w-[600px] " : ""
            )}
            placeholder="Telefon"
            name="tel"
          />
          <EkibComboBox ekibId={id} />
        </div>
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-3">
          <textarea
            name="destek"
            className="input-xl flex-1 aspect-[1/0.5] xl:aspect-[1/0.16]  bg-slate-300 px-5"
            placeholder="Destek almak istediğiniz konu"
          />
        </div>
        <div className="flex flex-col xl:flex-row gap-6 xl:gap-3">
          <SelectedService />
          <SelectedContact />
        </div>
        <div className="flex flex-col gap-6 xl:gap-3 justify-center">
          <PlaceSelected />
        </div>
        <div className="w-full">
          <SubmissionButton submit="Randevu Al" submitting="Alınıyor..." />
        </div>
      </form>
    </div>
  );
};

export default RanduvuAlFormu;
