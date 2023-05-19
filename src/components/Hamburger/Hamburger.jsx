import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Hamburger({ handleClick, mobileNav }) {
  return (
    <div onClick={handleClick} className="z-10 md:hidden">
      {!mobileNav ? <FaBars /> : <FaTimes />}
    </div>
  );
}

export default Hamburger;
