import ContinueCourse from "../../modules/student/dashboard/continue-course";
import CoursesUpdate from "../../modules/student/dashboard/courses-update";
import HeaderSection from "../../modules/student/dashboard/header-section";
import LikedSpaces from "../../modules/student/dashboard/liked-spaces";
import PurchaseAnalysis from "../../modules/student/dashboard/purchase-analysis";
import RecentActivities from "../../modules/student/dashboard/recent-activities";
import StatisticList from "../../modules/student/dashboard/stat-list";
import TransactionChart from "../../modules/student/dashboard/transaction-chart";
import TransactionList from "../../modules/student/dashboard/transaction-list";

const UserDashboard = () => {
  return (
    <div>
      <HeaderSection />
      <StatisticList />
      <div className="lg:flex gap-9 mt-6">
        <div className="lg:w-[70%] grid gap-6">
          <div>
            <ContinueCourse/>
          </div>
          <div>
            <PurchaseAnalysis/>
          </div>
        </div>
        <div className="lg:w-[30%] grid gap-6">
          <div>
            <RecentActivities/>
          </div>
          <div>
            <CoursesUpdate/>
          </div>
          <div>
            <LikedSpaces/>
          </div>
        </div>
      </div>
      <div className="lg:flex gap-8 mt-6">
        <div className="lg:w-[74%]">
          <TransactionList/>
        </div>
        <div className="lg:w-[26%]">
          <TransactionChart/>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
