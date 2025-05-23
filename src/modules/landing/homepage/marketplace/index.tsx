import { useState } from "react";
import MarketBody from "./market-body";
import MarketHeader from "./market-header";
import { ICategoryChildren } from "../../../../types/category.types";

const MarketPlace = () => {
  const [activeTab, setActiveTab] = useState<ICategoryChildren | any>(null);

  
  return (
    <div className="mt-6 lg:mt-16">
      <div className="relative py-12 pb-20 min-h-[500px]">
        <div className="w-full">
          <div>
            <MarketHeader activeTab={activeTab} setActiveTab={setActiveTab}/>
          </div>
          {/* <div className="mt-6">{/*<MarketSearch/></div>*/}
          <div>
            <MarketBody  activeTab={activeTab}/>
          </div>
        </div>
        {/* side design */}
        <div className="absolute md:-top-10 top-10 right-0">
          <img
            src="https://res.cloudinary.com/do2kojulq/image/upload/v1728902287/WE%20Immersive/Frame_1_2_1_iccjps.png"
            alt="background design"
            className="md:w-[200px] w-[100px] animate-[bounce_5s_ease-in-out_infinite]"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketPlace;
