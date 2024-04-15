"use client";

import TherapiesContext from "@/providers/TherapiesContext";
import { notFound, useParams } from "next/navigation";
import { useContext } from "react";
import Image from "next/image";
import RanduvuAlFormu from "./RanduvuAlFormu";
import Booked from "./Booked";

interface EkibSingleCardProps {
  appointment: any
}

const EkibSingleCard = ({ appointment }: EkibSingleCardProps) => {
  const { therapies } = useContext(TherapiesContext);

  const params = useParams();
  const ekibId: string = params.ekibId as string;

  const therapy = therapies.find((therapy) => ekibId == therapy.id);
  if (!therapy) return notFound();

  return (
    <div>
      <div className="flex flex-col justify-center items-center pt-5 border-none">
        <div key={therapy.id} className="flex flex-col xl:flex-row gap-7">
          <div className="text-center space-y-7">
            <div className="relative overflow-hidden shadow-sm aspect-square w-56 mx-auto">
              <Image
                fill
                alt="photo"
                className="object-cover object-center rounded-full"
                src={therapy.imageUrl}
              />
            </div>
            <h1 className="xl:hidden text-2xl">{therapy.name}</h1>
          </div>
          <div className="hidden xl:block w-[1px] h-full bg-black/10 " />
          <div className="flex flex-col gap-4 items-center xl:items-start xl:pl-10">
            <div className="hidden xl:block">
              <h1 className="text-3xl">{therapy.name}</h1>
            </div>
            <div className="flex gap-1">
              <p className="font-bold">Unvan:</p>
              {therapy.therapyUnvans.map((unvan, index) => {
                return (
                  <p key={unvan.therapyUnvan.id}>
                    {unvan.therapyUnvan.name}{" "}
                    {index !== therapy.therapyUnvans.length - 1 && (
                      <span>,</span>
                    )}
                  </p>
                );
              })}
            </div>
            <div className="flex flex-wrap justify-center xl:justify-start gap-1">
              <p className="font-bold">Eğitim:</p>
              <p>{therapy.egitim},</p>
              <p>{therapy.lisans},</p>
              <p>{therapy.terapiEgtim},</p>
              <p>{therapy.yuksekLisans}</p>
            </div>

            <div className="flex gap-1">
              <p className="font-bold">Uzmanlık Alanı</p>
              <p>{therapy.uzmanAlan}</p>
            </div>

            <div className="flex gap-1">
              <p className="font-bold">Verdiği Hizmetler:</p>
              {therapy.therapyPlaces.map((place, index) => {
                return (
                  <p key={place.therapyPlace.id}>
                    {place.therapyPlace.name}{" "}
                    {index !== therapy.therapyPlaces.length - 1 && (
                      <span>,</span>
                    )}
                  </p>
                );
              })}
            </div>

            <div className="py-10">
              <p className="text-center xl:text-start">{therapy.summery}</p>
            </div>

            <div>
              {!appointment ? <RanduvuAlFormu id={ekibId} /> : <Booked />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EkibSingleCard;
