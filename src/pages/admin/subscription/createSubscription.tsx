import { Controller, useForm } from "react-hook-form";
import Button from "../../../components/ui/Button";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import SelectInput from "../../../components/ui/SelectInput";
import { BeatLoader } from "react-spinners";
import { addSubscriptionPlan } from "../../../api/admin";
import { useNavigate } from "react-router-dom";

const CreateSubscription = () => {
  const { mutate: addSubscription, isPending } = addSubscriptionPlan();
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      duration: "",
      price: "",
      period: "",
    },
  });

  const onSubmit = (formData: any) => {
    const payload = {
      name: formData.name,
      duration: Number(formData.duration),
      price: Number(formData.price),
      period: formData.period,
    };

    addSubscription(payload, {
      onSuccess: () => {
        navigate(-1);
      },
    });
  };

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
          <div className="">
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
                  type={InputType.number}
                  label="Plan Duration"
                  placeholder="Enter Plan Duration (months)"
                  error={errors.duration?.message}
                  {...field}
                  ref={null}
                />
              )}
            />

            <Controller
              name="period"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Select a duration type",
                },
              }}
              render={({ field }) => (
                <SelectInput
                  disabled={isPending}
                  label="Period"
                  list={[
                    {
                      id: "Monthly",
                      name: "Monthly",
                    },
                    {
                      id: "Yearly",
                      name: "Yearly",
                    },
                  ]}
                  placeholder="Select Duration..."
                  error={errors?.period?.message}
                  {...field}
                />
              )}
            />
          </div>

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
                type={InputType.number}
                label="Plan Price"
                placeholder="Enter Plan Price"
                error={errors.price?.message}
                maxLength={5}
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
            title={
              isPending ? <BeatLoader size={12} color="white" /> : "Create Plan"
            }
            size={14}
            disabled={isPending}
            altClassName="btn-primary px-10 py-2 whitespace-nowrap"
          />
        </div>
      </form>
    </div>
  );
};

export default CreateSubscription;
