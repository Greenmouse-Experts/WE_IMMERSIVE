import { BsCalendarFill } from "react-icons/bs";
import MetricTag from "../../../components/reusables/metric-tag";
import { todayDate } from "../../../helpers/dateHelper";
import { getGeneralUserDetails } from "../../../api/general";

const HeaderSection = () => {
  const { data: userData, isLoading } = getGeneralUserDetails();

  return (
    <div>
      <div className="flex items-stretch md:flex-row flex-col gap-5 md:gap-x-5">
        <div className="md:w-[65%] w-full p-4 h-[200px] grid content-between rounded-[14px] bg-center bg-cover bg-[url('https://res.cloudinary.com/do2kojulq/image/upload/v1733742932/Group_1171275550_lwrxio.png')]">
          <div className="flex">
            <div className="bg-gray-50 bg-opacity-15 rounded-lg backdrop-blur-sm flex items-center gap-x-2 py-1 text-white px-3">
              <BsCalendarFill />
              <span>{todayDate()}</span>
            </div>
          </div>
          <div>
            <p className="unbound text-white text-lg">
              Welcome, {userData?.name} 👋
            </p>
            <p className="fs-300 text-white">Have a great day!</p>
          </div>
        </div>
        <div className="md:w-[35%] w-full bg-white dark:bg-[#15171E] rounded-[14px] px-4 py-2">
          <div className=" flex items-center gap-4 ">
            <img
             src={`${
              userData?.photo && !isLoading
                ? userData?.photo
                : "https://res.cloudinary.com/do2kojulq/image/upload/v1730286484/default_user_mws5jk.jpg"
            }`}
              alt="profile"
              className="w-[76px] h-[76px] rounded-[20px]"
            />
            <div>
              <p className="text-[#06052A] unbound ">{userData?.name}</p>
              <p className="fs-300 text-[#7F7F7F]">{userData?.email}</p>
            </div>
          </div>
          <div className="mt-8 flex items-center justify-between">
            <MetricTag figure={0} title="Followers" />
            <MetricTag figure={0} title="Rating" />
            <MetricTag figure={0} title="Total Likes" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderSection;
