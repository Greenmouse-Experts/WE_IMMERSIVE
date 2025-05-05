import ApexCharts from "apexcharts";
import { useMemo } from "react";
import Chart from "react-apexcharts";
import { MdOutlineArrowDropDown } from "react-icons/md";

interface PurchaseData {
  monthlyTrends: any;
  // Define the structure of purchaseData here
  // Example:
  assets: number[];
  courses: number[];
}

const PurchaseAnalysis = ({ purchaseData }: { purchaseData: PurchaseData }) => {
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const { coursesData, assetsData } = useMemo(() => {
    const sortedTrends = [...purchaseData.monthlyTrends].sort((a, b) => a.month - b.month);

    return {
      coursesData: sortedTrends.map((month) => month.coursesRevenue),
      assetsData: sortedTrends.map((month) => month.digitalRevenue + month.physicalRevenue),
    };
  }, [purchaseData.monthlyTrends]);

  const options = {
    colors: ["#553CF0", "#2598D8"],
    legend: { show: true },
    tooltip: { theme: "dark" },
    grid: { show: true },
    stroke: { show: true, colors: ["transparent"], width: 5 },
    dataLabels: { enabled: false },
    yaxis: {
      labels: {
        style: {
          colors: "#A3A3A3",
          fontSize: "12px",
        },
      },
    },
    xaxis: {
      categories: months,
      labels: {
        style: {
          colors: "#A3A3A3",
          fontSize: "12px",
        },
      },
    },
  } as ApexCharts.ApexOptions;

  const series = [
    { name: "Courses", data: coursesData },
    { name: "Assets", data: assetsData },
  ];

  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px] mb-8 md:mb-0">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center pt-5">
          <p className="unbound text-[#06052A]">Purchase Analysis</p>
          <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
            <p className="text-[#2C3E50] fs-300">Export As</p>
            <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
          </div>
        </div>
        <div className="mt-6">
          {typeof window !== "undefined" && (
            <Chart options={options} series={series} type="bar" width="100%" height="330px" />
          )}
        </div>
      </div>
    </div>
  );
};


export default PurchaseAnalysis