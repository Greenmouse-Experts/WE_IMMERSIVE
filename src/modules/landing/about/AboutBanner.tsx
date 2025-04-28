import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import globe from "../../../assets/globe.png";

const AboutBanner = () => {
  return (
  <div className="flex items-center justify-center bg-gradient-to-r from-blue-100 via-blue-100 via-40% to-purple-200">
    <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
      {/* Left Content */}
      <div className="text-center lg:text-left pt-[70%] pb-[10%] px-[2%] md:pt-[55%] lg:py-[4%] xl:py-[4%]">
        <h3 className="text-sm font-semibold text-gray-600 uppercase">About We Immersive</h3>
        <h1 className="mt-2 text-[20px] md:text-5xl lg:text-[35px] xl:text-5xl font-extrabold text-gray-900 lg:pr-[35%] xl:pr-[35%]">
          The creative hub built for today’s digital artists, designers, and creators.
        </h1>
        <p className="mt-4 text-gray-600 dark:!text-gray-600 lg:pr-[40%] xl:text-lg xl:pr-[55%]">
          WE.IMMERSIVE leverages cutting-edge technology to empower African
          creators through an equitable marketplace and innovative payment systems.
        </p>
        <button className="unbound mx-auto mt-3 md:mt-8 lg:mt-8 xl:mt-8 lg:mx-0 flex items-center bg-gradient-to-r from-[#6b24fb] to-[#2f91db] px-5 py-2 text-[12px] lg:text-[15px] lg:px-10 lg:py-3 text-[white] rounded-[7px]">
             Join Now
           <span className="ml-1"><MdOutlineKeyboardDoubleArrowRight className="text-[25px]" /></span>
        </button> 
      </div>

      {/* Right Image */}
   
        <img
          src={globe}
          alt="3D Globe"
          className="absolute w-[679px] md:w-[600px] lg:w-[500px] lg:right-0 lg:top-[21%] xl:w-[685px] right-[3%] md:top-[12%] xl:top-[14%] md:right-[10%] xl:right-[8%]"
        />
   
    </div>
  </div>
  );
}

export default AboutBanner;