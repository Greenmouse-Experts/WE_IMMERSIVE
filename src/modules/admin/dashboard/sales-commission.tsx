import React from "react";
import Chart from "react-apexcharts";

const SalesCommissionChart = () => {
  const options = {
    chart: {
      type: "line",
      toolbar: { show: false },
    },
    colors: ["#6366F1"], // Set the line color
    dataLabels: { enabled: false },
    stroke: { curve: "straight", width: 2 }, // Smooth line and thickness
    grid: {
      borderColor: "#e7e7e7",
    },
    xaxis: {
      categories: ["Q1", "Q2", "Q3", "Q4"], // Quarterly data
      labels: { style: { colors: "#4B5563", fontSize: "12px" } },
    },
    yaxis: {
      min: 0,
      max: 500,
      labels: {
        style: { colors: "#4B5563", fontSize: "12px" },
      },
    },
    tooltip: {
      enabled: true,
      shared: true,
      intersect: false,
      y: {
        formatter: (value) => `N ${value}K`, // Format value
      },
    },
    markers: {
      size: 5,
      colors: ["#6366F1"], // Marker colors
    },
  };

  const series = [
    {
      name: "Sales Commission",
      data: [0, 350, 250, 100, 500], // Data points
    },
  ];

  return (
    <div className="bg-white dark:bg-[#15171E] p-4 rounded-lg">
      <div className="flex justify-between items-center">
        <div>
          <p className="text-gray-500">Sales Commission</p>
          <h3 className="text-2xl font-semibold">N 40K</h3>
          <p className="text-green-500 text-sm">16.8% ↑</p>
        </div>
        <button className="text-indigo-500 text-sm">View Report</button>
      </div>
      <Chart options={options} series={series} type="line" height={150} />
    </div>
  );
};

export default SalesCommissionChart;
