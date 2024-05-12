import React from "react";
import NavMenu from "./NavMenu";
import Logo from "../Logo";

const Navbar = () => {
  return (
    <nav className="sticky top-0 left-0 border border-gray-600 bg-[#1F2937] z-50">
      <div className="p-4 flex justify-between items-center max-w-screen-xl mx-auto">
        <Logo />
        <NavMenu />
      </div>
    </nav>
  );
};

export default Navbar;
