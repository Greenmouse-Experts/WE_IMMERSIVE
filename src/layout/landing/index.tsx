import { Outlet } from "react-router-dom";
import LandingHeader from "./header";
import ScrollToTop from "../../components/utils/scrollTop";
import LandingFooter from "./footer";

const LandingLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <LandingHeader />
      <Outlet />
      <LandingFooter />
    </div>
  );
};

export default LandingLayout;
