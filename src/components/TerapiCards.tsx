"use client";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import bireysal from "@/assets/images/Bireysal.png";
import cift from "@/assets/images/Evlilik.png";
import cocuk from "@/assets/images/cocuk.png";
import online from "@/assets/images/online.png";
import Link from "next/link";
import Image from "next/image";

const TerapiCards = () => {
  const List = [
    {
      name: "Bireysel Terapi",
      image: bireysal,
    },

    {
      name: "Çift & Evlilik Terapisi",
      image: cift,
    },
    {
      name: "Çocuk & Ergen Terapisi",
      image: cocuk,
    },
    {
      name: "Online Terapi",
      image: online,
    },
  ];

  return (
    <div className="flex flex-col gap-4 items-center w-full z-0">
      <h1 className=" text-xl md:text-2xl xl:text-3xl text-primary text-center">
        Terapi ve Danışmanlık Hizmetleri
      </h1>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-center gap-5 w-full">
        {List.map((card) => (
          <motion.div
            key={card.name}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            className="w-full h-full z-10"
          >
            <div >
              <Card className="h-full shadow-md">
                <CardContent className="py-2">
                  <div className="relative aspect-square overflow-hidden rounded-md ">
                    <Image
                      fill
                      className="object-cover object-center"
                      alt="photo"
                      src={card.image}
                    />
                  </div>
                  <CardTitle className="text-center p-3">{card.name}</CardTitle>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TerapiCards;
