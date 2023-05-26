import React from "react";
import WorkImg from "../../assets/images/projects/workImg.jpeg";
import Section from "../Section/Section";
// import RealEstateImg from "../../assets/images/projects/realestate.jpg";

function Work() {
  const WorkData = [{ img: WorkImg }, { img: WorkImg }, { img: WorkImg }, { img: WorkImg }, { img: WorkImg }, { img: WorkImg }, { img: WorkImg }];
  return (
    <Section name="work">
      <div className="flex flex-col justify-center ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-sky-500 ">Work</p>
          <p className="my-5">Check out some of my recent work</p>
        </div>

        <div className="flex flex-wrap justify-center listFlex w-full h-auto ">
          {/* <div className="flex flex-wrap justify-center"> */}
          {WorkData.map((work, index) => (
            <div key={index} style={{ backgroundImage: `url(${work.img})` }} className=" listFlexItems-1 sm:listFlexItems-2 md:listFlexItems-3 w-full shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center content-div ">
              {/* Hover Effects */}
              <div className="opacity-0 group-hover:opacity-100 duration-500">
                <span className="text-2xl font-bold text-white tracking-wider">React JS Application</span>
                <div className="pt-8 text-center">
                  <a href="pt-8 text-center">
                    <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                  </a>
                  {/* <a href=""> */}
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                  {/* </a> */}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Work;
