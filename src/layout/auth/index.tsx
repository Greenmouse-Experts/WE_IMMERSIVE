import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/utils/scrollTop";
import AuthBackground from "./auth-background";
import ThemeSwitch from "../../components/ui/theme-switch";

const AuthLayout = () => {
  return (
    <div className="relative">
      <ScrollToTop />
      <AuthBackground>
        <Outlet/>
      </AuthBackground>
      <div className="absolute w-52 top-5 right-5">
        <ThemeSwitch sidebar />
      </div>
    </div>
  );
};

export default AuthLayout;
