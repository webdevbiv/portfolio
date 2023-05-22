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
    { name: "TAILWIND", src: TAILWIND },
  ];

  return (
    <Section name="skills">
      {/* Container */}
      <div className="flex flex-col justify-center w-full min-h-screen">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-sky-500 ">Skills</p>
          <p className="my-5">These are the technologies I've worked with</p>
        </div>
        {/* Grid container */}
        <div className={`flex flex-wrap justify-center  skillsList sm:skillsListSm  w-full h-auto   text-center py-8 `}>
          {/* Grid for icons */}
          {skills.map((skill, index) => (
            <div key={index} className={`skillsListItem sm:skillsListItemSm shadow-md shadow-[#040c16] hover:scale-110 duration-500`}>
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
