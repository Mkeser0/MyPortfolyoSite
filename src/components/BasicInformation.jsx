import React from "react";
import data from "../data.js";
import { useSelector } from "react-redux";

function BasicInformation() {
  const currentLanguage = useSelector((state) => state.language);

  const { profileSection } = data[currentLanguage];

  return (
    <div>
      {profileSection.map((item, i) => (
        <div key={i} className="flex gap-4 py-1">
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
