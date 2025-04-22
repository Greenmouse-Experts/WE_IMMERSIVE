import LearnBanner from "./herobanner";
import ExploreCategory from "./learn-list/explore-category";
// import NewCourses from "./learn-list/new-courses";
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
        {/* <NewCourses/> */}
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