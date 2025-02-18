import { useState } from "react";
import { Outlet } from "react-router-dom";
import SidebarLayout from "./components/sidebar";
// import Button from "../../components/ui/Button";
import { FaBars } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";


const InstitutionDashboardLayout = () => {

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
  const [toggled, setToggled] = useState<boolean>(false);
  const [collapsed, setCollapsed] = useState(false);

  const handleToggleMenu = () => {
    setToggled(!toggled)
  }

  return (
    <>
      <div className="flex bg-[#F6F7FB] dark:bg-[#0D0D0D] dark:text-white">
        <div className="absolute right-2 top-7 md:left-[37%] md:top-5 md:bg-[white] md:flex items-center justify-center md:w-[40px] rounded-lg md:h-[40px] lg:hidden" onClick={handleToggleMenu}>
           <FaBars className={`size-[20px] ${toggled && "hidden"}`} />
           <IoMdClose className={`size-[20px] ${!toggled && "hidden"}`}/>
        </div>
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
