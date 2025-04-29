import React from "react";
import data from "../data";

function img() {
  const { skillSection } = data.english;
  return (
    <>
      {skillSection.map((skill, i) => (
        <div
          key={i}
          className="flex flex-row items-center justify-center w-1/4 p-4"
        >
          <img
            src={`/${skill.logo}`}
            alt={skill.name}
            className="w-16 h-16 mb-2"
          />
          <h2 className="text-lg font-semibold">{skill.name}</h2>
        </div>
      ))}
    </>
  );
}

export default img;
