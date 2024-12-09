import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { MdArrowOutward, MdOutlineArrowDropDown } from "react-icons/md";

const MapChart = () => {
  const countryData = [
    { name: "Nigeria", percentage: 30, color: "bg-purple-500" },
    { name: "United Kingdom", percentage: 20, color: "bg-yellow-500" },
    { name: "Canada", percentage: 20, color: "bg-blue-500" },
    { name: "Ghana", percentage: 15, color: "bg-green-500" },
    { name: "Spain", percentage: 15, color: "bg-red-500" },
  ];

  useEffect(() => {
    let root = am5.Root.new("chartdiv");

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5map.MapChart.new(root, {
        panX: "none",
        panY: "none",
        projection: am5map.geoMercator(),
      })
    );


    let polygonSeries = chart.series.push(
      am5map.MapPolygonSeries.new(root, {
        geoJSON: am5geodata_worldLow,
      })
    );

    console.log(polygonSeries)

    let pointSeries = chart.series.push(
      am5map.MapPointSeries.new(root, {
        latitudeField: "latitude",
        longitudeField: "longitude",
      })
    );

    pointSeries.bullets.push(() =>
      am5.Bullet.new(root, {
        sprite: am5.Circle.new(root, {
          radius: 10,
          fill: am5.color(0x6366f1),
          tooltipText: "{name}: {value}",
        }),
      })
    );

    pointSeries.data.setAll([
      { latitude: 9.082, longitude: 8.6753, name: "Nigeria", value: "30%" },
      { latitude: 55.3781, longitude: -3.436, name: "United Kingdom", value: "20%" },
      { latitude: 56.1304, longitude: -106.3468, name: "Canada", value: "20%" },
      { latitude: 7.9465, longitude: -1.0232, name: "Ghana", value: "15%" },
      { latitude: 40.4637, longitude: -3.7492, name: "Spain", value: "15%" },
    ]);

    return () => root.dispose();
  }, []);

  return (
    <div className="flex gap-4 bg-white dark:bg-[#15171E] rounded-[20px]">
      {/* Sidebar */}
      <div className="p-4 w-1/3">
        <p className="text-sm text-[#7F7F7F]">Total revenue</p>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <p className="unbound text-[#06052A] fw-600">$240.8K </p>
            <p className="text-[#14CA74] bg-[#05C16833] px-1 text-[10px] border border-[#05C16833] rounded-[2px] flex items-center">24.6% <MdArrowOutward /></p>
          </div>
          <div className="flex items-center gap-x-4 mt-2">
            <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
              <p className="text-[#2C3E50] fs-300">Export As</p>
              <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
            </div>
          </div>
        </div>
        <ul className="space-y-4">
          {countryData.map((country, index) => (
            <li key={index} className="flex items-center">
              <span className="flex-1 text-base">{country.name}</span>
              <div className="flex-1 bg-gray-300 h-1 rounded overflow-hidden">
                <div
                  className={`${country.color} h-full`}
                  style={{ width: `${country.percentage}%` }}
                ></div>
              </div>
              <span className="ml-2 text-sm">{country.percentage}%</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Map */}
      <div id="chartdiv" style={{ width: "60%", height: "400px" }}></div>
    </div>
  );
};

export default MapChart;
