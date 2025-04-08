import { useState } from "react";
import MetricTag from "../../components/reusables/metric-tag";
import { IoLocationOutline } from "react-icons/io5";
import { getGeneralUserDetails } from "../../api/general";
import Loader from "../../components/reusables/loader";
import WorkTab from "../../modules/creator/portfolio/work-tab";
import AboutTab from "../../modules/creator/portfolio/about-tab";
import StatTab from "../../modules/creator/portfolio/stats-tab";

const CreatorPortfolio = () => {
  const tabs = ["Work", "About", "Collection", "Stats"];
  const { data: userData, isLoading } = getGeneralUserDetails();

  const [tab, setTab] = useState("Work");
  if (isLoading) return <Loader />;
  return (
    <div className=" w-full">
      <div className="bg-white dark:bg-black rounded-[20px] overflow-hidden">
        <div className="px-8 py-8 ">
          <p className="fw-600 unbound text-2xl">Portfolio</p>
        </div>
        <img
          src="https://res.cloudinary.com/do2kojulq/image/upload/v1733855353/image_1_lxyt83.png"
          alt=""
          className="h-[300px] w-full"
        />
      </div>

      <div className="px-8 flex gap-8 -mt-32">
        <div className="bg-white dark:bg-darkMode rounded-[20px] p-5 xl:w-[27%] h-screen">
          <p className="text-sm unbound">Profile </p>

          <div className=" ">
            <div className=" flex flex-col items-center gap-4 ">
              <img
                src={`${
                  userData.photo
                    ? userData.photo
                    : "https://res.cloudinary.com/do2kojulq/image/upload/v1730286484/default_user_mws5jk.jpg"
                }
                  `}
                alt="profile"
                className="w-[100px] h-[110px] rounded-[10px]"
              />
              <div className="text-center ">
                <p className="text-[#06052A] unbound fw-600 ">
                  {userData.name}
                </p>
                <p className="fs-600 text-[#7F7F7F]">
                  {userData.professionalSkill}
                </p>
                <div className="text-secondary flex items-center justify-center gap-1 mt-1">
                  <IoLocationOutline />
                  <p className="text-sm">Lagos, Nigeria</p>
                </div>
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between">
              <MetricTag figure={100} title="Followers" />
              <MetricTag figure={4.5} title="Rating" />
              <MetricTag figure={100} title="Total Likes" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-darkMode rounded-[20px] xl:w-[70%] p-8">
          <div className="border-b-[5px] border-[#F1F1F1] pb-4 flex flex-row justify-between">
            {tabs.map((item, i) => (
              <div
                onClick={() => setTab(item)}
                key={i}
                className="relative cursor-pointer"
              >
                <p
                  className={`${
                    tab === item ? "text-secondary fw-700" : "text-grey"
                  }`}
                >
                  {item}
                </p>
                {tab === item && (
                  <div
                    className={`absolute -bottom-5 h-[5px] w-16 bg-secondary `}
                  />
                )}
              </div>
            ))}
          </div>

          <div className="mt-6">
            {tab === "Work" && <WorkTab />}
            {tab === "About" && <AboutTab userData={userData} />}
            {tab === "Stats" && <StatTab />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorPortfolio;
