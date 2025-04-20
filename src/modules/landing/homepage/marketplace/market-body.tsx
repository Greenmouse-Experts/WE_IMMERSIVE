import AssetList from "./components/asset-list";
import { getDigitalAssets, getPhysicalAssets } from "../../../../api";
import { useGetData } from "../../../../hooks/useGetData";
import { IAsset } from "../../../../types/asset.types";
import { getGeneralCourses } from "../../../../api/general";
import Loader from "../../../../components/reusables/loader";
import { ICategoryChildren } from "../../../../types/category.types";
// import PhysicalAssetList from "./components/physical-asset-list";

interface MarketBodyProps {
  activeTab: ICategoryChildren;
}
const MarketBody = ({ activeTab }: MarketBodyProps) => {
  const { data: courses, isLoading } = getGeneralCourses();
  const digitalAssetsQuery = useGetData(["digitalAssets"], getDigitalAssets);
  const physicalAssetsQuery = useGetData(["physicalAssets"], getPhysicalAssets);

  if (
    digitalAssetsQuery.isLoading ||
    physicalAssetsQuery.isLoading ||
    isLoading
  ) {
    return (
      <div className="flex items-center justify-center">
        <Loader />
      </div>
    );
  }

  if (digitalAssetsQuery.error || physicalAssetsQuery.error) {
    return <p>Error occurred while fetching data!</p>;
  }
  const mergedAssets = [
    ...(digitalAssetsQuery?.data?.data || []).map((item: IAsset) => ({
      ...item,
      type: "digital",
    })),
    ...(physicalAssetsQuery?.data?.data || []).map((item: IAsset) => ({
      ...item,
      type: "physical",
    })),
    ...(courses || []).map((item: IAsset) => ({ ...item, type: "courses" })),
  ];

  return (
    <div>
      <div className="grid gap-4 lg:gap-7 mt-6">
        {/* assets categories */}
        <div>{/* <AssetList name="Hot Trending 🔥" data={hotTrends}/> */}</div>

        <div className="md:px-20 px-4">
          <AssetList
            activeTab={activeTab}
            data={mergedAssets}
            classStyle={"text-black dark:text-white"}
          />
        </div>

        {/* <div className="mt-5 md:px-20 px-4 py-7 dark:bg-[rgba(233,235,251,1)] bg-[#000000]">
          <PhysicalAssetList
            activeTab={activeTab}
            name="Explore Physical Assets 📈"
            data={physicalAssetsQuery.data.data}
            classStyle={"text-white dark:text-black"}
          />
        </div> */}
      </div>
    </div>
  );
};

export default MarketBody;
