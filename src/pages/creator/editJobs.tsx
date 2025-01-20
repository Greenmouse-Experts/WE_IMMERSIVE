import { Controller, useForm } from "react-hook-form";
import Button from "../../components/ui/Button";
import TextInput, { InputType } from "../../components/ui/TextInput";
import { useState } from "react";
import { toast } from "react-toastify";
import SelectInput from "../../components/ui/SelectInput";
import { useMutation } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import { editJob } from "../../api";
import { useParams } from "react-router-dom";


const EditJob = () => {
    const [isBusy, setIsBusy] = useState<boolean>(false);
    const {id} = useParams();

    const rejectionEmailArr = [
        { name: 'True', value: 'True' },
        { name: 'False', value: 'False' }
    ];

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
        defaultValues: {
            skills: "",
            applyLink: "",
            applicantCollectionEmailAddress: "",
            rejectionEmails: false,
            description: ""
        },
    });


    const onSubmit = (formData: any) => {
        const payload = {
            jobId: id,
            skills: formData.skills,
            applyLink: formData.applyLink,
            applicantCollectionEmailAddress: formData.applicantCollectionEmailAddress,
            rejectionEmails: formData.rejectionEmails.toLowerCase() === "true",
            description: formData.description
        };
       mutation.mutate(payload);
    };


    const mutation = useMutation({
        mutationFn:
            editJob,
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
            <p className="fw-600 text-sm text-grey">EDIT JOB</p>

            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                <div className="flex flex-col gap-4 mt-5">
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
                                className="bg-[#E9EBFB] h-[150px] w-full focus:outline-none rounded-[10px]"
                                type={InputType.textarea}
                                label="Job Description"
                                placeholder="Enter job description"
                                error={errors.description?.message}
                                {...field}
                                ref={null}
                            />
                        )}
                    />


                    <Controller
                        name="skills"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "This field is required",
                            },
                        }}
                        render={({ field }) => (
                            <TextInput
                                fullWidth={true}
                                type={InputType.text}
                                label="Skills"
                                placeholder="Enter skills required for this job, kindly seperate with a comma"
                                error={errors.skills?.message}
                                {...field}
                            />
                        )}
                    />


                    <Controller
                        name="rejectionEmails"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "This field is required",
                            },
                        }}
                        render={({ field }) => (
                            <SelectInput
                                label="Rejection Mails"
                                list={rejectionEmailArr}
                                placeholder="Send Rejection Mails?"
                                // icon={
                                //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                                // }
                                error={errors.rejectionEmails?.message}
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="applyLink"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Please enter application link",
                            },
                        }}
                        render={({ field }) => (
                            <TextInput
                                type={InputType.text}
                                label="Application Link"
                                placeholder="Enter Application Link"
                                error={errors.applyLink?.message}
                                {...field}
                                ref={null}
                            />
                        )}
                    />


                    <Controller
                        name="applicantCollectionEmailAddress"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Please enter email address",
                            },
                        }}
                        render={({ field }) => (
                            <TextInput
                                type={InputType.text}
                                label="Applicant Collection Email Address"
                                placeholder="Enter email address to recieve applications"
                                error={errors.applicantCollectionEmailAddress?.message}
                                {...field}
                                ref={null}
                            />
                        )}
                    />

                </div>

                <div className=" mt-16 flex w-full justify-between ">
                    <Button
                        style={{ width: "fit-content" }}
                        withArrows
                        title={isBusy ? <BeatLoader size={12} color="white" /> : "Edit Job"}
                        size={14}
                        disabled={!isValid}
                        altClassName="btn-primary px-10 py-2 whitespace-nowrap"
                    />

                </div>
            </form>
        </div>
    );
};

export default EditJob;
