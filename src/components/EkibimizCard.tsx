"use client";

import { cn } from "@/lib/utils";
import { TherapyType, therapyTypes } from "@/types/types";
import { useEffect, useState } from "react";
import EkibGrid from "./EkibGrid";

interface EkibimizCardProps {
  data: TherapyType[];
  types: therapyTypes[];
}

const EkibimizCard = ({ data, types }: EkibimizCardProps) => {
  const [ekibType, setEkibType] = useState<string>("");
  const [chosedTherapies, setChosedTherapies] = useState<TherapyType[]>(data);
  // console.log(data[0].therapyTypes);

  const handleChosedData = (id: string) => {
    if (id === "") {
      setEkibType(id);
      setChosedTherapies(data);
      return;
    }
    setEkibType(id);
    const filteredTherapies: TherapyType[] = [];
    data.forEach((therapy) => {
      therapy.therapyTypes.forEach((type) => {
        if (type.therapyType.id === id) {
          filteredTherapies.push(therapy);
        }
      });
    });
    setChosedTherapies(filteredTherapies);
  };

  useEffect(() => {
    console.log(chosedTherapies);
  }, [chosedTherapies]);

  return (
    <div>
      <div className="flex flex-col gap-5 items-center">
        <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl xl:text-5xl">
          Psikolog Ekibimiz
        </h1>
        <div className="justify-center flex flex-wrap gap-7">
          <button
            className={cn(
              "btn ",
              ekibType !== ""
                ? "btn-ghost hover:text-black"
                : "hover:text-white"
            )}
            onClick={() => handleChosedData("")}
          >
        
            Tümü{" "}
          </button>
          {types.map((type) => (
            <button
              key={type.id}
              className={cn(
                "btn ",
                ekibType !== type.id
                  ? "btn-ghost hover:text-black"
                  : "hover:text-white"
              )}
              onClick={() => handleChosedData(type.id)}
            >
              {" "}
              {type.name}
            </button>
          ))}
        </div>

        <div  className="flex-1 w-full">
          <EkibGrid data={chosedTherapies}/>
        </div>
      </div>
    </div>
  );
};

export default EkibimizCard;
