import { ICategoryChildren } from "../../../../types/category.types";
import MarketBar from "./components/market-bar";

interface MarketHeaderProp{
  activeTab: ICategoryChildren;
  setActiveTab: (tab: ICategoryChildren) => void;  
}
const MarketHeader = ({activeTab, setActiveTab}:MarketHeaderProp) => {
  return (
    <div className="dark:bg-darkMode md:px-20 text-white dark:text-black">
      <div className="md:py-10 md:px-0 px-5 pt-3">
        <span className="fw-500 unbound relative z-10 text-2xl lg:text-4xl text-black dark:text-white !leading-[48px]">
          Welcome to our XR <br /> Marketplace
        </span>
      </div>
      <MarketBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default MarketHeader;
