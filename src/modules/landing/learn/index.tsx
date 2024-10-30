import LearnBanner from "./herobanner";
import ExploreCategory from "./learn-list/explore-category";
import NewCourses from "./learn-list/new-courses";
import VrEnabled from "./learn-list/vr-enabled";
import StudentReviews from "./reviews";
import Revolution from "./revolution";

const LearnIndex = () => {
  return (
    <div className="">
      <div>
        <LearnBanner />
      </div>
      <div>
        <ExploreCategory/>
        <NewCourses/>
        <VrEnabled/>
      </div>
      <div>
        <Revolution/>
      </div>
      <div>
        <StudentReviews/>
      </div>
    </div>
  );
}

export default LearnIndex