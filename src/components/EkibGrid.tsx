"use client";

import { TherapyType } from "@/types/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "./ui/card";
import { motion } from "framer-motion";
import Image from "next/image";
interface EkibGridProps {
  data?: TherapyType[];
}

const EkibGrid = ({ data }: EkibGridProps) => {
  const rand = Math.random();
  if (!data) {
    return (
      <div className="w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl xl:text-4xl text-center px-4">
          No Data Was Found
        </h1>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      key={rand}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 w-full"
    >
      {data.map((ekib) => {
        return (
          <motion.div whileHover={{ rotate:1.2}} key={ekib.id}>
            <Card className="flex flex-col justify-center items-center pt-5">
              <CardContent>
                <div className="relative overflow-hidden aspect-square w-52 sm:w-56 md:w-64 xl:w-72">
                  <Image
                    src={ekib.imageUrl}
                    fill
                    alt="photo"
                    className="object-cover object-center rounded-full"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex flex-col items-center gap-3">
                <CardTitle>{ekib.name}</CardTitle>
                <div className="flex flex-col items-center gap-2">
                  <div className="flex gap-2">
                    {ekib.therapyUnvans.map((unvan, index) => {
                      return (
                        <p
                          className="text-center shadow-sm"
                          key={unvan.therapyUnvan.id}
                        >
                          {unvan.therapyUnvan.name}
                          {index !== ekib.therapyUnvans.length - 1 && ", "}

                        </p>
                      );
                    })}
                  </div>
                  <div className="flex gap-2">
                    {ekib.therapyPlaces.map((place,index) => {
                      return (
                        <p
                          className="text-center shadow-sm"
                          key={place.therapyPlace.id}
                        >
                          {place.therapyPlace.name}
                          {index !== ekib.therapyPlaces.length - 1 && ", "}

                        </p>
                      );
                    })}
                  </div>
                </div>
              </CardFooter>
            </Card>
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default EkibGrid;
