import { getInstitutionAnalysis, getInstitutionStats } from "../../api/institution";
import Loader from "../../components/reusables/loader";
import PurchaseAnalysis from "../../modules/institution/dashboard/purchase-analysis";
import StatisticList from "../../modules/institution/dashboard/stat-list";
import TransactionChart from "../../modules/institution/dashboard/transaction-chart";
import TransactionList from "../../modules/institution/dashboard/transaction-list";

const InstitutionDashboard = () => {
  const { data: statsData, isLoading } = getInstitutionStats();
  const { data: analysisData } = getInstitutionAnalysis();
  
  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <StatisticList data={statsData} />

      {/* Two-column layout: TransactionList + TransactionChart */}
      <div className="xl:flex gap-9 mt-6">
        <div className="xl:w-[70%] md:grid lg:grid md:gap-6 lg:gap-6">
          <TransactionList studentsData={analysisData.newAddedStudents} />
        </div>
        <div className="xl:w-[30%] md:grid lg:grid md:gap-6 lg:gap-6">
          <TransactionChart expenseData={analysisData.expensesAnalysis} />
        </div>
      </div>

      {/* Purchase Analysis full-width at the bottom */}
      <div className="mt-6">
        <PurchaseAnalysis purchaseData={analysisData.purchaseAnalysis} />
      </div>
    </div>
  );
};

export default InstitutionDashboard;
