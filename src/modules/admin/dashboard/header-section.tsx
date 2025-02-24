import { CiSearch } from "react-icons/ci";
import { BsGear } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
// import {  useNavigate } from "react-router-dom";

const HeaderSection = ({ openBar }: any) => {
  // const navigate = useNavigate();

  const openSideBar = () => {
    openBar(true);
  };

  return (
    <div className="w-full">
      <div className="flex items-stretch md:flex-row flex-col gap-5 md:gap-x-5">
        <div className="w-full flex md:gap-x-5">
          <div className="flex items-center justify-between md:w-[65%] w-full">
            <div className="md:flex hidden">
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
                className="size-[44px] xl:hidden flex cursor-pointer hover:shadow rounded-[14px] place-center bg-white dark:bg-[#15171E]"
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
          <div className="flex flex-1 md:w-[35%] w-full items-center justify-between bg-[#FBEBE9] dark:bg-black rounded-[14px] px-4 py-1">
            <p className="unbound fw-400 text-[#06052A] md:fs-500 text-xs">
              Super Admin
            </p>
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1731789862/Greenchmas-1_s5suif.png"
              alt="profile"
              className="w-6 rounded-full md:block hidden"
            />
          </div>
        </div>

        {/* <div className="w-[35%] bg-white dark:bg-[#15171E] rounded-[14px] p-4">
          <div className="flex items-center justify-between bg-[#E9EBFB] dark:bg-black rounded-[14px] px-4 py-1">
            <p className="unbound fw-400 text-[#06052A] fs-500">
            Super Admin
            </p>
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1731789862/Greenchmas-1_s5suif.png"
              alt="profile"
              className="w-6"
            />
          </div>
          <div className="mt-5 grid text-center">
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1731789862/Greenchmas-1_s5suif.png"
              alt="profile"
              className="size-[110px] aspect-square mx-auto"
            />
            <p className="text-[#06052A] unbound pt-2">GreenMouse</p>
            <p className="fs-300 text-[#7F7F7F]">testmail@gmail.com</p>
          </div>
        </div> */}
      </div>
      <div className="mt-4 p-4 h-[150px] grid content-between w-full rounded-[14px] bg-[url('https://res.cloudinary.com/do2kojulq/image/upload/v1729716093/WE%20Immersive/Frame_2_1_t4ktg0.png')] bg-cover">
        {/* <div className="flex">
              <div className="bg-gray-50 bg-opacity-15 rounded-lg backdrop-blur-sm flex items-center gap-x-2 py-1 text-white px-3">
                <BsCalendarFill />
                <span>Oct 14, 2024</span>
              </div>
            </div> */}
        <div>
          <p className="unbound text-white text-lg">Welcome, Admin 👋</p>
          <p className="fs-300 text-white">Have a great day!</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
