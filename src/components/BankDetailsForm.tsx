import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "./ui/TextInput";
import SelectInput from "./ui/SelectInput";
import Button from "./ui/Button";
import { addBankDetails } from "../api/subscription";
import { BeatLoader } from "react-spinners";

const BankDetailsForm = () => {
  const { mutate: addBank, isPending } = addBankDetails();
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      accountNumber: "",
      bankName: "",
      accountType: "",
      country: "",
      countryCode: "",
      currency: "",
      bankCode: "",
    },
  });

  const onSubmit = (payload: any) => {
    console.log(payload);
    addBank(payload),
      {
        onSuccess: () => {
          reset();
        },
        onError: (error: any) => {
          console.error(error);
        },
      };
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="">
      <div className="grid grid-cols-2 gap-6">
        <Controller
          name="accountNumber"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please enter an account number",
            },
          }}
          render={({ field }) => (
            <TextInput
            disabled={isPending}
              label="Account Number"
              placeholder="Enter account number"
              type={InputType.text}
              error={errors.accountNumber?.message}
              {...field}
              ref={null}
            />
          )}
        />

        <Controller
          name="accountType"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Select account type",
            },
          }}
          render={({ field }) => (
            <SelectInput
            disabled={isPending}
              label="Account Type"
              list={[
                {
                  id: "Personal",
                  name: "Personal",
                },
              ]}
              placeholder="select a account Type"
              // icon={
              //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
              // }
              error={errors.accountType?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="bankName"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Bank name is required",
            },
          }}
          render={({ field }) => (
            <TextInput
            disabled={isPending}
              label="Bank name"
              placeholder="Enter bank name"
              type={InputType.text}
              error={errors.bankName?.message}
              {...field}
              ref={null}
            />
          )}
        />
        <Controller
          name="country"
          control={control}
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
          render={({ field }) => (
            <SelectInput
            disabled={isPending}
              label="Country"
              list={[{ id: "Nigeria", name: "Nigeria" }]}
              placeholder="Choose country"
              // icon={
              //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
              // }
              error={errors.country?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="countryCode"
          control={control}
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
          render={({ field }) => (
            <SelectInput
            disabled={isPending}
              label="Country Code"
              list={[
                { id: "US", name: "US" },
                { id: "NG", name: "NG" },
              ]}
              placeholder="Choose country code"
              // icon={
              //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
              // }
              error={errors.countryCode?.message}
              {...field}
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
            disabled={isPending}
              label="Currency"
              list={[
                { id: "USD", name: "USD" },
                { id: "NGN", name: "NGN" },
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
          name="bankCode"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Bank code is required",
            },
          }}
          render={({ field }) => (
            <TextInput
            disabled={isPending}
              label="Bank code"
              placeholder="Enter bank code"
              type={InputType.text}
              error={errors.bankCode?.message}
              {...field}
              ref={null}
            />
          )}
        />
      </div>

      <div className="mt-10">
        <Button
          type="submit"
          disabled={isPending}
          title={isPending ? <BeatLoader /> : "Add Bank Details"}
          style={{ width: 300 }}
        />
      </div>
    </form>
  );
};

export default BankDetailsForm;
