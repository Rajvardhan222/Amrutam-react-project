import React, { useState } from "react";
import Button from "./Button";

function Profile() {
  const [star, setstar] = useState(4);
  return (
    <div>
      <div className="flex flex-col">
        <div className="rounded-tl-lg rounded-tr-lg p-0">
          <img
            src="/brand/profile_cover.svg"
            className="w-full h-[168px] "
          ></img>
        </div>

        <div className="bg-[#FFFBF2] w-[90%] m-auto  h-[168px] relative bottom-6 right-1 rounded-bl-md">
          <div className="flex justify-between w-[95%] m-auto">
            {/* Profile Info and picture */}
            <div className="flex justify-between">
              <div className="relative bottom-5">
                <img src="/brand/profile-picture.svg" className="w-40"></img>
              </div>
              <div className="flex flex-col justify-center ml-5 gap-y-1">
                <div className="flex gap-x-1 items-center">
                  <p className=" font-poppins font-semibold text-xl ">
                    Dr. Bruce Willis
                  </p>

                  <div className="max-w-[23px] ">
                    <img src="/brand/verified.svg"></img>
                  </div>
                </div>
                <p className="text-[#3A643B] font-medium text-base">
                  Gynecologist
                </p>
                <div className="flex gap-x-1 items-center">
                  <p className="text-[#626262]">4.2</p>
                  <div className="flex ">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <div key={index}>
                        <img src="brand/star.svg"></img>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Followers Section */}
            <div className="flex justify-between gap-x-12">
                    <div className="flex flex-col justify-center">
                        <p className="font-semibold text-[#3A643B] text-sm">Followers</p>
                        <p className="text-center font-semibold text-xl text-[#212529]">850</p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="font-semibold text-[#3A643B] text-sm">Following</p>
                        <p className="text-center font-semibold text-xl text-[#212529]">18K</p>
                    </div>
                    <div className="flex flex-col justify-center">
                        <p className="font-semibold text-[#3A643B] text-sm">Posts</p>
                        <p className="text-center font-semibold text-xl text-[#212529]">250</p>
                    </div>
            </div>
            {/* Appointment button */}
            <div className="flex justify-center items-center ">
               <Button className="px-24 rounded-md font-semibold text-lg py-3 bg-darkGreen text-white ">
                
               Book an Appointment
               </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
