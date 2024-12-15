// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { HiOutlineLockClosed } from "react-icons/hi";
import { Controller, useForm } from "react-hook-form";
import { GoMail } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import Button from "../../components/ui/Button";
import TextInput, { InputType } from "../../components/ui/TextInput";
import { BiUser } from "react-icons/bi";
import SelectInput from "../../components/ui/SelectInput";
import { useMutation } from "@tanstack/react-query"; // React Query import
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { registerCreator } from "../../api";
import { useDispatch } from "react-redux";
import { payloadEmail } from "../../reducers/usersSlice";

const CreatorForm = () => {
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
      phoneNumber: "",
      industry: "",
      professionalSkill: "",
    },
  });

  // React Query: Define mutation
  const mutation = useMutation({
    mutationFn: registerCreator,
    onSuccess: (data: any) => {
      toast.success(data.message);
      navigate("/auth/verify-email");
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
    mutation.mutate(formData);
    dispatch(payloadEmail(formData.email));
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
              label="Full Name"
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
          name="professionalSkill"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Professional Skill is required",
            },
          }}
          render={({ field }) => (
            <SelectInput
              label="Professional Skill"
              list={["Java", "Machine Learning", "Frontend"]}
              placeholder="Choose your skill"
              // icon={
              //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
              // }
              error={errors.professionalSkill?.message}
              {...field}
              ref={null}
            />
          )}
        />
        <Controller
          name="industry"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Industry is required",
            },
          }}
          render={({ field }) => (
            <SelectInput
              label="Industry"
              list={["Private", "Public"]}
              placeholder="Choose your industry"
              // icon={
              //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
              // }
              error={""}
              {...field}
              ref={null}
            />
          )}
        />

        <div className="mt-[5px]">
          <label className="mb-1 block fw-500 text-[#343333] dark:text-white">
            Phone Number
          </label>
          <PhoneInputWithCountry
            international
            defaultCountry="NG"
            countries={["US", "NG", "GB"]}
            name="phoneNumber"
            control={control}
            rules={{
              required: true,
              pattern: {
                value:
                  /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
                message: "Please Enter A Valid Number",
              },
            }}
            className="flex items-center bg-[#E9EBFB]  mt-2 rounded-[6px] text-black lg:p-3 rounded-[4px] placeholder:text-[13px] placeholder:text-[#999797] w-full border-0  outline-none py-2 px-2 rounded"
          />
          {errors.phoneNumber && (
            <p className="error text-red-400 text-sm">Invalid Phone Number</p>
          )}
        </div>

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

export default CreatorForm;
