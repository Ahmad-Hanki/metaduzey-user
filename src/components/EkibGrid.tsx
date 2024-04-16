
import { TherapyType } from "@/types/types";
import EkibTopCard from "./EkibTopCard";
import MotionDiv from "./MotionDiv";
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
    <MotionDiv
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      key={rand}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-5 w-full"
    >
      {data.map((ekib) => {
        return (
          <EkibTopCard ekib={ekib} />
        );
      })}
    </MotionDiv>
  );
};

export default EkibGrid;
