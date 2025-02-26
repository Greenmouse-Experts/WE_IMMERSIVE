import { Controller, useForm } from "react-hook-form";
import Button from "../../../components/ui/Button";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import Select from 'react-select';  
import DropZone from "../../../components/DropZone";
import { useState } from "react";
import { toast } from "react-toastify";

interface AboutAssetProps {
  handleStepper: (direction: string) => void;
  payload: any;
}

const AboutAsset = ({ handleStepper, payload }: AboutAssetProps) => {
  
  const [files, setFiles] = useState("");

  // const options = [
  //   { value: 'option1'},
  //   { value: 'option2'},
  //   { value: 'option3'},
  // ];

  const {
    control,
    handleSubmit,
    formState: { errors, /*isValid*/ },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      courseName: "",
      courseDecription: "",
      courseCategory:"",
    },
  });

  const handleDrop = (data: any) => {
    setFiles(data);
  };

  const onSubmit = (formData: any) => {
    payload({
      categoryId: "8d649021-958a-485c-95bf-fdcfb41f9604",
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
      <p className="unbound text-[#06052A] fw-600 mt-3">About Course</p>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div className="flex flex-col gap-4 mt-5">
          <Controller
            name="courseName"
            control={control}
            rules={{
              required: {
                value: true,
                message: "What's the name of your course",
              },
            }}
            render={({ field }) => (
              <TextInput
                type={InputType.text}
                label="Course Title"
                placeholder="Enter your course name"
                error={errors.courseName?.message}
                {...field}
                ref={null}
              />
            )}
          />

          <Controller
            name="courseDecription"
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
                label="Describe your course"
                placeholder="Write a thorough description of what your course will contain"
                error={errors.courseDecription?.message}
                {...field}
                ref={null}
              />
            )}
          />

          <div>
          <label className="block mb-2 font-medium text-gray-700">Choose an option:</label>
            <Controller
              name="courseCategory"
              control={control}
              rules={{ 
                required: {
                    value:true, 
                    message: 'Please select Course Category' 
                  }
                }}
                render={({ field }) => (
                  <Select
                    {...field}
                    // options={options}
                    placeholder="Choose course category"
                    classNamePrefix="react-select"
                    isClearable
                  />
                )}
            />
          </div>

          <div>
            <p className="mb-3">Upload Asset</p>

            <div className=" bg-[#E9EBFB] rounded-[10px] sm:w-[400px] w-full h-[254px] border border-dashed border-primary flex flex-col justify-center items-center md:px-24 gap-6">
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

        <div className="mt-16 flex w-full justify-between gap-2">
          <Button
            style={{ width: "fit-content" }}
            title="Proceed"
            withArrows
            size={14}
            // disabled={!isValid}
            altClassName="btn-primary px-10 py-2 whitespace-nowrap"
            onClick={() => handleStepper("next")}
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
