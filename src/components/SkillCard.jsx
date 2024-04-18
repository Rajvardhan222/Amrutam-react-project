import React from "react";
import CardCover from "../util/CardCover";
import TagsSkill from "../util/TagsSkill";

function SkillCard() {
  return (
    <div className="flex flex-col gap-y-6 justify-between items-center border-[#DCDCDC] border-2 rounded-xl pb-5">
      <CardCover className="flex justify-between items-center">
        <div className=" w-[92%] m-auto flex justify-between">
          <p className="font-nunito font-semibold text-2xl text-[#313131] ">
            The Concerns I Treat
          </p>
        </div>
      </CardCover>

      <div className="flex flex-wrap gap-x-4 gap-y-3 justify-start w-[95%]">
        <TagsSkill>Skin Treatment</TagsSkill>
        <TagsSkill>Pregnancy</TagsSkill>
        <TagsSkill>Period Doubts</TagsSkill>
        <TagsSkill>Endometriosis</TagsSkill>
        <TagsSkill>Pelvic Pain</TagsSkill>
        <TagsSkill>Ovarian Cysts</TagsSkill>
        <TagsSkill className="bg-white border-2 border-[#E0DFDF]">
          +5 More
        </TagsSkill>
      </div>
    </div>
  );
}

export default SkillCard;
