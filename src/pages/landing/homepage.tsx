import CommunityUpdate from "../../modules/landing/community-update"
import ExperienceMore from "../../modules/landing/experience"
import HeroBanner from "../../modules/landing/herobanner"
import JoinUs from "../../modules/landing/join-us"
import MarketPlace from "../../modules/landing/marketplace"
import RobustCommunity from "../../modules/landing/robust-community"

const LandingHomepage = () => {
  return (
    <div>
      <HeroBanner/>
      <RobustCommunity/>
      <MarketPlace/>
      <JoinUs/>
      <CommunityUpdate/>
      <ExperienceMore/>
    </div>
  )
}

export default LandingHomepage