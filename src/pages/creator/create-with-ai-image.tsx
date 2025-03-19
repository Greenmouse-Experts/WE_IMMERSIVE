import { useRef, useState } from "react";
// import Button from "../../components/ui/Button";
// import { useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../components/ui/TextInput";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import { IoCopyOutline } from "react-icons/io5";
import { TbReload } from "react-icons/tb";
import ArrowsIcon from "../../assets/svg-components/arrows";
import { uploadImage } from "../../helpers";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

const CreateAssetWithAiImage = () => {
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

  const [documentUrl, setDocumentUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const documentUrlInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const onSubmit = () => {
    if(!documentUrl) return toast.error('upload an image')
  };

  const handleThumbnailChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoading(true);
    setError(null);

    const file = event.target.files?.[0];
    if (!file) {
      setLoading(false);
      return;
    }

    const result = await uploadImage(file);
    setLoading(false);

    if (result.isSuccess) {
      setDocumentUrl(result.fileUrl);
    } else {
      setError("Thumbnail upload failed.");
    }
  };

  const openFilePicker = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <div>
      <div className="mt-2">
        <h4 className=" ">Generate ‘Image to 3D’ Asset</h4>
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

            <div className="w-full flex flex-col gap-2 mt-5">
              <p className="mt-4 text-[16px] md:text-[15px] lg:text-[15px] font-[400]">
                Upload Image
              </p>
              <div
                className="h-[274px] w-full bg-[#E9EBFB] border-primary border-dashed border rounded-[10px] flex flex-col items-center justify-center cursor-pointer relative"
                onClick={() => documentUrlInputRef.current?.click()}
              >
                {documentUrl ? (
                  <img
                    src={documentUrl}
                    alt="image Preview"
                    className="h-full w-full object-cover rounded-lg"
                  />
                ) : (
                  <img
                    src="https://res.cloudinary.com/do2kojulq/image/upload/v1742369135/Group_1171275572_kwpd52.png"
                    alt="Image Placeholder"
                    className=" w-[287px] object-cover"
                  />
                )}
                <input
                  type="file"
                  ref={documentUrlInputRef}
                  onChange={handleThumbnailChange}
                  accept="image/*"
                  className="hidden"
                />
              </div>
              {loading && (
                <p className="mt-2">
                  <BeatLoader size={10} />
                </p>
              )}
              {error && <p className="mt-2 text-red-500">{error}</p>}
              {documentUrl && (
                <button
                  onClick={() => openFilePicker(documentUrlInputRef)}
                  className="mt-2 px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-fit"
                >
                  Change Image
                </button>
              )}
            </div>

            <div className="mt-8">
              <div
                className={`flex items-center justify-between border border-[#AFAEAE] rounded-[10px] w-[185px] h-10 px-3 bottom-4 left-3 ${
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

export default CreateAssetWithAiImage;
