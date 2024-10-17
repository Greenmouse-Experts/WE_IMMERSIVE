import { Link, useNavigate } from "react-router-dom";
import { headerRoutes } from "./extras/header-routes";
import HeaderSearchBox from "./extras/header-search-box";
import Button from "../../components/ui/Button";
import ThemeSwitch from "../../components/ui/theme-switch";
import { useEffect, useState } from "react";
import { BsMenuButtonWideFill } from "react-icons/bs";

const LandingHeader = () => {
  const navigate = useNavigate()
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = window.scrollY;
      const triggerHeight = 180;
      setIsHeaderFixed(scrollHeight > triggerHeight);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <div
        className={`${
          isHeaderFixed ? "fixed drop-ani" : ""
        } left-0 top-0 w-full dark:bg-[#010B18] bg-white shadow-lg z-[2500]`}
      >
        {/* large screens */}
        <div className="box py-3">
          <div className="flex items-center justify-between">
            <div className="w-[35%] flex items-center gap-x-8">
              <div className="w-[97px] lg:w-[111px] shrink-0 cursor-pointer" onClick={() => navigate('/')}>
                <img
                  src="/logo.svg"
                  alt="logo"
                  className="w-full dark:hidden"
                />
                <img
                  src="/logo-white.svg"
                  alt="logo"
                  className="w-full hidden dark:block"
                />
              </div>
              <div className="hidden lg:block w-full">
                <ul className="flex justify-between">
                  {headerRoutes.map((item) => (
                    <li key={item.route}>
                      <Link to={item.route} className="dark:text-white">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="flex lg:w-[46%] items-center justify-end gap-x-4 lg:gap-x-7">
              <div className="hidden lg:flex w-[300px]">
                <HeaderSearchBox />
              </div>
              <div className="hidden lg:flex items-center gap-x-4 lg:gap-x-7 min-w-[220px]">
                <Link
                  to={"/auth/login"}
                  className="fw-600 lg:text-lg dark:text-white"
                >
                  Login
                </Link>
                <Button
                  title={"Get Started"}
                  withArrows
                  altClassName="btn-primary whitespace-nowrap px-5 py-3"
                />
              </div>
              <div>
                <ThemeSwitch />
              </div>
              <div className="pl-3 lg:pl-0 lg:hidden">
                <BsMenuButtonWideFill className="dark:text-white text-3xl" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
