import StackedBarChart from "../../modules/student/dashboard/components/stackedBarChart";
import ContinueCourse from "../../modules/student/dashboard/continue-course";
import CoursesUpdate from "../../modules/student/dashboard/courses-update";
import Notifications from "../../modules/student/dashboard/notifications";
import GuageProgress from "../../modules/student/dashboard/components/guageProgress";

const StudentsDashboard = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="lg:flex gap-4 w-full mt-8">
        <div className="lg:w-[65%] w-full grid gap-6">
          <ContinueCourse />
        </div>
        <div className="lg:w-[35%] w-full mt-10 md:mt-0 grid gap-6">
          <div>
            <CoursesUpdate />
          </div>
        </div>
      </div>
      <div className="lg:flex w-full gap-4">
        <div className="lg:w-[68%] flex md:flex-row w-full flex-col rounded-lg gap-5">
          <div className="lg:w-[60%] grid gap-2">
            <StackedBarChart />
          </div>
          <div className="lg:w-[40%] grid gap-2">
            <GuageProgress />
          </div>
        </div>
        <div className="lg:w-[35%] grid gap-6 md:mt-2">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default StudentsDashboard;
