import { Controller, useForm } from "react-hook-form";
import Button from "../../../components/ui/Button";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import SelectInput from "../../../components/ui/SelectInput";
import { useGetData } from "../../../hooks/useGetData";
import { useMutation } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import { createJob, getJobCategory } from "../../../api";
import ReactQuill from "react-quill";
import { uploadImage } from "../../../helpers";
import { useNavigate } from "react-router-dom";

const CreateJob = () => {
  const jobCategory = useGetData(["jobCategory"], getJobCategory);
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [jobDescription, setJobDescription] = useState("");
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const [categoryOptions, setCategoryOptions] = useState<
    { name: string; value: string }[]
  >([]);

  useEffect(() => {
    if (jobCategory.data) {
      const options = jobCategory.data.data.map((category: any) => ({
        name: category.name,
        value: category.id,
      }));
      setCategoryOptions(options);
    }
  }, [jobCategory.data]);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    register,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      location: "",
      jobType: "",
      workplaceType: "",
      company: "",
      description: "",
      category: "",
      applyMethod: "",
      applyLink: "",
    },
  });

  const applyMethod = watch("applyMethod");

  const onSubmit = (formData: any) => {
    const categoryId =
      categoryOptions.find((option) => option?.name === formData.category)
        ?.value || "";

    const payload = {
      categoryId: categoryId,
      title: formData.title,
      company: formData.company,
      workplaceType: formData.workplaceType,
      location: formData.location,
      jobType: formData.jobType,
      category: formData.category,
      description: jobDescription,
      logo: thumbnail,
      applyLink: formData.applyLink,
    };
    if (thumbnail === "/creator/jobs") {
      toast.error("Please upload asset file");
    } else {
      mutation.mutate(payload, {
        onSuccess: () => {
          reset(); // Reset the form on success
          navigate(-1);
        },
      });
    }
  };

  const mutation = useMutation({
    mutationFn: createJob,
    onSuccess: (data: any) => {
      toast.success(data.message);
      setIsBusy(false); // Hide loader
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
      setIsBusy(false); // Hide loader
    },
    onSettled: () => {
      setIsBusy(false); // Hide loader
    },
  });

  const handleThumbnailChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
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
    <div className="rounded-[20px] p-5 mt-10 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 shadow-sm">
      <p className="fw-600 text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wide">
        POST A JOB
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mx-auto px-2 pb-5 md:p-8 lg:p-8 bg-white dark:bg-gray-900 rounded-[30px] shadow-md mt-5 border border-gray-100 dark:border-gray-800"
      >
        {/* Job Title */}
        <Controller
          name="title"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Job title is required",
            },
          }}
          render={({ field }) => (
            <TextInput
              disabled={isBusy}
              type={InputType.text}
              label="Job Title"
              placeholder="e.g. Senior Product Designer"
              error={errors.title?.message}
              {...field}
            />
          )}
        />

        {/* Job Description */}
        <div className="mt-4">
          <label className="block text-[16px] md:text-[15px] lg:text-[15px] text-gray-700 dark:text-gray-300 font-[500] mb-2">
            Job Description
          </label>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden border border-gray-200 dark:border-gray-600">
            <ReactQuill
              value={jobDescription}
              onChange={(value) => setJobDescription(value)}
              className="bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100"
              theme="snow"
              modules={{
                toolbar: [
                  [{ header: [1, 2, false] }],
                  ["bold", "italic", "underline"],
                  [{ list: "ordered" }, { list: "bullet" }],
                  ["clean"],
                ],
              }}
            />
          </div>
        </div>

        {/* Job category */}
        {!jobCategory.data ? (
          <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400">
              Loading category...
            </p>
          </div>
        ) : (
          <Controller
            name="category"
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
                list={categoryOptions}
                placeholder="Select Job Category"
                error={errors.category?.message}
                {...field}
              />
            )}
          />
        )}

        {/* Workplace Type */}
        <Controller
          name="workplaceType"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Workplace type is required",
            },
          }}
          render={({ field }) => (
            <SelectInput
              label="Workplace Type"
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
              placeholder="Select workplace type"
              error={errors.workplaceType?.message}
              {...field}
            />
          )}
        />

        {/* Job Location */}
        <Controller
          name="location"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Location is required",
            },
          }}
          render={({ field }) => (
            <TextInput
              disabled={isBusy}
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
              disabled={isBusy}
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
              error={errors.jobType?.message}
              {...field}
            />
          )}
        />

        {/* Where can applicants apply? */}
        <div className="mt-4">
          <label className="block text-[16px] md:text-[15px] lg:text-[15px] text-gray-700 dark:text-gray-300 font-[500] mb-3">
            Where can applicants apply?
          </label>
          <div className="flex flex-col gap-3">
            <label className="flex items-center text-[14px] md:text-[15px] lg:text-[15px] text-gray-700 dark:text-gray-300 font-[500] border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 rounded-[10px] cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <input
                disabled={isBusy}
                type="radio"
                value="platform"
                {...register("applyMethod", {
                  required: "Select an application method",
                })}
                className="mr-3 w-4 h-4 text-blue-600 dark:text-blue-400"
              />
              Here on WEimmersive platform
            </label>
            <label className="flex items-center text-[14px] md:text-[15px] lg:text-[15px] text-gray-700 dark:text-gray-300 font-[500] border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 px-4 py-3 rounded-[10px] cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
              <input
                disabled={isBusy}
                type="radio"
                value="external"
                {...register("applyMethod")}
                className="mr-3 w-4 h-4 text-blue-600 dark:text-blue-400"
              />
              Enter An External Link
            </label>
          </div>
          {errors.applyMethod?.message && (
            <p className="text-red-500 dark:text-red-400 text-sm mt-2">
              {String(errors.applyMethod.message)}
            </p>
          )}
        </div>

        {/* External Link Input */}
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
                disabled={isBusy}
                type={InputType.text}
                label="Application Link"
                placeholder="Enter application link"
                error={errors.applyLink?.message}
                {...field}
              />
            )}
          />
        )}

        {/* Company Name */}
        <Controller
          name="company"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Company name is required",
            },
          }}
          render={({ field }) => (
            <TextInput
              disabled={isBusy}
              type={InputType.text}
              label="Company Name"
              placeholder="Enter company name"
              error={errors.company?.message}
              {...field}
            />
          )}
        />

        {/* Company Logo Upload */}
        <div className="w-full flex flex-col gap-3 mt-4">
          <p className="text-[16px] md:text-[15px] lg:text-[15px] font-[500] text-gray-700 dark:text-gray-300">
            Company Logo
          </p>
          <div
            className="h-[274px] max-w-[427px] w-full border-2 border-dashed border-blue-300 dark:border-blue-500 bg-gray-50 dark:bg-gray-800 rounded-[10px] flex flex-col items-center justify-center cursor-pointer relative hover:border-blue-400 dark:hover:border-blue-400 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-200 group"
            onClick={() => thumbnailInputRef.current?.click()}
          >
            {thumbnail ? (
              <div className="relative w-full h-full">
                <img
                  src={thumbnail}
                  alt="Company Logo Preview"
                  className="h-full w-full object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 rounded-lg flex items-center justify-center">
                  <p className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 font-medium">
                    Click to change logo
                  </p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center text-center p-6">
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center mb-4">
                  <svg
                    className="w-8 h-8 text-blue-500 dark:text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                    />
                  </svg>
                </div>
                <p className="text-gray-600 dark:text-gray-400 font-medium mb-2">
                  Upload Company Logo
                </p>
                <p className="text-gray-500 dark:text-gray-500 text-sm">
                  Click here to browse and select an image
                </p>
              </div>
            )}
            <input
              type="file"
              ref={thumbnailInputRef}
              onChange={handleThumbnailChange}
              accept="image/*"
              className="hidden"
            />
          </div>

          {loading && (
            <div className="flex items-center justify-center py-2">
              <BeatLoader size={10} color="#3B82F6" />
              <span className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                Uploading...
              </span>
            </div>
          )}

          {error && (
            <p className="text-red-500 dark:text-red-400 text-sm bg-red-50 dark:bg-red-900/20 p-2 rounded border border-red-200 dark:border-red-800">
              {error}
            </p>
          )}

          {thumbnail && (
            <button
              type="button"
              onClick={() => openFilePicker(thumbnailInputRef)}
              className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white rounded-lg transition-colors duration-200 w-fit font-medium"
            >
              Change Logo
            </button>
          )}
        </div>

        {/* Submit Button */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <Button
            title="Post Job »"
            isBusy={mutation.isPending}
            style={{ width: "10rem" }}
          />
        </div>
      </form>
    </div>
  );
};

export default CreateJob;
