import React, { useEffect, useState } from "react";
import Select from "../util/Select";
import TagsSkill from "../util/TagsSkill";
function FilterOptions() {
  const medicalExpertise = [
    "Expertise",
    "Cardiology",
    "Neurology",
    "Orthopedics",
    "Dermatology",
    "Ophthalmology",
    "Pediatrics",
    "Oncology",
    "Gynecology",
    "Urology",
    "Psychiatry",
  ];

  const gender = ["Gender", "Male", "Female"];

  const fees = ["Fees", "200", "250", "300", "350", "400", "450", "500", "700"];

  const indianLanguages = [
    "Languages",
    "Hindi",
    "Bengali",
    "Telugu",
    "Marathi",
    "Tamil",
    "Urdu",
    "Gujarati",
    "Kannada",
    "Odia",
    "Malayalam",
    "Punjabi",
    "Assamese",
    "Maithili",
    "Sanskrit",
    "Kashmiri",
    "Konkani",
    "Sindhi",
    "Dogri",
    "Manipuri",
    "Bodo",
    "Nepali",
    "Santali",
  ];

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
  }, [selectedOptions.filter]);

  const Filter = ["All Filter", "Expertise", "Gender", "Fees", "Languages"];

  const handleSelectChange = (name, value) => {
    setSelectedOptions({ ...selectedOptions, [name]: value });
    console.log(selectedOptions);
  };

  return (
    <>
      <div className="flex justify-around m-auto items-center py-0 w-[95%] border-b-[#EDEDED] border-b-[1px] pb-4 duration-300">
        <Select
          options={medicalExpertise}
          className="grayArrow rounded-lg border-none bg-[rgba(243,243,243,1)] text-[#585858]"
          onSelectChange={(value) => {
            handleSelectChange("expertise", value);
            console.log(value);
          }}
        />
        <Select
          options={gender}
          className="grayArrow rounded-lg border-none bg-[rgba(243,243,243,1)] text-[#585858]"
          onSelectChange={(value) => handleSelectChange("gender", value)}
        />
        <Select
          options={fees}
          className="grayArrow rounded-lg border-none bg-[rgba(243,243,243,1)] text-[#585858]"
          onSelectChange={(value) => handleSelectChange("fees", value)}
        />
        <Select
          options={indianLanguages}
          className="grayArrow rounded-lg border-none bg-[rgba(243,243,243,1)] text-[#585858]"
          onSelectChange={(value) => handleSelectChange("languages", value)}
        />
        <Select
          options={Filter}
          className=" grayArrow rounded-lg border-none bg-[rgba(220,238,220,1)] text-darkGreen"
          onSelectChange={(value) => {
            handleSelectChange("expertise", value);
            console.log(value);
          }}
        ></Select>
      </div>
      <div className="flex justify-end w-[90%] gap-x-3 mt-10">
        {selectedOptions.expertise.length > 0 &&
        selectedOptions.expertise !== "Expertise" ? (
          <TagsSkill bgColor="bg-[#EAF2EA]">
            <div className="flex gap-x-2 items-center">
              <p> {selectedOptions.expertise}</p>
              <img
                src="/icons/cross.svg"
                onClick={() =>
                  setSelectedOptions({ ...selectedOptions, expertise: "" })
                }
                alt="Cross Icon"
              />
            </div>
          </TagsSkill>
        ) : null}
        {selectedOptions.gender.length > 0 &&
        selectedOptions.gender !== "Gender" ? (
          <TagsSkill bgColor="bg-[#EAF2EA]">
            <div className="flex gap-x-2 items-center">
              <p> {selectedOptions.gender}</p>
              <img
                src="/icons/cross.svg"
                onClick={() =>
                  setSelectedOptions({ ...selectedOptions, gender: "" })
                }
                alt="Cross Icon"
              />
            </div>
          </TagsSkill>
        ) : null}
        {selectedOptions.fees.length > 0 && selectedOptions.fees !== "Fees" ? (
          <TagsSkill bgColor="bg-[#EAF2EA]">
            <div className="flex gap-x-2 items-center">
              <p> {selectedOptions.fees}</p>
              <img
                src="/icons/cross.svg"
                onClick={() =>
                  setSelectedOptions({ ...selectedOptions, fees: "" })
                }
                alt="Cross Icon"
              />
            </div>
          </TagsSkill>
        ) : null}
        {selectedOptions.languages.length > 0 &&
        selectedOptions.languages !== "Languages" ? (
          <TagsSkill bgColor="bg-[#EAF2EA]">
            <div className="flex gap-x-2 items-center">
              <p> {selectedOptions.languages}</p>
              <img
                src="/icons/cross.svg"
                onClick={() =>
                  setSelectedOptions({ ...selectedOptions, languages: "" })
                }
                alt="Cross Icon"
              />
            </div>
          </TagsSkill>
        ) : null}
      </div>
    </>
  );
}

export default FilterOptions;
