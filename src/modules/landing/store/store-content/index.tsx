import { getDigitalAssets, getPhysicalAssets } from "../../../../api";
import { useGetData } from "../../../../hooks/useGetData";
import AssetList from "../../homepage/marketplace/components/asset-list";
import PhysicalAssetList from "../../homepage/marketplace/components/physical-asset-list";

interface MarketBodyProps {
  activeTab: string;
}

const StoreContent = ({ activeTab }: MarketBodyProps) => {
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
              activeTab={activeTab}
              name="Explore Digital Assets 📈"
              data={digitalAssetsQuery?.data?.data}
              classStyle={"text-black dark:text-white"}
            />
          </div>
          <div className="mt-5">
          <PhysicalAssetList
            activeTab={activeTab}
            name="Explore Physical Assets 📈"
            data={physicalAssetsQuery.data.data}
            classStyle={"text-white dark:text-black"}
          />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoreContent;
