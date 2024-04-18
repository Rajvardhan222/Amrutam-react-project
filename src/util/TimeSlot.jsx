import React, { useState } from "react";

function TimeSlot({ location, time, index, isSelected, setIsSelected }) {
  return (
    <div
      className={`flex duration-200 cursor-pointer flex-col px-10 py-4  border-[1px] rounded-xl ${
        isSelected === index
          ? "border-[#3A643B85] bg-[#F2FBF2]"
          : "border-[#E5E5E5]"
      }`}
      onClick={() => setIsSelected(index)}
    >
      <p
        className={`font-poppins font-medium flex gap-x-2 ${
          0 === index ? "w-[100px]" : ""
        }`}
      >
        {location}
        {isSelected === index && <img src="/icons/greenTick.svg"></img>}
      </p>
      <p className="text-[#606060] text-center">{time}</p>
    </div>
  );
}

export default TimeSlot;
