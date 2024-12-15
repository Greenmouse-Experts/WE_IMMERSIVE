import ContinueCourse from "../../modules/user/dashboard/continue-course";
import CoursesUpdate from "../../modules/user/dashboard/courses-update";
import HeaderSection from "../../modules/user/dashboard/header-section";
import LikedSpaces from "../../modules/user/dashboard/liked-spaces";
import PurchaseAnalysis from "../../modules/user/dashboard/purchase-analysis";
import RecentActivities from "../../modules/user/dashboard/recent-activities";
import StatisticList from "../../modules/user/dashboard/stat-list";
import TransactionChart from "../../modules/user/dashboard/transaction-chart";
import TransactionList from "../../modules/user/dashboard/transaction-list";

const UserDashboard = () => {
  return (
    <div>
      <HeaderSection />
      <StatisticList />
      <div className="lg:flex gap-9 mt-6">
        <div className="lg:w-[70%] grid gap-6">
          <div>
            <ContinueCourse />
          </div>
          <div>
            <PurchaseAnalysis />
          </div>
        </div>
        <div className="lg:w-[30%] grid gap-6">
          <div>
            <RecentActivities />
          </div>
          <div>
            <CoursesUpdate />
          </div>
          <div>
            <LikedSpaces />
          </div>
        </div>
      </div>
      <div className="lg:flex gap-8 mt-6">
        <div className="lg:w-[74%]">
          <TransactionList />
        </div>
        <div className="lg:w-[26%]">
          <TransactionChart />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
