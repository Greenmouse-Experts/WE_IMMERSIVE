import FormContainer from "../../../modules/auth/form-container";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import Button from "../../../components/ui/Button";
import { BeatLoader } from "react-spinners";
import { useState } from "react";
import { createAssetCategory } from "../../../api";

const AssetCategory = ({ onClose }: { onClose: (status: boolean) => void }) => {
  const [isBusy, setIsBusy] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
    },
  });

  const mutation = useMutation({
    mutationFn: createAssetCategory,
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
    mutation.mutate(formData);
  };

  return (
    <>
      <div className="w-full">
        <div className="mt-3">
          <FormContainer>
            <div className="px-2">
              <p className="unbound fw-500 lg:text-lg mb-4">
                Create Asset Category
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                <div className="relative">
                  <Controller
                    name="name"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Please enter Category name",
                      },
                    }}
                    render={({ field }) => (
                      <TextInput
                        label="Category"
                        placeholder="Enter name of category"
                        type={InputType.text}
                        error={errors.name?.message}
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

export default AssetCategory;
