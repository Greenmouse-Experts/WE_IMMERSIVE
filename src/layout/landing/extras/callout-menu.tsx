import { LiaTimesSolid } from "react-icons/lia";
import { headerRoutes } from "./header-routes";
import { Link } from "react-router-dom";
import Button from "../../../components/ui/Button";
import useDialog from "../../../hooks/useDialog";
import LoginPopup from "./login-popup";
import { useState } from "react";

const CalloutMenu = ({ close }: { close: () => void }) => {
  const { Dialog, setShowDialog } = useDialog();
    const [selected, setSelected] = useState<string>("");

  const openAuth = (type: string) => {
    setSelected(type);
    setShowDialog(true);
  };

  const closeMenu = () => {
    close();
  }

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
              <Link to={item.route} onClick={() => closeMenu()} className="dark:text-white">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="mt-10 grid gap-6">
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
        </div>
      </div>
      <Dialog title="" size="md">
        <LoginPopup close={() => setShowDialog(false)} type={selected} />
      </Dialog>
    </div>
  );
};

export default CalloutMenu;
