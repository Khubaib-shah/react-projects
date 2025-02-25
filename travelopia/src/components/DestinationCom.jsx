import React from "react";
import { Calender, Location } from "../../public/data";
import { FillButton } from "./Button";

const DestinationCom = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden w-7/12 absolute md:flex space-x-2 p-2 items-center justify-between bg-slate-100 rounded-3xl md:p-6  border-grey-300 border-2  z-10">
        <div className="flex flex-row items-center gap-2 ">
          <span className="p-2 bg-orange-100 rounded-full">
            <img src={Location} alt="Location" />
          </span>
          <p className="text-sm font-medium">
            Location
            <span className="flex text-gray-400 text-xs  md:text-[9px] lg:text-[10px] xl:text-[12px]">
              Where are you going to?
            </span>
          </p>
        </div>
        <div className="h-8 w-[1px] bg-gray-300"></div>
        <div className="flex flex-row items-center gap-2">
          <span className="p-2 bg-orange-100 rounded-full">
            <img src={Calender} alt="Calender" />
          </span>
          <p className="text-sm font-medium md:text-[12px]">
            Select Date
            <span className="flex   text-gray-400 text-xs md:text-[9px] lg:text-[10px] xl:text-[12px]">
              10 January 2025
            </span>
          </p>
        </div>
        <FillButton title="Get Started" text={"14px"} font={"400"} />
      </div>
      {/* Mobile */}
      <div className="w-full flex justify-between items-center md:hidden bg-orange-50 rounded font-semibold text-sm text-center p-2 space-x-2">
        <div className="font-medium flex flex-row gap-1 items-center">
          <img src={Location} alt="Location" className="size-4" />
          <p className="text-xs font-medium">Location</p>
        </div>
        <div className="h-5 w-[1px] rounded-full bg-slate-500"></div>

        <div className="font-medium flex flex-row gap-1 items-center">
          <img src={Calender} alt="date" className="size-4" />
          <p className="text-xs ">Select Date</p>
        </div>

        <FillButton
          title="Get Started"
          text={"10px"}
          font={"400"}
          padding={"4px 10px"}
        />
      </div>
    </>
  );
};

export default DestinationCom;
