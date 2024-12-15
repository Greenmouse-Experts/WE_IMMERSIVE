import { BsCalendarFill } from "react-icons/bs";
import MetricTag from "../../../components/reusables/metric-tag";
// import {  useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { todayDate } from "../../../helpers/dateHelper";

const HeaderSection = () => {
  // const navigate = useNavigate();
  const user = useSelector((state: any) => state.userData.data);

  return (
    <div>
      <div className="flex items-stretch gap-x-5">
        <div className="w-[65%] p-4 h-[200px] grid content-between rounded-[14px] bg-center bg-cover bg-[url('https://res.cloudinary.com/do2kojulq/image/upload/v1733742932/Group_1171275550_lwrxio.png')]">
          <div className="flex">
            <div className="bg-gray-50 bg-opacity-15 rounded-lg backdrop-blur-sm flex items-center gap-x-2 py-1 text-white px-3">
              <BsCalendarFill />
              <span>{todayDate()}</span>
            </div>
          </div>
          <div>
            <p className="unbound text-white text-lg">
              Welcome, {user.name} 👋
            </p>
            <p className="fs-300 text-white">Have a great day!</p>
          </div>
        </div>
        <div className="w-[35%]  bg-white dark:bg-[#15171E] rounded-[14px] px-4 py-2">
          <div className=" flex items-center gap-4 ">
            <img
              src={`${
                user.photo
                  ? user.photo
                  : "https://res.cloudinary.com/do2kojulq/image/upload/v1729716093/WE%20Immersive/Group_1000005705_c9ddis.png"
              }`}
              alt="profile"
              className="w-[76px] h-[76px] rounded-[20px]"
            />
            <div>
              <p className="text-[#06052A] unbound ">{user.name}</p>
              <p className="fs-300 text-[#7F7F7F]">{user.email}</p>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <MetricTag figure={100} title="Followers" />
            <MetricTag figure={4.5} title="Rating" />
            <MetricTag figure={100} title="Total Likes" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
