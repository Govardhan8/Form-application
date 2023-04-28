import React from "react";
import logo from "./logo.png";

function Logo() {
  return (
    <>
      <img
        src={logo}
        alt={"logo"}
        className="aspect-square h-12 rounded-[5px] object-contain"
      />
    </>
  );
}

export default Logo;
