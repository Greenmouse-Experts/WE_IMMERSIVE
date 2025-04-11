import { MdOutlineArrowDropDown } from "react-icons/md";
import Chart from "react-apexcharts";
import React from "react";

interface AnalysisData {
  courses: {
    revenue: number;
    count: number;
    topCourses: any[];
  };
  digitalAssets: {
    revenue: number;
    count: number;
    topAssets: any[];
  };
  physicalAssets: {
    revenue: number;
    count: number;
    topAssets: any[];
  };
}

const TransactionChart: React.FC<{ analysisData: AnalysisData }> = ({ analysisData }) => {
  // Extract revenue values from analysisData
  const series: number[] = [
    analysisData?.courses?.revenue || 0,
    analysisData?.digitalAssets?.revenue || 0,
    analysisData?.physicalAssets?.revenue || 0,
  ];

  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
    },
    colors: ["#7BFF53", "#7DD2F9", "#FF8BF5"],
    labels: ["Courses", "Digital Assets", "Physical Assets"],
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
      <div className="flex items-center justify-between mb-4">
        <p className="font-semibold text-gray-800 text-lg">Income Analysis</p>
        <div className="flex items-center gap-x-2 px-3 py-1 bg-gray-100 rounded-full cursor-pointer w-fit">
          <span className="text-sm text-gray-600">Monthly</span>
          <MdOutlineArrowDropDown className="text-gray-600" />
        </div>
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
            <div key={index} className="flex justify-between items-center text-sm">
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
