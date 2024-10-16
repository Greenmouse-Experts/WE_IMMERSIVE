import Tag from "../../../../components/ui/tag";

const HeaderSection = () => {
  return (
    <div className="text-center">
      <div className="flex justify-center">
        <Tag text="Tours & Spaces" />
      </div>
      <div className="relative flex">
        {/* left side */}
        <div className="hidden lg:block relative lg:w-3/12">
          <div className="absolute right-0 top-9">
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1728997588/WE%20Immersive/Vector_1_e60zzk.png"
              alt="arrow"
              className="w-24 lg:w-36"
            />
          </div>
          <div className="absolute right-32 top-28">
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1728997588/WE%20Immersive/Group_48097596_doapdc.png"
              alt="arrow"
              className="w-24 lg:w-36 animate-bounce"
            />
          </div>
        </div>
        <div className="w-10/12 lg:w-6/12 mx-auto mt-4">
          <p className="unbound fw-500 text-2xl lg:text-[36px]">
            Step into a different world, anytime, anywhere
          </p>
        </div>
        {/* right side */}
        <div className="relative hidden lg:block lg:w-3/12">
          <div className="absolute left-0 -top-6">
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1728997588/WE%20Immersive/Vector_2_ncyd3a.png"
              alt="arrow"
              className="w-24 lg:w-36"
            />
          </div>
          <div className="absolute left-32 top-6">
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1728997588/WE%20Immersive/Group_48097595_fzv4e2.png"
              alt="user"
              className="w-24 lg:w-36 animate-bounce"
            />
          </div>
        </div>
      </div>
      <div className="w-9/12 lg:w-4/12 mx-auto mt-3">
        <p className="text-[#9A9999] fs-500">
          Explore, engage, and experience our virtual tours and spaces by
          creators on here
        </p>
      </div>
    </div>
  );
};

export default HeaderSection;
