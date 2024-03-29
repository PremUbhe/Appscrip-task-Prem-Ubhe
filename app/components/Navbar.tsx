import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => {
  return (
    <div className="border-b-2">
      <div className="flex justify-between items-center w-full h-16 px-5 sm:px-16">
        <Image
          className="w-10"
          src="/Logo.png"
          alt="logo"
          width={40}
          height={40}
        />
        <h1 className="font-bold text-4xl">LOGO</h1>
        <div className="flex items-center">
          <FontAwesomeIcon className="m-2" icon={faHeart} />
          <FontAwesomeIcon className="m-2" icon={faMagnifyingGlass} />
          <FontAwesomeIcon className="m-2" icon={faBagShopping} />
          <FontAwesomeIcon className="m-2 hidden sm:block" icon={faUser} />
          <h3 className="font-bold hidden sm:block">ENG</h3>
        </div>
      </div>
      <div className="hidden justify-center items-center sm:flex w-full h-16 px-16">
        <button type="button" className="px-4 py-2">
          SKILLS
        </button>
        <button type="button" className="px-4 py-2">
          STORIES
        </button>
        <button type="button" className="px-4 py-2">
          SHOP
        </button>
        <button type="button" className="px-4 py-2">
          ABOUT
        </button>
        <button type="button" className="px-4 py-2">
          CONTACT US
        </button>
      </div>
    </div>
  );
};

export default Navbar;
