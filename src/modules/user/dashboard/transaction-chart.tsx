import Chart from "react-apexcharts";

const TransactionChart = () => {
  const options = {
    chart: {
      type: "donut",
    },
    colors: ["#7353FF", "#FF5353", "#7BFF53"],
    legend: {
      position: "bottom",
    },
    labels: ["Digital Assets", "Tours & Spaces", "Physical Products"],
    plotOptions: {
      pie: {
        startAngle: -90,
        endAngle: 270,
      },
    },
    dataLabels: {
      enabled: false,
    },
    fill: {
      type: "gradient",
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 200,
          },
          legend: {
            position: "bottom",
          },
        },
      },
    ],
  } as ApexCharts.ApexOptions;

  const series = [4315, 3200, 1200];

  return (
    <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <p className="unbound text-[#06052A] text-lg">Transaction Analysis</p>

        {/* Hide Export As on Mobile */}
        {/* <div className="hidden md:flex items-center gap-x-4">
          <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
            <p className="text-[#2C3E50] fs-300">Export As</p>
            <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
          </div>
        </div> */}
      </div>

      {/* Chart Section */}
      <div className="mt-6 flex justify-center">
        {typeof window !== "undefined" && (
          <Chart
            options={options}
            series={series}
            type="donut"
            width="100%"
            height="350px"
            className="max-w-[300px] mx-auto"
          />
        )}
      </div>
    </div>
  );
};

export default TransactionChart;
