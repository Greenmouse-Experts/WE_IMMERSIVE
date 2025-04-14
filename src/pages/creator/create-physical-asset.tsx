import { useState } from "react";
import AboutPhysicalAsset from "../../modules/creator/create/about-physical-asset";
import PhysicalAssetSpecification from "../../modules/creator/create/asset-physical-specification";

const CreatePhysicalAsset = () => {
  const [stepper, setStepper] = useState(1);
  const [assetPayload, setAssetPayload] = useState(null);

  const handleStepper = (direction: string) => {
    setStepper((prev) => prev + (direction === "next" ? 1 : -1));
  };

  const setPayload = (data: any) => {
    setAssetPayload(data);
  };

  return (
    <div className="rounded-[20px] p-5 bg-white dark:bg-black">
      {stepper === 1 && (
        <AboutPhysicalAsset
          handleStepper={handleStepper}
          payload={setPayload}
        />
      )}
      {stepper === 2 && (
        <PhysicalAssetSpecification
          handleSteeper={handleStepper}
          payload={assetPayload}
        />
      )}
    </div>
  );
};

export default CreatePhysicalAsset;
