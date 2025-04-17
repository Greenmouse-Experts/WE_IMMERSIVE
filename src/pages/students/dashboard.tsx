
import ContinueCourse from "../../modules/student/dashboard/continue-course";
import CoursesUpdate from "../../modules/student/dashboard/courses-update";
import Notifications from "../../modules/student/dashboard/notifications";

import { getStudentStats } from "../../api/student";
import Loader from "../../components/reusables/loader";

const StudentsDashboard = () => {
  const {data:stats, isLoading} = getStudentStats();

  if(isLoading) return <Loader/>



  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 w-full mt-6">
        <div className="lg:w-2/3 w-full grid gap-6">
          <ContinueCourse statData={stats.continueCourses} />
        </div>
        <div className="lg:w-1/3 w-full grid gap-6 ">
          <CoursesUpdate />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
        {/* <div className="w-full grid gap-4">
          <StackedBarChart />
        </div>
        <div className="w-full grid gap-4">
          <GuageProgress />
        </div> */}
        <div className="w-full grid gap-4">
          <Notifications />
        </div>
      </div>
    </>
  );
};

export default StudentsDashboard;
