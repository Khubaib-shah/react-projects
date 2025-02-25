import React from "react";

const FillButton = ({ title, text, padding, font }) => {
  return (
    <button
      className={`border-2 text-sm rounded-xl ${
        padding ? "" : "px-1 py-2"
      } md:w-24 border-orange-400 text-white font-semibold bg-orange-400 hover:bg-white hover:text-orange-400 transition duration-300`}
      style={{
        fontSize: text || undefined,
        padding: padding || undefined,
        fontWeight: font || undefined,
      }}
    >
      {title}
    </button>
  );
};
const Button = ({ title }) => {
  return (
    <button className="border-[2px] text-sm lg:w-[100px] rounded-xl px-1 py-1 md:py-2 md:px-3 border-orange-400 text-orange-400 font-semibold bg-white hover:bg-orange-400 hover:text-white transition duration-300">
      {title}
    </button>
  );
};

export { FillButton, Button };
