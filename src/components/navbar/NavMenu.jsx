import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const menu = [
  {
    id: 1,
    name: "Home",
    link: "/",
  },
  {
    id: 2,
    name: "About",
    link: "/about",
  },
  {
    id: 3,
    name: "News",
    link: "/news",
  },
  {
    id: 4,
    name: "CryptoTracker",
    link: "/crypto-tracker",
  },
];

const NavMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* mobile menu */}
      <div className="md:hidden cursor-pointer pr-4 z-20">
        {!open ? (
          <FaBars onClick={() => setOpen(true)} size={28} />
        ) : (
          <FaTimes
            onClick={() => setOpen(false)}
            size={28}
            className="text-white"
          />
        )}
      </div>
      {open && (
        <ul className="flex flex-col absolute justify-center items-center top-0 left-0 w-full h-screen bg-[#10172A] text-[#dbe1e8]">
          {menu.map(({ name, link, id }) => (
            <li
              key={id}
              className="px-4 py-6 text-4xl cursor-pointer font-medium"
            >
              <Link onClick={() => setOpen(false)} to={link}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}

      {/* desktop */}
      <div className="hidden md:flex items-center">
        {menu.map(({ name, id, link }) => (
          <Link key={id} to={link} className="mr-5">
            {name}
          </Link>
        ))}

        <Link to="/learn">
          <button className="ml-10 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-gray-900 text-gray-100 text-sm px-4 py-3 font-bold rounded-md">
            GET STARTED
          </button>
        </Link>
      </div>
    </>
  );
};

export default NavMenu;
