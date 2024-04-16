import { motion } from "framer-motion";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import Image from "next/image";
import { TherapyType } from "@/types/types";
import { cn } from "@/lib/utils";
interface EkibTopCardProps {
  ekib: TherapyType;
  size?: boolean;
}
const EkibTopCard = ({ ekib, size }: EkibTopCardProps) => {
  return (
    <motion.div  whileHover={{ rotate: 1.2 }} key={ekib.id}>
      <Card className={cn("flex flex-col justify-center items-center pt-5 h-full group ", size? 'min-h-80':'')}>
        <CardContent>
          <div
            className={cn(
              "relative overflow-hidden aspect-square w-52 sm:w-56 md:w-64 xl:w-72",
              size ? "w-28 md:w-32  xl:w-36" : ""
            )}
          >
            <Image
              src={ekib.imageUrl}
              fill
              alt="photo"
              className="object-cover object-center rounded-full"
            />
          </div>
        </CardContent>
        <CardFooter className ={cn("flex flex-col items-center gap-3", size? 'group-hover:bg-base-200/15 transition-colors w-full': '')}>
          <CardTitle className="text-center">{ekib.name}</CardTitle>
          <div className={cn("flex flex-col items-center gap-2")}>
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
              {ekib.therapyPlaces.map((place, index) => {
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
};

export default EkibTopCard;
