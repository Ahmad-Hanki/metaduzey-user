import getTherapies from "@/actions/getTherapies";
import getTypes from "@/actions/getTypes";
import EkibimizCard from "@/components/EkibimizCard";
import Container from "@/components/ui/Container";
import React from "react";

const EkibibmizCardHolder = async () => {
  const therapies = await getTherapies();
  const types = await getTypes();

  return (
    <div>
      <EkibimizCard data={therapies} types={types} />
    </div>
  );
};

export default EkibibmizCardHolder;
