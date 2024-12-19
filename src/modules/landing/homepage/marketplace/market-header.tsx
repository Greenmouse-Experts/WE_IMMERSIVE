import MarketBar from "./components/market-bar";

const MarketHeader = () => {
  return (
    <div className="dark:bg-white bg-[#000000] md:px-20 text-white dark:text-black">
      <div className="md:py-10 md:px-0 px-5 pt-3">
        <span className="fw-500 unbound relative z-10 text-2xl lg:text-4xl text-white dark:text-black !leading-[48px]">
          Welcome to our XR <br /> Marketplace
        </span>
      </div>
      <MarketBar />
    </div>
  );
};

export default MarketHeader;
