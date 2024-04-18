import React from "react";

function TagsSkill({ children, className = "", bgColor }) {
  return (
    <div
      className={` text-darkGreen font-poppins font-medium px-5 py-3 ${
        bgColor ? bgColor : "bg-[#F7F7FC]"
      } rounded-full ${className}`}
    >
      {children}
    </div>
  );
}

export default TagsSkill;
