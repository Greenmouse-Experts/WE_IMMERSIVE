import { useState } from "react";
import { IoMdRadioButtonOff, IoMdRadioButtonOn } from "react-icons/io";
import Button from "../../components/ui/Button";
import AboutAsset from "../../modules/creator/create/about-asset";
import AssetSpecification from "../../modules/creator/create/asset-specification";

interface  CreateAssetItemProps{
  item: { title: string; img: string; desc: string; selected: boolean };
  handleSelect: (title: string) => void;
  isSelected: boolean;
}
const CreateAsset = () => {

  const CreateAssetItem = ({ item, handleSelect, isSelected }: CreateAssetItemProps) => {
    return (
      <div
        onClick={() => handleSelect(item.title)}
        className={`border ${
          isSelected ? "border-primary" : "border-[#C4C4C4]"
        } 
          rounded-[20px]  p-4 py-12 flex flex-col gap-3 items-center relative cursor-pointer`}
      >
        <div className="absolute top-4 right-4">
          {isSelected ? (
            <IoMdRadioButtonOn size={25} className="text-primary" />
          ) : (
            <IoMdRadioButtonOff size={25} color="#7D7C7C" />
          )}
        </div>
        <img src={item.img} alt="" className="w-[81px] h-[73px]" />
        <p className="text-lg unbound fw-500">{item.title}</p>
        <p className="text-center">{item.desc}</p>
      </div>
    );
  };

  const createList = [
    {
      title: "Course",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1733823284/Group_1000005676_vjz8ip.png",
      desc: "Choose this if you want to up load a course or educational materials",
      selected: false,
    },
    {
      title: "Digital Asset",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1733823284/Group_1000005676_1_lm9e6n.png",
      desc: "Choose this if you want to upload digital assets of all sorts",
      selected: false,
    },
    {
      title: "Physical Asset",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1733823284/Group_1000005676_2_bnfrer.png",
      desc: "Choose this if you want to upload physical assets like VR, etc",
      selected: false,
    },
  ];

  const [selectedAsset, setSelectedAsset] = useState("Course");
  const [stepper, setStepper] = useState(1);

  const handleSelect = (itemName: string) => {
    setSelectedAsset(itemName);
  };

  const handleStepper = (direction: string) => {
    setStepper((prev) => prev + (direction === "next" ? 1 : -1));
  };

  return (
    <div className="rounded-[20px] p-5 bg-white dark:bg-black">
     {stepper === 1 && <div>
        <p className="unbound text-[#06052A] fw-600">Create </p>
        <div className="mt-2">
          <p className="text-base ">
            Choose the category of what you want to upload
          </p>
        </div>

        <div className="mt-10 flex justify-between gap-5 ">
          {createList.map((item, index) => (
            <CreateAssetItem
              handleSelect={handleSelect}
              key={index}
              item={item}
              isSelected={selectedAsset === item.title}
            />
          ))}
          {/* <CreateAssetItem /> */}
        </div>
        <div className=" mt-16 flex justify-center">
          <Button
            onClick={() => handleStepper("next")}
            style={{ width: "fit-content" }}
            title="Proceed"
            withArrows
            size={14}
            altClassName="btn-primary px-10 py-2 whitespace-nowrap"
          />
        </div>
      </div>}
      {stepper === 2 && <AboutAsset  handleStepper={handleStepper}/>}
      {stepper === 3 && <AssetSpecification  handleStepper={handleStepper}/>}
    </div>
  );
};

export default CreateAsset;
