import { Outlet } from "react-router-dom";
import LandingHeader from "./header";
import ScrollToTop from "../../components/utils/scrollTop";
import LandingFooter from "./footer";
import CookieModal from "../../components/utils/cookie-modal";
import PromotionBanner from "./promotion";
import Chat from "../../modules/Chatbot/Chat";

const LandingLayout = () => {
  return (
    <div className="w-full">
      <ScrollToTop />
      <PromotionBanner />
      <LandingHeader />
      <Outlet />
      <CookieModal />
      <Chat/>
      <LandingFooter />
    </div>
  );
};

export default LandingLayout;
