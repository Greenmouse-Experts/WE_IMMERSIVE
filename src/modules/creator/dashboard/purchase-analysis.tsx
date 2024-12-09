import ApexCharts from "apexcharts";
import Chart from "react-apexcharts";
import { MdArrowOutward } from "react-icons/md";

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
         name: "Ads",
         data: [40, 90, 110, 50, 110, 20, 150, 50, 110, 40, 20, 10],
       },
       {
         name: "Subscriptions",
         data: [70, 120, 100, 50, 90, 130, 80, 50, 60, 120, 10, 10],
       },
     ];
  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
      <p className="text-sm text-[#7F7F7F]">Total profit</p>

      <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <p className="unbound text-[#06052A] fw-600">$144.6K</p>
            <p className="text-[#14CA74] bg-[#05C16833] px-1 text-[10px] border border-[#05C16833] rounded-[2px] flex items-center">24.6% <MdArrowOutward /></p>
          </div>
          <div className="flex items-center gap-x-4 mt-2">
            <div className=" cursor-pointer">
              <p className="text-[#553CF0] text-sm fs-300">View Report</p>
             
            </div>
          </div>
        </div>
        <div className="mt-6">
          {typeof window !== "undefined" && (
            <Chart
              options={options}
              series={series}
              type="bar"
              width="100%"
              height="180px"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default PurchaseAnalysis