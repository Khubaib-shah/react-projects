import React from "react";
import { AeroplaneColorfull } from "../../public/data";

const Content = () => {
  return (
    <div className="flex flex-col space-x-2">
      <div className="flex items-center gap-2">
        <img src={AeroplaneColorfull} className="w-8 md:w-11" />
        <h2 className="md:text-base font-semibold text-orange-400 flex items-center gap-1">
          Explore the world
          <span className="block w-4 md:w-6 h-[2px] bg-orange-400"></span>
        </h2>
      </div>
      <h1 className="text-3xl md:text-4xl tracking-wide capitalize leading-tight py-3 pe-5 md:text-left">
        <h1 className="font-bold lg:text-5xl">Discover the</h1>
        <span className="block font-medium text-2xl md:text-3xl lg:text-4xl">
          best destinations in the world
        </span>{" "}
      </h1>
      <p className="py-2 text-gray-500 text-xs md:text-base">
        lets find your dream destinations here we will recommend you a beatiful
        place and a cgeao trip with your beloved family.
      </p>
    </div>
  );
};

export default Content;
