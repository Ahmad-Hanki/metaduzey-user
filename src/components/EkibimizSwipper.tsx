"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useContext } from "react";
import TherapiesContext from "@/providers/TherapiesContext";
import EkibTopCard from "./EkibTopCard";

const EkibimizSwipper = () => {
  const { therapies } = useContext(TherapiesContext);
  return (
    <>
      <div className="mt-20 lg:hidden xl:hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {therapies.map((ekib) => {
            return(
            <SwiperSlide key={ekib.id}>
              {" "}
              <EkibTopCard ekib={ekib} size={true}/>{" "}
            </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className="mt-20 hidden lg:block xl:hidden">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
            {therapies.map((ekib) => {
            return(
            <SwiperSlide key={ekib.id}>
              {" "}
              <EkibTopCard ekib={ekib} size={true}/>{" "}
            </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
      <div className="mt-20 hidden xl:block">
        <Swiper
          spaceBetween={50}
          slidesPerView={5}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
            {therapies.map((ekib) => {
            return(
            <SwiperSlide key={ekib.id}>
              {" "}
              <EkibTopCard ekib={ekib} size={true}/>{" "}
            </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  );
};

export default EkibimizSwipper;
