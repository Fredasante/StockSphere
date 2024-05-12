import React from "react";
import { AboutLinks, navLinks, socialLinks } from "../../utils/constants";
import { Link } from "react-router-dom";

const FooterLinks = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between gap-10">
      <div>
        <h6 className="mb-5 font-semibold">ABOUT</h6>

        {AboutLinks.map(({ id, link, name }) => (
          <Link to={link} key={id}>
            <p className="mb-2">{name}</p>
          </Link>
        ))}
      </div>

      <div>
        <h6 className="mb-5 font-semibold">FOLLOW US</h6>

        {socialLinks.map(({ id, link, name }) => (
          <a href={link} target="_blank" key={id}>
            <p className="mb-2">{name}</p>
          </a>
        ))}
      </div>

      <div>
        <h6 className="mb-5 font-semibold">EXPLORE</h6>

        {navLinks.map(({ id, link, name }) => (
          <Link to={link} key={id}>
            <p className="mb-2">{name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLinks;
