import settingBg from "../../../assets/settingsBg.png";
import { BsCamera } from "react-icons/bs";

const SettingHeader = () => {
  return (
    <div>
     <header className="shadow-sm">
        {/* Cover Image (example placeholder) */}
        <div className="w-full bg-gray-300 h-16 md:h-24 lg:h-32 flex items-center justify-center mt-[8%]">
          <div className="absolute bg-white bg-opacity-80 right-[81%] md:right-7 lg:right-11 xl:right-11 top-[12%] md:top-[18%] lg:top-[20%] xl:top-[15%] flex items-center justify-center gap-3 text-[#1D9CD7] text-[20px] rounded-[10px] w-[42px] md:w-[209px] lg:w-[209px] h-[35px] md:h-[59px] lg:h-[59px]">
            <BsCamera className="size-[24px]" />
            <h1 className="hidden md:block lg:block">Change Cover</h1>
          </div>
          <img src={settingBg} alt="img"/>
        </div>
      </header>
    </div>
  )
}

export default SettingHeader;