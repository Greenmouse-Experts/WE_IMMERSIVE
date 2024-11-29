import { FC, useEffect } from "react";
import { FaCloudMoon } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { useLocalStorageState } from "../../../hooks/useLocalStorageState";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsMoon } from "react-icons/bs";

interface Props{
  sidebar?: boolean;
}
const ThemeSwitch:FC<Props> = ({sidebar}) => {
  const [isDarkMode, setIsDarkMode] = useLocalStorageState(
    window.matchMedia("(prefers-color-scheme:dark)").matches,
    "isDaskMode"
  );
  
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
    }
  }, [isDarkMode, setIsDarkMode]);

  function toggleDarkMode() {
    setIsDarkMode((isDark: boolean) => !isDark);
  }
  return (
    <>
      {sidebar ? (
        <div onClick={toggleDarkMode}>
          <div className="mt-2 grid grid-cols-2 gap-2 p-2 bg-[#E9EBFB]  dark:bg-black rounded-lg">
            <div
              className={`flex justify-center cursor-pointer py-2 rounded-lg  ${
                isDarkMode ? "" : "bg-gradient text-white"
              }`}
            >
              <MdOutlineWbSunny className="dark:text-white" />
            </div>
            <div
              className={`flex justify-center py-2 cursor-pointer  rounded-lg ${
                isDarkMode ? "bg-gradient text-white" : ""
              }`}
            >
              <BsMoon className="" />
            </div>
          </div>
        </div>
      ) : (
        <div onClick={toggleDarkMode} className="cursor-pointer">
          {!isDarkMode ? (
            <div className="text-center">
              <div className="flex justify-center">
                <FiSun className="text-xl " />
              </div>
              <p className="fs-400 fw-500 leading-[17px]">Light</p>
            </div>
          ) : (
            <div className="text-center">
              <div className="flex justify-center">
                <FaCloudMoon className="text-xl !text-white" />
              </div>
              <p className="fs-400 fw-500 leading-[17px]">Dark</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ThemeSwitch;
