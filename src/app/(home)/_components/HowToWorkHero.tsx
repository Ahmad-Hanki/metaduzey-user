import Hero from "@/assets/HowToWork.webp";
import Image from "next/image";
const HowToWorkHero = () => {
  return (
    <div className="p-4">

    
      <div className="relative w-96 aspect-[1/1.7] lg:mx-auto overflow-hidden lg:overflow-visible ">
        <Image
          src={Hero}
          alt="photo"
          className="object-cover object-center z-10"
          fill
        />
        <div className="hidden lg:block absolute -top-10 -left-44 w-full bg-slate-200 h-[100vh]"></div>
    </div>
    </div>
  );
};

export default HowToWorkHero;
