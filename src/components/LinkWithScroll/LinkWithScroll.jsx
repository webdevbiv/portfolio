import React from "react";
import { Link as ScrollLink } from "react-scroll";

const LinkWithScroll = ({ to, children, pixelsFromSection }) => {
  return (
    <ScrollLink
      to={to}
      spy={true}
      smooth={true}
      offset={pixelsFromSection} // Adjust the offset value based on your layout
      duration={500}
      className="relative hover:underline-after hover:cursor-pointer"
    >
      {children}
    </ScrollLink>
  );
};

export default LinkWithScroll;
