
import AssetList from "../../homepage/marketplace/components/asset-list";
import { useGetData } from "../../../../hooks/useGetData";
import { getDigitalAssets, getPhysicalAssets } from "../../../../api";

const AllAssetList = () => {
  

  const digitalAssetsQuery = useGetData(["digitalAssets"], getDigitalAssets);
  const physicalAssetsQuery = useGetData(["physicalAssets"], getPhysicalAssets);

  if (digitalAssetsQuery.isLoading || physicalAssetsQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (digitalAssetsQuery.error || physicalAssetsQuery.error) {
    return <p>Error occurred while fetching data!</p>;
  }

  const assetsData = [...digitalAssetsQuery.data.data, ...physicalAssetsQuery.data.data];

  return (
    <div className="section">
      <div className="box">
        {/* <div className="mt-7 flex gap--x-4 gap-y-7 flex-wrap justify-center">
          {barItems.map((item, key) => (
            <div
              className={`bg-[#15171E] cursor-pointer w-fit rounded-[8px] flex items-center whitespace-nowrap gap-x-4 px-4 lg:px-6 text-[#AEACAC] py-2 border ${
                activeTab === item ? "border-gray-600" : "border-transparent"
              }`}
              key={key}
              onClick={() => setActiveTab(item)}
            >
              <ArrowsIcon color="#AEACAC" />
              {item}
            </div>
          ))}
          <div className="bg-[#15171E] cursor-pointer rounded-[8px] flex items-center whitespace-nowrap lg:px-6 text-[#AEACAC] py-2">
            Learn More
          </div>
        </div> */}
        <div className="mt-12 lg:mt-16">
          <AssetList
            data={assetsData}
            classStyle={"text-black dark:text-white"}
          />
        </div>
      </div>
    </div>
  );
};

export default AllAssetList;
