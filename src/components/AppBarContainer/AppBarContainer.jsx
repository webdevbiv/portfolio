import React from "react";
import Container from "../Container/Container";

const AppBarContainer = ({ children }) => {
  return (
    <div className="fixed w-full shadow-xl z-40">
      <Container>
        <div className="flex justify-between items-center">{children}</div>
      </Container>
    </div>
  );
};

export default AppBarContainer;
