import React from "react";
import CardCover from "../util/CardCover";
import Button from "./Button";

function AboutMeCard() {
  return (
    <div className="flex flex-col gap-y-6 justify-between items-center border-[#DCDCDC] border-2 rounded-xl pb-5">
      <CardCover className="flex justify-between items-center">
        <div className=" w-[92%] m-auto flex justify-between">
          <p className="font-nunito font-semibold text-2xl text-[#313131] ">
            A Little About me
          </p>
          <Button className="border-[#3A643B] border-2 px-4 py-1 rounded-lg">
            <div className="flex items-center gap-x-1">
              <p className="font-poppins text-[#585858] font-medium ">Follow</p>
              <img src="/brand/add.svg"></img>
            </div>
          </Button>
        </div>
      </CardCover>
      <p className="text-[#33354880] max-w-[520px] font-medium font-poppins m-auto">
        Hello I am Dr. Bruce Willis a Gynaecologist in Sanjivni Hospital Surat.
        love to work with all my hospital staff and seniour doctors. Completed
        my graduation in Gynaecologist Medicine from the
      </p>
      <div className="flex items-center justify-between w-[80%] gap-x-4 ">
        <hr className="border-[#797979] border-[0.5px]  w-full" />
        <p className="font-poppins text-[#2B2B2B] underline-offset-1  w-[150px]">
          Read More
        </p>
      </div>
      <div className="flex  justify-between w-[90%] items-center ">
        <div>
          <p className="font-nunito w-[189px] font-medium text-xl">
            Language Spoken{" "}
          </p>
        </div>

        <div className="flex w-[90%] gap-x-5 ">
          <Button className="font-nunito bg-[#2E37A40A] text-[#505050] px-5 py-3 font-medium text-xl rounded-full">
            English
          </Button>
          <Button className="font-nunito bg-[#2E37A40A] text-[#505050] px-5 py-3 font-medium text-xl rounded-full">
            Hindi
          </Button>
          <Button className="font-nunito bg-[#2E37A40A] text-[#505050] px-5 py-3 font-medium text-xl rounded-full">
            Telugu
          </Button>
        </div>
      </div>
      <div className="flex justify-start items-center gap-x-3 w-[90%]">
        <img src="/icons/facebook.svg"></img>
        <img src="/icons/instagram.svg"></img>
        <img src="/icons/youtube.svg"></img>
        <img src="/icons/twitter.svg"></img>
      </div>
    </div>
  );
}

export default AboutMeCard;
