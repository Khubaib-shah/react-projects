import React from "react";

const Controls = ({ toggleZoom, frameZoom }) => {
  return (
    <div className="absolute right-3 top-3 space-x-2">
      <button
        className="text-2xl text-pink-400 cursor-pointer"
        onClick={toggleZoom}
      >
        <i className={frameZoom ? "bx bx-zoom-out " : "bx bx-zoom-in"}></i>
      </button>

      <button className="text-2xl text-pink-400 cursor-pointer ">
        <i className="bx bxs-x-circle"></i>
      </button>
    </div>
  );
};

export default Controls;
