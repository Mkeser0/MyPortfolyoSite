import useDarkMode from "../hooks/useDarkMode";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="flex justify-end items-center p-4 bg-gray-100">
      <div className="flex items-center space-x-4">
        {/* Toggle Switch */}
        <div className="flex items-center space-x-2">
          <div
            onClick={toggleMode}
            className={`relative w-[55px] h-[24px] rounded-full cursor-pointer flex items-center transition-colors duration-300 ${
              isDarkMode
                ? "bg-[#E92577]"
                : "bg-black hover:border-2 hover:border-[#E92577]"
            }`}
          >
            <div
              className={`absolute w-[18px] h-[18px] rounded-full bg-yellow-300 transition-transform duration-300 ${
                isDarkMode ? "translate-x-[31px]" : "translate-x-1"
              }`}
            >
              {/* Crescent Moon Shape for Light Mode */}
              {!isDarkMode && (
                <div className="absolute w-[13px] h-[13px] bg-black rounded-full top-[2px] left-[6.5px]"></div>
              )}
            </div>
          </div>
          <span className="text-gray-500 text-sm">
            {isDarkMode ? "DARK MODE" : "LIGHT MODE"}
          </span>
        </div>

        {/* Divider */}
        <span className="text-gray-400">|</span>

        {/* Language Switch */}
        <button className="text-pink-500 text-sm hover:underline">
          TÜRKÇE'YE GEÇ
        </button>
      </div>
    </header>
  );
};
export default Header;
