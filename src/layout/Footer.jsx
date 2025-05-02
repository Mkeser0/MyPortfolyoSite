import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faInstagram,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import data from "../data";

function Footer() {
  const currentLanguage = useSelector((state) => state.language);
  const { footer } = data[currentLanguage];

  return (
    <div className="flex flex-col items-center justify-center dark:bg-[#252128] bg-[#F5F5F5] px-4 py-16">
      <div className="w-full max-w-[960px] text-center">
        <h1 className="text-3xl md:text-4xl font-inter font-bold text-[#4731D3] mb-4">
          {footer.title}
        </h1>

        <div className="text-sm md:text-base text-[#333333] dark:text-[#D9D9D9] space-y-2 mb-4">
          <p>{footer.desc1}</p>
          <p>{footer.desc2}</p>
        </div>

        <NavLink
          className="underline text-sm md:text-base text-[#4731D3] hover:text-[#211F0B] transition-colors"
          to="/email"
        >
          mkeser0@icloud.com
        </NavLink>

        <div className="flex items-center justify-center mt-6 gap-6 text-2xl">
          <FontAwesomeIcon
            icon={faTwitter}
            className="text-[#4731D3] hover:text-[#211F0B] transition-colors"
          />
          <FontAwesomeIcon
            icon={faCodepen}
            className="text-[#4731D3] hover:text-[#211F0B] transition-colors"
          />
          <FontAwesomeIcon
            icon={faAt}
            className="text-[#4731D3] hover:text-[#211F0B] transition-colors"
          />
          <FontAwesomeIcon
            icon={faInstagram}
            className="text-[#4731D3] hover:text-[#211F0B] transition-colors"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
