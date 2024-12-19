import StackedBarChart from "../../modules/student/dashboard/components/stackedBarChart";
import ContinueCourse from "../../modules/student/dashboard/continue-course";
import CoursesUpdate from "../../modules/student/dashboard/courses-update";
import Notifications from "../../modules/student/dashboard/notifications";
import GuageProgress from "../../modules/student/dashboard/components/guageProgress";

const StudentsDashboard = () => {
  return (
    <div className="w-full flex flex-col">
      <div className="lg:flex gap-4 w-full mt-10">
        <div className="lg:w-[65%] w-full grid gap-6">
          <ContinueCourse />
        </div>
        <div className="lg:w-[35%] w-full mt-10 md:mt-0 grid gap-6">
          <div>
            <CoursesUpdate />
          </div>
        </div>
      </div>
      <div className="lg:flex w-full gap-4 mt-5 md:mt-7">
        <div className="lg:w-[65%] flex md:flex-row w-full flex-col rounded-xl py-4 px-2 gap-10 md:gap-2">
          <div className="lg:w-[60%] grid p-2 gap-2">
            <StackedBarChart />
          </div>
          <div className="lg:w-[40%] grid p-2 gap-2">
            <GuageProgress />
          </div>
        </div>
        <div className="lg:w-[35%] grid gap-6 py-6 mt-5 md:mt-2">
          <Notifications />
        </div>
      </div>
    </div>
  );
};

export default StudentsDashboard;
