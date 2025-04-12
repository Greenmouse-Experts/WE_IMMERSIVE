import Chart from "react-apexcharts";
import { MdArrowOutward } from "react-icons/md";
import { getAdminAnalytics } from "../../../api/admin";
import Loader from "../../../components/reusables/loader";

const PurchaseAnalysis = () => {
  const { data: adminAnalytics, isLoading } = getAdminAnalytics();

  if (isLoading) return <Loader />;

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const series = [
    {
      name: "Courses Revenue",
      data: adminAnalytics?.monthlyTrends.map(
        (item: any) => item.coursesRevenue
      ),
    },
    {
      name: "Subscription Revenue",
      data: adminAnalytics?.monthlyTrends.map(
        (item: any) => item.subscriptionRevenue
      ),
    },
    {
      name: "Total Revenue",
      data: adminAnalytics?.monthlyTrends.map((item: any) => item.totalRevenue),
    },
  ];

  const options = {
    colors: ["#553CF0", "#2598D8", "#14CA74"],
    chart: {
      toolbar: { show: false },
    },
    legend: { show: true },
    tooltip: {
      theme: "dark",
      marker: { show: true },
      style: {
        fontSize: "12px",
      },
    },
    grid: { show: true },
    stroke: {
      show: true,
      width: 5,
      colors: ["transparent"],
    },
    dataLabels: { enabled: false },
    yaxis: {
      labels: {
        show: true,
        style: {
          colors: "#A3A3A3",
          fontSize: "12px",
          cssClass: "apexcharts-yaxis-label",
        },
      },
      axisBorder: { show: true },
      axisTicks: { show: true },
    },
    xaxis: {
      categories: months,
      labels: {
        show: true,
        style: {
          colors: "#A3A3A3",
          fontSize: "12px",
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
  };

  const totalRevenue = adminAnalytics?.monthlyTrends.reduce(
    (sum:any, item:any) => sum + item.totalRevenue,
    0
  );

  return (
    <div>
      <div className="bg-white md:w-full lg:w-full dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
        <p className="text-sm text-[#7F7F7F]">Total Revenue</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="unbound text-[#06052A] fw-600">
              ₦{(totalRevenue / 1000).toFixed(1)}K
            </p>
            <p className="text-[#14CA74] bg-[#05C16833] px-1 text-[10px] border border-[#05C16833] rounded-[2px] flex items-center">
              24.6% <MdArrowOutward />
            </p>
          </div>
          <div className="flex items-center gap-x-4 mt-2">
            {/* <div className="cursor-pointer">
              <p className="text-[#553CF0] text-sm fs-300">View Report</p>
            </div> */}
          </div>
        </div>
        <div className="mt-6">
          {typeof window !== "undefined" && (
            <Chart
              options={options}
              series={series}
              type="bar"
              width="100%"
              height="300px"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PurchaseAnalysis;
