import { Link } from "react-router-dom";
import container from "../../../assets/svg/text-container.svg";
import apple from "../../../assets/svg/apple.svg";
import play from "../../../assets/svg/google.svg";

const HeroText = () => {
  return (
    <div className="h-full text-white flex items-center">
      <div>
        <div className="unbound  text-[#FFFFFF]">
          <span className="unbound fw-500 text-[42px]">
            Your one stop destination for
          </span>{" "}
          <div className="relative inline-block unbound fw-500 text-[42px] ml-4 lg:ml-0 mr-4">
            <img src={container} className="absolute top-[3px] w-auto scale-x-[1.06]" />
            creative
          </div>{" "}
          <span className="unbound fw-500 text-[42px]">technology</span>
        </div>
        <p className="mt-6 lg:mt-12 unbound lg:w-9/12">
          Explore high quality 3D models, XR tours, E-courses and more from
          independent creators.
        </p>
        <div className="mt-6 lg:mt-12 flex gap-x-5">
          <Link to={""}>
            <img src={play} className="w-[150px] lg:w-[190px]" />
          </Link>
          <Link to={""}>
            <img src={apple} className="w-[150px] lg:w-[190px]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroText;
