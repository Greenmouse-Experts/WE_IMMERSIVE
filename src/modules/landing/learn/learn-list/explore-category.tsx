import { useState } from "react";
import ArrowsIcon from "../../../../assets/svg-components/arrows";

const ExploreCategory = () => {
  const [activeTab, setActiveTab] = useState("VR Gear");
  const barItems = [
    "Game Development",
    "3D Illustrations",
    "Character Animation",
    "AI Design Basic",
    "Blueprint Scripting",
    "Fine Art",
    "Agriculture",
    "Basic Science",
    "3D Characters",
    "Photography",
    "Sea Animals",
  ];

  return (
    <div className="section">
      <div className="box">
        <div>
          <p className="unbound fw-500">Explore by Category 🧑‍🏫</p>
        </div>
        <div className="mt-7 flex gap-4 flex-wrap">
          {barItems.map((item, key) => (
            <div
              className={`bg-[#EEEEEE] dark:bg-[#15171E] cursor-pointer w-fit rounded-[8px] flex items-center whitespace-nowrap gap-x-4 px-4 lg:px-6 text-[#696767] dark:text-[#AEACAC] py-2 border ${
                activeTab === item ? "border-gray-600" : "border-transparent"
              }`}
              key={key}
              onClick={() => setActiveTab(item)}
            >
              <ArrowsIcon color="#AEACAC" />
              {item}
            </div>
          ))}
          <div className="dark:bg-[#15171E] bg-[#EEEEEE] cursor-pointer rounded-[8px] flex items-center whitespace-nowrap lg:px-6 text-[#AEACAC] py-2">
            Learn More
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreCategory;
