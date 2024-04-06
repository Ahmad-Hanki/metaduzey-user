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
      href: "/hizmetlerimiz/psikolojik-danismanlik",
      name: "Bireysel Terapi",
      image: bireysal,
    },

    {
      name: "Çift & Evlilik Terapisi",
      href: "/hizmetlerimiz/cift-terapisi-evlilik-terapisi",
      image: cift,
    },
    {
      name: "Çocuk & Ergen Terapisi",
      href: "/hizmetlerimiz/cocuk-ergen-terapisi-danismanligi",
      image: cocuk,
    },
    {
      name: "Online Terapi",
      href: "/hizmetlerimiz/online-terapi",
      image: online,
    },
  ];

  return (
    <div className="flex flex-col py-10 gap-4 items-center w-full pb-10 z-0">
      <h1 className=" text-xl md:text-2xl xl:text-3xl text-primary text-center">
        Terapi ve Danışmanlık Hizmetleri
      </h1>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] justify-center gap-5 w-full">
        {List.map((card) => (
          <motion.div
            key={card.href}
            transition={{ duration: 0.3 }}
            whileHover={{ scale: 1.1 }}
            className="w-full h-full z-10"
          >
            <Link href={card.href} >
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
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TerapiCards;
