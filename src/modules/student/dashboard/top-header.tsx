import { BsGear } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { useSelector } from "react-redux";

const TopHeader = () => {
  const user = useSelector((state: any) => state.userData.data);

  return (
    <div className="flex items-center  gap-x-5 mb-8">
      <div className="w-[65%]">
        <div className="flex items-center justify-between">
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
          <div className="flex gap-x-2 items-center">
            <div className="size-[44px] cursor-pointer hover:shadow rounded-[14px] place-center bg-white dark:bg-[#15171E]">
              <CiSearch />
            </div>
            <div className="size-[44px] cursor-pointer hover:shadow rounded-[14px] place-center bg-white dark:bg-[#15171E]">
              <BsGear className="text-[#718EBF]" />
            </div>
            <div className="size-[44px] cursor-pointer hover:shadow rounded-[14px] place-center bg-white dark:bg-[#15171E]">
              <IoMdNotificationsOutline className="text-[#A324F2]" />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[35%] bg-white dark:bg-[#15171E] rounded-[14px] p-4 py-2">
        <div className="flex items-center justify-between bg-[#E9EBFB] dark:bg-black rounded-[14px] px-4 py-2">
          <p className="unbound fw-400 text-[#06052A] fs-500">
            Students Account
          </p>
          <img
            src={`${
              user.photo
                ? user.photo
                : "https://res.cloudinary.com/do2kojulq/image/upload/v1729716093/WE%20Immersive/Group_1000005705_c9ddis.png"
            }`}
            alt="profile"
            className="w-8 h-8 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
