import React from "react";
import Button from "./Button";
const Logo = require("../Assets/images/logo.png");

function Header() {
  return (
    <div className="flex flex-wrap md:flex-row gap-5 items-center justify-between bg-gradient-to-r from-myBlue to-myPink px-5 py-5 md:py-2 text-white drop-shadow-md ">
      <img
        width={50}
        className="drop-shadow-md cursor-pointer"
        src={Logo}
        alt="Logo"
      />
      <div>
        <Button text="Add New ListBoard" secondary />
      </div>
    </div>
  );
}

export default Header;
