import React, { useState } from "react";
import morningTime from "../data/morningTime";
import TimeTag from "../util/TimeTag";
import eveningTime from "../data/eveningtime";

function EveningTimeSlot() {
  const [selected, setSelected] = useState(0);
  return (
    <div className="flex gap-x-4 flex-wrap gap-4 mt-6">
      {eveningTime.map((item, index) => (
        <TimeTag index={index} selected={selected} setSelected={setSelected}>
          {item}
        </TimeTag>
      ))}
    </div>
  );
}

export default EveningTimeSlot;
