import { Controller, useForm, useWatch } from "react-hook-form";
import Button from "../../../components/ui/Button";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import { useEffect, useRef, useState } from "react";
import { toast } from "react-toastify";
import { upload3DModel, uploadImage } from "../../../helpers";
import { ThreeDViewer } from "../../landing/assets/asset-details";
import { Dialog } from "@material-tailwind/react";
import CreateWithAISelect from "../../../components/CreateWithAISelect";
import { getCreatorAssetCategory } from "../../../api/creator";
import SelectInput from "../../../components/ui/SelectInput";
import { BeatLoader } from "react-spinners";
// import { getSubCategories } from "../../../api/general";

interface AboutAssetProps {
  handleStepper: (direction: string) => void;
  payload: any;
}
const AboutAsset = ({ handleStepper, payload }: AboutAssetProps) => {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [modelUrl, setModelUrl] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  const modelInputRef = useRef<HTMLInputElement>(null);
  const { data: assetCategory, isLoading: isGettingCategory } =
    getCreatorAssetCategory();

  // const { data: generalCategory, isPending: isGettingGeneralCategory } =
  //   getSubCategories();

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
      setThumbnail(result.fileUrl);
    } else {
      setError("Thumbnail upload failed.");
    }
  };

  const handleModelChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoading(true);
    setError(null);

    const result = await upload3DModel(event);
    setLoading(false);

    if (result.isSuccess) {
      setModelUrl(result.fileUrl);
    } else {
      setError("Model upload failed.");
    }
  };

  const openFilePicker = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      assetName: "",
      assetDetails: "",
      categoryId: "",
      subcategoryId:""
    },
  });

  const selectedCategoryId = useWatch({ control, name: "categoryId" });

  const [childCategories, setChildCategories] = useState([]);

  // Update children when parent changes
  useEffect(() => {
    if (selectedCategoryId) {
      const selectedCategory = assetCategory.find(
        (cat: any) => cat.id === selectedCategoryId
      );
      setChildCategories(selectedCategory?.children || []);
    } else {
      setChildCategories([]);
    }
  }, [selectedCategoryId, assetCategory]);



  const onSubmit = (formData: any) => {
    payload({
      assetName: formData.assetName,
      assetDetails: formData.assetDetails,
      categoryId: formData.subcategoryId,
      assetUpload: modelUrl,
      assetThumbnail: thumbnail,
    });
    console.log(formData);
    if (modelUrl === "" || thumbnail === "") {
      toast.error("Please upload asset file");
    } else {
      handleStepper("next");
    }
  };

  const [deleteDialog, setShowDeleteDialog] = useState<boolean>(false);

  const handleDeleteModal = () => setShowDeleteDialog(!deleteDialog);
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <p className="fw-600 text-sm text-grey">CREATE</p>
          <p className="unbound text-[#06052A] fw-600 mt-3 text-xl">
            About Asset{" "}
          </p>
        </div>
        <button
          onClick={handleDeleteModal}
          className="border border-primary py-3 px-6 text-primary unbound fw-500 text-[13px] rounded-lg flex gap-3 items-center"
        >
          Create with AI
          <img
            className="w-5 h-5"
            src="https://res.cloudinary.com/do2kojulq/image/upload/v1742304663/Vector_7_ux270h.png"
            alt="star"
          />
        </button>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div className="flex flex-col gap-4 mt-5">
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

          <Controller
            name="assetDetails"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter asset details",
              },
            }}
            render={({ field }) => (
              <TextInput
                className="bg-[#E9EBFB] text-black h-[150px] rounded-[10px]"
                fullWidth={true}
                type={InputType.textarea}
                label="Asset Details"
                placeholder="Description of your asset"
                error={errors.assetDetails?.message}
                {...field}
                ref={null}
              />
            )}
          />
          {/* {isGettingCategory ? (
            <p>Loading asset categories {<BeatLoader />}</p>
          ) : (
            <Controller
              name="categoryId"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "This field is required",
                },
              }}
              render={({ field }) => (
                <SelectInput
                  label="Asset Category"
                  list={assetCategory}
                  placeholder="Choose medium"
                  // icon={
                  //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                  // }
                  error={errors.categoryId?.message}
                  {...field}
                />
              )}
            />
          )} */}

          {isGettingCategory ? (
            <p>
              Loading asset categories <BeatLoader size={8} />
            </p>
          ) : (
            <>
              <Controller
                name="categoryId"
                control={control}
                rules={{
                  required: {
                    value: true,
                    message: "This field is required",
                  },
                }}
                render={({ field }) => (
                  <SelectInput
                    label="Asset Category"
                    list={assetCategory}
                    placeholder="Choose category"
                    error={errors.categoryId?.message}
                    {...field}
                  />
                )}
              />

              {childCategories.length > 0 && (
                <Controller
                  name="subcategoryId"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  }}
                  render={({ field }) => (
                    <SelectInput
                      label="Subcategory"
                      list={childCategories}
                      placeholder="Choose subcategory"
                      error={errors.subcategoryId?.message}
                      {...field}
                    />
                  )}
                />
              )}
            </>
          )}

          <div className="mt-5">
            {/* Upload Thumbnail Section */}
            <div>
              <p>Upload Thumbnail</p>

              <div
                className="h-[274px] w-[427px] border-primary border-dashed border rounded-[10px] overflow-hidden flex flex-col items-center justify-center cursor-pointer relative"
                onClick={() => openFilePicker(thumbnailInputRef)}
              >
                {thumbnail ? (
                  <img
                    src={thumbnail}
                    alt="Thumbnail Preview"
                    className="h-full w-full object-cover rounded-lg"
                  />
                ) : (
                  <img
                    src="https://res.cloudinary.com/do2kojulq/image/upload/v1744902410/Group_1171275478_1_jzfh6b.png"
                    alt="Image Placeholder"
                    className="h-full w-full object-cover"
                  />
                )}
                <input
                  type="file"
                  ref={thumbnailInputRef}
                  onChange={handleThumbnailChange}
                  accept="image/*"
                  className="hidden"
                />
              </div>

              {loading && <p className="mt-2">Uploading...</p>}
              {error && <p className="mt-2 text-red-500">{error}</p>}

              {thumbnail && (
                <button
                  onClick={() => openFilePicker(thumbnailInputRef)}
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Change Thumbnail
                </button>
              )}
            </div>

            {/* Upload Asset (3D Model) Section */}
            <div className="mt-6">
              <p>Upload Asset</p>
              <div
                className="h-[274px] w-[427px] border-primary border-dashed border rounded-[10px] overflow-hidden flex flex-col items-center justify-center cursor-pointer relative"
                onClick={() => openFilePicker(modelInputRef)}
              >
                {modelUrl ? (
                  <ThreeDViewer modelUrl={modelUrl} />
                ) : (
                  <img
                    src="https://res.cloudinary.com/do2kojulq/image/upload/v1740739007/model-placeholder_tpk7em.png"
                    alt="Model Placeholder"
                    className="h-full w-full object-cover"
                  />
                )}
                <input
                  type="file"
                  ref={modelInputRef}
                  onChange={handleModelChange}
                  accept=".glb,.gltf,.obj,.fbx,.usdz"
                  className="hidden"
                />
              </div>

              {loading && <p className="mt-2">Uploading...</p>}
              {error && <p className="mt-2 text-red-500">{error}</p>}

              {modelUrl && (
                <button
                  onClick={() => openFilePicker(modelInputRef)}
                  className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Change File
                </button>
              )}
            </div>
          </div>
        </div>

        <div className=" mt-16 flex w-full justify-between ">
          <Button
            style={{ width: "fit-content" }}
            title="Proceed"
            withArrows
            size={14}
            disabled={!isValid}
            altClassName="btn-primary px-10 py-2 whitespace-nowrap"
          />

          <Button
            style={{ width: "fit-content" }}
            size={14}
            onClick={() => handleStepper("previous")}
            title={"Go Back"}
            altClassName="btn-primary px-10 py-2 flex whitespace-nowrap"
          />
        </div>
      </form>
      <Dialog handler={handleDeleteModal} open={deleteDialog} size="xl">
        <div className="">
          <CreateWithAISelect />
        </div>
      </Dialog>
    </div>
  );
};

export default AboutAsset;
