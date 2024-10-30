import {
  hotTrends2,
  trendsAsset2,
  trendsCourses2,
} from "../../../../components/hard-data/dummy";
import AssetList from "../../homepage/marketplace/components/asset-list";

const StoreContent = () => {
  return (
    <div className="dark:bg-[#000000]">
      <div className="section">
        <div className="box grid gap-12">
          {/* assets categories */}
          <div>
            <AssetList name="Hot Trending 🔥" data={hotTrends2} />
          </div>
          <div>
            <AssetList name="Trending Assets 📈" data={trendsAsset2} />
          </div>
          <div>
            <AssetList name="Trending Courses 🧑‍🏫" data={trendsCourses2} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreContent;
