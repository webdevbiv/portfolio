import React from "react";
import Section from "../Section/Section";

function About() {
  return (
    <Section name="about">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-sky-500">About</p>
          </div>
          <div></div>
        </div>
        <div className="w-full grid sm:grid-cols-2 gap-8 ">
          <div className=" sm:text-right text-4xl font-bold">
            <p>Hi. I'm Igor, nice to meet you. Please take a look around.</p>
          </div>
          <div>
            <p>I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations. What would you do if you had a software available at your fingertips?</p>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
