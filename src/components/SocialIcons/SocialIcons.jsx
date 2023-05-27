import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function SocialIcons() {
  const icons = [
    { name: "LikedIn", svg: FaLinkedin, color: "bg-[#0077B5]" },
    { name: "Github", svg: FaGithub, color: "bg-[#211F1F]" },
    { name: "Email", svg: HiOutlineMail, color: "bg-[#6fc2b0]" },
    { name: "Contact", svg: BsFillPersonLinesFill, color: "bg-[#565f69]" },
  ];
  return (
    <div className="fixed left-0 top-[35%] hidden flex-col lg:flex">
      <ul>
        {icons.map((icon, index) => (
          <li key={index} className={`${icon.color} ml-[-100px] flex h-[60px] w-[160px] px-4 items-center justify-between  duration-200 hover:ml-[-10px]`}>
            <a className="flex w-full items-center justify-between text-gray-300" href="/">
              {icon.name} <icon.svg size={30} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialIcons;
