import React, { useState } from "react";
import TimeSlot from "../util/TimeSlot";
import visitType from "../data/visitType";

import DatePicker from "./DatePicker";
import MorningTimeSlot from "./MorningTimeSlot";
import EveningTimeSlot from "./EveningTimeSlot";
import Button from "./Button";

function AppointmentDetail() {
  const [isSelected, setIsSelected] = useState(1);
  const [dateSelected, setDateSelected] = useState(0);
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <img src="/slider/left.svg"></img>,
    nextArrow: <img src="/slider/right.svg"></img>,
  };
  let slots = [
    {
      date: "Mon, 10 Oct",
      slot: "10",
    },
    {
      date: "Mon, 10 Oct",
      slot: "10",
    },
    {
      date: "Mon, 10 Oct",
      slot: "10",
    },
    {
      date: "Mon, 10 Oct",
      slot: "10",
    },
    {
      date: "Mon, 10 Oct",
      slot: "10",
    },
    {
      date: "Mon, 10 Oct",
      slot: "10",
    },
  ];

  return (
    <div className="flex flex-col gap-y-10 justify-between items-center border-[#DCDCDC] border-2 rounded-xl py-10 px-5">
      <div className="flex justify-between items-center px-5 py-4 border-[#E2E2E2] border-[1px] w-[100%]  rounded-2xl">
        <p className="font-nunito font-semibold text-xl">Appointment Fee</p>
        <p className="font-inter font-semibold text-xl text-darkGreen">
          ₹699.00
        </p>
      </div>
      <div className="flex items-center gap-x-1">
        <p className="font-nunito font-bold text-xl w-[583px]">
          Select your mode of session
        </p>
        <hr className="border-[#D4D4D4] border-[1px] w-full"></hr>
      </div>
      <div className="flex  justify-between w-[80%]">
        {visitType.map((item, index) => (
          <TimeSlot
            location={item.location}
            time={item.time}
            index={index}
            isSelected={isSelected}
            setIsSelected={setIsSelected}
          />
        ))}
      </div>
      <div className="flex items-center gap-2 w-[95%] ">
        <p className="w-[300px] font-nunito font-bold text-xl">
          Pick a Time slot
        </p>
        <hr className="border-[#D4D4D4] border-[1px] w-full"></hr>
        <img src="/icons/calendar.svg"></img>
      </div>
      <div className="border-[#E1E1E1] border-[1px] w-[550px]  rounded-xl py-5 px-10">
        <DatePicker
          dateSelected={dateSelected}
          setDateSelected={setDateSelected}
        />
      </div>
      <div className="flex flex-col justify-start  self-start ml-10">
        <p className="font-nunito font-bold text-lg  ">Morning</p>
        <MorningTimeSlot />
      </div>
      <div className="flex justify-center items-center ">
        <Button className="px-24 rounded-md font-semibold text-lg py-4 bg-darkGreen text-white">
          Make an appointment
        </Button>
      </div>
    </div>
  );
}

export default AppointmentDetail;
