import { Controller, useForm } from "react-hook-form";
import Button from "../../../components/ui/Button";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import DropZone from "../../../components/DropZone";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import SelectInput from "../../../components/ui/SelectInput";
import { useGetData } from "../../../hooks/useGetData";
import { useMutation } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import { createJob, getJobCategory } from "../../../api";


const CreateJob = () => {
    const jobCategory = useGetData(["jobCategory"], getJobCategory);
    const [isBusy, setIsBusy] = useState<boolean>(false);

    const [files, setFiles] = useState("");
    const [categoryOptions, setCategoryOptions] = useState<{ name: string; value: string }[]>([]);

    const jobTypeArr = [
        { name: 'Full-time', value: 'Full-time' },
        { name: 'Part-time', value: 'Part-time' }
    ];

    const workPlaceArr = [
        { name: 'Remote', value: 'Remote' },
        { name: 'On-site', value: 'On-site' }
    ];

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
        reset
    } = useForm({
        mode: "onChange",
        defaultValues: {
            title: "",
            location: "",
            jobType: "",
            workplaceType: "",
            company: "",
            description: "",
            category: ""
        },
    });

    const handleDrop = (data: any) => {
        setFiles(data);
    };

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
            description: formData.description,
            logo: files,
        };
        if (files === "") {
            toast.error("Please upload asset file");
        } else {
            mutation.mutate(payload, {
                onSuccess: () => {
                    reset(); // Reset the form on success
                    setFiles(""); // Clear the uploaded file
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



    return (
        <div className="rounded-[20px] p-5 mt-10 bg-white dark:bg-black">
            <p className="fw-600 text-sm text-grey">POST A JOB</p>

            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                <div className="flex flex-col gap-4 mt-5">
                    <Controller
                        name="title"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Please enter job title",
                            },
                        }}
                        render={({ field }) => (
                            <TextInput
                                type={InputType.text}
                                label="Job Title"
                                placeholder="Enter job title"
                                error={errors.title?.message}
                                {...field}
                                ref={null}
                            />
                        )}
                    />



                    <Controller
                        name="description"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Please enter job description",
                            },
                        }}
                        render={({ field }) => (
                            <TextInput
                                className="bg-[#E9EBFB] h-[150px] rounded-[10px]"
                                type={InputType.text}
                                label="Job Description"
                                placeholder="Enter job description"
                                error={errors.description?.message}
                                {...field}
                                ref={null}
                            />
                        )}
                    />



                    <Controller
                        name="location"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Please enter job location",
                            },
                        }}
                        render={({ field }) => (
                            <TextInput
                                type={InputType.text}
                                label="Job Location"
                                placeholder="Enter Job Location"
                                error={errors.location?.message}
                                {...field}
                                ref={null}
                            />
                        )}
                    />


                    <Controller
                        name="jobType"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "This field is required",
                            },
                        }}
                        render={({ field }) => (
                            <SelectInput
                                label="Select JobType"
                                list={jobTypeArr}
                                placeholder="Choose job type"
                                // icon={
                                //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                                // }
                                error={errors.jobType?.message}
                                {...field}
                            />
                        )}
                    />


                    <Controller
                        name="workplaceType"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "This field is required",
                            },
                        }}
                        render={({ field }) => (
                            <SelectInput
                                label="Select Workplace"
                                list={workPlaceArr}
                                placeholder="Choose Workplace"
                                // icon={
                                //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                                // }
                                error={errors.workplaceType?.message}
                                {...field}
                            />
                        )}
                    />


                    <Controller
                        name="category"
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
                                placeholder="Choose job category"
                                // icon={
                                //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                                // }
                                error={errors.category?.message}
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="company"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Please enter company name",
                            },
                        }}
                        render={({ field }) => (
                            <TextInput
                                type={InputType.text}
                                label="Company Name"
                                placeholder="Enter Company Name"
                                error={errors.company?.message}
                                {...field}
                                ref={null}
                            />
                        )}
                    />

                    <div className="mt-4">
                        <p>Company Logo</p>

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
                        withArrows
                        title={isBusy ? <BeatLoader size={12} color="white" /> : "Post Job"}
                        size={14}
                        disabled={!isValid}
                        altClassName="btn-primary px-10 py-2 whitespace-nowrap"
                    />

                </div>
            </form>
        </div>
    );
};

export default CreateJob;
