import React from "react";
import Skills from "../components/Skills";

function SkillSection() {
  return (
    <div className="flex justify-center items-center py-28 dark:bg-[#2B2727]">
      <div className="w-[960px] flex ">
        <h1 className="w-1/5 text-5xl font-bold text-[#4832D3] font-inter">
          Skills
        </h1>
        <div className="w-4/5 flex flex-row items-center justify-center">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
