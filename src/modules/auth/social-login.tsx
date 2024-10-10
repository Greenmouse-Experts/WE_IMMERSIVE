const SocialLogin = () => {
  return (
    <div className="mb-3 mt-5">
      <div className="flex relative justify-center">
        <p className="text-[#666464] relative z-10 bg-white w-[150px] text-center">
          Or Join with
        </p>
        <p className="p-[0.5px] w-full absolute left-0 top-3 bg-[#D9D9D9]"></p>
      </div>
      <div className="flex justify-center items-center gap-x-9 mt-4">
        <button className="w-[70px] h-[70px] place-center circle border border-[#C4C4C4]">
          <img
            src="https://res.cloudinary.com/do2kojulq/image/upload/v1728564999/WE%20Immersive/image_71_fmyaox.png"
            alt="apple"
            className="w-[27px] h-[30px]"
          />
        </button>
        <button className="w-[70px] h-[70px] place-center circle border border-[#C4C4C4]">
          <img
            src="https://res.cloudinary.com/do2kojulq/image/upload/v1728564999/WE%20Immersive/image_6_ser1w5.png"
            alt="apple"
            className="w-[27px] h-[30px]"
          />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
