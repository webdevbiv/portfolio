import React from "react";
import LogoImg from "../../assets/images/mylogo.png";

function Logo() {
  return (
    <div>
      <img src={LogoImg} alt="Logo" style={{ width: "230px" }} />
    </div>
  );
}

export default Logo;
