import React, { useState } from "react";
import morningTime from "../data/morningTime";
import TimeTag from "../util/TimeTag";

function MorningTimeSlot() {
  const [selected, setSelected] = useState(0);
  return (
    <>
      <div className="flex gap-x-4 flex-wrap gap-4 mt-6">
        {morningTime.map((item, index) =>
          index < 6 ? (
            <TimeTag
              index={index}
              selected={selected}
              setSelected={setSelected}
            >
              {item}
            </TimeTag>
          ) : null
        )}
      </div>
      <div className="flex flex-col justify-start  self-start ">
        <p className="font-nunito font-bold text-lg  ">Evening</p>
        <div className="flex gap-x-4 flex-wrap gap-4 mt-6">
          {morningTime.map((item, index) =>
            index >= 6 ? (
              <TimeTag
                index={index}
                selected={selected}
                setSelected={setSelected}
              >
                {item}
              </TimeTag>
            ) : null
          )}
        </div>
      </div>
    </>
  );
}

export default MorningTimeSlot;
