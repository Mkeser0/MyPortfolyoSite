import React from "react";
import data from "../data";

function Skills() {
  const { skillSection } = data.english;

  // Soldaki ve sağdaki 3 skill'i ayırıyoruz
  const leftSkills = skillSection.slice(0, 3);
  const rightSkills = skillSection.slice(3, 6);

  return (
    <div className="flex justify-between gap-28 items-center">
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
      <div className="flex flex-col space-y-8">
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
