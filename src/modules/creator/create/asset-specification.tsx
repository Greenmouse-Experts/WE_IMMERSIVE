import { Controller, useForm } from "react-hook-form";
import Button from "../../../components/ui/Button";
import SelectInput from "../../../components/ui/SelectInput";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { createDigitalAsset, createPhysicalAsset } from "../../../api";

interface AssetSpecificationProps {
  payload: any;
  handleSteeper: any;
  category: any;
}
const AssetSpecification = ({
  handleSteeper,
  payload,
  category,
}: AssetSpecificationProps) => {
  const [isBusy, setIsBusy] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      specificationSubjectMatter: "",
      specificationMedium: "",
      specificationSoftwareUsed: "",
      specificationTags: [],
      specificationVersion: "",
      pricingType: "",
      currency: "",
      amount: "",
    },
  });

  const pricingType = watch("pricingType");

  // React Query: Define mutation
  const mutation = useMutation({
    mutationFn:
      category === "Digital Asset" ? createDigitalAsset : createPhysicalAsset,
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

  const onSubmit = (formData: any) => {
    setIsBusy(true);
    const { specificationTags, ...restFormData } = formData; // Destructure specificationTags from formData

    const newPayload = {
      ...payload,
      ...restFormData,
      specificationTags:
        specificationTags?.split(",").map((tag: string) => tag.trim()) || [], // Convert to an array
    };
    mutation.mutate(newPayload);
  };

  return (
    <div>
      <p className="fw-600 text-sm text-grey">CREATE</p>
      <p className="unbound text-[#06052A] fw-600 mt-3">Specifications </p>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div className="flex flex-col gap-4 mt-5">
          <Controller
            name="specificationSubjectMatter"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter subject matter",
              },
            }}
            render={({ field }) => (
              <TextInput
                type={InputType.text}
                label="Subject Matter"
                placeholder="Enter subject matter"
                error={errors.specificationSubjectMatter?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="specificationMedium"
            control={control}
            rules={{
              required: {
                value: true,
                message: "This field is required",
              },
            }}
            render={({ field }) => (
              <SelectInput
                label="Medium"
                list={["3D", "Gaming"]}
                placeholder="Choose medium"
                // icon={
                //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                // }
                error={errors.specificationMedium?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="specificationSoftwareUsed"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter software used",
              },
            }}
            render={({ field }) => (
              <TextInput
                fullWidth={true}
                type={InputType.text}
                label="Software Used"
                placeholder="Choose softwares used"
                error={errors.specificationSubjectMatter?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="specificationTags"
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
                label="Tags"
                placeholder="Enter tags that describe your asset, kindly seperate with a comma"
                error={errors.specificationTags?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="specificationVersion"
            control={control}
            render={({ field }) => (
              <TextInput
                fullWidth={true}
                type={InputType.text}
                label="Version (Optional)"
                placeholder="What version is this"
                error={errors.specificationVersion?.message}
                {...field}
              />
            )}
          />
          <Controller
            name="pricingType"
            control={control}
            rules={{
              required: {
                value: true,
                message: "This field is required",
              },
            }}
            render={({ field }) => (
              <SelectInput
                label="Pricing Model"
                list={["One-Time-Purchase", "Free"]}
                placeholder="Choose model"
                // icon={
                //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                // }
                error={errors.pricingType?.message}
                {...field}
              />
            )}
          />
          {pricingType !== "Free" && (
            <>
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
                    list={["USD", "NGN"]}
                    placeholder="Choose currency"
                    // icon={
                    //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                    // }
                    error={errors.currency?.message}
                    {...field}
                  />
                )}
              />
              <Controller
                name="amount"
                control={control}
                render={({ field }) => (
                  <TextInput
                    fullWidth={true}
                    type={InputType.text}
                    label="Amount"
                    placeholder="Enter price (amount)"
                    error={errors.amount?.message}
                    {...field}
                  />
                )}
              />
            </>
          )}
        </div>

        <div className=" mt-16 flex w-full justify-between ">
          <Button
            style={{ width: "fit-content" }}
            withArrows
            size={14}
            title={isBusy ? <BeatLoader size={12} color="white" /> : "Submit"}
            disabled={!isValid}
            altClassName="btn-primary px-10 py-2 flex flex-grow whitespace-nowrap"
          />

          <Button
            style={{ width: "fit-content" }}
            size={14}
            onClick={() => handleSteeper("previous")}
            title={"Go Back"}
            altClassName="btn-primary px-10 py-2 flex flex-grow whitespace-nowrap"
          />
        </div>
      </form>
    </div>
  );
};

export default AssetSpecification;
