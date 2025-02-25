import React, { useState } from "react";
import Controls from "./components/Controls";
import Navbar from "./components/Navbar";

const App = () => {
  const [frameZoom, setFrameZoom] = useState(false);
  const [activePage, setActivePage] = useState(0);

  const handleNavPage = (index) => {
    setActivePage(index);
  };
  const toggleZoom = () => {
    setFrameZoom(!frameZoom);
  };
  return (
    <div className="w-full h-screen grid place-items-center">
      <div
        className={`${
          frameZoom && "w-[97vw] h-[97vh]"
        } w-[70vw] h-[85vh] min-w-[70vw] min-h-[85vh] max-w-[90vw] max-h-[90vh] border border-gray-300 resize overflow-auto rounded-2xl relative transition-all duration-100`}
      >
        <Navbar activePage={activePage} handleNavPage={handleNavPage} />
        <Controls toggleZoom={toggleZoom} frameZoom={frameZoom} />
      </div>
    </div>
  );
};

export default App;
