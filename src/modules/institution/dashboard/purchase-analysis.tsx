import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";
import { MdOutlineArrowDropDown } from "react-icons/md";

const PurchaseAnalysis = () => {
     const options = {
       colors: ["#553CF0", "#2598D8"],
       legend: {
         show: true,
       },
       toolbar: {
         show: false,
       },
       tooltip: {
         theme: "dark",
         marker: {
           show: true,
         },
         style: {
           fontSize: "12px",
           color: "#0000",
           fontFamily: undefined,
         },
       },
       grid: {
         show: true,
       },
       stroke: {
         show: true,
         colors: ["transparent"],
         width: 5,
       },
       dataLabels: {
         enabled: false,
       },
       yaxis: {
         labels: {
           show: true,
           style: {
             colors: "#A3A3A3",
             fontSize: "12px",
             cssClass: "apexcharts-xaxis-label",
           },
         },
         axisBorder: {
           show: true,
         },
         axisTicks: {
           show: true,
         },
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
           "Jan",
           "Feb",
           "Mar",
           "Apr",
           "May",
           "Jun",
           "Jul",
           "Aug",
           "Sep",
           "Oct",
           "Nov",
           "Dec",
         ],
       },
     } as ApexCharts.ApexOptions;

     const series = [
       {
         name: "Assets",
         data: [40, 90, 110, 50, 110, 20, 150, 50, 110, 40, 20, 10],
       },
       {
         name: "Courses",
         data: [70, 120, 100, 50, 90, 130, 80, 50, 60, 120, 10, 10],
       },
     ];
  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px] mb-8 md:mb-0 lg:md-0">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center pt-5 md:pt-0 lg:pt-0">
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
}

export default PurchaseAnalysis