import useDarkMode from "../hooks/useDarkMode";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="flex justify-between items-center w-2/3 mx-auto p-4  bg-[#4731D3] dark:bg-[#F4F4F4]">
      <h2 className="text-[#CBF281] text-xl sm:text-2xl">Mustafa</h2>
      <div className="flex items-center space-x-4">
        <button className="text-[#CBF281] text-[10px] sm:text-[15px] hover:underline">
          TÜRKÇE'YE GEÇ
        </button>

        <div className="flex items-center space-x-2">
          <div
            onClick={toggleMode}
            className={`relative w-[55px] h-[24px] rounded-full cursor-pointer flex items-center transition-colors duration-300 ${
              isDarkMode
                ? "bg-[#8F88FF]"
                : "bg-[#8F88FF] hover:border-2 hover:border-[#8F88FF]"
            }`}
          >
            <div
              className={`absolute w-[17px] h-[17px] rounded-full bg-yellow-300 transition-transform duration-300 ${
                isDarkMode ? "translate-x-[31px]" : "translate-x-1"
              }`}
            >
              {/* Crescent Moon Shape for Light Mode */}
              {!isDarkMode && (
                <div className="absolute w-[12px] h-[12px] bg-[#8F88FF] rounded-full top-[2px] left-[6.5px]"></div>
              )}
            </div>
          </div>
          <span className="text-[#4731D3] text-[10px] sm:text-[15px] font-inter">
            {isDarkMode ? "DARK MODE" : "LIGHT MODE"}
          </span>
        </div>
      </div>
    </header>
  );
};
export default Header;
