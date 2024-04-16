import Coaching from "@/components/Coaching";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Football",
};
const CoachingPage = () => {
  return (
    <div>
      <Coaching />
    </div>
  );
};

export default CoachingPage;
