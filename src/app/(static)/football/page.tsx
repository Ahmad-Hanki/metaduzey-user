import Football from "@/components/Football";
import { Metadata } from "next";
import React from "react";
export const metadata: Metadata = {
  title: "Football",
};
const FootballPage = () => {
  return (
    <div>
      <Football />
    </div>
  );
};

export default FootballPage;
