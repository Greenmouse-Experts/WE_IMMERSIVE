import Button from "../../../components/ui/Button";
import arrow from "../../../assets/svg/icon.svg";
import { CiSearch } from "react-icons/ci";
import { BsCalendarFill, BsGear } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const HeaderSection = () => {
  const navigate = useNavigate();
  const user = useSelector((state: any) => state.userData.data);

  return (
    <div className="p-4">
      {/* Parent container - Now responsive */}
      <div className="flex flex-col md:flex-row items-stretch gap-5">
        {/* Left Section */}
        <div className="w-full md:w-[65%]">
          {/* Buttons Section */}
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="hidden md:flex gap-2 items-center">
              {/* Hides Learn & Buy on Mobile */}
              <Button
                title="Learn"
                withArrows
                altClassName="py-[10px] px-6 md:px-8 btn-primary"
                onClick={() => navigate("/store")}
              />
              <Link
                to={""}
                className="flex btn-shadow dark:bg-[#15171E] rounded-[8px] gap-x-2 items-center px-6 md:px-12 py-[10px]"
              >
                <span className="fw-500">Buy</span>
                <img src={arrow} alt="arrow-icon" />
              </Link>
            </div>

            {/* Icons Section - Right on Mobile, Normal on Desktop */}
            <div className="flex gap-2 items-center md:flex-row sm:ml-auto !important">
              {[CiSearch, BsGear, IoMdNotificationsOutline].map(
                (Icon, index) => (
                  <div
                    key={index}
                    className="size-[40px] md:size-[44px] cursor-pointer hover:shadow rounded-[14px] flex items-center justify-center bg-white dark:bg-[#15171E]"
                  >
                    <Icon
                      className={`${
                        index === 1
                          ? "text-[#718EBF]"
                          : index === 2
                          ? "text-[#A324F2]"
                          : ""
                      }`}
                    />
                  </div>
                )
              )}
            </div>
          </div>

          {/* Welcome Section */}
          <div className="mt-4 p-4 h-[200px] grid content-between w-full rounded-[14px] bg-[url('https://res.cloudinary.com/do2kojulq/image/upload/v1729716093/WE%20Immersive/Frame_2_1_t4ktg0.png')] bg-cover">
            <div className="flex">
              <div className="bg-gray-50 bg-opacity-15 rounded-lg backdrop-blur-sm flex items-center gap-x-2 py-1 text-white px-3">
                <BsCalendarFill />
                <span>{new Date().toLocaleDateString()}</span>
              </div>
            </div>
            <div>
              <p className="unbound text-white text-lg">
                Welcome, {user.name} 👋
              </p>
              <p className="fs-300 text-white">Have a great day!</p>
            </div>
          </div>
        </div>

        {/* Right Section (Profile) */}
        <div className="w-full md:w-[35%] bg-white dark:bg-[#15171E] rounded-[14px] p-4">
          {/* Individual Account (Show on All Devices) */}
          <div className="flex items-center justify-between bg-[#E9EBFB] dark:bg-black rounded-[14px] px-4 py-1">
            <p className="unbound fw-400 text-[#06052A] fs-500">
              Individual Account
            </p>
            <img
              src={
                user.photo ||
                "https://res.cloudinary.com/do2kojulq/image/upload/v1729716093/WE%20Immersive/Group_1000005705_c9ddis.png"
              }
              alt="profile"
              className="w-10"
            />
          </div>

          {/* User Profile (Show Only on Desktop) */}
          <div className="mt-5 text-center md:block hidden">
            <img
              src={
                user.photo ||
                "https://res.cloudinary.com/do2kojulq/image/upload/v1729716093/WE%20Immersive/Group_1000005834_ohgzc2.png"
              }
              alt="profile"
              className="size-[90px] md:size-[110px] aspect-square mx-auto"
            />

            {/* Name & Email Only on Desktop */}
            <p className="text-[#06052A] unbound pt-2">{user.name}</p>
            <p className="fs-300 text-[#7F7F7F]">{user.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
