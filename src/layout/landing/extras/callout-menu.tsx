import { LiaTimesSolid } from "react-icons/lia";
import { headerRoutes } from "./header-routes";
import { Link } from "react-router-dom";

const CalloutMenu = () => {
  return (
    <div className="p-4">
      <div className="flex justify-between">
        <div className="w-[97px] lg:w-[111px] shrink-0 cursor-pointer">
          <img src="/logo.svg" alt="logo" className="w-full dark:hidden" />
          <img
            src="/logo-white.svg"
            alt="logo"
            className="w-full hidden dark:block"
          />
        </div>
        <LiaTimesSolid />
      </div>
      <div className="mt-12">
        <ul className="grid gap-6">
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
  );
};

export default CalloutMenu;
