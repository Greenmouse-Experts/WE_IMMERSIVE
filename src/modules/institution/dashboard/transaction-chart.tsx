import { MdOutlineArrowDropDown } from "react-icons/md";
import Chart from "react-apexcharts";

interface ExpenseData {
  length: number;
}

const TransactionChart = ({ expenseData }: { expenseData: ExpenseData }) => {
  const options: ApexCharts.ApexOptions = {
    chart: {
      width: 380,
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
  };

  const series = [4315, 3200, 1200];

  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
        <div className="pt-6 md:pt-0 lg:pt-0">
          <p className="unbound text-[#06052A] text-center md:text-left lg:text-left">Expenses Analysis</p>
          <div className="flex items-center gap-x-4 mt-2 justify-center md:justify-start lg:justify-start">
            <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
              <p className="text-[#2C3E50] fs-300">Export As</p>
              <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
            </div>
          </div>
        </div>

        <div className="mt-6 px-6 md:px-0 lg:px-0">
          {expenseData.length > 0 ? (
            typeof window !== "undefined" && (
              <Chart
                options={options}
                series={series}
                type="donut"
                width="100%"
                height="300px"
              />
            )
          ) : (
            <div className="flex justify-center items-center h-[110px]">
              <p className="text-[#A3A3A3] text-[14px]">No data available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionChart;
