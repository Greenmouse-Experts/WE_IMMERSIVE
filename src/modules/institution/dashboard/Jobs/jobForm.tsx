import { useRef, useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import { MdClose } from "react-icons/md";
import {
  addInstitutionJob,
  getInstitutionJobCategory,
} from "../../../../api/institution";
import { uploadImage } from "../../../../helpers";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../../../components/ui/TextInput";
import SelectInput from "../../../../components/ui/SelectInput";
import { toast } from "react-toastify";
import Button from "../../../../components/ui/Button";
import { BeatLoader } from "react-spinners";

interface activeProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const JobForm: React.FC<activeProps> = ({ setIsActive }) => {
  const [jobDescription, setJobDescription] = useState("");
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const { mutate: addJob, isPending } = addInstitutionJob();
  const { data: jobCategory, isLoading } = getInstitutionJobCategory();

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();

  const applyMethod = watch("applyMethod");

  const onSubmit = (data: any) => {
    if (!thumbnail || !jobDescription) {
      toast.error("Please upload a thumbnail and provide a job description.");
      return;
    }
    addJob(
      {
        ...data,
        description:jobDescription,
        thumbnail,
        categoryId: data.jobCategory,
        title: data.jobTitle,
        company: data.companyName,
        logo: thumbnail,
        location: "lagos",
      },
      {
        onSuccess: () => {
          setIsActive(true);
        },
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
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
      setThumbnail(result.fileUrl);
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
    <div className="min-h-screen bg-gray-100 p-2">
      <div className="mx-auto bg-white rounded-[20px] pt-5 md:p-8 lg:p-8">
        <div className="flex items-center justify-between">
          <h2 className="unbound text-[20px] md:text-[24px] lg:text-[24px] text-center md:text-left lg:text-left font-[600]">
            Post a Job
          </h2>
          <MdClose
            className="size-[30px] text-[red] cursor-pointer"
            onClick={() => setIsActive(true)}
          />
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[100%] md:w-[100%] lg:w-[100%] mx-auto px-2 pb-5 md:p-8 lg:p-8 bg-white rounded-[30px] shadow-md mt-5"
        >
          {/* Job Title */}

          <Controller
            name="jobTitle"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Job title is required",
              },
            }}
            render={({ field }) => (
              <TextInput
                disabled={isPending}
                type={InputType.text}
                label="Job Title"
                placeholder="e.g. Senior Product Designer"
                error={errors.jobTitle?.message}
                {...field}
              />
            )}
          />

          {/* Job Description */}
          <label className="block mt-4 text-[16px] md:text-[15px] lg:text-[15px] text-[#5B5959] font-[500]">
            Job Description
          </label>
          <ReactQuill
            value={jobDescription}
            onChange={(value) => setJobDescription(value)}
            className="mt-5 mb-6 bg-[#E9EBFB]"
          />

          {/* Job category */}

          {isLoading ? (
            <div>
              <p>Loading category...</p>
            </div>
          ) : (
            <Controller
              name="jobCategory"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Job category is required",
                },
              }}
              render={({ field }) => (
                <SelectInput
                  label="Job Category"
                  list={jobCategory}
                  placeholder="Select Job Category"
                  // icon={
                  //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                  // }
                  error={errors.jobCategory?.message}
                  {...field}
                />
              )}
            />
          )}

          {/* Job Location */}

          <Controller
            name="workplaceType"
            control={control}
            rules={{
              required: {
                value: true,
                message: "workplaceType is required",
              },
            }}
            render={({ field }) => (
              <SelectInput
                label="workplaceType"
                list={[
                  {
                    id: "Remote",
                    name: "Remote",
                  },
                  {
                    id: "On-site",
                    name: "On-site",
                  },
                  {
                    id: "Hybrid",
                    name: "Hybrid",
                  },
                ]}
                placeholder="Select workplaceType"
                // icon={
                //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                // }
                error={errors.workplaceType?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="location"
            control={control}
            rules={{
              required: {
                value: true,
                message: "location is required",
              },
            }}
            render={({ field }) => (
              <TextInput
                disabled={isPending}
                type={InputType.text}
                label="Job Location"
                placeholder="Enter job location"
                error={errors.location?.message}
                {...field}
              />
            )}
          />

          {/* Employment Type */}

          <Controller
            name="jobType"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Job type is required",
              },
            }}
            render={({ field }) => (
              <SelectInput
                disabled={isPending}
                label="Job Type"
                list={[
                  {
                    id: "Full-time",
                    name: "Full-time",
                  },
                  {
                    id: "Part-time",
                    name: "Part-time",
                  },
                  {
                    id: "Contract",
                    name: "Contract",
                  },
                  {
                    id: "Internship",
                    name: "Internship",
                  },
                ]}
                placeholder="Select job type"
                // icon={
                //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                // }
                error={errors.jobType?.message}
                {...field}
              />
            )}
          />
          {/* Where can applicants apply? */}
          <label className="block mt-4 text-[16px] md:text-[15px] lg:text-[15px] text-[#5B5959] font-[500]">
            Where can applicants apply?
          </label>
          <div className="flex flex-col gap-4 mt-2 mb-1">
            <label className="flex items-center text-[14px] md:text-[15px] lg:text-[15px] text-[#5B5959] font-[500] border px-3 py-2 rounded-[10px]">
              <input
                disabled={isPending}
                type="radio"
                value="platform"
                {...register("applyMethod", {
                  required: "Select an application method",
                })}
                className="mr-2"
              />
              Here on WEimmersive platform
            </label>
            <label className="flex items-center text-[14px] md:text-[15px] lg:text-[15px] text-[#5B5959] font-[500] border px-3 py-2 rounded-[10px]">
              <input
                disabled={isPending}
                type="radio"
                value="external"
                {...register("applyMethod")}
                className="mr-2"
              />
              Enter An External Link
            </label>
          </div>
          {errors.applyMethod?.message && (
            <p className="text-red-500 text-sm">
              {String(errors.applyMethod.message)}
            </p>
          )}

          {applyMethod === "external" && (
            <Controller
              name="applyLink"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Apply link is required",
                },
                pattern: {
                  value:
                    /^(https?:\/\/)?([\w-]+(\.[\w-]+)+\/?)([\w.,@?^=%&:/~+#-]*[\w@?^=%&/~+#-])?$/,
                  message: "Enter a valid URL",
                },
              }}
              render={({ field }) => (
                <TextInput
                  disabled={isPending}
                  type={InputType.text}
                  label="Application link"
                  placeholder="Enter application link"
                  error={errors.applyLink?.message}
                  {...field}
                />
              )}
            />
          )}

          {/* Company Name */}

          <Controller
            name="companyName"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Company name is required",
              },
            }}
            render={({ field }) => (
              <TextInput
                disabled={isPending}
                type={InputType.text}
                label="Company Name"
                placeholder="Enter company name"
                error={errors.companyName?.message}
                {...field}
              />
            )}
          />

          {/* Company Logo Upload */}
          <div className="w-full flex flex-col gap-2">
            <p className="mt-4 text-[16px] md:text-[15px] lg:text-[15px] font-[500]">
              Company Logo
            </p>
            <div
              className="h-[274px] w-[427px] border-primary border-dashed border rounded-[10px] flex flex-col items-center justify-center cursor-pointer relative"
              onClick={() => thumbnailInputRef.current?.click()}
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
              {loading && (
                <p className="mt-2">
                  <BeatLoader size={10} />
                </p>
              )}
              {error && <p className="mt-2 text-red-500">{error}</p>}
            </div>
            {thumbnail && (
              <button
                onClick={() => openFilePicker(thumbnailInputRef)}
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition w-fit"
              >
                Change Logo
              </button>
            )}
          </div>

          {/* Submit Button */}
          <div className="mt-5">
            <Button
              title={" Post Job »"}
              isBusy={isPending}
              style={{ width: "10rem" }}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobForm;
