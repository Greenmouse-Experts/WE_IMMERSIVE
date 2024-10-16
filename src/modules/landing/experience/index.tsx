import { Link } from "react-router-dom";
import Tag from "../../../components/ui/tag";
import apple from "../../../assets/svg/apple.svg";
import play from "../../../assets/svg/google.svg";

const ExperienceMore = () => {
  return (
    <div>
      <div className="section bg-[#010B18] bg-[url('https://res.cloudinary.com/do2kojulq/image/upload/v1728920577/WE%20Immersive/153f82.png_2_iah31r.png')]">
        <div className="box">
          <div className="text-center">
            <div className="flex justify-center">
              <Tag text="Download the App" />
            </div>
            <div className="lg:w-6/12 mx-auto mt-4">
              <p className="unbound text-white fw-500 text-2xl lg:text-[42px]">
                Experience more with the WEImmersive App
              </p>
            </div>
            <div className="w-9/12 lg:w-4/12 mx-auto mt-3">
              <p className="text-[#9A9999] fs-500">
                Download the WEImmersive App Today! Create, sell, learn and do
                more with our app today
              </p>
            </div>
            <div className="mt-6 lg:mt-10 flex justify-center gap-x-5">
              <Link to={""}>
                <img src={play} className="w-[150px] lg:w-[190px]" />
              </Link>
              <Link to={""}>
                <img src={apple} className="w-[150px] lg:w-[190px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceMore;
