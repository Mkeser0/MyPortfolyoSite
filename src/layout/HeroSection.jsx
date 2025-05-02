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
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background split: 67% left (purple), 33% right (green) */}
      <div className="absolute inset-0 w-full h-full z-0 flex">
        <div className="w-[67%] bg-[#4731D3] dark:bg-[#171043]"></div>
        <div className="w-[33%] bg-[#CBF281] dark:bg-[#211F0B]"></div>
      </div>

      {/* Content area */}
      <div className="relative z-10 h-full mx-auto max-w-screen-lg flex flex-col">
        {/* Language and ToggleSwitch positioned on the color split */}
        <div className="flex w-full">
          {/* Language Button at end of 67% section */}
          <div className="w-[67%] flex justify-end p-4 pr-6">
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

          {/* ToggleSwitch at start of 33% section */}
          <div className="w-[33%] flex justify-start p-4 pl-6">
            <ToggleSwitch />
          </div>
        </div>

        {/* Name section */}
        <div className="px-8 mt-4">
          <h1 className="font-inter text-3xl text-[#CBF281] dark:text-[#D9D9D9]">
            Mustafa
          </h1>
        </div>

        {/* Main hero content */}
        <div className="flex flex-col md:flex-row justify-between items-center flex-grow px-8">
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
    </div>
  );
};

export default HeroSection;
