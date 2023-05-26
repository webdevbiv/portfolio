import React from "react";

function Menu() {
  return (
    <div className="hidden md:flex">
      <ul className="hidden md:flex ">
        <li>
          <a href="#home" className="relative hover:underline-after">
            Home
          </a>
        </li>
        <li>
          <a href="#about" className="relative hover:underline-after">
            About
          </a>
        </li>
        <li>
          <a href="#skills" className="relative hover:underline-after">
            Skills
          </a>
        </li>
        <li>
          <a href="#work" className="relative hover:underline-after">
            Work
          </a>
        </li>
        <li>
          <a href="#contact" className="relative hover:underline-after">
            Contact
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Menu;
