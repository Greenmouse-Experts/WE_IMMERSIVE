import StackedBarChart from "../../modules/student/dashboard/components/stackedBarChart";
import ContinueCourse from "../../modules/student/dashboard/continue-course";
import CoursesUpdate from "../../modules/student/dashboard/courses-update";
import Notifications from "../../modules/student/dashboard/notifications";
import GuageProgress from "../../modules/student/dashboard/components/guageProgress";

const StudentsDashboard = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 w-full mt-6">
        <div className="lg:w-2/3 w-full grid gap-6">
          <ContinueCourse />
        </div>
        <div className="lg:w-1/3 w-full grid gap-6">
          <CoursesUpdate />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 w-full">
        <div className="w-full grid gap-4">
          <StackedBarChart />
        </div>
        <div className="w-full grid gap-4">
          <GuageProgress />
        </div>
        <div className="w-full grid gap-4">
          <Notifications />
        </div>
      </div>
    </>
  );
};

export default StudentsDashboard;
