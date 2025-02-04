import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import SelectInput from "../../../components/ui/SelectInput";
import Button from "../../../components/ui/Button";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { useMutation } from "@tanstack/react-query";
import { createCourseBasic } from "../../../api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const CreateCourse = () => {
    const [isBusy, setIsBusy] = useState<boolean>(false);
    const navigate = useNavigate();

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
        defaultValues: {
            title: "",
            subtitle: "",
            description: "",
            language: "",
            whatToLearn: "",
            requirement: "",
            level: "",
            currency: "",
            price: "",
        },
    });


    const onSubmit = (formData: any) => {
        const courseId = localStorage.getItem("courseId");
        const categoryId = localStorage.getItem("categoryId");

        if (courseId && categoryId) {
            const payload = {
                ...formData,
                courseId: JSON.parse(courseId),
                categoryId: JSON.parse(categoryId)
            }
            mutation.mutate(payload, {
                onSuccess: () => {
                    navigate('modules')
                },
            });
        }
    }


    const mutation = useMutation({
        mutationFn:
            createCourseBasic,
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
        <div className="rounded-[20px] py-5 px-7 md:w-3/4 w-full bg-white dark:bg-black">
            <p className="fw-600 text-sm text-grey">CREATE COURSE</p>

            <div className="w-full">
                <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                    <div className="flex flex-col gap-4 mt-5">
                        <Controller
                            name="title"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Please enter course title",
                                },
                            }}
                            render={({ field }) => (
                                <TextInput
                                    type={InputType.text}
                                    label="Course Title"
                                    placeholder="Enter course title"
                                    error={errors.title?.message}
                                    {...field}
                                    ref={null}
                                />
                            )}
                        />


                        <Controller
                            name="subtitle"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Please enter subtitle",
                                },
                            }}
                            render={({ field }) => (
                                <TextInput
                                    type={InputType.text}
                                    label="Course SubTitle"
                                    placeholder="Enter course subtitle"
                                    error={errors.subtitle?.message}
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
                                    message: "Please enter course description",
                                },
                            }}
                            render={({ field }) => (
                                <TextInput
                                    className="bg-[#E9EBFB] h-[150px] w-full focus:outline-none rounded-[10px]"
                                    type={InputType.textarea}
                                    label="Course Description"
                                    placeholder="Enter course description"
                                    error={errors.description?.message}
                                    {...field}
                                    ref={null}
                                />
                            )}
                        />

                        <Controller
                            name="language"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Please enter language",
                                },
                            }}
                            render={({ field }) => (
                                <TextInput
                                    type={InputType.text}
                                    label="Course Language"
                                    placeholder="Enter course language"
                                    error={errors.language?.message}
                                    {...field}
                                    ref={null}
                                />
                            )}
                        />


                        <Controller
                            name="whatToLearn"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Please enter what to learn",
                                },
                            }}
                            render={({ field }) => (
                                <TextInput
                                    type={InputType.text}
                                    label="What to Learn"
                                    placeholder="Enter what to learn"
                                    error={errors.whatToLearn?.message}
                                    {...field}
                                    ref={null}
                                />
                            )}
                        />


                        <Controller
                            name="requirement"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Please enter requirement",
                                },
                            }}
                            render={({ field }) => (
                                <TextInput
                                    type={InputType.text}
                                    label="Course Requirement"
                                    placeholder="Enter course requirement"
                                    error={errors.requirement?.message}
                                    {...field}
                                    ref={null}
                                />
                            )}
                        />


                        <Controller
                            name="level"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Please enter course level",
                                },
                            }}
                            render={({ field }) => (
                                <TextInput
                                    type={InputType.text}
                                    label="Course Level"
                                    placeholder="Enter course level"
                                    error={errors.level?.message}
                                    {...field}
                                    ref={null}
                                />
                            )}
                        />

                        <Controller
                            name="currency"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "This field is required",
                                },
                            }}
                            render={({ field }) => (
                                <SelectInput
                                    label="Currency"
                                    list={[
                                        {
                                            id: "₦",
                                            name: "₦"
                                        },
                                        {
                                            id: "$",
                                            name: "$"
                                        },
                                        {
                                            id: "€",
                                            name: "€",
                                        },
                                        {
                                            id: "£",
                                            name: "£"
                                        },
                                        {
                                            id: "¥",
                                            name: "¥"
                                        }
                                    ]}
                                    placeholder="Select Currency"
                                    // icon={
                                    //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                                    // }
                                    error={errors.currency?.message}
                                    {...field}
                                />
                            )}
                        />

                        <Controller
                            name="price"
                            control={control}
                            rules={{
                                required: {
                                    value: true,
                                    message: "Please enter course price",
                                },
                            }}
                            render={({ field }) => (
                                <TextInput
                                    type={InputType.text}
                                    label="Course Price"
                                    placeholder="Enter course price"
                                    error={errors.price?.message}
                                    {...field}
                                    ref={null}
                                />
                            )}
                        />
                    </div>

                    <div className="mt-5 flex">
                        <Button
                            style={{ width: "fit-content" }}
                            title={isBusy ? <BeatLoader size={12} color="white" /> : "Proceed"}
                            withArrows
                            disabled={!isValid}
                            size={14}
                            altClassName="btn-primary px-10 py-2 whitespace-nowrap"
                        />
                    </div>
                </form>

            </div>

        </div>
    )
};

export default CreateCourse;