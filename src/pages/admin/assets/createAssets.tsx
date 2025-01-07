import { useState } from "react";
import { useLocation } from "react-router-dom";
import AboutAsset from "./create/about-asset";
import AssetSpecification from "./create/asset-specification";

const CreateAsset = () => {
  const [stepper, setStepper] = useState(1);
  const [assetPayload, setAssetPayload] = useState(null);
  const location = useLocation();
  const selectedAsset = location.search.split("?slug=")[1];

  const handleStepper = (direction: string) => {
    setStepper((prev) => prev + (direction === "next" ? 1 : -1));
  };

  const setPayload = (data: any) => {
    setAssetPayload(data);
  };

  return (
    <div className="rounded-[20px] p-5 mt-10 bg-white dark:bg-black">
      {stepper === 1 && (
        <AboutAsset handleStepper={handleStepper} payload={setPayload} />
      )}
      {stepper === 2 && (
        <AssetSpecification
          handleSteeper={handleStepper}
          payload={assetPayload}
          category={selectedAsset}
        />
      )}
    </div>
  );
};

export default CreateAsset;
