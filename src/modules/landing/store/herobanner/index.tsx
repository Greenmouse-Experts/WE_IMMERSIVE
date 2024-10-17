import MarketSearch from "../../homepage/marketplace/components/market-search";
import CategoryScroll from "./category-scroll";

const StoreBanner = () => {
  return (
    <div className="h-[450px] store-banner bg-cover">
      <div className="box">
        <div className="text-center pt-16 lg:pt-24">
            <p className="lg:text-4xl fw-500 unbound text-white">Welcome to our XR Marketplace</p>
            <p className="w-10/12 mx-auto mt-3 text-white">Discover digital and physical products for users, artists and developers, crafted by creators worldwide. Access ready-made solutions to bring your unique ideas to life. With WEimmersive, you can learn, create, sell, and grow.</p>
        </div>
        <div className="mt-7 lg:mt-12 w-10/12 mx-auto">
            <MarketSearch/>
        </div>
        <div className="mt-6 lg:mt-10">
            <CategoryScroll/>
        </div>
      </div>
    </div>
  );
};

export default StoreBanner;
