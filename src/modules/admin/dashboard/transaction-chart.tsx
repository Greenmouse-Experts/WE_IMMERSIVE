// import { MdOutlineArrowDropDown } from "react-icons/md";
import Chart from "react-apexcharts";
import React from "react";
import { getUserStats } from "../../../api/admin";
import Loader from "../../../components/reusables/loader";

const TransactionChart: React.FC = () => {
  const { data: userStats, isPending } = getUserStats();

  if (isPending) return <Loader />;

  // Map stats to categories in the same order as labels
  const series: number[] = [
    userStats.totalUsers || 0, // General User
    userStats.totalCreators || 0, // Creator
    userStats.totalStudents || 0, // Student
    userStats.totalInstitutions || 0, // Institution
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
    },
    colors: ["#A78BFA", "#38BDF8", "#F472B6", "#4ADE80", "#FBBF24"],
    labels: [
      "General User",
      "Creator",
      "Student",
      "Institution",
    ],
    plotOptions: {
      pie: {
        donut: {
          size: "60%",
        },
      },
    },
    legend: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          chart: {
            width: "100%",
          },
        },
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-[#15171E] w-full rounded-[20px] p-6">
      <div className="flex lg:flex-col xl:flex-row items-center justify-between mb-4">
        <p className="font-semibold text-gray-800 text-lg">User Analysis</p>
        {/* <div className="flex items-center gap-x-2 px-3 py-1 bg-gray-100 rounded-full cursor-pointer w-fit">
          <span className="text-sm text-gray-600">Monthly</span>
          <MdOutlineArrowDropDown className="text-gray-600" />
        </div> */}
      </div>

      <div className="flex flex-col gap-6 items-center">
        <div className="w-full lg:w-1/2">
          {typeof window !== "undefined" && (
            <Chart
              options={options}
              series={series}
              type="donut"
              width="100%"
              height="300px"
            />
          )}
        </div>

        {/* Custom Legend */}
        <div className="flex flex-col gap-3 w-full">
          {options.labels?.map((label, index) => (
            <div
              key={index}
              className="flex justify-between items-center text-sm"
            >
              <div className="flex items-center gap-2">
                <span
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: options.colors![index] }}
                ></span>
                <span className="text-gray-700">{label}</span>
              </div>
              <span className="text-gray-600">{series[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionChart;
