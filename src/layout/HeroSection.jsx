import React from "react";
import ToggleSwitch from "../components/ToggleSwitch";
import data from "../data";
import { useDispatch, useSelector } from "react-redux";
import { changeLanguage } from "../store/actions/actions";

const HeroSection = () => {
  const dispatch = useDispatch();

  const currentLanguage = useSelector((state) => state.language);
  const { heroSection } = data[currentLanguage];

  const handleLang = () => {
    dispatch(changeLanguage());
  };

  return (
    <div className="bg-[linear-gradient(to_right,_#4731D3_67%,_#CBF281_33%)] dark:bg-[linear-gradient(to_right,_#171043_67%,_#211F0B_33%)] flex flex-col h-screen  items-center ">
      <div className="flex w-[960px]  gap-10 justify-end p-4">
        {currentLanguage === "en" ? (
          <button
            onClick={handleLang}
            className="text-[15px] font-bold font-inter text-[#CBF281] dark:text-[#8F88FF]  cursor-pointer"
          >
            TÜRKÇE
            <span className="text-[#FFFFFF] dark:text-[#777777] ">'YE GEÇ</span>
          </button>
        ) : (
          <button
            onClick={handleLang}
            className="text-[15px] font-bold font-inter text-[#CBF281] dark:text-[#8F88FF]  cursor-pointer"
          >
            SWITCH TO
            <span className="text-[#FFFFFF] dark:text-[#777777] ">
              {" "}
              ENGLISH
            </span>
          </button>
        )}
        <ToggleSwitch />
      </div>
      <div className="flex justify-start items-center w-full">
        <h1 className="font-inter text-3xl text-[#CBF281] dark:text-[#D9D9D9] ">
          Mustafa
        </h1>
      </div>
      <div className="flex w-[960px] my-auto mx-auto flex-col md:flex-row justify-between items-center h-full gap-6">
        <div className="text-white max-w-md text-center md:text-left">
          <h1 className="text-[54px] font-bold text-[#CBF281] mb-4">
            {heroSection.intro}
          </h1>
          <p className="text-lg mb-6">{heroSection.description}</p>
          <div className="flex gap-4 justify-center md:justify-start">
            <a
              href="#"
              className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-100"
            >
              Github
            </a>
            <a
              href="#"
              className="bg-white text-black px-4 py-2 rounded shadow hover:bg-gray-100"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <img
          src="https://picsum.photos/350/376"
          alt="Profile"
          className="w-[288px] h-[288px] object-cover rounded-xl shadow-xl"
        />
      </div>
    </div>
  );
};

export default HeroSection;
