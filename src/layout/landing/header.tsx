import { Link } from "react-router-dom";
import { headerRoutes } from "./extras/header-routes";
import HeaderSearchBox from "./extras/header-search-box";
import Button from "../../components/ui/Button";
import ThemeSwitch from "../../components/ui/theme-switch";

const LandingHeader = () => {
  return (
    <div>
      {/* large screens */}
      <div className="box py-3">
        <div className="flex items-center justify-between">
          <div className="w-[44%] flex items-center gap-x-8">
            <div className="w-[111px] shrink-0">
              <img src="/logo.svg" alt="logo" className="w-full" />
            </div>
            <div className="w-full">
              <ul className="flex justify-between">
                {headerRoutes.map((item) => (
                  <li key={item.route}>
                    <Link to={''}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[44%] flex items-center gap-x-4">
            <div className="w-[300px]">
              <HeaderSearchBox />
            </div>
            <div className="flex items-center gap-x-4 min-w-[220px]">
              <Link to={"/auth/login"} className="fw-600 lg:text-lg">
                Login
              </Link>
              <Button
                title={"Get Started"}
                withArrows
                altClassName="btn-primary px-5 py-3"
              />
            </div>
            <div>
              <ThemeSwitch />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingHeader;
