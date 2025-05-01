import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faAt } from "@fortawesome/free-solid-svg-icons";
import { faCodepen } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className="flex flex-col items-center justify-center dark:bg-[#252128]">
      <div className="w-max h-[290px] flex flex-col items-center justify-center border-solid-2">
        <h1 className="text-4xl font-inter font-bold text-[#4731D3]">
          Send me a message!
        </h1>
        <div className="flex flex-col items-center justify-center my-4">
          <p>Got a question or proposal, or just want</p>
          <p>to say hello? Go ahead.</p>
        </div>
        <NavLink className="underline" to="/email">
          mkeser0@icloud.com
        </NavLink>
        <div className="flex flex-row items-center justify-center mt-4 gap-4">
          <i>
            <FontAwesomeIcon icon={faTwitter} className="text-[#4731D3] " />
          </i>
          <i>
            <FontAwesomeIcon icon={faCodepen} className="text-[#4731D3]" />
          </i>
          <i>
            <FontAwesomeIcon icon={faAt} className="text-[#4731D3]" />
          </i>
          <i>
            <FontAwesomeIcon className="text-[#4731D3]" icon={faInstagram} />
          </i>
        </div>
      </div>
    </div>
  );
}

export default Footer;
