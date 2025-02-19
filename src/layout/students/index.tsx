import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import SidebarLayout from "./components/sidebar";
import TopHeader from "../../modules/student/dashboard/top-header";
import HeaderSection from "../../modules/student/dashboard/header-section";
// import Button from "../../components/ui/Button";

const StudentsDashboardLayout = () => {
  const location = useLocation();
  //   const token = sessionStorage.getItem("weim_token");
  // const navigate = useNavigate();
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

  const toggleBar = () => {
    setToggled(!toggled);
  };

  return (
    <>
      <div className="flex bg-[#F6F7FB] w-full dark:bg-[#0D0D0D] dark:text-white">
        <div
          className={`${collapsed ? "lg:w-[70px]" : "lg:w-[270px] z-[9999]"}`}
        >
          <SidebarLayout
            toggled={toggled}
            collapsed={collapsed}
            setToggled={toggleBar}
          />
        </div>
        <div
          className={`${
            collapsed ? "lg:w-[calc(100%_-_70px)]" : "lg:w-[calc(100%_-_270px)]"
          } w-full min-h-screen py-4 lg:py-4`}
        >
          <div className="w-full flex flex-col">
            <div className="px-3 w-full lg:px-7">
              {location.pathname !== "/students" ? (
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

export default StudentsDashboardLayout;
