import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function SocialIcons() {
  const icons = [
    { name: "LikedIn", svg: FaLinkedin, color: "bg-[#0077B5]" },
    { name: "Github", svg: FaGithub, color: "bg-[#211F1F]" },
    { name: "Email", svg: HiOutlineMail, color: "bg-[#16a34a]" },
    { name: "Contact", svg: BsFillPersonLinesFill, color: "bg-[#565f69]" },
  ];
  return (
    <div
      className="fixed left-0 top-[35%] 
    hidden
    flex-col lg:flex"
    >
      <ul>
        {icons.map((icon, index) => (
          <li key={index} className={`${icon.color}  ml-[-80px] flex h-[60px] w-[140px] mx-0 items-center justify-between  duration-200 hover:ml-[-8px]`}>
            <a className="flex px-4 w-full h-full items-center justify-between font-bold text-gray-300" href="/">
              {icon.name} <icon.svg size={30} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialIcons;
