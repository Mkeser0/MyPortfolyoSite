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
    <div className="bg-[linear-gradient(to_right,_#4731D3_67%,_#CBF281_33%)] dark:bg-[linear-gradient(to_right,_#171043_67%,_#211F0B_33%)] flex flex-col h-screen relative">
      {/* Container for the entire content with fixed width */}
      <div className="w-full max-w-[960px] mx-auto flex flex-col h-full">
        {/* Header with language and theme buttons */}
        <div className="absolute top-0 left-0 w-full">
          <div className="max-w-[960px] mx-auto flex">
            {/* Left side for language button (at 67% mark) */}
            <div className="w-[67%] flex justify-end pr-4 p-4">
              {currentLanguage === "en" ? (
                <button
                  onClick={handleLang}
                  className="text-[15px] font-bold font-inter text-[#CBF281] dark:text-[#8F88FF] cursor-pointer"
                >
                  TÜRKÇE
                  <span className="text-[#FFFFFF] dark:text-[#777777]">
                    'YE GEÇ
                  </span>
                </button>
              ) : (
                <button
                  onClick={handleLang}
                  className="text-[15px] font-bold font-inter text-[#CBF281] dark:text-[#8F88FF] cursor-pointer"
                >
                  SWITCH TO
                  <span className="text-[#FFFFFF] dark:text-[#777777]">
                    {" "}
                    ENGLISH
                  </span>
                </button>
              )}
            </div>
            {/* Right side for toggle switch (at 33% mark) */}
            <div className="w-[33%] flex justify-start pl-4 p-4">
              <ToggleSwitch />
            </div>
          </div>
        </div>

        {/* Name section */}
        <div className="flex justify-start items-center w-[960px] pt-10 font-inter text-xl md:text-3xl text-[#CBF281] dark:text-[#D9D9D9]">
          Mustafa
        </div>

        {/* Main content section */}
        <div className="flex w-full my-auto flex-col md:flex-row justify-between items-center gap-6 px-8">
          <div className=" max-w-md text-left">
            <h1 className="font-bold text-[#CBF281] text-2xl md:text-[54px] leading-snug md:leading-tight">
              {heroSection.intro}
            </h1>
            <h1 className="font-bold md:text-[#CBF281] text-[#FFFFFF] mb-4 text-2xl md:text-[54px] leading-snug md:leading-tight">
              {heroSection.intro2}
            </h1>

            <p className="text-[18px] md:text-lg text-[#FFFFFF]">
              {heroSection.description}
            </p>
            <p className="text-[18px] md:text-lg mb-6 text-[#FFFFFF]">
              {heroSection.description2}
            </p>
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
            className="w-[200px] h-[200px] md:w-[288px] md:h-[288px] object-cover rounded-xl shadow-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
