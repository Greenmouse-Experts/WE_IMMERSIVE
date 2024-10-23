import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import arrow from "../../assets/svg/icon.svg";
import { CiSearch } from "react-icons/ci";
import { BsCalendarFill, BsGear } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { formatAsNgnMoney } from "../../components/utils/formatHelp";

const UserDashboard = () => {
  const navigate = useNavigate();
  const list = [
    {
      name: "Ongoing Courses",
      count: 7,
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1729716454/WE%20Immersive/learning-2_xy21e0.png",
      color: "#FFC7F0",
    },
    {
      name: "All Courses",
      count: 22,
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1729716404/WE%20Immersive/books_hkqetx.png",
      color: "#C7C8FF",
    },
    {
      name: "Purchased Assets",
      count: 37,
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1729716112/WE%20Immersive/3d-modeling_hbesow.png",
      color: "#FFD7C7",
    },
    {
      name: "Total Spend",
      count: `$${formatAsNgnMoney(107000)}`,
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1729716093/WE%20Immersive/coin-2_qcugc2.png",
      color: "#D0FFC7",
    },
  ];
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
                className="flex btn-shadow rounded-[8px] gap-x-2 items-center px-12 py-[10px]"
              >
                <span className="fw-500">Buy</span>
                <img src={arrow} alt="arrow-icon" />
              </Link>
            </div>
            <div className="flex gap-x-2 items-center">
              <div className="size-[44px] cursor-pointer hover:shadow rounded-[14px] place-center bg-white">
                <CiSearch />
              </div>
              <div className="size-[44px] cursor-pointer hover:shadow rounded-[14px] place-center bg-white">
                <BsGear className="text-[#718EBF]" />
              </div>
              <div className="size-[44px] cursor-pointer hover:shadow rounded-[14px] place-center bg-white">
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
        <div className="w-[35%] bg-white rounded-[14px] p-4">
          <div className="flex items-center justify-between bg-[#E9EBFB] rounded-[14px] px-4 py-1">
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
      <div className="grid grid-cols-4 gap-6 mt-10">
        {list.map((item) => (
          <div className="relative h-[120px]">
            <div className="box-drop rounded-[20px] p-4 h-full bg-white flex items-center">
              <div>
                <p className="text monts text-[#7F7F7F] fw-600 text-lg">
                  {item.count}
                </p>
                <p className="unbound fs-500 fw-400 text-[#06052A] pt-1">
                  {item.name}
                </p>
              </div>
            </div>
            <div
              className="absolute top-0 right-0 w-[70px] h-[60px] place-center border-[8px] rounded-[14px] border-[#F6F7FB]"
              style={{ backgroundColor: `${item.color}` }}
            >
              <img src={item.img} alt="icon-image" className="size-[32px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
