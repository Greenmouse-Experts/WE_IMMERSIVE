import MarketSearch from '../../homepage/marketplace/components/market-search';

const LearnBanner = () => {
  return (
    <div className="h-[450px] learn-banner bg-cover bg-bottom">
      <div className="box">
        <div className="pt-16 text-center lg:pt-28">
          <p className="lg:text-4xl fw-500 unbound text-white">
            Learn without boundaries
          </p>
          <p className="w-10/12 mx-auto mt-6 text-white">
            Explore courses for you, created by tutors & institutions worldwide.
            Access ready-made courses to sharpen your knowledge and enhance your
            skill. Learn today with WEimmersive.
          </p>
        </div>
        <div className="mt-7 lg:mt-12 w-full lg:w-11/12 mx-auto">
          <MarketSearch />
        </div>
      </div>
    </div>
  );
}

export default LearnBanner