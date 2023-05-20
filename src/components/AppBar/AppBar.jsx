import React, { useState } from "react";

import Menu from "../Menu/Menu";
import MobileMenu from "../MobileMenu/MobileMenu";
import Hamburger from "../Hamburger/Hamburger";
import SocialIcons from "../SocialIcons/SocialIcons";
import Logo from "../Logo/Logo";
import NavBar from "../NavBar/NavBar";

function AppBar() {
  const [mobileNav, setMobileNav] = useState(false);

  const handleClick = () => setMobileNav(!mobileNav);

  return (
    <NavBar>
      <Logo />
      <Menu />
      <Hamburger handleClick={handleClick} mobileNav={mobileNav} />
      <MobileMenu mobileNav={mobileNav} />
      <SocialIcons />
    </NavBar>
  );
}

export default AppBar;
