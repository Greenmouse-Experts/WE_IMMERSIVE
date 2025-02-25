import { PerformanceBoard } from "../../modules/institution";
import PurchaseAnalysis from "../../modules/institution/dashboard/purchase-analysis";
import StatisticList from "../../modules/institution/dashboard/stat-list";
import TransactionChart from "../../modules/institution/dashboard/transaction-chart";
import TransactionList from "../../modules/institution/dashboard/transaction-list";


const InstitutionDashboard = () => {
  return (
    <div>
      <StatisticList />
      <div className="xl:flex gap-9 mt-6">
        <div className="xl:w-[70%] md:grid lg:grid md:gap-6 lg:gap-6">
        <TransactionList/>
        <PurchaseAnalysis/> 
          {/* <div>
            <ContinueCourse/>
          </div>
          <div>
            <PurchaseAnalysis/>
          </div> */}
        </div>
        <div className="xl:w-[30%] md:grid lg:grid md:gap-6 lg:gap-6">
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
