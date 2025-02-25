import React, { useState } from "react";
import { Logo } from "../../public/data.js";
import { RxHamburgerMenu } from "react-icons/rx";
import { Button, FillButton } from "./Button.jsx";
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
    <div className="flex justify-between items-center w-full px-4 py-2 md:py-4 sm:px-6 md:px-8 lg:px-12 bg-orange-50">
      {/* logo */}
      <a href="/" className="w-34 md:w-36 lg:w-40">
        <img src={Logo} alt="Logo" className="w-full" />
      </a>

      {/* nav links */}
      <nav className="hidden md:flex md:space-x-4 lg:space-x-8">
        {navLinks.map((link) => (
          <a
            href="/"
            key={link.name}
            className="text-black font-semibold hover:text-orange-400 transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </nav>

      {/* nav buttons */}
      <div className="hidden md:flex space-x-4 items-center">
        <Button title={"Sign Up"} />
        <FillButton title={"Login"} />
      </div>

      {/* mobile menu */}
      <div className="flex flex-col justify-center items-end md:hidden relative w-full">
        <div className="z-10" onClick={Hamburger}>
          <RxHamburgerMenu className="text-2xl" />
        </div>
        <nav
          className={`fixed inset-0 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 bg-slate-50  ${
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
