import React from "react";

function MobileMenu({ mobileNav }) {
  return (
    <ul className={!mobileNav ? "hidden" : " absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center bg-[#0a192f]"}>
      <li className="py-6 text-4xl">Home</li>
      <li className="py-6 text-4xl">About</li>
      <li className="py-6 text-4xl">Skills</li>
      <li className="py-6 text-4xl">Contact</li>
    </ul>
  );
}

export default MobileMenu;
