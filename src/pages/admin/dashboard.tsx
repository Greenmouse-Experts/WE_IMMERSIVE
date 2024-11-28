
import HeaderSection from "../../modules/admin/dashboard/header-section";
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
      <HeaderSection />
      <StatisticList />
      <div className="lg:flex gap-9 mt-6">
        <div className="lg:w-[75%] grid gap-6">
          <TransactionList />
        </div>
        <div className="lg:w-[25%] grid gap-6">
          <div>
            <TransactionChart />
          </div>
        </div>
      </div>
      <div className="lg:flex gap-9 mt-6">
        <div className="lg:w-[60%] grid gap-6">
          <RevenueChart />
        </div>
        <div className="lg:w-[40%] grid gap-6">
          <div>
            <PurchaseAnalysis />
          </div>
          <div>
            <SalesCommissionChart/>
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
