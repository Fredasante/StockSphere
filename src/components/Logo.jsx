import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-3">
      <img src={logo} alt="logo" className="w-9 h-9" />
      <p className="font-semibold text-xl">StockSphere</p>
    </Link>
  );
};

export default Logo;
