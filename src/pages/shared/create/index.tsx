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

    const [categoryOptions, setCategoryOptions] = useState<{ name: string; value: string }[]>([]);

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
        formState: { errors, isValid },
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
            applyMethod:"",
            applyLink:""
        },
    });

    const applyMethod = watch("applyMethod");

    // const handleDrop = (data: any) => {
    //     setFiles(data);
    // };

    const onSubmit = (formData: any) => {
        const categoryId = categoryOptions.find(option => option?.name === formData.category)?.value || "";

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
            applyLink: formData.applyLink
        };
        if (thumbnail === "/creator/jobs") {
            toast.error("Please upload asset file");
        } else {
            mutation.mutate(payload, {
                onSuccess: () => {
                    reset(); // Reset the form on success
                    navigate(-1)

                },
            });
        }
    };


    const mutation = useMutation({
        mutationFn:
            createJob,
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
        <div className="rounded-[20px] p-5 mt-10 bg-white dark:bg-black">
            <p className="fw-600 text-sm text-grey">POST A JOB</p>

            <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-[100%] md:w-[100%] lg:w-[100%] mx-auto px-2 pb-5 md:p-8 lg:p-8 bg-white rounded-[30px] shadow-md mt-5"
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
          <label className="block mt-4 text-[16px] md:text-[15px] lg:text-[15px] text-[#5B5959] font-[500]">
            Job Description
          </label>
          <ReactQuill
            value={jobDescription}
            onChange={(value) => setJobDescription(value)}
            className="mt-5 mb-6 bg-[#E9EBFB]"
          />

          {/* Job category */}

          {!jobCategory.data ? (
            <div>
              <p>Loading category...</p>
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
                  // icon={
                  //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                  // }
                  error={errors.category?.message}
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
                disabled={isBusy}
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
                disabled={isBusy}
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
                  disabled={isBusy}
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
                  src="https://res.cloudinary.com/do2kojulq/image/upload/v1741179955/Group_1171275478_ftrg7a.png"
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
              isBusy={isBusy}
              style={{ width: "10rem" }}
            />
          </div>
        </form>
        </div>
    );
};

export default CreateJob;
