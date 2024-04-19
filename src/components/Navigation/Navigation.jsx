import React from "react";
import navigationItem from "../../data/navigationItem";
import Button from "../Button";

function Navigation() {
  return (
    <div>
      <div className="bg-[#FFF7E2] max-h-24">
        <div className="flex justify-between w-[90%] m-auto py-4">
          <div>
          
            <img src="/brand/amrutam_logo.svg" className="hover:scale-105 transition-transform duration-300"></img>
          </div>
          <div className="flex items-center gap-x-9">
            {navigationItem.map((item, index) => (
              <div className={index === 1 ? "text-darkGreen font-bold" : "text-[#474747]"} key={index}>
                
                <p className="hover:text-darkGreen hover:underline-offset-8 hover:underline">{item}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-x-2 items-center">
            
            <Button className='px-4 py-2 rounded-md border-darkGreen border-2 hover:bg-darkGreen hover:text-white'>Login</Button>
          
            <Button className='px-4 py-2 rounded-md border-darkGreen border-2 text-white bg-darkGreen hover:bg-opacity-80'>Sign-Up</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navigation;
