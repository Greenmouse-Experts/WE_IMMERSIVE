import Button from "../../../components/ui/Button";
import arrow from "../../../assets/svg/icon.svg";
import { CiSearch } from "react-icons/ci";
import { BsCalendarFill, BsGear } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";

const HeaderSection = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex items-stretch gap-x-5">
        <div className="w-[65%]">
          <div className="flex items-center justify-between">
            <div className="flex gap-x-4 items-center">
              <div>
                <Button
                  title="Learn"
                  withArrows
                  altClassName="py-[10px] px-8 btn-primary"
                  onClick={() => navigate("/store")}
                />
              </div>
              <Link
                to={""}
                className="flex btn-shadow dark:bg-[#15171E] rounded-[8px] gap-x-2 items-center px-12 py-[10px]"
              >
                <span className="fw-500">Buy</span>
                <img src={arrow} alt="arrow-icon" />
              </Link>
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
          <div className="mt-4 p-4 h-[200px] grid content-between w-full rounded-[14px] bg-[url('https://res.cloudinary.com/do2kojulq/image/upload/v1729716093/WE%20Immersive/Frame_2_1_t4ktg0.png')] bg-cover">
            <div className="flex">
              <div className="bg-gray-50 bg-opacity-15 rounded-lg backdrop-blur-sm flex items-center gap-x-2 py-1 text-white px-3">
                <BsCalendarFill />
                <span>Oct 14, 2024</span>
              </div>
            </div>
            <div>
              <p className="unbound text-white text-lg">Welcome, Chukka 👋</p>
              <p className="fs-300 text-white">Have a great day!</p>
            </div>
          </div>
        </div>
        <div className="w-[35%] bg-white dark:bg-[#15171E] rounded-[14px] p-4">
          <div className="flex items-center justify-between bg-[#E9EBFB] dark:bg-black rounded-[14px] px-4 py-1">
            <p className="unbound fw-400 text-[#06052A] fs-500">
              Individual Account
            </p>
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1729716093/WE%20Immersive/Group_1000005705_c9ddis.png"
              alt="profile"
              className="w-6"
            />
          </div>
          <div className="mt-5 grid text-center">
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1729716093/WE%20Immersive/Group_1000005834_ohgzc2.png"
              alt="profile"
              className="size-[110px] aspect-square mx-auto"
            />
            <p className="text-[#06052A] unbound pt-2">Chukka Uzo</p>
            <p className="fs-300 text-[#7F7F7F]">chukauzo@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
