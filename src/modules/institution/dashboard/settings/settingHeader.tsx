import { BsGear } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import settingBg from "../../../../assets/settingsBg.png";
import { CiSearch } from "react-icons/ci";

const SettingHeader = (user: any) => {
  return (
    <div>
     <header className="shadow-sm">
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between mb-8 mt-2">
            <div className="">
              <div className="flex items-center h-[44px] 2xl:w-[481px] px-4  bg-white rounded-[14px] overflow-hidden">
                <CiSearch size={20} />
                <input
                  type="text"
                  className="h-full w-full  px-2 placeholder:text-sm ]"
                  placeholder="Search with keyword"
                />
              </div>
              {/* <TextInput type={InputType.text} icon={<CiSearch />} placeholder="Search with keyword" style={{backgroundColor:"#fff"}}/> */}
            </div>
            <div className="flex gap-x-2 mt-4 md:mt-0 lg:mt-0 items-center justify-end w-[100%] md:w-[40%] lg:w-[40%]">
              <div className="size-[44px] cursor-pointer hover:shadow rounded-[14px] place-center bg-white dark:bg-[#15171E]">
                <CiSearch />
              </div>
              <div className="size-[44px] cursor-pointer hover:shadow rounded-[14px] place-center bg-white dark:bg-[#15171E]">
                <BsGear className="text-[#718EBF]" />
              </div>
              <div className="size-[44px] cursor-pointer hover:shadow rounded-[14px] place-center bg-white dark:bg-[#15171E]">
                <IoMdNotificationsOutline className="text-[#A324F2]" />
              </div>
           
              <div className="flex items-center justify-between bg-[#E9EBFB] dark:bg-black rounded-[14px] px-4 py-2 w-[60%]">
                <p className="unbound fw-400 text-[#06052A] fs-500 text-[10px] md:text-[14px] lg:text-[14px]">
                    Institution Account
                </p>
                <img
                src={`${
                    user.photo
                    ? user.photo
                    : "https://res.cloudinary.com/do2kojulq/image/upload/v1731789862/Greenchmas-1_s5suif.png"
                }
                `}
                alt="profile"
                className="w-6"
                />
               </div>
            </div>
        </div>

        {/* Cover Image (example placeholder) */}
        <div className="w-full bg-gray-300 h-16 md:h-24 lg:h-32 flex items-center justify-center mt-[8%]">
          <img src={settingBg} alt="img"/>
        </div>
      </header>
    </div>
  )
}

export default SettingHeader;