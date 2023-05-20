import React from "react";
import LogoImg from "../../assets/images/logo/mylogo.png";

function Logo() {
  return (
    <div>
      <img src={LogoImg} alt="Logo" className="size-[30px] py-2" />
    </div>
  );
}

export default Logo;
