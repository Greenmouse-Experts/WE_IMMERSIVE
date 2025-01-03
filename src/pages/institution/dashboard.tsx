import { PerformanceBoard } from "../../modules/institution";
import HeaderSection from "../../modules/institution/dashboard/header-section";
import PurchaseAnalysis from "../../modules/institution/dashboard/purchase-analysis";
import StatisticList from "../../modules/institution/dashboard/stat-list";
import TransactionChart from "../../modules/institution/dashboard/transaction-chart";
import TransactionList from "../../modules/institution/dashboard/transaction-list";


const InstitutionDashboard = () => {
  return (
    <div>
      <HeaderSection />
      <StatisticList />
      <div className="lg:flex gap-9 mt-6">
        <div className="lg:w-[70%] grid gap-6">
        <TransactionList/>
        <PurchaseAnalysis/>
          {/* <div>
            <ContinueCourse/>
          </div>
          <div>
            <PurchaseAnalysis/>
          </div> */}
        </div>
        <div className="lg:w-[30%] grid gap-6">
          <div>
            <PerformanceBoard/>
          </div>
          <div>
          <TransactionChart/>
          </div>
          
        </div>
      </div>
    
    </div>
  );
};

export default InstitutionDashboard;
