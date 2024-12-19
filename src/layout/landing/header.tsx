import { Link, useNavigate } from "react-router-dom";
import { headerRoutes } from "./extras/header-routes";
import HeaderSearchBox from "./extras/header-search-box";
import Button from "../../components/ui/Button";
import ThemeSwitch from "../../components/ui/theme-switch";
import { useEffect, useState } from "react";
import { BsMenuButtonWideFill } from "react-icons/bs";
import { Drawer } from "@material-tailwind/react";
import CalloutMenu from "./extras/callout-menu";
import useDialog from "../../hooks/useDialog";
import LoginPopup from "./extras/login-popup";
import { useSelector } from "react-redux";

const LandingHeader = () => {
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [open, setOpen] = useState<boolean>(false);
  const [selected, setSelected] = useState<string>("");
  const { Dialog, setShowDialog } = useDialog();
  const user = useSelector((state: any) => state.userData.data);
  const navigate = useNavigate();

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

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

  const openAuth = (type: string) => {
    setSelected(type);
    setShowDialog(true);
  };

  const openDashboard = (accountType: any) => {
    if (accountType === "user") {
      navigate("/user");
    } else if (accountType === "creator") {
      navigate("/creator");
    } else if (accountType === "student") {
      navigate("/students");
    } else if (accountType === "institution") {
      navigate("/institution");
    }
  };

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
              <div
                className="w-[97px] lg:w-[111px] shrink-0 cursor-pointer"
                onClick={() => navigate("/")}
              >
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
                {!user ? (
                  <>
                    <Button
                      title={"Login"}
                      altClassName="w-600 lg:text-lg dark:text-white"
                      onClick={() => openAuth("login")}
                    />
                    <Button
                      title={"Get Started"}
                      onClick={() => openAuth("register")}
                      withArrows
                      altClassName="btn-primary whitespace-nowrap px-5 py-3"
                    />
                  </>
                ) : (
                  <Button
                    title={"Dashboard"}
                    onClick={() => openDashboard(user.accountType)}
                    withArrows
                    altClassName="btn-primary whitespace-nowrap px-5 py-3"
                  />
                )}
              </div>
              <div>
                <ThemeSwitch />
              </div>
              <div className="pl-3 lg:pl-0 lg:hidden">
                <BsMenuButtonWideFill
                  className="dark:text-white text-3xl"
                  onClick={openDrawer}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Drawer
        open={open}
        onClose={closeDrawer}
        className="dark:bg-[#131313] p-4"
      >
        <CalloutMenu />
      </Drawer>
      <Dialog title="" size="md">
        <LoginPopup close={() => setShowDialog(false)} type={selected} />
      </Dialog>
    </div>
  );
};

export default LandingHeader;
