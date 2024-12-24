import { CiSearch } from "react-icons/ci";
import { BsGear } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
// import {  useNavigate } from "react-router-dom";

const TopHeader = ({ openBar }: any) => {
  // const navigate = useNavigate();

  const openSideBar = () => {
    openBar(true);
  };

  return (
    <div>
      <div className="flex items-stretch gap-x-5">
        <div className="w-full flex gap-x-5 ">
          <div className="flex items-center justify-between w-[65%]">
            <div className="">
              <div className="flex items-center h-[44px] 2xl:w-[481px] px-4 bg-white dark:bg-[#15171E] rounded-[14px] overflow-hidden">
                <CiSearch size={20} />
                <input
                  type="text"
                  className="h-full w-full bg-transparent px-2 placeholder:text-sm ]"
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
            </div>
          </div>
          <div className="flex flex-1 items-center justify-between bg-[#FBEBE9] dark:bg-black rounded-[14px] px-4 py-1">
            <p className="unbound fw-400 text-[#06052A] fs-500">Super Admin</p>
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1731789862/Greenchmas-1_s5suif.png"
              alt="profile"
              className="w-6 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
