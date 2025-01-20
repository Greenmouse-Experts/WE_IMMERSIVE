import { Controller, useForm } from "react-hook-form";
import Button from "../../../components/ui/Button";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import { useState } from "react";
import { toast } from "react-toastify";
import SelectInput from "../../../components/ui/SelectInput";
import { useMutation } from "@tanstack/react-query";
import { BeatLoader } from "react-spinners";
import { createSubscription } from "../../../api/admin";


const CreateSubscription = () => {
    const [isBusy, setIsBusy] = useState<boolean>(false);

    const allowAuctionArray = [
        { name: 'True', value: true },
        { name: 'False', value: false }
    ];


    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
        defaultValues: {
            name: "",
            duration: "",
            price: "",
            productLimit: "",
            allowsAuction: false,
            auctionProductLimit: ""
        },
    });


    const onSubmit = (formData: any) => {
        const payload = {
            name: formData.name,
            duration: Number(formData.duration),
            price: Number(formData.price),
            productLimit: Number(formData.productLimit),
            allowsAuction: formData.allowsAuction.toLowerCase() === "true",
            auctionProductLimit: formData.auctionProductLimit
        };

        mutation.mutate(payload)
    };


    const mutation = useMutation({
        mutationFn:
            createSubscription,
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
            <p className="fw-600 text-sm text-grey">Create Subscription</p>

            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                <div className="flex flex-col gap-4 mt-5">
                    <Controller
                        name="name"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Please enter name of plan",
                            },
                        }}
                        render={({ field }) => (
                            <TextInput
                                type={InputType.text}
                                label="Plan Name"
                                placeholder="Enter plan name"
                                error={errors.name?.message}
                                {...field}
                                ref={null}
                            />
                        )}
                    />

                    <Controller
                        name="duration"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Please enter plan duration",
                            },
                        }}
                        render={({ field }) => (
                            <TextInput
                                type={InputType.text}
                                label="Plan Duration"
                                placeholder="Enter Plan Duration (months)"
                                error={errors.duration?.message}
                                {...field}
                                ref={null}
                            />
                        )}
                    />

                    <Controller
                        name="productLimit"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Please enter product limit",
                            },
                        }}
                        render={({ field }) => (
                            <TextInput
                                type={InputType.text}
                                label="Product Limit"
                                placeholder="Enter Product Limit"
                                error={errors.productLimit?.message}
                                {...field}
                                ref={null}
                            />
                        )}
                    />

                    <Controller
                        name="allowsAuction"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "This field is required",
                            },
                        }}
                        render={({ field }) => (
                            <SelectInput
                                label="Allow Auction"
                                list={allowAuctionArray}
                                placeholder="Allow Auction ?"
                                // icon={
                                //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                                // }
                                error={errors.allowsAuction?.message}
                                {...field}
                            />
                        )}
                    />

                    <Controller
                        name="auctionProductLimit"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Please enter auction product limit",
                            },
                        }}
                        render={({ field }) => (
                            <TextInput
                                type={InputType.text}
                                label="Auction Product Limit"
                                placeholder="Enter Auction Product Limit"
                                error={errors.auctionProductLimit?.message}
                                {...field}
                                ref={null}
                            />
                        )}
                    />

                    <Controller
                        name="price"
                        control={control}
                        rules={{
                            required: {
                                value: true,
                                message: "Please enter price",
                            },
                        }}
                        render={({ field }) => (
                            <TextInput
                                type={InputType.text}
                                label="Plan Price"
                                placeholder="Enter Plan Price"
                                error={errors.price?.message}
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
                        title={isBusy ? <BeatLoader size={12} color="white" /> : "Create Plan"}
                        size={14}
                        disabled={!isValid}
                        altClassName="btn-primary px-10 py-2 whitespace-nowrap"
                    />

                </div>
            </form>
        </div>
    );
};

export default CreateSubscription;
