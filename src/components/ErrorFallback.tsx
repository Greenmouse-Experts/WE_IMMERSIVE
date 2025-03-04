import { NavLink } from "react-router-dom";
const ErrorFallback = () => {
  return (
    <div className=" h-screen w-full justify-center items-center bg-gray-100 flex">
      <div className="bg-white flex flex-col items-center justify-center  p-[4.8rem] rounded-xl">
        <h3>Something went wrong 🧐</h3>
        <p>Please try again later</p>
        <NavLink
          to="/"
          className=" text-white rounded-3xl base-btn bg-bluePrimary text-nowrap lg:text-sm   "
        >
          Try again
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorFallback;
