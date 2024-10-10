import HeroImage from "./hero-image"
import HeroText from "./hero-text"

const HeroBanner = () => {
  return (
    <div className="">
        <div className="auth-gradient bg-cover h-[35rem] w-full">
          <div className="auth-gradient-bg bg-cover h-full">
            <div className="box flex justify-between items-center h-full">
              {/* hero text */}
              <div className="w-[58%] h-full">
                <HeroText/>
              </div>
              {/* hero images */}
              <div className="w-[42%] h-full">
                <HeroImage/>
              </div>
            </div>
          </div>
        </div>
      </div>
  )
}

export default HeroBanner