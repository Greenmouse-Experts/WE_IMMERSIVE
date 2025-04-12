
//@ts-nocheck
import { MdArrowOutward, MdOutlineArrowDropDown } from "react-icons/md";
import Chart from "react-apexcharts";
import { getAdminStats } from "../../../api/admin";
import Loader from "../../../components/reusables/loader";

const RevenueChart = () => {
  const { data: adminStats, isLoading } = getAdminStats();

  if (isLoading) return <Loader />;

  const trends = adminStats?.monthlyTrends || [];

  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  const incomeData = trends.map((item:any) => item.income / 1000); // convert to 'k' units
  const subscriptionsData = trends.map((item:any) => item.newSubscriptions);
  const usersData = trends.map((item:any) => item.newUsers);

  const series = [
    {
      name: "Income (₦K)",
      data: incomeData,
    },
    {
      name: "New Subscriptions",
      data: subscriptionsData,
    },
    {
      name: "New Users",
      data: usersData,
    },
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
      animations: { enabled: true },
    },
    colors: ["#A855F7", "#38BDF8", "#F59E0B"], // purple, blue, amber
    dataLabels: { enabled: false },
    stroke: { curve: "smooth", width: 2 },
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.4,
        opacityTo: 0.1,
        stops: [0, 100],
      },
    },
    grid: { borderColor: "#e7e7e7" },
    markers: { size: 5 },
    tooltip: {
      theme: "dark",
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => Number.isInteger(value) ? value : `₦${value.toFixed(1)}k`,
      },
    },
    xaxis: {
      categories: months,
      labels: { style: { colors: "#6B7280", fontSize: "12px" } },
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value}`,
        style: { colors: "#6B7280", fontSize: "12px" },
      },
    },
    legend: { position: "bottom", horizontalAlign: "center" },
  };

  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 pt-12 rounded-[20px]">
        <p className="text-sm text-[#7F7F7F]">Total revenue</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="unbound text-[#06052A] fw-600">
            ₦{((incomeData.reduce((a, b) => a + b, 0))).toFixed(1)}K
            </p>
            <p className="text-[#14CA74] bg-[#05C16833] px-1 text-[10px] border border-[#05C16833] rounded-[2px] flex items-center">
              {/* You can compute percentage increase if previous data is available */}
              +24.6% <MdArrowOutward />
            </p>
          </div>
          <div className="flex items-center gap-x-4 mt-2">
            {/* <div className="flex items-center gap-x-1 btn-shadow px-4 py-2 rounded-full cursor-pointer">
              <p className="text-[#7F7F7F] text-[10px] fs-300">Jan 2024 - Dec 2024</p>
              <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
            </div> */}
          </div>
        </div>
        <div className="mt-6">
          <div className="mt-6">
            {typeof window !== "undefined" && (
              <Chart
                options={options}
                series={series}
                width="100%"
                type="area"
                height={450}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
