import CoursesUpdate from "../../modules/creator/dashboard/courses-update";
import HeaderSection from "../../modules/creator/dashboard/header-section";
import RevenueChart from "../../modules/creator/dashboard/revenue-chart";
import StatisticList from "../../modules/creator/dashboard/stat-list";
import TransactionChart from "../../modules/creator/dashboard/transaction-chart";
import TransactionList from "../../modules/creator/dashboard/transaction-list";

const CreatorDashboard = () => {
  return (
    <div>
      <HeaderSection />
      <StatisticList />
      <div className="lg:flex gap-9 mt-10">
        <div className="lg:w-[75%] flex w-full gap-6">
          <TransactionList />
        </div>
        <div className="lg:w-[25%] w-full flex mt-10 md:mt-0 gap-6">
          <div className="w-full flex">
            <TransactionChart />
          </div>
        </div>
      </div>
      <div className="lg:flex gap-9 mt-10">
        <div className="lg:w-[40%] grid gap-6">
          <CoursesUpdate />
        </div>
        <div className="lg:w-[60%] grid mt-10 md:mt-0 gap-6">
          <RevenueChart />
        </div>
      </div>
    </div>
  );
};

export default CreatorDashboard;
