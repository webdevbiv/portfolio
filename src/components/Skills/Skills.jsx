import React from "react";
import HTML from "../../assets/images/skills/html.png";
import CSS from "../../assets/images/skills/css.png";
import JavaScript from "../../assets/images/skills/javascript.png";
import ReactImg from "../../assets/images/skills/react.png";
import Node from "../../assets/images/skills/node.png";
import GitHub from "../../assets/images/skills/github.png";
import SASS from "../../assets/images/skills/sass.png";
import TAILWIND from "../../assets/images/skills/tailwind.png";
import Section from "../Section/Section";

function Skills() {
  const skills = [
    { name: "HTML", src: HTML },
    { name: "CSS", src: CSS },
    { name: "JavaScript", src: JavaScript },
    { name: "ReactImg", src: ReactImg },
    { name: "Node", src: Node },
    { name: "GitHub", src: GitHub },
    { name: "SASS", src: SASS },
    { name: "TAILWIND", src: TAILWIND },
  ];

  console.log(skills);
  return (
    <Section name="skills">
      {/* Container */}
      <div className="flex flex-col justify-center w-full min-h-screen">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-sky-500 ">Skills</p>
          <p className="my-5">These are the technologies I've worked with</p>
        </div>
        <div className="w-full h-auto grid grid-cols-2 sm:grid-cols-4 gap-4  text-center py-8 justify-center">
          {/* Grid for icons */}
          {skills.map((skill, index) => (
            <div key={index} className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
              <img className="w-20 mx-auto" src={skill.src} alt="HTML icon" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Skills;
