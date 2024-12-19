import CommunityUpdate from "../../modules/landing/homepage/community-update";
import DifferentWorld from "../../modules/landing/homepage/different-world";
import HeroBanner from "../../modules/landing/homepage/herobanner";
import JoinUs from "../../modules/landing/homepage/join-us";
import MarketPlace from "../../modules/landing/homepage/marketplace";
import RobustCommunity from "../../modules/landing/homepage/robust-community";

const LandingHomepage = () => {
  return (
    <div className="w-full">
      <HeroBanner />
      <RobustCommunity />
      <MarketPlace />
      <DifferentWorld />
      <JoinUs />
      <CommunityUpdate />
    </div>
  );
};

export default LandingHomepage;
