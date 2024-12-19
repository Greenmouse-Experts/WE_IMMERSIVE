import GaugeChart from "react-gauge-chart";

const GaugeProgress = () => {
  return (
    <>
      <h2 className="font-bold mb-2">Performance</h2>
      <div className="w-72 h-96 rounded-lg p-4 flex bg-white dark:bg-[#15171E] flex-col items-center">
        {/* Title */}
        <div className="flex justify-between w-full mb-4">
          <span className="text-sm flex items-center">
            <div
              className="w-3 h-3 bg-blue-500 rounded-full mr-2"
              aria-hidden="true"
            ></div>
            Point Progress
          </span>
          <div className="text-sm dark:bg-white bg-[#15171E] text-white dark:text-[#15171E] px-2 py-1 rounded-lg cursor-pointer">
            Monthly
          </div>
        </div>

        {/* Gauge Chart */}
        <div className="flex justify-center items-center">
          <GaugeChart
            id="gauge-chart"
            nrOfLevels={20}
            percent={0.65} // Adjust percentage (0 to 1)
            colors={["rgba(29, 156, 215, 1)", "rgba(226, 240, 248, 1)"]} // Colors from low to high
            arcWidth={0.3}
            cornerRadius={3}
            needleColor="#FF6700"
            needleBaseColor="#4B5563"
            textColor="transparent"
          />
        </div>

        {/* Label */}
        <div className="text-center mt-6">
          <h3 className="text-lg font-bold">Your Point: 8.966</h3>
          <p className="text-gray-400 text-sm mt-1">
            You are doing well, Keep it up 👍
          </p>
        </div>
      </div>
    </>
  );
};

export default GaugeProgress;
