import settingBg from "../../../../assets/settingsBg.png";
import { BsCamera } from "react-icons/bs";

const SettingHeader = () => {
  return (
    <div>
     <header className="shadow-sm">
        {/* Cover Image (example placeholder) */}
        <div className="w-full bg-gray-300 h-16 md:h-24 lg:h-32 flex items-center justify-center mt-[8%]">
          <div className="absolute bg-white bg-opacity-80 right-[81%] md:right-5 lg:right-9 top-[12%] md:top-[16%] lg:top-[18%] xl:top-[14%] flex items-center justify-center gap-3 text-[#1D9CD7] text-[20px] rounded-[10px] w-[42px] md:w-[140px] xl:w-[209px] h-[35px] md:h-[40px] xl:h-[59px]">
            <BsCamera className="size-[24px] md:size-[20px]" />
            <h1 className="hidden md:block lg:block md:text-[12px]">Change Cover</h1>
          </div>
          <img src={settingBg} alt="img"/>
        </div>
      </header>
    </div>
  )
}

export default SettingHeader;