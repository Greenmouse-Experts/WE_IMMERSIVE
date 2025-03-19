import { useState } from "react";
// import Button from "../../components/ui/Button";
// import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../components/ui/TextInput";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoCopyOutline } from "react-icons/io5";
import { TbReload } from "react-icons/tb";
import ArrowsIcon from "../../assets/svg-components/arrows";

const CreateAssetWithAiText = () => {
  // const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Minimal");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      assetName: "",
      prompt: "",
    },
  });
  const barItems = ["Minimal", "Sketchy", "Cartoon"];

  const onSubmit = () => {};

  return (
    <div>
      <div className="mt-2">
        <h4 className=" ">Generate Text to 3D Asset</h4>
      </div>

      <div className="flex mt-5 w-full gap-10 items-center">
        <form onSubmit={handleSubmit(onSubmit)} className="flex-1">
          <div>
            <Controller
              name="assetName"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter asset name",
                },
              }}
              render={({ field }) => (
                <TextInput
                  type={InputType.text}
                  label="Asset Name"
                  placeholder="Enter asset name"
                  error={errors.assetName?.message}
                  {...field}
                  ref={null}
                />
              )}
            />

            <div className="relative mt-8">
              <Controller
                name="prompt"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "AI prompt is required",
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    className="bg-[#E9EBFB] h-[400px] rounded-[10px]"
                    fullWidth={true}
                    type={InputType.textarea}
                    label="Prompt"
                    placeholder="Enter prompt to generate asset "
                    error={errors.prompt?.message}
                    {...field}
                    ref={null}
                    maxLength={500}
                  />
                )}
              />
              <div
                className={`flex items-center justify-between border border-[#AFAEAE] rounded-[10px] w-[185px] h-10 px-3 absolute bottom-4 left-3 ${
                  errors.prompt?.message && "bottom-10"
                }`}
              >
                <div className="flex items-center gap-2">
                  <GoArrowLeft className="text-primary cursor-pointer" />
                  <GoArrowRight className="text-primary cursor-pointer" />
                </div>
                <div className="bg-[#CCCCCC] w-[1px] h-6" />
                <div>
                  <IoCopyOutline
                    size={18}
                    className="text-primary cursor-pointer"
                  />
                </div>
                <div className="bg-[#CCCCCC] w-[1px] h-6" />
                <div>
                  <TbReload size={20} className="text-primary cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 ">
            <p className=" text-greyLight">Art Style</p>
            <div className="flex overflow-auto md:px-0 px-3 scroll-pro gap-x-5 mt-2">
              {barItems.map((item, key) => (
                <div
                  className={` cursor-pointer w-fit rounded-[8px]  flex items-center whitespace-nowrap gap-x-4 px-4 lg:px-6 text-[#696767] py-2 border ${
                    activeTab === item ? "border-gray-600" : "border-gray-600"
                  }`}
                  key={key}
                  onClick={() => setActiveTab(item)}
                >
                  <ArrowsIcon color="#696767" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <button
            type="submit"
            className="btn-primary text-xs unbound fw-500 w-full h-10 mt-10"
          >
            Generate
          </button>
        </form>
        <div className="flex-1 grid grid-cols-2 gap-6 h-full">
          <div className="bg-[#D9D9D9] rounded-[20px] flex justify-center items-center h-[300px]">
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1742310182/Vector_8_abep5r.png"
              alt=""
              className="w-16"
            />
          </div>
          <div className="bg-[#D9D9D9] rounded-[20px] flex justify-center items-center h-[300px]">
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1742310182/Vector_8_abep5r.png"
              alt=""
              className="w-16"
            />
          </div>
          <div className="bg-[#D9D9D9] rounded-[20px] flex justify-center items-center h-[300px]">
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1742310182/Vector_8_abep5r.png"
              alt=""
              className="w-16"
            />
          </div>
          <div className="bg-[#D9D9D9] rounded-[20px] flex justify-center items-center h-[300px]">
            <img
              src="https://res.cloudinary.com/do2kojulq/image/upload/v1742310182/Vector_8_abep5r.png"
              alt=""
              className="w-16"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAssetWithAiText;
