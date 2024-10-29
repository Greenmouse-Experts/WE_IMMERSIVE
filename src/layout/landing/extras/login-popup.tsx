import { FC } from "react";
import { LiaTimesSolid } from "react-icons/lia";
import { MdEmail } from "react-icons/md";
import { useNavigate } from "react-router-dom";

interface Props {
  close: () => void;
  type: string;
}
const LoginPopup: FC<Props> = ({ close, type }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    if(type === 'login'){
      navigate("/auth/login")
    }else{
      navigate("/auth/register")
    }
  }
  return (
    <div>
      {/* header */}
      <div className="relative flex justify-center">
        <div className="w-[97px] lg:w-[121px] shrink-0 cursor-pointer">
          <img src="/logo.svg" alt="logo" className="w-full dark:hidden" />
          <img
            src="/logo-white.svg"
            alt="logo"
            className="w-full hidden dark:block"
          />
        </div>
        <div
          onClick={close}
          className="bg-[#74748014] w-10 h-10 circle cursor-pointer  shadow place-center absolute right-0 top-0"
        >
          <LiaTimesSolid className="text-xl text-[#00000099] " />
        </div>
      </div>
      {/* body */}
      <div className="grid gap-4 lg:gap-6 mt-9 mb-6 px-3">
        <div
          onClick={handleNavigate}
          className="border border-[#C4C4C4] py-[15px] cursor-pointer flex justify-center auth-shadow rounded-[10px] hover:shadow-md hover:scale-105 duration-150"
        >
          <div className="text-[#06052A] flex gap-x-4 items-center">
            <MdEmail className="text-2xl text-primary" />
            <p className="unbound fs-500">Continue with Email</p>
          </div>
        </div>
        <div className="border border-[#C4C4C4] py-[15px] cursor-pointer flex justify-center auth-shadow rounded-[10px] hover:shadow-md hover:scale-105 duration-150">
          <div className="text-[#06052A] flex gap-x-4 items-center">
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1728564999/WE%20Immersive/image_71_fmyaox.png"
              alt="apple"
              className="w-[23px] h-[25px]"
            />
            <p className="unbound fs-500">Continue with Apple</p>
          </div>
        </div>
        <div className="border border-[#C4C4C4] py-[15px] cursor-pointer flex justify-center auth-shadow rounded-[10px] hover:shadow-md hover:scale-105 duration-150">
          <div className="text-[#06052A] flex gap-x-4 items-center">
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1728564999/WE%20Immersive/image_6_ser1w5.png"
              alt="google"
              className="w-[28px] h-[27px] relative top-[1px]"
            />
            <p className="unbound fs-500">Continue with Google</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPopup;
