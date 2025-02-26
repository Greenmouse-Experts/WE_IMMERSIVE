import settingBkImg from "../../../../assets/adminSetImg.png";
import { BsCamera } from "react-icons/bs";

const SettingHeader = () => {
  return (
    <div>
     <header className="shadow-sm">
        {/* Cover Image (example placeholder) */}
        <div className="w-full bg-gradient-to-r from-[#FF9ED3] to-[#6020F6] h-16 md:h-32 xl:h-64 flex items-center justify-center mt-[2%] rounded-[20px]">
          <div className="absolute bg-white bg-opacity-80 right-[81%] md:right-5 lg:right-9 top-[12%] md:top-[10%] xl:top-[11%] flex items-center justify-center gap-3 text-[#1D9CD7] text-[20px] rounded-[10px] w-[42px] md:w-[140px] xl:w-[209px] h-[35px] md:h-[40px] xl:h-[59px]">
            <BsCamera className="size-[24px] md:size-[20px]" />
            <h1 className="hidden md:block lg:block md:text-[12px]">Change Cover</h1>
          </div>
          <img src={settingBkImg} alt="img" className="w-[80px] md:w-[150px] xl:w-[262px]"/>
        </div>
      </header>
    </div>
  )
}

export default SettingHeader;