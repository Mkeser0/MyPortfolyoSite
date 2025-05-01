import React from "react";
import data from "../data.js";

function BasicInformation() {
  const { profileSection } = data;

  return (
    <div>
      {profileSection.map((item, i) => (
        <div key={i} className="flex gap-4 py-2">
          <p className="text-[#CBF281] font-inter w-[101px] text-left">
            {item.title}
          </p>
          <p className="text-[#FFFFFF] font-inter w-[189px] text-left">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default BasicInformation;
