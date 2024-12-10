import { useState } from "react";
import MetricTag from "../../components/reusables/metric-tag";
import { FaCirclePlus } from "react-icons/fa6";
import { LiaPencilRulerSolid } from "react-icons/lia";
import { IoLocationOutline } from "react-icons/io5";

const CreatorPortfolio = () => {
  const tabs = ["Work", "About", "Collection", "Stats"];

  const [tab, setTab] = useState("Work");
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
                src="https://res.cloudinary.com/do2kojulq/image/upload/v1733743882/F16CB5E3-D175-4ADA-AC99-272BB7542F01_z67l0h.png"
                alt="profile"
                className="w-[100px] h-[110px] rounded-[10px]"
              />
              <div className="text-center ">
                <p className="text-[#06052A] unbound fw-600 ">Chukka Uzo</p>
                <p className="fs-600 text-[#7F7F7F]">Game Artist 2D - Professional 3D Designer </p>
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

          <div className="bg-[#E9EBFB] rounded-[20px] p-8 mt-8">
            <div className="flex items-center gap-3">
            <FaCirclePlus size={25} className="text-primary" />
              <p className="unbound text-lg">Create Asset/Course</p>
            </div>
            <p className="text-grey text-base mt-3">
              Upload and showcase your digital creations, unlock opportunities
              to connect and, sell your works
            </p>

            <div className="mt-6 flex items-center gap-3">
            <LiaPencilRulerSolid color="#7C7A7A" />
              <p className="text-grey text-sm">Import content in seconds</p>
            </div>
            
          </div>

          <div className="mt-8 grid xl:grid-cols-3 gap-5">
            {
               [...Array(9)].map(() => (
                <div className="rounded-[10px] overflow-hidden">
                    <img src="https://res.cloudinary.com/do2kojulq/image/upload/v1733858200/image_2_pylkii.png" alt=""  className="h-[280px] w-full"/>
                </div>
               ))
            }

          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatorPortfolio;
