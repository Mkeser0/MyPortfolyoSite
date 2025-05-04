import React from "react";
import BasicInformation from "../components/BasicInformation";
import AboutMe from "../components/AboutMe";
import data from "../data";
import { useSelector } from "react-redux";

function ProfileSection() {
  const currentLanguage = useSelector((state) => state.language);
  const { titles } = data[currentLanguage];
  return (
    <div className="bg-[#4731D3] dark:bg-[#171043] py-24 flex justify-center items-center px-4">
      <div className="flex flex-col w-full max-w-[960px]">
        <h1 className="text-3xl md:text-5xl text-[#CBF281] text-left mb-8 font-bold">
          {titles.profile}
        </h1>

        <div className="flex flex-col md:flex-row items-start">
          {/* Basic Info */}
          <div className="flex-1 ">
            <h2 className="text-xl md:text-2xl text-[#FFFFFF] font-inter mb-4 text-left">
              Basic Information
            </h2>
            <BasicInformation />
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-start md:justify-center items-start w-full">
            <img
              className="rounded-xl w-full max-w-[250px] object-cover"
              src="https://picsum.photos/300/291"
              alt="pr"
            />
          </div>

          {/* About Me */}
          <div className="flex-1 w-full">
            <AboutMe />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
