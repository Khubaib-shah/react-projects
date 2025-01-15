import React, { useState } from "react";
import { Logo } from "../../public/data.js";
import { RxHamburgerMenu } from "react-icons/rx";
const navLinks = [
  { name: "Home" },
  { name: "About" },
  { name: "Destinations" },
  { name: "Tours" },
  { name: "Blog" },
];
const Header = () => {
  const [HamburgerMenu, setHamburgerMenu] = useState(false);
  const Hamburger = () => {
    setHamburgerMenu(!HamburgerMenu);
    console.log(HamburgerMenu);
  };

  return (
    <div className="flex justify-between items-center py-2">
      <a href="/" className="w-34 md:w-36 lg:w-40">
        <img src={Logo} alt="Logo" className="w-full" />
      </a>

      <nav className="hidden md:flex md:space-x-4 lg:space-x-8">
        {navLinks.map((link) => (
          <a href="/" key={link.name} className="text-black font-semibold">
            {link.name}
          </a>
        ))}
      </nav>

      <div className="hidden md:flex space-x-4 items-center">
        <button
          className="border-4 md:border-[3px] rounded-xl px-4 py-2 md:py-1 md:px-2 border-orange-400 text-orange-400 font-semibold
        hover:bg-orange-400 hover:text-white transition duration-300"
        >
          Sign Up
        </button>
        <button className="border-[3px] w-[80px] rounded-xl px-4 py-2 md:py-1 md:px-2 border-orange-400 text-white font-semibold bg-orange-400 hover:bg-white hover:text-orange-400 transition duration-300">
          Log In
        </button>
      </div>

      <div className="flex flex-col justify-center items-end md:hidden relative w-full">
        <div className="z-10" onClick={Hamburger}>
          <RxHamburgerMenu className="text-2xl" />
        </div>
        <nav
          className={`fixed inset-0 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ${
            HamburgerMenu ? "translate-y-0" : "-translate-y-full"
          }`}
        >
          {navLinks.map((link) => (
            <a
              href="/"
              key={link.name}
              className="text-black font-semibold hover:text-orange-400"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
