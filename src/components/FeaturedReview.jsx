import React from "react";
import CardCover from "../util/CardCover";

function FeaturedReview() {
  return (
    <div className="flex flex-col gap-y-10 justify-between items-start border-[#DCDCDC] border-2 rounded-xl pb-5 ">
      <CardCover className="flex justify-between items-center">
        <div className=" w-[92%] m-auto flex justify-between">
          <p className="font-nunito font-semibold text-2xl text-[#313131] ">
            Featured Reviews (102)
          </p>
        </div>
      </CardCover>
      <div className="flex flex-col ml-14 justify-between w-[473px] gap-y-2 items-start ">
        <div className="flex justify-between  items-center gap-y-3">
          <div className="p-3">
            <img src="/profile/profile-picture.svg"></img>
          </div>
          <div className="flex justify-between gap-x-14">
            <div className="flex flex-col justify-around ">
              <p className="font-nunito font-semibold text-xl text-[#2F2F2F]">
                Alicent Hightower
              </p>
              <p className="font-poppins text-[#33354880] font-medium">
                Consulted for Skin care
              </p>
            </div>
            <div>
              <p className="text-[#33354880] font-poppins font-normal">
                20 January 2023
              </p>
            </div>
          </div>
        </div>
        <div className="flex  ">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <img src="brand/star.svg"></img>
            </div>
          ))}
        </div>
        <div>
          <p className="text-[#2E2F2E] font-nunito font-normal">
            Might be bit early to confirm but yes I can see noticeable
            difference in my hairfall. will write again after using it for
            longer periods
          </p>
        </div>
      </div>
      <div className="flex flex-col ml-14 justify-between w-[473px] gap-y-2 items-start ">
        <div className="flex justify-between  items-center gap-y-3">
          <div className="p-3">
            <img src="/profile/profile-picture.svg"></img>
          </div>
          <div className="flex justify-between gap-x-14">
            <div className="flex flex-col justify-around ">
              <p className="font-nunito font-semibold text-xl text-[#2F2F2F]">
                Alicent Hightower
              </p>
              <p className="font-poppins text-[#33354880] font-medium">
                Consulted for Skin care
              </p>
            </div>
            <div>
              <p className="text-[#33354880] font-poppins font-normal">
                20 January 2023
              </p>
            </div>
          </div>
        </div>
        <div className="flex  ">
          {Array.from({ length: 5 }).map((_, index) => (
            <div key={index}>
              <img src="brand/star.svg"></img>
            </div>
          ))}
        </div>
        <div>
          <p className="text-[#2E2F2E] font-nunito font-normal">
            Might be bit early to confirm but yes I can see noticeable
            difference in my hairfall. will write again after using it for
            longer periods
          </p>
        </div>
      </div>
    </div>
  );
}

export default FeaturedReview;
