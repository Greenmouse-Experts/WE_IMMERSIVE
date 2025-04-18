import { Controller, useForm } from "react-hook-form";
import Button from "../../../components/ui/Button";
import SelectInput from "../../../components/ui/SelectInput";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import { BeatLoader } from "react-spinners";
import { useNavigate } from "react-router-dom";
import { IAsset } from "../../../types/asset.types";
import { editPhysicalAsset } from "../../../api/creator";

interface PhysicalAssetSpecificationEditProps {
  payload: any;
  handleSteeper: any;
  assetDetails: IAsset | undefined;
}
const PhysicalAssetSpecificationEdit = ({
  handleSteeper,
  payload,
  assetDetails,
}: PhysicalAssetSpecificationEditProps) => {
 
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      specification: assetDetails?.specification,
      specificationMedium: assetDetails?.specificationMedium,
      specificationSoftwareUsed: assetDetails?.specificationSoftwareUsed,
      specificationTags: assetDetails?.specificationTags,
      specificationVersion: assetDetails?.specificationVersion,
      pricingType: assetDetails?.pricingType,
      currency: assetDetails?.currency,
      amount: assetDetails?.amount,
    },
  });

  console.log("errors", errors);
  const pricingType = watch("pricingType");

 

  const { mutate: update, isPending } = editPhysicalAsset();

  console.log(errors)
  const onSubmit = (formData: any) => {
 
    const { specificationTags, ...restFormData } = formData; // Destructure specificationTags from formData

    const newPayload = {
      ...payload,
      ...restFormData,
      amount: parseInt(formData.amount),
      id: assetDetails?.id,
      specificationTags:
        specificationTags?.split(",").map((tag: string) => tag.trim()) || [], // Convert to an array
    };
    // console.log('i ran')
    update(newPayload, {
      onSuccess() {
        navigate(-1);
      },
    });
  };

  return (
    <div>
      <p className="fw-600 text-sm text-grey">CREATE</p>
      <p className="unbound text-[#06052A] fw-600 mt-3">Specifications </p>

      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <div className="flex flex-col gap-4 mt-5">
          <Controller
            name="specification"
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
                error={errors.specification?.message}
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
                list={[
                  {
                    id: "3D",
                    name: "3D",
                  },
                  {
                    id: "Gaming",
                    name: "Gaming",
                  },
                ]}
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
                error={errors.specificationSoftwareUsed?.message}
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
                list={[
                  { id: "One-Time-Purchase", name: "One-Time-Purchase" },
                  { id: "Free", name: "Free" },
                ]}
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
                    list={[
                      { id: "$", name: "$" },
                      { id: "₦", name: "₦" },
                    ]}
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
          type="submit"
            style={{ width: "fit-content" }}
            withArrows
            size={14}
            title={isPending ? <BeatLoader size={12} color="white" /> : "Submit"}
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

export default PhysicalAssetSpecificationEdit;
