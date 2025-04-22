//@ts-nocheck
import Chart from "react-apexcharts";
import { MdOutlineArrowDropDown } from "react-icons/md";


const PurchaseAnalysis = ({monthlyTrends}:any) => {
  const coursesRevenue = monthlyTrends.map((item:any) => item.coursesRevenue);
  const digitalRevenue = monthlyTrends.map((item:any) => item.digitalRevenue);
  const physicalRevenue = monthlyTrends.map((item:any) => item.physicalRevenue);

  const options = {
    colors: ["#553CF0", "#2598D8", "#00C49F"],
    legend: { show: true },
    toolbar: { show: false },
    tooltip: {
      theme: "dark",
      marker: { show: true },
      style: {
        fontSize: "12px",
        color: "#0000",
      },
    },
    grid: { show: true },
    stroke: {
      show: true,
      colors: ["transparent"],
      width: 5,
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
      labels: {
        show: true,
        style: {
          colors: "#A3A3A3",
          fontSize: "12px",
          cssClass: "apexcharts-xaxis-label",
        },
      },
      categories: [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
      ],
    },
  } as const;

  const series = [
    { name: "Courses", data: coursesRevenue },
    { name: "Digital Assets", data: digitalRevenue },
    { name: "Physical Assets", data: physicalRevenue },
  ];

  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
        <div className="flex justify-between items-center">
          <p className="unbound text-[#06052A]">Purchase Analysis</p>
          <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
            <p className="text-[#2C3E50] fs-300">Export As</p>
            <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
          </div>
        </div>
        <div className="mt-6">
          {typeof window !== "undefined" && (
            <Chart
              options={options}
              series={series}
              type="bar"
              width="100%"
              height="330px"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default PurchaseAnalysis;
