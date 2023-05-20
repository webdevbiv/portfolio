import React from "react";
import Container from "../Container/Container";

const NavBar = ({ children }) => {
  return (
    <div className="fixed w-full shadow-xl">
      <Container>
        <div className="flex justify-between items-center">{children}</div>
      </Container>
    </div>
  );
};

export default NavBar;
