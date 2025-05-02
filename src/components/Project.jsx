import React from "react";

import { NavLink } from "react-router-dom";
import data from "../data";
import { useSelector } from "react-redux";

function Project() {
  const currentLanguage = useSelector((state) => state.language);

  const { projectSection } = data[currentLanguage];

  return (
    <div className="flex flex-col justify-center items-center bg-[#CBF281] dark:bg-[#1A210B] py-16 px-4">
      <div className="w-full max-w-[960px]">
        <h1 className="text-4xl sm:text-5xl text-[#4731D3] mb-8 font-inter font-bold">
          Projects
        </h1>

        {projectSection.map((item, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center bg-[#F9FAFB] dark:bg-[#2B2727] rounded-[12px] shadow-lg my-6 p-1 gap-6"
          >
            {/* Görsel */}
            <div className="w-full md:w-1/2 flex justify-center items-center">
              <img
                className="w-full max-w-[360px] h-auto rounded-md"
                src={`/${item.url}`}
                alt="project"
              />
            </div>

            {/* İçerik */}
            <div className="w-full md:w-1/2 flex flex-col justify-center items-start gap-4">
              <h1 className="text-2xl sm:text-3xl text-[#4338CA] font-inter font-bold">
                {item.title}
              </h1>
              <p className="text-[#383838] dark:text-[#FFFFFF] font-inter text-sm sm:text-base">
                {item.description}
              </p>

              {/* Etiketler */}
              <div className="flex flex-wrap gap-2 mt-2">
                <span className="bg-[#4731D3] rounded-[23px] px-4 py-1 text-white text-sm">
                  react
                </span>
                <span className="bg-[#4731D3] rounded-[23px] px-4 py-1 text-white text-sm">
                  redux
                </span>
                <span className="bg-[#4731D3] rounded-[23px] px-4 py-1 text-white text-sm">
                  vercel
                </span>
              </div>

              {/* Linkler */}
              <div className="flex gap-4 mt-4 flex-wrap">
                <NavLink
                  className="underline font-inter dark:text-[#FFFFFF]  font-medium text-sm"
                  to="/site"
                >
                  View Site
                </NavLink>
                <NavLink
                  className="underline font-inter dark:text-[#FFFFFF]  font-medium text-sm"
                  to="/github"
                >
                  Github
                </NavLink>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Project;
