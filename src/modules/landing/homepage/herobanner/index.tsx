import HeroImage from "./hero-image";
import HeroText from "./hero-text";

const HeroBanner = () => {
  return (
    <div className="">
      <div className="auth-gradient bg-cover lg:h-[590px] w-full">
        <div className="auth-gradient-bg bg-cover w-full h-full py-12 lg:py-0">
          <div className="box lg:flex justify-between flex-row-reverse items-center h-full">
            {/* hero images */}
            <div className="lg:w-[42%] h-full">
              <HeroImage />
            </div>
            {/* hero text */}
            <div className="lg:w-[58%] h-full">
              <HeroText />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
