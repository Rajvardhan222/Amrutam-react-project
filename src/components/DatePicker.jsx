import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function DatePicker({ dateSelected, setDateSelected }) {
  let settings = {
    dots: false,
    infinite: false,
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
      slot: "5",
    },
    {
      date: "Mon, 10 Oct",
      slot: "2",
    },
    {
      date: "Mon, 10 Oct",
      slot: "7",
    },
    {
      date: "Mon, 10 Oct",
      slot: "1",
    },
    {
      date: "Mon, 10 Oct",
      slot: "6",
    },
  ];
  return (
    <Slider {...settings} className="p-4">
      {slots.map((item, index) => (
        <div
          className={`slider-outer-div border-[1px]  px-5 py-4 gap-4 rounded-xl justify-between ${
            index === dateSelected
              ? " border-[#3A643B] bg-[#F2FBF2]"
              : "border-[#E2E2E2]"
          }`}
          key={index}
          onClick={() => setDateSelected(index)}
        >
          <p
            className={`font-inter text-center ${
              index === dateSelected ? "text-darkGreen font-semibold" : ""
            }`}
          >
            {item.date}
          </p>
          <p
            className={` text-center font-nunito font-bold ${
              item.slot >= 10
                ? "text-[#818181]"
                : item.slot >= 5
                ? "text-[#F1B93A]"
                : "text-[#D5512E]"
            }`}
          >
            {item.slot} Slot
          </p>
        </div>
      ))}
    </Slider>
  );
}

export default DatePicker;
