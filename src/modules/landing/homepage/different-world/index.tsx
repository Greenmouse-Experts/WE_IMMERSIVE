import HeaderSection from "./components/header-section";
import SwiperSection from "./components/swiper-section";

const DifferentWorld = () => {
  return (
    <div>
      <div className="py-8">
        <div className="box relative h-[820px] py-6">
          {/* content */}
          <div className="relative z-10">
            <div>
              <HeaderSection />
            </div>
            <div>
              <SwiperSection />
            </div>
          </div>
          {/* center background */}
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="w-[80%] lg:w-[55%] mx-auto h-full bg-[#F7F8FD] dark:bg-[#010B18] rounded-[30px]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DifferentWorld;
