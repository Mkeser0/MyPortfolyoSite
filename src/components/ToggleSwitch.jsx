import React from "react";
import useDarkMode from "../hooks/useDarkMode";

const ToggleSwitch = () => {
  const [darkMode, setDarkMode] = useDarkMode();

  const toggleDark = () => {
    setDarkMode(!darkMode);
  };

  return (
    <label className="inline-flex items-center cursor-pointer relative">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={darkMode}
        onChange={toggleDark}
      />
      <div
        className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700
        peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white 
        after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"
      ></div>
      <span className="ml-3 text-[15px] font-inter font-bold text-[#4731D3] dark:text-gray-300">
        {darkMode ? "LIGHT MODE" : "DARK MODE"}
      </span>
    </label>
  );
};

export default ToggleSwitch;
