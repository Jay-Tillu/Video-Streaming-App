import React from "react";
import Logo from "../assets/logo.png";

const Header = () => {
  return (
    <div className="absolute px-16 py-2 bg-gradient-to-b from-black z-10">
      <img className="w-52" src={Logo} alt="Logo" />
    </div>
  );
};

export default Header;
