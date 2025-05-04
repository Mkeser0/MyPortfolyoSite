import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../store/actions/actions";

const ToggleSwitch = () => {
  const dispatch = useDispatch();
  const darkMode = useSelector((state) => state.darkMode);

  const toggleDark = () => {
    dispatch(changeTheme());
  };

  return (
    <label className="inline-flex items-center cursor-pointer relative">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={darkMode}
        onChange={toggleDark}
      />

      {/* Toggle Background */}
      <div className="w-11 h-6 bg-gray-200 dark:bg-gray-700  rounded-full hover:border-[#4731D3] relative transition-colors duration-300">
        {/* Dış Sarı Daire */}
        <div
          className={`
            absolute top-[3px] left-[2px] w-[18px] h-[18px] rounded-full 
            transition-transform duration-300
            ${
              darkMode
                ? "translate-x-0 bg-yellow-400"
                : "translate-x-[23px] bg-yellow-400"
            }
          `}
        >
          {/* İçteki Maskelenmiş Daire */}
          <div
            className={`
              absolute w-[12px] h-[12px] rounded-full
              top-[2px] left-0
              transition-transform duration-300
              ${darkMode ? "translate-x-[7px] bg-gray-700" : "opacity-0"}
            `}
          ></div>
        </div>
      </div>

      {/* Yazı */}
      <span className="ml-3 text-[15px] font-inter font-bold text-[#4731D3] dark:text-gray-300">
        {darkMode ? "LIGHT MODE" : "DARK MODE"}
      </span>
    </label>
  );
};

export default ToggleSwitch;
