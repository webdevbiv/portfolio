import React from "react";
import Container from "../Container/Container";

const Section = ({ children, name }) => {
  return (
    <div name={name} className="w-full min-h-screen">
      <Container>
        <div className="min-h-screen flex flex-col justify-center">{children}</div>
      </Container>
    </div>
  );
};

export default Section;
