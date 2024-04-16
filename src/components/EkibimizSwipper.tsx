"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useContext } from "react";
import TherapiesContext from "@/providers/TherapiesContext";
import EkibTopCard from "./EkibTopCard";
import { Navigation, Scrollbar, A11y } from "swiper/modules";

const EkibimizSwipper = () => {
  const { therapies } = useContext(TherapiesContext);
  return (
    <>
      <h1 className="text-3xl text-center pt-16 pb-10 opacity-25 lg:pb-0">EKIBIMIZ</h1>
      <div className=" lg:hidden xl:hidden ">
        <Swiper
         navigation
         scrollbar={{ draggable: true }}
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {therapies.map((ekib) => {
            return (
              <SwiperSlide key={ekib.id}>
                {" "}
                <EkibTopCard ekib={ekib} size={true} />{" "}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="mt-20 hidden lg:block xl:hidden">
        <Swiper
         navigation
         scrollbar={{ draggable: true }}
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {therapies.map((ekib) => {
            return (
              <SwiperSlide key={ekib.id}>
                {" "}
                <EkibTopCard ekib={ekib} size={true} />{" "}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div className="mt-20 hidden xl:block">
        <Swiper
         navigation
         scrollbar={{ draggable: true }}
          modules={[Navigation, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {therapies.map((ekib) => {
            return (
              <SwiperSlide key={ekib.id}>
                {" "}
                <EkibTopCard ekib={ekib} size={true} />{" "}
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
};

export default EkibimizSwipper;
