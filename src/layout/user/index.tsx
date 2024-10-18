import { Outlet, useNavigate } from "react-router-dom";
import { useState } from "react";
import SidebarLayout from "./components/sidebar";
import Button from "../../components/ui/Button";

const UserDashboardLayout = () => {
  //   const token = sessionStorage.getItem("weim_token");
  const navigate = useNavigate();
  //   useEffect(() => {
  //     if (!token) {
  //       navigate("/login");
  //     }
  //   }, []);
  //   if (!token) {
  //     return;
  //   }
  const [toggled, setToggled] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  return (
    <>
      <div className="flex bg-[#F6F7FB] dark:bg-[#0D0D0D] dark:text-white">
        <div className={`${collapsed ? "lg:w-[70px]" : "lg:w-[270px]"}`}>
          <SidebarLayout
            toggled={toggled}
            collapsed={collapsed}
            setToggled={setToggled}
          />
        </div>
        <div
          className={`${
            collapsed ? "lg:w-[calc(100%_-_70px)]" : "lg:w-[calc(100%_-_270px)]"
          } w-full min-h-screen py-4 lg:py-9`}
        >
          <div className="">
            <div className="h-[33px]  z-[50] relative">
              <div
                className={`${
                  collapsed
                    ? "lg:w-[calc(100%_-_70px)]"
                    : "lg:w-[calc(100%_-_270px)]"
                } fixed top-0 w-full pl-9 pr-5 py-4 lg:pt-[20px] lg:py-[18px] flex items-center justify-between`}
              >
                <div className="flex gap-x-4 items-center">
                    <Button title="Learn" withArrows altClassName="py-[10px] px-8 btn-primary" onClick={() => navigate('/store')}/>
                    <Button title="Buy" withArrows altClassName="py-[10px] px-8 bg-white rounded-lg" onClick={() => setCollapsed(!collapsed)}/>
                </div>
                {/* <div className="flex gap-x-2 items-center">
                  <PiSidebarDuotone
                    className="text-xl"
                    onClick={() => setCollapsed(!collapsed)}
                  />
                  <p className="fw-600 lg:text-lg">Welcome back</p>
                </div>
                <div className="flex gap-x-2 lg:gap-x-3">
                  <ThemeSwitch />
                  <BsBell
                    className="text-xl cursor-pointer"
                    onClick={() => navigate("/notifications")}
                  />
                </div> */}
              </div>
            </div>
            <div className="px-3 lg:px-7 pt-4">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboardLayout;
