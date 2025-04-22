import { getUserAnalytics, getUserStats } from "../../api/user";
import Loader from "../../components/reusables/loader";
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
  const { data: userStats, isLoading: isGettingStats } = getUserStats();
  const { data: userAnalytics, isLoading: isGettingAnalytics } =
    getUserAnalytics();

  if (isGettingStats || isGettingAnalytics) return <Loader />;

  return (
    <div className="overflow-hidden max-w-full">
      <HeaderSection />
      <StatisticList userStats={userStats} />

      <div className="lg:flex gap-9 mt-6">
        <div className="lg:w-[70%] grid gap-6">
          <ContinueCourse ongoingCourses={userAnalytics?.ongoingCourses} />
          <PurchaseAnalysis monthlyTrends={userAnalytics?.monthlyPurchases?.monthlyTrends} />
        </div>
        <div className="lg:w-[30%] grid gap-6">
          <RecentActivities />
          <CoursesUpdate />
          <LikedSpaces />
        </div>
      </div>

      <div className="lg:flex gap-8 mt-6">
        <div className="lg:w-[74%]">
          <TransactionList latestTrx={userAnalytics?.latestTrx} />
        </div>
        <div className="lg:w-[26%]">
          <TransactionChart transactionChart={userAnalytics?.monthlyPurchases} />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
