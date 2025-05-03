import React from "react";
import { useSelector } from "react-redux";
import data from "../data";

function AboutMe() {
  const currentLanguage = useSelector((state) => state.language);
  const { aboutMe, titles } = data[currentLanguage];

  return (
    <div>
      <h2 className="text-4xl text-[#FFFFFF] font-inter">{titles.about}</h2>
      <p className="text-[#FFFFFF] text-[18px] mt-4">{aboutMe.intro}</p>
      <p className="text-[#FFFFFF] text-lg mt-4">{aboutMe.desc}</p>
    </div>
  );
}

export default AboutMe;
