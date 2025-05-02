import React from "react";
import data from "../data";
import { useSelector } from "react-redux";

function Skills() {
  const currentLanguage = useSelector((state) => state.language);

  const { skillSection } = data[currentLanguage];

  const leftSkills = skillSection.slice(0, 3);
  const rightSkills = skillSection.slice(3, 6);

  return (
    <div className="flex justify-between gap-28 items-center dark:bg-[#2B2727]">
      {/* Sol sütun */}
      <div className="flex flex-col space-y-8">
        {leftSkills.map((skill, i) => (
          <div className="flex items-center space-x-8" key={i}>
            <img
              src={`/${skill.logo}`}
              alt={skill.name}
              className="w-24 h-24"
            />
            <h2 className="text-2xl font-inter">{skill.name}</h2>
          </div>
        ))}
      </div>

      {/* Sağ sütun */}
      <div className="flex flex-col space-y-8 dark:bg-[#2B2727]">
        {rightSkills.map((skill, i) => (
          <div className="flex items-center space-x-8" key={i}>
            <img
              src={`/${skill.logo}`}
              alt={skill.name}
              className="w-24 h-24"
            />
            <h2 className="text-2xl font-inter">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
