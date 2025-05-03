import React from "react";
import Skills from "../components/Skills";
import data from "../data";
import { useSelector } from "react-redux";

function SkillSection() {
  const currentLanguage = useSelector((state) => state.language);
  const { titles } = data[currentLanguage];
  return (
    <div className="flex justify-center items-center py-28 dark:bg-[#2B2727]">
      <div className="w-[960px] flex ">
        <h1 className="w-1/5 text-5xl font-bold text-[#4832D3] font-inter">
          {titles.skills}
        </h1>
        <div className="w-4/5 flex flex-row items-center justify-center">
          <Skills />
        </div>
      </div>
    </div>
  );
}

export default SkillSection;
