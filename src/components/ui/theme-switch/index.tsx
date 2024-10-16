import { useEffect } from "react";
import { FaCloudMoon } from "react-icons/fa6";
import { FiSun } from "react-icons/fi";
import { useLocalStorageState } from "../../../hooks/useLocalStorageState";

const ThemeSwitch = () => {
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
    <div onClick={toggleDarkMode} className="cursor-pointer">
      {!isDarkMode ? (
        <div className="text-center">
          <div className="flex justify-center">
            <FiSun className="text-xl" />
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
  );
};

export default ThemeSwitch;
