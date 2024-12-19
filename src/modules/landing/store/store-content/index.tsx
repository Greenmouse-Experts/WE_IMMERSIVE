import { getDigitalAssets, getPhysicalAssets } from "../../../../api";
import { useGetData } from "../../../../hooks/useGetData";
import AssetList from "../../homepage/marketplace/components/asset-list";

const StoreContent = () => {
  const digitalAssetsQuery = useGetData(["digitalAssets"], getDigitalAssets);
  const physicalAssetsQuery = useGetData(["physicalAssets"], getPhysicalAssets);

  if (digitalAssetsQuery.isLoading || physicalAssetsQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (digitalAssetsQuery.error || physicalAssetsQuery.error) {
    return <p>Error occurred while fetching data!</p>;
  }

  return (
    <div className="dark:bg-[#000000]">
      <div className="section">
        <div className="box grid gap-12">
          {/* assets categories */}
          <div>
            <AssetList
              name="Explore Digital Assets 📈"
              data={digitalAssetsQuery.data.data}
              classStyle={"text-black dark:text-white"}
            />
          </div>
          <div className="mt-5">
            <AssetList
              name="Explore Physical Assets 📈"
              data={physicalAssetsQuery.data.data}
              classStyle={"text-black dark:text-white"}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreContent;
