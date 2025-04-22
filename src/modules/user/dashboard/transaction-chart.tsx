import Chart from "react-apexcharts";

const TransactionChart = ({ transactionChart }: any) => {
  const courseRevenue = transactionChart?.courses?.revenue || 0;
  const digitalRevenue = transactionChart?.digitalAssets?.revenue || 0;
  const physicalRevenue = transactionChart?.physicalAssets?.revenue || 0;

  const options = {
    chart: {
      type: "donut",
    },
    colors: ["#7353FF", "#53C1FF", "#FF5353"],
    legend: {
      position: "bottom",
    },
    labels: ["Courses", "Digital Assets", "Physical Products"],
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

  const series = [courseRevenue, digitalRevenue, physicalRevenue];

  return (
    <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <p className="unbound text-[#06052A] text-lg dark:text-white">
          Transaction Analysis
        </p>
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
