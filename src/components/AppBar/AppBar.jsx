import React, { useState } from "react";

import Menu from "../Menu/Menu";
import MobileMenu from "../MobileMenu/MobileMenu";
import Hamburger from "../Hamburger/Hamburger";
import SocialIcons from "../SocialIcons/SocialIcons";
import Logo from "../Logo/Logo";

function AppBar() {
  const [mobileNav, setMobileNav] = useState(false);

  const handleClick = () => setMobileNav(!mobileNav);

  return (
    <div className="fixed flex h-[80px] w-full items-center justify-between bg-[#0a192f] px-4 text-gray-300">
      <Logo />
      <Menu />
      <Hamburger handleClick={handleClick} mobileNav={mobileNav} />
      <MobileMenu mobileNav={mobileNav} />
      <SocialIcons />
    </div>
  );
}

export default AppBar;
