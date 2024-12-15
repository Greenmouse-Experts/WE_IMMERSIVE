import StackedBarChart from "../../modules/student/dashboard/components/stackedBarChart";
import ContinueCourse from "../../modules/student/dashboard/continue-course";
import CoursesUpdate from "../../modules/student/dashboard/courses-update";
import HeaderSection from "../../modules/student/dashboard/header-section";
import Notifications from "../../modules/student/dashboard/notifications";
import GuageProgress from "../../modules/student/dashboard/components/guageProgress";

const StudentsDashboard = () => {
  return (
    <div>
      <HeaderSection />
      <div className="lg:flex gap-4 mt-10">
        <div className="lg:w-[65%] grid gap-6">
          <ContinueCourse />
        </div>
        <div className="lg:w-[35%] grid gap-6">
          <div>
            <CoursesUpdate />
          </div>
        </div>
      </div>
      <div className="lg:flex gap-4 mt-10">
        <div className="lg:w-[65%] flex bg-white rounded-xl py-4 px-2 gap-2">
          <div className="lg:w-[60%] grid p-2 gap-2">
            <StackedBarChart />
          </div>
          <div className="lg:w-[40%] grid p-2 gap-2">
            <GuageProgress />
          </div>
        </div>
        <div className="lg:w-[35%] grid gap-6">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default StudentsDashboard;
