import MapChart from "../../modules/admin/dashboard/map-chart";
import PurchaseAnalysis from "../../modules/admin/dashboard/purchase-analysis";
import RevenueChart from "../../modules/admin/dashboard/revenue-chart";
import SalesCommissionChart from "../../modules/admin/dashboard/sales-commission";
import StatisticList from "../../modules/admin/dashboard/stat-list";
import TransactionChart from "../../modules/admin/dashboard/transaction-chart";
import TransactionList from "../../modules/admin/dashboard/transaction-list";

const SuperAdminDashboard = () => {
  return (
    <div>
      <StatisticList />
      <div className="lg:flex gap-9 mt-6">
        <div className="lg:w-[75%] flex w-full gap-6">
          <TransactionList />
        </div>
        <div className="lg:w-[25%] w-full flex mt-10 md:mt-0 gap-6">
          <div className="w-full flex">
            <TransactionChart />
          </div>
        </div>
      </div>
      <div className="w-[100%] xl:flex gap-9 mt-6">
        <div className="w-[100%] xl:w-[60%] grid gap-6">
          <RevenueChart />
        </div>
        <div className="xl:w-[40%] md:mt-0 mt-10 grid gap-6">
          <div className="w-[96%] md:w-[100%] md:mt-4 overflow-x-auto ">
            <PurchaseAnalysis />  
          </div>
          <div className="">
            <SalesCommissionChart />
          </div>
        </div>
      </div>

      <div className="lg:flex gap-9 mt-6">
        <div className="lg:w-full grid gap-6">
          <MapChart />
        </div>
      </div>
    </div>
  );
};

export default SuperAdminDashboard;
