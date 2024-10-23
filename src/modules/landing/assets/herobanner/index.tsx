import MarketSearch from "../../homepage/marketplace/components/market-search";

const AssetBanner = () => {
  return (
    <div className="h-[400px] asset-banner bg-cover bg-center">
      <div className="box">
        <div className="pt-16 lg:pt-24">
          <p className="lg:text-4xl fw-500 unbound text-white">All Assets</p>
          <p className="w-5/12 mt-3 text-white">
            Discover digital and physical assets for users, artists and
            developers, crafted by creators worldwide
          </p>
        </div>
        <div className="mt-7 lg:mt-12 w-full">
          <MarketSearch />
        </div>
      </div>
    </div>
  );
};

export default AssetBanner;
