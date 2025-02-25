import React from "react";
import Content from "../components/Content";
import DestinationCom from "../components/DestinationCom";
import { data, image1, image3 } from "../../public/data";

const Destination = () => {
  // console.log(image1);
  return (
    <div className="flex flex-col justify-between items-center px-4 py-2 sm:px-6 md:px-8 lg:px-12 my-5 md:flex-row relative">
      {/* Content */}
      <div className="flex-1 w-full ">
        <Content />
        {/* Destination */}
        <DestinationCom />
      </div>

      {/* Images */}
      <div className="flex-1 w-full border h-5/6 flex  relative h-400px] md:h-[400px] lg:h-[40px] ">
        {/* Image 2 */}
        <div className="flex flex-col flex-1 relative pt-16">
          {/* Content Box */}
          <div className="border w-36 border-slate-300 rounded-lg px-2 py-1 text-center bg-slate-100 top-2 left-2 md:left-0 md:top-20 md:px-3 md:w-[150px] absolute">
            <h5 className="text-xs font-medium md:font-semibold">
              100+ Destinations
            </h5>
            <p className="flex text-gray-400 text-[8px]  md:text-[10px] p-1 lg:text-[10px] xl:text-[12px]">
              More than 100 Travels use this platform
            </p>
          </div>

          {/* Image 1 */}
          <div className="absolute -z-10 md:left-20">
            <img
              src={image1}
              alt=""
              className="rounded-xl border-none md:w-36 md:h-40 object-cover"
            />
          </div>
        </div>

        {/* Image 3 */}
        <div className="hidden md:flex border absolute top-5 -right-32">
          <img
            src={image3}
            alt="beach"
            className="rounded-2xl object-cover w-38 h-52"
          />
          <div className="border  border-slate-300 rounded-lg px-1 py-1 text-center bg-slate-100 top-2 left-2 md:left-7 md:-top-5  absolute">
            <h5 className="text-xs font-medium md:font-semibold">100%</h5>
            <p className="flex text-gray-400 text-[8px]  md:text-[10px] p-1 lg:text-[10px] xl:text-[12px]">
              verified
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
