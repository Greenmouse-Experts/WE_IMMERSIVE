import { Outlet } from "react-router-dom";
import ScrollToTop from "../../components/utils/scrollTop";
import AuthBackground from "./auth-background";

const AuthLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <AuthBackground>
        <Outlet/>
      </AuthBackground>
    </div>
  );
};

export default AuthLayout;
