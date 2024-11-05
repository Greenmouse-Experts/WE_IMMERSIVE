// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { HiOutlineLockClosed } from "react-icons/hi";
import { Controller, useForm } from "react-hook-form";
import { GoMail } from "react-icons/go";
import Button from "../../components/ui/Button";
import TextInput, { InputType } from "../../components/ui/TextInput";
import { BiUser } from "react-icons/bi";
import { IoCallOutline } from "react-icons/io5";

const RegisterForm = () => {
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = () => {
    setIsBusy(false);
  };
  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <Controller
          name="name"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Enter your full name",
            },
          }}
          render={({ field }) => (
            <TextInput
              label="Name"
              placeholder="Enter your full name"
              type={InputType.text}
              icon={
                <BiUser className="mx-3 relative top-[1px] text-[#89888D]" />
              }
              error={errors.name?.message}
              {...field}
              ref={null}
            />
          )}
        />
         <Controller
          name="phone_number"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please enter your phone number",
            },
          }}
          render={({ field }) => (
            <TextInput
              label="Phone Number"
              placeholder="Enter your phone number"
              type={InputType.tel}
              icon={
                <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
              }
              // error={errors?.phone_number?.message}
              {...field}
              ref={null}
            />
          )}
        />
      
      
        <Controller
          name="referral_code"
          control={control}
          render={({ field }) => (
            <TextInput
              label="Referral Code (Optional)"
              placeholder="Enter referral code"
              type={InputType.text}
              {...field}
              ref={null}
            />
          )}
        />
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
              placeholder="Enter your email address"
              type={InputType.email}
              icon={
                <GoMail className="mx-3 relative top-[1px] text-[#89888D]" />
              }
              error={errors.email?.message}
              {...field}
              ref={null}
            />
          )}
        />
        <div className="relative">
          <Controller
            name="password"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter your password",
              },
              minLength: {
                value: 5,
                message: "Password is too short",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Password"
                placeholder="Password"
                type={InputType.password}
                icon={
                  <HiOutlineLockClosed className="mx-3 relative top-[1px] text-[18px] text-[#89888D]" />
                }
                error={errors.password?.message}
                {...field}
                ref={null}
              />
            )}
          />
        </div>
        <div className="mt-4">
          <Button
            withArrows
            title={isBusy ? <BeatLoader size={12} color="white" /> : "Sign Up"}
            altClassName="btn-primary unbound !fw-600 w-full py-3"
            disabled={!isValid || isBusy}
          />
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
