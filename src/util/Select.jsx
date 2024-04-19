import React from "react";
import "../select.css";
function Select({ options = [], className = "", onSelectChange }) {
  const handleChange = (event) => {
    const selectedValue = event.target.value;
    onSelectChange(selectedValue);
  };
  return (
    <div>
      <select
        className={`px-4  min-w-[150px] py-[12px]  font-inter font-medium text-[#767676] rounded-tr-xl rounded-br-xl border-t-[#D4D4D4] border-r-[#D4D4D4] border-b-[#D4D4D4] border-t-[1px] border-r-[1px] border-b-[1px] ${className}`}
        onChange={handleChange}
      >
        {options.map((item, index) => (
          <option>{item}</option>
        ))}
      </select>
    </div>
  );
}

export default Select;
