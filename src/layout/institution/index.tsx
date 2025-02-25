import { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarLayout from "./components/sidebar";
import TopHeader from "../../modules/institution/dashboard/top-header";
import HeaderSection from "../../modules/institution/dashboard/header-section";


const InstitutionDashboardLayout = () => {

  const [toggled, setToggled] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState(false);


  const toggleBar = () => {
    setToggled(!toggled);
  };

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
          } w-full min-h-screen py-4 lg:py-4`}
        >
          <div className="">
            <div className="px-3 lg:px-7">
            {location.pathname !== "/institution" ? (
                <TopHeader openBar={toggleBar} />
              ) : (
                <HeaderSection openBar={toggleBar} /> 
              )}
              <Outlet />
              <p onClick={() => setCollapsed(true)}></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InstitutionDashboardLayout;
