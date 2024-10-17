import { hotTrends, trendsAsset, trendsCourses } from "../../../../components/hard-data/dummy";
import AssetList from "./components/asset-list";
import MarketBar from "./components/market-bar";

const MarketBody = () => {
  return (
    <div>
      <MarketBar />
      <div className="grid gap-4 lg:gap-7 mt-6">
        {/* assets categories */}
        <div>
            <AssetList name="Hot Trending 🔥" data={hotTrends}/>
        </div>
        <div>
            <AssetList name="Trending Assets 📈" data={trendsAsset}/>
        </div>
        <div>
            <AssetList name="Trending Courses 🧑‍🏫" data={trendsCourses}/>
        </div>
      </div>
    </div>
  );
};

export default MarketBody;
