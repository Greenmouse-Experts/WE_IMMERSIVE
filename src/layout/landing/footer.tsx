import ExperienceMore from "../../modules/landing/homepage/experience"
import NewFooter from "./extras/new-footer"

const LandingFooter = () => {
  return (
   <div>
    <ExperienceMore/>
     <div className="bg-[#010B18]">
      <div className="box">
      <NewFooter/>
      </div>
      <div className="w-full bg-black border-t border-dashed border-spacing-[20px] border-[#646363]">
        <div className="box">
          <div className="py-12">
            <div className="lg:w-11/12 mx-auto lg:flex items-center gap-x-8">
              <img
                src={"/logo-white.svg"}
                alt="logo"
                className="w-36 shrink-0"
              />
              <p className="fs-500 mt-6 lg:mt-0 w-full text-[#9A9999]">
                WEimmersive is a hub for VR, AR, and MR experiences, offering a
                diverse range of content, from educational materials and virtual
                tours to the trading of digital assets such as 3D models,
                digital sounds, and XR-enabled training courses. We are poised
                to significantly impact global education, reduce inequalities,
                and enhance access to quality experiences for learning, working
                and everyday life.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-3 pb-6 text-center bg-black relative">
        <p className="text-[#FFFFFF0D] dark:!text-black text-center absolute hidden lg:block top-0 left-0 w-full fw-600 text-5xl">
          We dream. We create. We Inspire
        </p>
        <p className="text-[#9A9999] text-center relative">
          © 2025, WEimmersive. All rights reserved
        </p>
      </div>
    </div>
   </div>
  );
}

export default LandingFooter