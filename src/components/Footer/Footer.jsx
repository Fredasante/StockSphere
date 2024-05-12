import React from "react";
import Logo from "../Logo";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <footer className=" mt-8 border bg-[#1F2937] border-t-8 border-teal-500 rounded-lg">
      <div className="max-w-screen-xl mx-auto p-5">
        <div className="flex gap-5 flex-col md:flex-row items-start justify-between">
          <Logo />

          <FooterLinks />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
