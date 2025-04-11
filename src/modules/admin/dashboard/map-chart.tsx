import { useEffect } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5map from "@amcharts/amcharts5/map";
import am5geodata_worldLow from "@amcharts/amcharts5-geodata/worldLow";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import { MdArrowOutward, MdOutlineArrowDropDown } from "react-icons/md";
import { getUserByCountry } from "../../../api/admin";
import Loader from "../../../components/reusables/loader";

const MapChart = () => {
  const { data: newUsers, isLoading } = getUserByCountry();

  function getColor(percentage: number): string {
    if (percentage >= 80) return "bg-green";
    if (percentage >= 50) return "bg-yellow-500";
    if (percentage >= 20) return "bg-orange-500";
    return "bg-red-500";
  }
  
  const transformed = newUsers?.map((item:any) => {
    const numericValue = parseInt(item.value.replace('%', ''));
    return {
      ...item,
      color: getColor(numericValue),
    };
  });




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

    pointSeries.data.setAll(newUsers!);

    return () => root.dispose();
  }, []);

  if (isLoading) return <Loader />;

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
          {transformed?.map((country:any, index:number) => (
            <li key={index} className="flex items-center">
              <span className="flex-1 text-base">{country.name}</span>
              <div className="flex-1 bg-gray-300 h-1 rounded overflow-hidden">
                <div
                  className={`${country.color} h-full`}
                  style={{ width: `${country?.value.replace('%', '')}` }}
                ></div>
              </div>
              <span className="ml-2 text-sm">{country?.value} </span>
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
