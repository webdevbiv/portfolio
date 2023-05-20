import React from "react";

const Container = ({ children }) => {
  return (
    <div className="bg-[#0a192f] text-gray-300">
      <div className="mx-auto max-w-[1000px]  px-12 h-full">{children}</div>
    </div>
  );
};

export default Container;
