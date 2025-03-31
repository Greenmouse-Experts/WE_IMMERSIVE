import { useState } from "react";
import CreateAssetItem from "./CreateAssetItem";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";

const CreateWithAISelect = () => {
  const createList = [
    {
      title: "Text to 3D",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1742306202/Group_1171275571_epf0oe.png",
      desc: "Create detailed asset from simple text prompts",
      selected: false,
      id: "text-to-model",
    },
    {
      title: "Image to 3D",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1742306202/image_5_kanpax.png",
      desc: "CTurn your image, artwork  detailed asset from simple text prompts",
      selected: false,
      id: "image-to-model",
    },
    {
      title: "Text to Speech",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1743089279/image_10_qhekmz.png",
      desc: "Turn your text to speech and voices in different languages and voice textures",
      selected: false,
      id: "text-to-speech",
    },
  ];
  const [selectedType, setSelectedType] = useState("Text to 3D");
  const handleSelect = (itemName: string) => {
    console.log("handleSelect", itemName)
    setSelectedType(itemName);
  };
  const queryParams =
    selectedType === "Text to 3D"
      ? "text-to-3d"
      : selectedType === "Image to 3D"
      ? "image-to-3d"
      : selectedType === "Text to Speech"
      ? "text-to-speech"
      : "";
     
  const navigate = useNavigate();
  return (
    <div className="p-14 bg-white dark:bg-[#15171E]">
      <div className="mb-14">
        <h4 className="unbound text-[#06052A]">Create with AI</h4>
        <p className="text-base fw-600 text-[#06052A] mt-3">
          Choose the style you want to use ie text to image and more
        </p>
      </div>
      <div className="mt-10 flex flex-col md:flex-row justify-between gap-14 ">
        {createList.map((item, index) => (
          <CreateAssetItem
            handleSelect={handleSelect}
            key={index}
            item={item}
            isSelected={selectedType === item.title}
            altImgStyle="w-[133px] h-[50px]"
          />
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <Button
          style={{ width: "243px" }}
          title="Proceed"
          withArrows
          size={14}
          onClick={() => navigate(`${queryParams}`)}
          // width={243}
          // disabled={!isValid}
          // altClassName="btn-primary px-10 py-2 whitespace-nowrap"
        />
      </div>
    </div>
  );
};

export default CreateWithAISelect;
