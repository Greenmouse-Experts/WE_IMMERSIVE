import { useState } from "react";
import { getAssetDetails } from "../../api/creator";
import { useParams } from "react-router-dom";
import Loader from "../../components/reusables/loader";
import AboutAssetEdit from "../../modules/creator/create/about-asset-edit";
import AssetSpecificationEdit from "../../modules/creator/create/asset-specification-edit";


const EditAsset = () => {


  const [stepper, setStepper] = useState(1);
  const [assetPayload, setAssetPayload] = useState(null);

  const { assetId } = useParams();

  const { data: assetDetails, isLoading } = getAssetDetails(assetId);


  if (isLoading) return <Loader />;

 
  const handleStepper = (direction: string) => {
    setStepper((prev) => prev + (direction === "next" ? 1 : -1));
  };

  const setPayload = (data: any) => {
    setAssetPayload(data);
  };

  return (
    <div className="rounded-[20px] p-5 bg-white dark:bg-black">
      {stepper === 1 && (
        <AboutAssetEdit
          handleStepper={handleStepper}
          payload={setPayload}
          assetDetails={assetDetails}
        />
      )}
      {stepper === 2 && (
        <AssetSpecificationEdit
          handleSteeper={handleStepper}
          payload={assetPayload}
          assetDetails={assetDetails}
        />
      )}
    </div>
  );
};

export default EditAsset;
