import { Controller, useForm } from "react-hook-form";
import Button from "../../../../components/ui/Button";
import TextInput, { InputType } from "../../../../components/ui/TextInput";
import DropZone from "../../../../components/DropZone";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import SelectInput from "../../../../components/ui/SelectInput";
import { useGetData } from "../../../../hooks/useGetData";
import { getAssetCategory } from "../../../../api";

interface AboutAssetProps {
  handleStepper: (direction: string) => void;
  payload: any;
}
const AboutAsset = ({ handleStepper, payload }: AboutAssetProps) => {
  const assetCategory = useGetData(["assetCategory"], getAssetCategory);

  const [files, setFiles] = useState("");
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    if (assetCategory.data) {
      const options = assetCategory.data.data.map((category: any) => ({
        name: category.name,
        value: category.id,
      }));
      setCategoryOptions(options);
    }
  }, [assetCategory.data]);

  console.log(categoryOptions);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      assetName: "",
      assetDetails: "",
      assetCategory: "",
    },
  });

  const handleDrop = (data: any) => {
    setFiles(data);
  };

  const onSubmit = (formData: any) => {
    payload({
      categoryId: formData.assetCategory,
      assetName: formData.assetName,
      assetDetails: formData.assetDetails,
      assetUpload: files,
      assetThumbnail: files,
    });
    if (files === "") {
      toast.error("Please upload asset file");
    } else {
      handleStepper("next");
    }
  };

  return (
    <div>
      <p className="fw-600 text-sm text-grey">CREATE</p>
      <p className="unbound text-[#06052A] fw-600 mt-3">Create </p>

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
                className="bg-[#E9EBFB] h-[150px] rounded-[10px]"
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

          <Controller
            name="assetCategory"
            control={control}
            rules={{
              required: {
                value: true,
                message: "This field is required",
              },
            }}
            render={({ field }) => (
              <SelectInput
                label="Select Category"
                list={categoryOptions}
                placeholder="Choose medium"
                // icon={
                //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                // }
                error={errors.assetCategory?.message}
                {...field}
              />
            )}
          />

          <div>
            <p>Upload Asset</p>

            <div className=" bg-[#E9EBFB] rounded-[10px] sm:w-[400px] w-full h-[254px] border border-dashed border-primary flex flex-col justify-center items-center px-24 gap-6">
              <DropZone onUpload={handleDrop} />
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">
              {files !== "" && (
                <div className="relative">
                  <img
                    src={files}
                    alt="preview"
                    className="w-full h-24 object-cover rounded"
                  />
                </div>
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
    </div>
  );
};

export default AboutAsset;
