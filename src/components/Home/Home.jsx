import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import Section from "../Section/Section";

function Home() {
  return (
    <Section name="home">
      <p className="text-sky-500">Hi, my name is</p>
      <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Igor Berezhnoy</h1>
      <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I'm a Full Stack Developer</h2>
      <p className="text-[#8892b0] py-4 max-w-[700px]">I'm a full-stack developer specializing in building exceptional digital products. Currently, im focused on building responsive full-stack web applications.</p>
      <div>
        <button className="group text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-sky-500 hover:border-sky-500">
          View Work
          <span className="group-hover:rotate-90 duration-200">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </button>
      </div>
    </Section>
  );
}

export default Home;
