import { MdArrowOutward, MdOutlineArrowDropDown } from "react-icons/md";
import Chart from "react-apexcharts";

const RevenueChart = ({monthlyTrends}:any) => {
  // const monthlyTrends = [
  //   { month: 1, coursesRevenue: 0, digitalRevenue: 0, physicalRevenue: 0, totalRevenue: 0, transactions: 0 },
  //   { month: 2, coursesRevenue: 0, digitalRevenue: 0, physicalRevenue: 0, totalRevenue: 0, transactions: 0 },
  //   { month: 3, coursesRevenue: 0, digitalRevenue: 0, physicalRevenue: 0, totalRevenue: 0, transactions: 0 },
  //   { month: 4, coursesRevenue: 0, digitalRevenue: 0, physicalRevenue: 0, totalRevenue: 0, transactions: 0 },
  //   { month: 5, coursesRevenue: 0, digitalRevenue: 0, physicalRevenue: 0, totalRevenue: 0, transactions: 0 },
  //   { month: 6, coursesRevenue: 0, digitalRevenue: 0, physicalRevenue: 0, totalRevenue: 0, transactions: 0 },
  //   { month: 7, coursesRevenue: 0, digitalRevenue: 0, physicalRevenue: 0, totalRevenue: 0, transactions: 0 },
  //   { month: 8, coursesRevenue: 0, digitalRevenue: 0, physicalRevenue: 0, totalRevenue: 0, transactions: 0 },
  //   { month: 9, coursesRevenue: 0, digitalRevenue: 0, physicalRevenue: 0, totalRevenue: 0, transactions: 0 },
  //   { month: 10, coursesRevenue: 0, digitalRevenue: 0, physicalRevenue: 0, totalRevenue: 0, transactions: 0 },
  //   { month: 11, coursesRevenue: 0, digitalRevenue: 0, physicalRevenue: 0, totalRevenue: 0, transactions: 0 },
  //   { month: 12, coursesRevenue: 0, digitalRevenue: 0, physicalRevenue: 0, totalRevenue: 0, transactions: 0 },
  // ];


  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "area",
      toolbar: { show: false },
      animations: { enabled: true },
    },
    colors: ["#A855F7", "#38BDF8"],
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
        formatter: (value) => `$${value.toFixed(1)}k`,
      },
    },
    xaxis: {
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ],
      labels: { style: { colors: "#6B7280", fontSize: "12px" } },
    },
    yaxis: {
      labels: {
        formatter: (value) => `${value}K`,
        style: { colors: "#6B7280", fontSize: "12px" },
      },
    },
    legend: { position: "bottom", horizontalAlign: "center" },
    annotations: {
      points: [
        {
          x: "Jun",
          seriesIndex: 0,
          label: {
            text: "$125.2k\nJune 21, 2023",
            style: {
              background: "#F9FAFB",
              color: "#10B981",
              fontSize: "7px",
            },
          },
        },
      ],
    },
  };

  const series = [
    {
      name: "Courses",
      data: monthlyTrends?.map((item:any) => item.coursesRevenue),
    },
    {
      name: "Digital Products",
      data: monthlyTrends?.map((item:any) => item.digitalRevenue),
    },
    {
      name: "Physical Products",
      data: monthlyTrends?.map((item:any) => item.physicalRevenue),
    },
  ];

  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 pt-12 rounded-[20px]">
        <p className="text-sm text-[#7F7F7F]">Total revenue</p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="unbound text-[#06052A] fw-600">Income</p>
            <p className="text-[#14CA74] bg-[#05C16833] px-1 text-[10px] border border-[#05C16833] rounded-[2px] flex items-center">24.6% <MdArrowOutward /></p>
          </div>
          <div className="flex items-center gap-x-4 mt-2">
            <div className="flex items-center gap-x-1 btn-shadow px-4 py-2 rounded-full cursor-pointer">
              <p className="text-[#7F7F7F] text-[10px] fs-300">Jan 2024 - Dec 2024</p>
              <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
            </div>
          </div>
        </div>
        <div className="mt-6">
          {typeof window !== "undefined" && (
            <Chart options={options} series={series} width="100%" type="area" height={400} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RevenueChart;
