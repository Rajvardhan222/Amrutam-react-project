import React from "react";
import CardCover from "../util/CardCover";

function ExperienceCard() {
  return (
    <div className="flex flex-col gap-y-6 justify-between items-start border-[#DCDCDC] border-2 rounded-xl pb-5 ">
      <CardCover className="flex justify-between items-center">
        <div className=" w-[92%] m-auto flex justify-between">
          <p className="font-nunito font-semibold text-2xl text-[#313131] ">
            My Work Experience
          </p>
        </div>
      </CardCover>

      <p className="text-darkGreen font-poppins font-semibold text-lg ml-7">
        I have been in practice for : 7+ Years
      </p>
      <hr className="  border-[#D1D5D1] border-[1px] w-[421px] ml-7" />
      <div className="flex justify-between ml-7">
        <div className="p-3">
          <img src="/icons/home.svg"></img>
        </div>
        <div className="flex justify-between gap-x-14">
          <div className="flex flex-col justify-around gap-y-0">
            <p className="font-poppins font-medium text-[#333548]">
              Midtown Medical Clinic
            </p>
            <p className="font-poppins text-[#33354880] font-medium">
              Senior doctor
            </p>
          </div>
          <div>
            <p className="text-[#33354880] font-poppins font-normal">
              2016-present
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-between ml-7">
        <div className="p-3">
          <img src="/icons/home.svg"></img>
        </div>
        <div className="flex justify-between gap-x-14">
          <div className="flex flex-col justify-around gap-y-0">
            <p className="font-poppins font-medium text-[#333548]">
              Midtown Medical Clinic
            </p>
            <p className="font-poppins text-[#33354880] font-medium">
              Senior doctor
            </p>
          </div>
          <div>
            <p className="text-[#33354880] font-poppins font-normal">
              2010-2015
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceCard;
