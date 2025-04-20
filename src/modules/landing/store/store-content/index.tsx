import { getDigitalAssets, getPhysicalAssets } from "../../../../api";
import { getGeneralCourses } from "../../../../api/general";
import Loader from "../../../../components/reusables/loader";
import { useGetData } from "../../../../hooks/useGetData";
import { IAsset } from "../../../../types/asset.types";
import { ICategoryChildren } from "../../../../types/category.types";
import AssetList from "../../homepage/marketplace/components/asset-list";
// import PhysicalAssetList from "../../homepage/marketplace/components/physical-asset-list";

interface MarketBodyProps {
  activeTab: ICategoryChildren | null;
}

const StoreContent = ({ activeTab }: MarketBodyProps) => {
  const digitalAssetsQuery = useGetData(["digitalAssets"], getDigitalAssets);
  const physicalAssetsQuery = useGetData(["physicalAssets"], getPhysicalAssets);
  const { data: courses, isLoading } = getGeneralCourses();

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
    <div className="dark:bg-[#000000]">
      <div className="section">
        <div className="box grid gap-12">
          {/* assets categories */}
          <div>
            <AssetList
              activeTab={activeTab}
              data={mergedAssets}
              classStyle={"text-black dark:text-white"}
            />
          </div>
          {/* <div className="mt-5">
            <PhysicalAssetList
              activeTab={activeTab}
              name="Explore Physical Assets 📈"
              data={physicalAssetsQuery.data.data}
              classStyle={"text-white dark:text-black"}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default StoreContent;
