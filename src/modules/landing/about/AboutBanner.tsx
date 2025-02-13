import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import globe from "../../../assets/globe.png";

const AboutBanner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-purple-200">
      <div className="flex flex-col-reverse md:flex-col-reverse lg:flex-row align-middle items-center py-11 md:py-0">
        <div className="md:px-[3%] lg:pl-[9%] py-[3%] px-[5%] lg:w-[85%]">
            <h5 className="Mulish text-[14px] text-center lg:text-left mb-3 font-[700]">ABOUT WE IMMERSIVE</h5>
            <h1 className="unbound md:text-[30px] text-center lg:text-left font-[700] mb-4 leading-[1.6] lg:pr-[20%]">The creative hub built for today’s digital artists, designers, and creators.</h1>
            <h5 className="Mulish text-[14px] lg:text-[16px] lg:pr-5   text-[#696767] text-center lg:text-left lg:w-[70%] mb-5">WE.IMMERSIVE leverages cutting-edge technology to empower African creators through an equitable marketplace and innovative payment systems.</h5>
            <div className="">
              <button className="unbound m-auto lg:m-0   flex items-center bg-gradient-to-r from-[#6b24fb] to-[#2f91db] px-5 py-2 text-[12px] lg:text-[15px] lg:px-10 lg:py-3 text-[white] bg-[blue] rounded-[7px]">
                Join Now
                <span className="ml-1"><MdOutlineKeyboardDoubleArrowRight className="text-[25px]" /></span>
              </button> 
            </div>
        </div>
        <div className="hidden md:hidden lg:block">
            <img src={globe} width="500%"  alt="globe"/>
        </div>
      </div>
    </div>
  );
}

export default AboutBanner;