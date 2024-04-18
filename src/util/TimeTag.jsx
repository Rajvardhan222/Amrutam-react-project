import React from "react";

function TimeTag({ children, selected, index, setSelected }) {
  return (
    <div
      className={` duration-200 rounded-2xl px-6 py-7 border-[#EBEBEB] border-[1px] font-inter font-normal ${
        index === selected ? "bg-darkGreen text-white" : ""
      }`}
      onClick={() => setSelected(index)}
    >
      {children}
    </div>
  );
}

export default TimeTag;
