"use client";

import Container from "@/components/ui/Container";
import { Separator } from "@/components/ui/separator";
import TherapiesContext from "@/providers/TherapiesContext";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";

const EkibimizFlex = () => {
  const { therapies } = useContext(TherapiesContext);
  return (
    <div className="bg-slate-100 w-full py-10">
      <Container>
        <div className="grid grid-cols-1 gap-10 w-full ">
          {therapies.map((therapy) => {
            return (
              <div key={therapy.id} className="flex flex-col lg:flex-row gap-7">
                <Link
                  href={`ekibimiz/${therapy.id}`}
                  className="text-center space-y-7"
                >
                  <div className="relative overflow-hidden shadow-sm aspect-square w-56 mx-auto">
                    <Image
                      fill
                      alt="photo"
                      className="object-cover object-center rounded-full"
                      src={therapy.imageUrl}
                    />
                  </div>
                  <h1 className="lg:hidden text-2xl">{therapy.name}</h1>
                </Link>
                <div className="hidden lg:block w-[1px] h-full bg-black/10 " />
                <div className="flex flex-col gap-4 items-center lg:items-start lg:pl-10">
                  <div className="hidden lg:block">
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
                  <div className="flex flex-wrap justify-center lg:justify-start gap-1">
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
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default EkibimizFlex;
