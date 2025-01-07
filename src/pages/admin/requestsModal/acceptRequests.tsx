import FormContainer from "../../../modules/auth/form-container";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Button from "../../../components/ui/Button";
import { BeatLoader } from "react-spinners";
import { useState } from "react";
import { updateDigitalRequests, updatePhysicalRequests } from "../../../api/admin";

const AcceptRequets = ({ onClose, assetData }: { onClose: (status: boolean) => void; assetData: any }) => {
    const [isBusy, setIsBusy] = useState<boolean>(false);

    const {
        control,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: "onChange",
        defaultValues: {
            adminNote: "",
        },
    });

    const mutation = useMutation({
        mutationFn: assetData?.asset.assetType === "digital asset" ? updateDigitalRequests : updatePhysicalRequests,
        onSuccess: (data: any) => {
            toast.success(data.message);
            onClose(true);
        },
        onError: (error: any) => {
            toast.error(error.response.data.message);
            setIsBusy(false); // Hide loader
        },
        onSettled: () => {
            setIsBusy(false); // Hide loader
        },
    });

    const onSubmit = (formData: any) => {
        setIsBusy(true); // Show loader
        mutation.mutate({ ...formData, assetId: assetData?.asset.id, status: "published" });
    };

    return (
        <>
            <div className="w-full">
                <div className="mt-3">
                    <FormContainer>
                        <div className="px-2">
                            <p className="unbound fw-500 lg:text-lg mb-4">
                                Accept Upload Request
                            </p>
                            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                                <div className="relative">
                                    <Controller
                                        name="adminNote"
                                        control={control}
                                        rules={{
                                            required: {
                                                value: true,
                                                message: "Please Leave a note for the creator",
                                            },
                                        }}
                                        render={({ field }) => (
                                            <TextInput
                                                label="Admin Note"
                                                placeholder="Leave a note for the creator"
                                                type={InputType.text}
                                                error={errors.adminNote?.message}
                                                {...field}
                                                ref={null}
                                            />
                                        )}
                                    />
                                </div>
                                <div className="mt-4">
                                    <Button
                                        withArrows
                                        title={
                                            isBusy ? <BeatLoader size={12} color="white" /> : "Submit"
                                        }
                                        altClassName="btn-primary w-full py-3"
                                        disabled={!isValid || isBusy}
                                    />
                                </div>
                            </form>
                        </div>
                    </FormContainer>
                </div>
            </div>
        </>
    );
};

export default AcceptRequets;
