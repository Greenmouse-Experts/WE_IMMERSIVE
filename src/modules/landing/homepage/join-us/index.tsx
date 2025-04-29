import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Tag from "../../../../components/ui/tag";
import { useNavigate } from "react-router-dom";

const JoinUs = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="section bg-[url('https://res.cloudinary.com/do2kojulq/image/upload/v1728916133/WE%20Immersive/image_17_1_jsmlh2.png')]">
        <div className="box">
          <div className="lg:flex">
            <div className="lg:w-[45%]">
              <div className="flex ">
                <Tag text="Why Us" />
              </div>
              <div className="mt-6">
                <p className="unbound text-white fw-500 text-2xl lg:text-4xl !leading-[46px]">
                  Why Creators and Consumers of content <br /> pick us{" "}
                </p>
              </div>
              <div className="mt-8">
                <button onClick={() => navigate('/learn')} className="bg-white flex px-5 py-2 items-center gap-x-2 rounded-[12px] unbound fs-500">
                  Join Us
                  <MdKeyboardDoubleArrowRight />
                </button>
              </div>
              <div className="hidden lg:flex pl-12 mt-6">
                <img
                  src="https://res.cloudinary.com/do2kojulq/image/upload/v1728572607/WE%20Immersive/Property_1_Component_5_avshi2.png"
                  alt="banner-icon-2"
                  className="w-7/12"
                />
              </div>
            </div>
            <div className="lg:w-[55%] mt-12 lg:mt-0 grid grid-cols-2 gap-5 lg:gap-10">
              <div className="bg-white dark:bg-[#010B18] h-[150px] lg:h-[260px] relative p-3 lg:p-4 rounded-[20px] overflow-hidden">
                <div>
                  <p className="text-[#696767]">- 01</p>
                  <p className="mt-4">Easy to build with </p>
                </div>
                <img
                  src="https://res.cloudinary.com/do2kojulq/image/upload/v1728916186/WE%20Immersive/Frame_4_z8x2xr.png"
                  alt="build"
                  className="absolute w-[100px] lg:w-auto bottom-0 right-0"
                />
              </div>
              <div className="bg-white dark:bg-[#010B18] h-[150px] lg:h-[260px] relative p-3 lg:p-4 rounded-[20px] overflow-hidden">
                <div>
                  <p className="text-[#696767]">- 02</p>
                  <p className="mt-4">Purchase assets swiftly</p>
                </div>
                <img
                  src="https://res.cloudinary.com/do2kojulq/image/upload/v1728916186/WE%20Immersive/Frame_3_mdz9co.png"
                  alt="build"
                  className="absolute w-[100px] lg:w-auto bottom-0 right-0"
                />
              </div>
              <div className="bg-white dark:bg-[#010B18] h-[150px] lg:h-[260px] relative p-3 lg:p-4 rounded-[20px] overflow-hidden">
                <div>
                  <p className="text-[#696767]">- 03</p>
                  <p className="mt-4">VR gear enabled</p>
                </div>
                <img
                  src="https://res.cloudinary.com/do2kojulq/image/upload/v1728916187/WE%20Immersive/Frame_14_dijgwe.png"
                  alt="build"
                  className="absolute w-[100px] lg:w-auto bottom-0 right-0"
                />
              </div>
              <div className="bg-white dark:bg-[#010B18] h-[150px] lg:h-[260px] relative p-3 lg:p-4 rounded-[20px] overflow-hidden">
                <div>
                  <p className="text-[#696767]">- 04</p>
                  <p className="mt-4">
                    Global accessibility to talent and tutors{" "}
                  </p>
                </div>
                <img
                  src="https://res.cloudinary.com/do2kojulq/image/upload/v1728916186/WE%20Immersive/Frame_11_eeckul.png"
                  alt="build"
                  className="absolute w-[100px] lg:w-auto bottom-0 right-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JoinUs;
