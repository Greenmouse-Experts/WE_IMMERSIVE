import { MdOutlineArrowDropDown } from "react-icons/md";
import Chart from "react-apexcharts";
import React from "react";

const TransactionChart: React.FC = () => {
  // Define chart options
  const options: ApexCharts.ApexOptions = {
    chart: {
      type: "donut",
    },
    colors: ["#7BFF53", "#7DD2F9", "#FF8BF5"], // Colors for the chart
    labels: ["Courses", "Digital Assets", "Physical Assets"], // Labels for the legend
    plotOptions: {
      pie: {
        donut: {
          size: "60%", // Adjusting the donut size
        },
      },
    },
    legend: {
      show: false, // Hiding the default legend
    },
    dataLabels: {
      enabled: false, // Disabling data labels
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

  const series: number[] = [615, 315, 200]; // Values corresponding to each label

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
            <div
              key={index}
              className="flex justify-between items-center text-sm"
            >
              <div className="flex items-center gap-2">
                {/* Color indicator */}
                <span
                  className="w-3 h-3"
                  style={{ backgroundColor: options.colors![index] }}
                ></span>
                <span className="text-gray-700">{label}</span>
              </div>
              {/* Value */}
              <span className="text-gray-600">{series[index]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TransactionChart;
