import AssetList from "./components/asset-list";
import { getDigitalAssets, getPhysicalAssets } from "../../../../api";
import { useGetData } from "../../../../hooks/useGetData";

const MarketBody = () => {
  const digitalAssetsQuery = useGetData(["digitalAssets"], getDigitalAssets);
  const physicalAssetsQuery = useGetData(["physicalAssets"], getPhysicalAssets);

  if (digitalAssetsQuery.isLoading || physicalAssetsQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (digitalAssetsQuery.error || physicalAssetsQuery.error) {
    return <p>Error occurred while fetching data!</p>;
  }

  return (
    <div>
      <div className="grid gap-4 lg:gap-7 mt-6">
        {/* assets categories */}
        <div>{/* <AssetList name="Hot Trending 🔥" data={hotTrends}/> */}</div>
        <div className="md:px-20 px-4">
          <AssetList
            name="Explore Digital Assets 📈"
            data={digitalAssetsQuery.data.data}
            classStyle={"text-black dark:text-white"}
          />
        </div>
        <div className="mt-5 md:px-20 px-4 py-7 dark:bg-[rgba(233,235,251,1)] bg-[#000000]">
          <AssetList
            name="Explore Physical Assets 📈"
            data={physicalAssetsQuery.data.data}
            classStyle={"text-white dark:text-black"}
          />
        </div>
        {/*<div>
          <AssetList name="Trending Courses 🧑‍🏫" data={trendsCourses} />
  </div>*/}
      </div>
    </div>
  );
};

export default MarketBody;
