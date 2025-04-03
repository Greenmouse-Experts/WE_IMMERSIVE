import FormContainer from "../modules/auth/form-container";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../components/ui/TextInput";
import Button from "../components/ui/Button";
import { BeatLoader } from "react-spinners";
import SelectInput from "./ui/SelectInput";
import { addCoupon, updateCoupon } from "../api/coupon";
import { ICoupon } from "../types/coupon.types";

const CouponModal = ({
  onClose,
  selected,
}: {
  onClose: (status: boolean) => void;
  selected: ICoupon;
}) => {
  const { mutate: addNewCoupon, isPending } = addCoupon();
  const { mutate: editCoupon, isPending: isEditting } = updateCoupon();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      code: selected?.code || "",
      discountType: selected?.discountType || "",
      discountValue: selected?.discountValue || 0,
      validFrom: selected?.validFrom || "",
      validUntil: selected?.validUntil || "",
    },
  });

  const onSubmit = (formData: any) => {
    if (selected) {
      editCoupon(
        { ...formData, id: selected.id },
        {
          onSuccess: () => {
            onClose(false);
          },
        }
      );
    } else {
      addNewCoupon(formData, {
        onSuccess: () => {
          onClose(false);
        },
      });
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="mt-3">
          <FormContainer>
            <div className="px-2">
              <p className="unbound fw-500 lg:text-lg mb-4">Add Coupon</p>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="grid grid-cols-2 items-end gap-4"
              >
                <Controller
                  name="code"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Please enter a Coupon Code",
                    },
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Code"
                      placeholder="Enter preferred coupon code"
                      type={InputType.text}
                      error={errors.code?.message}
                      {...field}
                      ref={null}
                    />
                  )}
                />
                <Controller
                  name="discountType"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "This field is required",
                    },
                  }}
                  render={({ field }) => (
                    <SelectInput
                      label="Discount Type"
                      list={[
                        {
                          id: "fixed",
                          name: "Fixed",
                        },
                      ]}
                      placeholder="Choose a discount Type"
                      // icon={
                      //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                      // }
                      error={errors.discountType?.message}
                      {...field}
                    />
                  )}
                />
                <Controller
                  name="discountValue"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Please enter a Coupon Code",
                    },
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Discount amount"
                      placeholder="Enter discount amount"
                      type={InputType.number}
                      error={errors.discountValue?.message}
                      min={0}
                      {...field}
                      ref={null}
                    />
                  )}
                />
                <Controller
                  name="validFrom"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Please select a date",
                    },
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Valid From"
                      placeholder="Select a date"
                      min={new Date().toISOString().split("T")[0]}
                      type={InputType.date}
                      error={errors.validFrom?.message}
                      {...field}
                      ref={null}
                    />
                  )}
                />
                <Controller
                  name="validUntil"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Please select a date",
                    },
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="Valid From"
                      placeholder="Select a date"
                      type={InputType.date}
                      error={errors.validUntil?.message}
                      min={new Date().toISOString().split("T")[0]}
                      {...field}
                      ref={null}
                    />
                  )}
                />
                <div className="">
                  <Button
                    withArrows
                    title={
                      isPending || isEditting ? (
                        <BeatLoader size={12} color="white" />
                      ) : selected ? (
                        "Update"
                      ) : (
                        "Submit"
                      )
                    }
                    altClassName="btn-primary w-full py-3"
                    disabled={isPending}
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

export default CouponModal;
