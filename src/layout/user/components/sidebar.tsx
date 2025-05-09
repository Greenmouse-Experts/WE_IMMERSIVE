import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { Link, useLocation } from "react-router-dom";
import logo from "/logo.svg";
import logo2 from "/logo-white.svg";
import { FC, useState } from "react";
import { Routes } from "./routes";
import { PiGear } from "react-icons/pi";
import { LuArrowRight, LuMenu } from "react-icons/lu"; // Added LuMenu for Hamburger
import ThemeSwitch from "../../../components/ui/theme-switch";
import { useLogOut } from "../../../hooks/useLogOut";
import { Dialog } from "@material-tailwind/react";
import Publish from "../../../components/reusables/Publish";

interface Props {
  toggled: boolean;
  collapsed: boolean;
  setToggled: React.Dispatch<React.SetStateAction<boolean>>;
}

const useHandleLogOut = () => {
  const logOut = useLogOut();
  return () => {
    logOut();
  };
};

const SidebarLayout: FC<Props> = ({ toggled, setToggled, collapsed }) => {
  const path = useLocation();
  const handleLogOut = useHandleLogOut();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);


  return (
    <>
      {/* Hamburger Button (Only visible on mobile) */}
      <button
        className="fixed top-8 right-4 z-50 p-2 rounded-md bg-gray-200 dark:bg-[#15171E] lg:hidden"
        onClick={() => setToggled(!toggled)}
      >
        <LuMenu className="text-xl text-black dark:text-white" />
      </button>

      {/* Sidebar */}
      <div className="left-3 top-3 fixed overflow-y-hidden bg-white z-50">
        <Sidebar
          customBreakPoint="1024px"
          className="h-[calc(100vh_-_30px)] overflow-y-hidden bg-white dark:bg-[#15171E] rounded-2xl !border-none scroll-pro p-3"
          collapsed={collapsed}
          width="256px"
          backgroundColor=""
          
          toggled={toggled}
          onBackdropClick={() => setToggled(false)} // Close sidebar when clicking outside
          breakPoint="always"
          collapsedWidth="70px"
        >
          <div className="py-1 pt-2 mb-4 border-b border-[#B2B7B7] items-center">
            <Link to="/" className="pl-2 block">
              <img src={logo} alt="logo" className="w-[100px] dark:hidden" />
              <img
                src={logo2}
                alt="logo"
                className="w-[90px] hidden dark:block"
              />
            </Link>
          </div>

          <Menu
            className="overflow-y-auto relative scroll-pro"
            transitionDuration={600}
          >
            {Routes.map((item) => (
              <div key={item.name}>
                {!!item.submenu.length ? (
                  <SubMenu
                    className="[&>a]:dark:!bg-[#15171E] dark:text-white"
                    label={item.name}
                    icon={item.icon}
                  >
                    {item.submenu.map((item, i) => (
                      <MenuItem
                        className={`[&>a]:dark:!bg-[#15171E] dark:!text-white ${
                          path.pathname === item.route ? "active-class" : ""
                        }`}
                        component={<Link to={item.route} />}
                        key={i}
                      >
                        <p className="fs-400">{item.name}</p>
                      </MenuItem>
                    ))}
                  </SubMenu>
                ) : (
                  <MenuItem
                    className={`[&>a]:dark:!bg-[#15171E] dark:!text-white ${
                      path.pathname === item.route ? "active-class" : ""
                    }`}
                    component={<Link to={item.route} />}
                    icon={item.icon}
                  >
                    <div className="flex pr-4 justify-between items-center">
                      <p className="fs-400">{item.name}</p>
                    </div>
                  </MenuItem>
                )}
              </div>
            ))}
          </Menu>

          <div className="border-t mt-4 border-[#B2B7B7]">
            <ul className="grid gap-2 mt-5">
              <li className="flex gap-x-3 p-2 items-center">
                <Link to="/user/settings" className="flex items-center gap-x-3">
                  <PiGear />
                  <span>Settings</span>
                </Link>
              </li>
              <li
                className="flex items-center p-2 gap-x-3 text-red-500 cursor-pointer"
                onClick={handleOpen}
              >
                <LuArrowRight />
                <span>Log out</span>
              </li>
            </ul>
          </div>

          <div className="mt-5">
            <ThemeSwitch sidebar />
          </div>
        </Sidebar>
        <Dialog className="" open={open} handler={handleOpen} size="md">
          <div className="p-6 bg-white dark:bg-darkMode rounded-xl overflow-hidden">
            <Publish
              handleCancel={handleOpen}
              title={`Are you sure you want to logout?`}
              handleProceed={handleLogOut}
              // isLoading={isDeleting}
            />
          </div>
        </Dialog>
      </div>
    </>
  );
};

export default SidebarLayout;
