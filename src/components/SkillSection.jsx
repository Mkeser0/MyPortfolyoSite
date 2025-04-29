import React from "react";
import Skills from "./Skills";

function SkillSection() {
  return (
    <div className="flex flex-row mx-auto">
      <h1>Skills</h1>
      <div className="w-2/3 ">
        <Skills />
      </div>
    </div>
  );
}

export default SkillSection;
