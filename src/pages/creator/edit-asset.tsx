import { useState } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import AboutAsset from "../../modules/creator/create/about-asset";
import AssetSpecification from "../../modules/creator/create/asset-specification";
import { getAssetDetails } from "../../api/creator";
import { useParams } from "react-router-dom";
import Loader from "../../components/reusables/loader";
import AboutAssetEdit from "../../modules/creator/create/about-asset-edit";
import AssetSpecificationEdit from "../../modules/creator/create/asset-specification-edit";

interface EditAssetItemProps {
  item: { title: string; img: string; desc: string; selected: boolean };
  handleSelect: (title: string) => void;
  isSelected: boolean;
}
const EditAsset = () => {
  // const CreateAssetItem = ({
  //   item,
  //   handleSelect,
  //   isSelected,
  // }: EditAssetItemProps) => {
  //   return (
  //     <div
  //       onClick={() => handleSelect(item.title)}
  //       className={`border ${
  //         isSelected ? "border-primary" : "border-[#C4C4C4]"
  //       }
  //         rounded-[20px]  p-4 py-12 flex flex-col gap-3 items-center relative cursor-pointer`}
  //     >
  //       <div className="absolute top-4 right-4">
  //         {isSelected ? (
  //           <IoMdRadioButtonOn size={25} className="text-primary" />
  //         ) : (
  //           <IoMdRadioButtonOff size={25} color="#7D7C7C" />
  //         )}
  //       </div>
  //       <img src={item.img} alt="" className="w-[81px] h-[73px]" />
  //       <p className="text-lg unbound fw-500">{item.title}</p>
  //       <p className="text-center">{item.desc}</p>
  //     </div>
  //   );
  // };
  const [selectedAsset, setSelectedAsset] = useState("Course");
  const [stepper, setStepper] = useState(1);
  const [assetPayload, setAssetPayload] = useState(null);

  const { assetId } = useParams();

  const { data: assetDetails, isLoading } = getAssetDetails(assetId);

  console.log(assetDetails);

  if (isLoading) return <Loader />;

  const handleSelect = (itemName: string) => {
    setSelectedAsset(itemName);
  };

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
          category={selectedAsset}
          assetDetails={assetDetails}
        />
      )}
    </div>
  );
};

export default EditAsset;
