import { MdArrowOutward } from "react-icons/md";
import { Link, useNavigate } from "react-router-dom";
import apple from "../../../../assets/svg/apple-icon.svg";
import google from "../../../../assets/svg/google-icon.svg";

const RobustGrid = () => {
  const navigate = useNavigate();


  return (
    <div className="mt-16 lg:mt-32">
      <div className="grid lg:grid-cols-3 gap-6">
        <div onClick={() => navigate('/store')} className=" cursor-pointer lg:row-span-2 h-[430px] lg:h-auto text-white p-5 bg-[url('https://res.cloudinary.com/do2kojulq/image/upload/v1728575678/WE%20Immersive/Group_1000005668_fwfmnp.png')] bg-fit">
          <div className="flex justify-between items-center">
            <p className="roboto text-xl lg:text-3xl fw-400">Store</p>
            <Link to={""}>
              <MdArrowOutward className="text-xl lg:text-3xl" />
            </Link>
          </div>
          <div className="mt-4">
            <p className="text-[#BDBBBB] roboto fw-300 lg:text-[15px]">
              All assets and materials ranging from physical to digital, we got
              them all!
            </p>
          </div>
        </div>
        <div onClick={() => navigate('/store')}  className=" cursor-pointer h-[330px] p-5 text-white bg-[url('https://res.cloudinary.com/do2kojulq/image/upload/v1728575679/WE%20Immersive/Group_1000005669_rocejk.png')] bg-fit">
          <div className="flex justify-between items-center">
            <p className="roboto text-xl lg:text-3xl fw-400">Download App</p>
            <Link to={""}>
              <MdArrowOutward className="text-xl lg:text-3xl" />
            </Link>
          </div>
          <div className="mt-3">
            <p className=" roboto fw-300 lg:text-[15px]">
              Try our virtual spaces and take the touring experience to the next
              level.
            </p>
          </div>
          <div className="flex items-center gap-x-4 lg:gap-x-8 mt-4">
            <Link to={""}>
              <img src={apple} alt="apple-icon-image" className="w-7" />
            </Link>
            <Link to={""} className="relative top-1">
              <img src={google} alt="google-icon-image" className="w-7" />
            </Link>
          </div>
        </div>
        <div onClick={() => navigate('/explore')} className=" cursor-pointer h-[330px] pl-8 pt-4 p-5 text-white bg-[url('https://res.cloudinary.com/do2kojulq/image/upload/v1728901165/WE%20Immersive/Group_1000005670_2_1_g8vrmx.png')] bg-fit">
          <div className="flex justify-between items-center">
            <p className="roboto text-xl lg:text-3xl fw-400">
              Interactive Tours
            </p>
            <Link to={""}>
              <MdArrowOutward className="text-xl lg:text-3xl" />
            </Link>
          </div>
          <div className="mt-3">
            <p className="roboto fw-300 lg:text-[15px]">
              Try our virtual spaces and take the touring experience to the next
              level
            </p>
          </div>
        </div>
        <div onClick={() => navigate('/learn')} className="cursor-pointer lg:col-span-2 p-5 rounded-[20px] lg:rounded-none text-white h-[330px] bg-[url('https://res.cloudinary.com/do2kojulq/image/upload/v1728575653/WE%20Immersive/Group_1000005674_1_s1pify.png')] bg-cover bg-center lg:bg-fit">
          <div className="flex justify-between items-center">
            <p className="roboto text-xl lg:text-3xl fw-400">Create & Sell Content</p>
            <Link to={""}>
              <MdArrowOutward className="text-xl lg:text-3xl" />
            </Link>
          </div>
          <div className="mt-4 lg:w-5/12">
            <p className=" roboto fw-300 lg:text-[15px]">
            Are you a Content creator ? A Tutor ? A Developer ? and more ? We are here with a platform you can create and sell on.
            </p>
          </div>
          <div className="lg:w-6/12 mt-7 flex justify-center gap-x-6 lg:gap-x-24">
            <img src="https://res.cloudinary.com/do2kojulq/image/upload/v1728901706/WE%20Immersive/Group_48097620_1_ivgrqh.png" alt="display-icon" className="w-12 h-12 relative top-12" />
            <img src="https://res.cloudinary.com/do2kojulq/image/upload/v1728901706/WE%20Immersive/Group_48097621_1_jtqwn9.png" alt="display-icon" className="w-10 h-10" />
            <img src="https://res.cloudinary.com/do2kojulq/image/upload/v1728901706/WE%20Immersive/Group_48097623_1_nwkbp3.png" alt="display-icon" className="w-6 h-6 relative top-6" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RobustGrid;
