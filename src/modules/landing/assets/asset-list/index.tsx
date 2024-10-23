import { useState } from "react";
import ArrowsIcon from "../../../../assets/svg-components/arrows";
import AssetList from "../../homepage/marketplace/components/asset-list";
import { trendsAsset2 } from "../../../../components/hard-data/dummy";

const AllAssetList = () => {
  const [activeTab, setActiveTab] = useState("VR Gear");
  const barItems = [
    "VR Gear",
    "Digital Sounds",
    "3D Animals",
    "2D Brushes",
    "Sea Animals",
    "3D Characters",
    "Oculus",
    "Jungle Digs",
    "3D Render",
    "Yelin Trays",
    "Sea Animals",
  ];
  return (
    <div className="section">
      <div className="box">
        <div className="mt-7 flex gap-4 flex-wrap justify-center">
          {barItems.map((item, key) => (
            <div
              className={`bg-[#15171E] cursor-pointer w-fit rounded-[8px] flex items-center whitespace-nowrap gap-x-4 px-4 lg:px-6 text-[#AEACAC] py-2 border ${
                activeTab === item ? "border-gray-600" : "border-transparent"
              }`}
              key={key}
              onClick={() => setActiveTab(item)}
            >
              <ArrowsIcon color="#AEACAC" />
              {item}
            </div>
          ))}
          <div className="bg-[#15171E] cursor-pointer rounded-[8px] flex items-center whitespace-nowrap lg:px-6 text-[#AEACAC] py-2">
            Learn More
          </div>
        </div>
        <div className="mt-12 lg:mt-16">
          <AssetList name="All Assets 🪩" addFilter data={trendsAsset2} />
        </div>
      </div>
    </div>
  );
};

export default AllAssetList;
