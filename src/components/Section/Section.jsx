import React from "react";
import Container from "../Container/Container";

const Section = ({ children, name }) => {
  return (
    <div name={name} className="w-full h-screen">
      <Container>
        <div className="w-full h-screen flex flex-col justify-center">{children}</div>
      </Container>
    </div>
  );
};

export default Section;
