import { NavLink } from "react-router-dom";
const PageNotFound = () => {
  return (
    <div className=" h-screen w-full justify-center items-center bg-gray-100 flex">
      <div className="bg-white flex flex-col items-center justify-center  p-[4.8rem] rounded-xl">
        <h3>The page you are looking for could not be found 😓</h3>
        <p>Please try again later</p>
        <NavLink
          to="/"
          className=" text-white rounded-3xl btn-primary px-7 py-3 text-nowrap lg:text-sm   "
        >
          Go back
        </NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;
