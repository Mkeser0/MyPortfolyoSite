import React from "react";
import BasicInformation from "../components/BasicInformation";
import AboutMe from "../components/AboutMe";

function ProfileSection() {
  return (
    <div className="bg-[#4731D3] dark:bg-[#171043] py-24 flex justify-center items-center px-4">
      <div className="flex flex-col w-full max-w-[960px]">
        <h1 className="text-5xl text-[#CBF281] text-left mb-8 font-bold">
          Profile
        </h1>

        <div className="flex flex-col md:flex-row gap-7 items-center md:items-start">
          <div className="flex-1 w-full">
            <h2 className="text-4xl text-[#FFFFFF] font-inter mb-4 text-center md:text-left">
              Basic Information
            </h2>
            <BasicInformation />
          </div>

          <div className="flex-1 flex justify-center items-center w-full">
            <img
              className="rounded-xl w-full max-w-[250px] object-cover"
              src="https://picsum.photos/250"
              alt="pr"
            />
          </div>

          <div className="flex-1 w-full">
            <AboutMe />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileSection;
