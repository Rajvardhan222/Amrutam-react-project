import React, { useEffect, useState } from "react";
import Select from "../util/Select";
import TagsSkill from "../util/TagsSkill";
import { filterOptionsData } from "../data/filterOptionsData";

function FilterOptions() {
 

  const [selectedOptions, setSelectedOptions] = useState({
    expertise: "",
    gender: "",
    fees: "",
    languages: "",
    filter: "",
  });

  useEffect(() => {
    if (selectedOptions.filter === "Expertise") {
      setSelectedOptions({
        ...selectedOptions,
        languages: "",
        gender: "",
        fees: "",
      });
    } else if (selectedOptions.filter === "Gender") {
      setSelectedOptions({
        ...selectedOptions,
        languages: "",
        expertise: "",
        fees: "",
      });
    } else if (selectedOptions.filter === "Fees") {
      setSelectedOptions({
        ...selectedOptions,
        languages: "",
        expertise: "",
        gender: "",
      });
    } else if (selectedOptions.filter === "Languages") {
      setSelectedOptions({
        ...selectedOptions,
        fees: "",
        expertise: "",
        gender: "",
      });
    }
    else{
      setSelectedOptions({
        ...selectedOptions,
        
      });
    }
  }, [selectedOptions.filter]);

  const handleSelectChange = (name, value) => {
    setSelectedOptions({ ...selectedOptions, [name]: value });
  };

  return (
    <>
      <div className="flex justify-around m-auto items-center py-0 w-[95%] border-b-[#EDEDED] border-b-[1px] pb-4 duration-300">
        {filterOptionsData.map((filterOption, index) => (
          <Select
            key={index}
            options={[filterOption.label, ...filterOption.options]}
            className={`grayArrow rounded-lg border-none bg-[rgba(243,243,243,1)] text-[#585858]`}
            onSelectChange={(value) =>
              handleSelectChange(filterOption.label.toLowerCase(), value)
            }
          />
        ))}
        <Select
          options={["All Filter", ...filterOptionsData.map((data) => data.label)]}
          className="grayArrow rounded-lg border-none bg-[rgba(220,238,220,1)] text-darkGreen"
          onSelectChange={(value) => handleSelectChange("filter", value)}
        />
      </div>
      <div className="flex justify-end w-[90%] gap-x-3 mt-10 duration-300">
        {Object.entries(selectedOptions).map(([key, value]) => {
          if (value && value !== key.charAt(0).toUpperCase() + key.slice(1) && key !=="filter") {
            return (
              <TagsSkill key={key} bgColor="bg-[#EAF2EA]">
                <div className="flex gap-x-2 items-center">
                  <p>{value}</p>
                  <img
                    src="/icons/cross.svg"
                    onClick={() =>
                      setSelectedOptions({ ...selectedOptions, [key]: "" })
                    }
                    alt="Cross Icon"
                  />
                </div>
              </TagsSkill>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}

export default FilterOptions;
