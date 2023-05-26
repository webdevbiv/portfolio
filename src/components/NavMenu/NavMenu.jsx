import React from "react";
import LinkWithScroll from "../LinkWithScroll/LinkWithScroll";

function NavMenu() {
  return (
    <nav className="hidden md:flex">
      <ul className="hidden md:flex ">
        <li>
          <LinkWithScroll to="home" pixelsFromSection={-70}>
            Home
          </LinkWithScroll>
        </li>
        <li>
          <LinkWithScroll to="about" pixelsFromSection={-70}>
            About
          </LinkWithScroll>
        </li>
        <li>
          <LinkWithScroll to="skills" pixelsFromSection={-70}>
            Skills
          </LinkWithScroll>
        </li>
        <li>
          <LinkWithScroll to="work" pixelsFromSection={-100}>
            Work
          </LinkWithScroll>
        </li>
        <li>
          <LinkWithScroll to="contact" pixelsFromSection={-70}>
            Contact
          </LinkWithScroll>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
