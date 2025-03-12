import { BsGear } from "react-icons/bs";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { getGeneralUserDetails } from "../../../api/general";

const TopHeader = ({ openBar }: any) => {

  const { data: userData, isLoading } = getGeneralUserDetails();

  const openSideBar = () => {
    openBar(true);
  };

  return (
    <div className="flex items-center  gap-x-5 mb-8">
      <div className="md:w-[65%] w-full">
        <div className="flex items-center justify-between">
          <div className="md:flex hidden">
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
            <div
              onClick={() => openSideBar()}
              className="size-[44px] md:hidden flex cursor-pointer hover:shadow rounded-[14px] place-center bg-white dark:bg-[#15171E]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            </div>
            <div className="size-[44px] cursor-pointer hover:shadow rounded-[14px] place-center bg-white dark:bg-[#15171E]">
              <CiSearch />
            </div>
            <div className="size-[44px] cursor-pointer hover:shadow rounded-[14px] place-center bg-white dark:bg-[#15171E]">
              <BsGear className="text-[#718EBF]" />
            </div>
            <div className="size-[44px] cursor-pointer hover:shadow rounded-[14px] place-center bg-white dark:bg-[#15171E]">
              <IoMdNotificationsOutline className="text-[#A324F2]" />
            </div>
            <div className="flex md:hidden items-center justify-between bg-[#E9EBFB] dark:bg-black rounded-[14px] px-4 py-1">
              <p className="unbound fw-400 text-[#06052A] text-xs">
                Creators Account
              </p>
              <img
                 src={`${
                  userData?.photo && !isLoading
                    ? userData?.photo
                    : "https://res.cloudinary.com/do2kojulq/image/upload/v1730286484/default_user_mws5jk.jpg"
                }`}
                alt="profile"
                className="w-6"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-[35%] bg-white dark:bg-[#15171E] rounded-[14px] p-4 md:block hidden">
        <div className="flex items-center justify-between bg-[#E9EBFB] dark:bg-black rounded-[14px] px-4 py-2">
          <p className="unbound fw-400 text-[#06052A] fs-500">
            Creators Account
          </p>
          <img
            src={`${
              userData?.photo && !isLoading
                ? userData?.photo
                : "https://res.cloudinary.com/do2kojulq/image/upload/v1730286484/default_user_mws5jk.jpg"
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
