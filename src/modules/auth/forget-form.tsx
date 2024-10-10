import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { GoMail } from "react-icons/go";

const ForgetForm = () => {
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = () => {
    setIsBusy(false);
  };
  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please enter your email",
            },
          }}
          render={({ field }) => (
            <TextInput
              label="Email"
              placeholder="Enter your email address to get your reset link"
              type={InputType.email}
              icon={<GoMail className="mx-3 relative top-[1px] text-[#89888D]"/>}
              error={errors.email?.message}
              {...field}
              ref={null}
            />
          )}
        />
        <div className="mt-4">
          <Button
            withArrows
            title={isBusy ? <BeatLoader size={12} color="white" /> : "Send password reset link"}
            altClassName="btn-primary w-full py-3"
            disabled={!isValid || isBusy}
          />
        </div>
      </form>
    </div>
  );
};

export default ForgetForm;
