import React from "react";
import data from "../data.js";
import { NavLink } from "react-router-dom";

function Project() {
  const { projectSection } = data;
  return (
    <div className="flex flex-col justify-center items-center bg-[#CBF281] py-16">
      {projectSection.map((item, i) => (
        <div
          key={i}
          className="w-[960px] h-[374.43px] flex flex-row justify-center items-center bg-[#F9FAFB] rounded-[12px] shadow-lg my-4 p-1 gap-8"
        >
          <div className="flex justify-center items-center">
            <img
              className="w-[360px] h-[360px]"
              src={`/${item.url}`}
              alt="project"
            />
          </div>
          <div className="flex flex-col justify-center items-start ml-4 w-[584px] h-[247px] gap-6">
            <h1 className="text-4xl text-[#4338CA] font-inter font-bold">
              {item.title}
            </h1>
            <p className="text-[#383838] font-inter">{item.description}</p>
            <div className="flex gap-2 mt-4">
              <button className="bg-[#4731D3] rounded-[23px] w-16 text-[#FFFFFF]  ">
                react
              </button>
              <button className="bg-[#4731D3] rounded-[23px] w-16 text-[#FFFFFF] ">
                redux
              </button>
              <button className="bg-[#4731D3] rounded-[23px] w-16 text-[#FFFFFF] ">
                vercel
              </button>
            </div>
            <div className="flex gap-4 mt-4">
              <NavLink className="underline font-inter font-medium" to="/site">
                View Site
              </NavLink>
              <NavLink
                className="underline font-inter font-medium"
                to="/github"
              >
                Github
              </NavLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Project;
