import { useState } from "react";
import { getPhysicalAssetDetails } from "../../api/creator";
import { useParams } from "react-router-dom";
import Loader from "../../components/reusables/loader";
import AboutPhysicalAssetEdit from "../../modules/creator/create/about-physical-asset-edit";
import PhysicalAssetSpecificationEdit from "../../modules/creator/create/asset-physical-specification-edit";


const EditPhysicalAsset = () => {


  const [stepper, setStepper] = useState(1);
  const [assetPayload, setAssetPayload] = useState(null);

  const { assetId } = useParams();

  const { data: assetDetails, isLoading } = getPhysicalAssetDetails(assetId);


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
        <AboutPhysicalAssetEdit
          handleStepper={handleStepper}
          payload={setPayload}
          assetDetails={assetDetails}
        />
      )}
      {stepper === 2 && (
        <PhysicalAssetSpecificationEdit
          handleSteeper={handleStepper}
          payload={assetPayload}
          assetDetails={assetDetails}
        />
      )}
    </div>
  );
};

export default EditPhysicalAsset;
