import React from "react";
import data from "../data";
import { useSelector } from "react-redux";

function Skills() {
  const currentLanguage = useSelector((state) => state.language);
  const { skillSection } = data[currentLanguage];

  const leftSkills = skillSection.slice(0, 3);
  const rightSkills = skillSection.slice(3, 6);

  return (
    <div className="flex flex-col md:flex-row justify-center md:justify-between gap-10 md:gap-28 items-start dark:bg-[#2B2727]">
      {/* Sol sütun */}
      <div className="flex flex-col space-y-8 w-full md:w-auto">
        {leftSkills.map((skill, i) => (
          <div className="flex items-center space-x-6" key={i}>
            <img
              src={`/${skill.logo}`}
              alt={skill.name}
              className="w-20 h-20"
            />
            <h2 className="text-xl md:text-2xl text-[#777777] dark:text-[#FFFFFF] font-inter">
              {skill.name}
            </h2>
          </div>
        ))}
      </div>

      {/* Sağ sütun */}
      <div className="flex flex-col space-y-8 w-full md:w-auto">
        {rightSkills.map((skill, i) => (
          <div className="flex items-center space-x-6" key={i}>
            <img
              src={`/${skill.logo}`}
              alt={skill.name}
              className="w-20 h-20"
            />
            <h2 className="text-xl md:text-2xl text-[#777777] dark:text-[#FFFFFF] font-inter">
              {skill.name}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
