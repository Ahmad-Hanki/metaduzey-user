"use client";

import { cn } from "@/lib/utils";
import { TherapyType, therapyTypes } from "@/types/types";
import { useContext, useEffect, useState } from "react";
import EkibGrid from "./EkibGrid";
import TherapiesContext from "@/providers/TherapiesContext";
import TypesContext from "@/providers/TypesContext";



const EkibimizCard = () => {
  const [mutate, setMutate] = useState(false);
  const {therapies: data} = useContext(TherapiesContext)
  const {types} = useContext(TypesContext)
  const [ekibType, setEkibType] = useState<string>("");
  const [chosedTherapies, setChosedTherapies] = useState<TherapyType[]>(data);

  useEffect(() => {
    setMutate(true);
    setChosedTherapies(data);
  },[data])

  if(!mutate) return null
  if(!data|| !types) return null


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
