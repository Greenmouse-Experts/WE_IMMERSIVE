import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo.svg";
import { FC } from "react";
import { Routes, RouteType } from "./routes";
import { PiGear } from "react-icons/pi";
import { LuArrowRightCircle } from "react-icons/lu";
import { MdOutlineWbSunny } from "react-icons/md";
import { BsMoon } from "react-icons/bs";
interface Props {
  toggled: boolean;
  collapsed: boolean;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
}
const SidebarLayout: FC<Props> = ({ toggled, setToggled, collapsed }) => {
  const path = useLocation();

  return (
    <div className="left-3 top-3  fixed overflow-y-hidden">
      <Sidebar
        customBreakPoint="1024px"
        className="h-[calc(100vh_-_30px)] overflow-y-hidden bg-white rounded-2xl !border-none scroll-pro p-3"
        collapsed={collapsed}
        width="256px"
        backgroundColor=""
        toggled={toggled}
        onBackdropClick={() => setToggled(false)}
        breakPoint="always"
        collapsedWidth="70px"
      >
        <div className="py-1 pt-2 mb-4 border-b border-[#B2B7B7] items-center">
          <Link to="/" className="pl-2 block">
            <img src={logo} alt="logo" className="w-[90px]" />
          </Link>
        </div>
        <Menu
          className="overflow-y-auto relative scroll-pro"
          transitionDuration={600}
        >
          {Routes.map((item) => {
            return (
              <div key={item.name} className="">
                {!!item.submenu.length ? (
                  <SubMenu
                    className="[&>a]:dark:!bg-[#131313] dark:text-white"
                    label={item.name}
                    icon={item.icon}
                    key={item.name}
                  >
                    {item.submenu.map((item: RouteType, i) => (
                      <MenuItem
                        className="[&>a]:dark:!bg-[#131313] dark:!text-white"
                        component={<Link to={item.route} />}
                        active={path.pathname === item.route && true}
                        key={i}
                      >
                        <p className="fs-400">{item.name}</p>
                      </MenuItem>
                    ))}
                  </SubMenu>
                ) : (
                  <MenuItem
                    className="[&>a]:dark:!bg-[#131313] dark:!text-white"
                    component={<Link to={item.route} />}
                    icon={item.icon}
                    active={path.pathname === item.route && true}
                    key={item.name}
                  >
                    <div className="flex pr-4 justify-between items-center">
                      <p className="fs-400">{item.name}</p>
                    </div>
                  </MenuItem>
                )}
              </div>
            );
          })}
        </Menu>
        <div className="border-t mt-4 border-[#B2B7B7]">
          <ul className="grid gap-2 mt-5">
            <li className="flex gap-x-3 p-2 items-center">
              <PiGear />
              <span>Settings</span>
            </li>
            <li className="flex items-center p-2 gap-x-3 text-red-500">
              <LuArrowRightCircle />
              <span>Log out</span>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <div className="m-2 mt-1 h-[180px] rounded-2xl bg-[#D9D9D9]"></div>
          <div className="mt-2 grid grid-cols-2 gap-2 p-2 bg-[#E9EBFB] rounded-lg">
            <div className="flex justify-center bg-gradient py-2 rounded-lg text-white">
              <MdOutlineWbSunny/>
            </div>
            <div className="flex justify-center py-2">
              <BsMoon className="text-primary"/>
            </div>
          </div>
        </div>
      </Sidebar>
    </div>
  );
};

export default SidebarLayout;