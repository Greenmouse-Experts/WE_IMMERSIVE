import { Outlet } from "react-router-dom";
import LandingHeader from "./header";
import ScrollToTop from "../../components/utils/scrollTop";
import LandingFooter from "./footer";
import CookieModal from "../../components/utils/cookie-modal";

const LandingLayout = () => {
  return (
    <div>
      <ScrollToTop />
      <LandingHeader />
      <Outlet />
      <CookieModal/>
      <LandingFooter />
    </div>
  );
};

export default LandingLayout;
