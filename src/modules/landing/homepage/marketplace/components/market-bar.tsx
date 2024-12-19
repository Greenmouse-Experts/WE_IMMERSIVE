import { useState } from "react";
import ArrowsIcon from "../../../../../assets/svg-components/arrows";

const MarketBar = () => {
  const [activeTab, setActiveTab] = useState("XR Courses");
  const barItems = [
    "XR Courses",
    "Frine Courses",
    "Deaxe Courses",
    "Waners Courses",
    "Roules Courses",
    "Cises Courses",
    "Visual ER Courses",
    "Animated Courses",
  ];
  return (
    <div className="mt-6 lg:mt-12 flex overflow-auto md:px-0 px-3 scroll-pro gap-x-5">
      {barItems.map((item, key) => (
        <div
          className={`bg-[#15171E] dark:bg-[rgba(238,238,238,1)] cursor-pointer w-fit rounded-[8px] flex items-center whitespace-nowrap gap-x-4 px-4 lg:px-6 text-[#696767] py-2 border ${
            activeTab === item ? "border-gray-600" : "border-transparent"
          }`}
          key={key}
          onClick={() => setActiveTab(item)}
        >
          <ArrowsIcon color="#696767" />
          {item}
        </div>
      ))}
    </div>
  );
};

export default MarketBar;
