import React from "react";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function SocialIcons() {
  return (
    <div className="fixed left-0 top-[35%] hidden flex-col lg:flex">
      <ul>
        <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#0077B5] duration-200 hover:ml-[-10px]">
          <a className="flex w-full items-center justify-between text-gray-300" href="/">
            LikedIn <FaLinkedin size={30} />
          </a>
        </li>
        <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#211F1F] duration-200 hover:ml-[-10px]">
          <a className="flex w-full items-center justify-between text-gray-300" href="/">
            Github <FaGithub size={30} />
          </a>
        </li>
        <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#6fc2b0] duration-200 hover:ml-[-10px]">
          <a className="flex w-full items-center justify-between text-gray-300" href="/">
            Email <HiOutlineMail size={30} />
          </a>
        </li>
        <li className="ml-[-100px] flex h-[60px] w-[160px] items-center justify-between bg-[#565f69] duration-200 hover:ml-[-10px]">
          <a className="flex w-full items-center justify-between text-gray-300" href="/">
            Email <BsFillPersonLinesFill size={30} />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default SocialIcons;
