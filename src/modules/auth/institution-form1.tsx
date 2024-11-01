/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { useState } from "react";
import { BeatLoader } from "react-spinners";
// import { HiOutlineLockClosed } from "react-icons/hi";
import { Controller, useForm } from "react-hook-form";
import { GoMail } from "react-icons/go";
import { IoCallOutline } from "react-icons/io5";
import Button from "../../components/ui/Button";
import TextInput, { InputType } from "../../components/ui/TextInput";
import { CiLocationOn } from "react-icons/ci";
import SelectInput from "../../components/ui/SelectInput";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

const InstitutionForm1 = ({ setActiveForm }) => {
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
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
              message: "Enter your institution name",
            },
          }}
          render={({ field }) => (
            <TextInput
              label="Institution Name"
              placeholder="Enter your institution name"
              type={InputType.text}
              icon={
                <HiOutlineBuildingOffice2 className="mx-3 relative top-[1px] text-[#89888D]" />
              }
              error={errors.name?.message}
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
              message: "Please enter your institution email",
            },
          }}
          render={({ field }) => (
            <TextInput
              label="Institution Email"
              placeholder="Enter your institution email"
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
        <Controller
          name="professional_skill"
          control={control}
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
          render={({ field }) => (
            <SelectInput
              label="Institution Type"
              list={["Private", "Public"]}
              placeholder="Choose your institution type"
              // icon={
              //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
              // }
              error={""}
              {...field}
            />
          )}
        />
        <Controller
          name="industry"
          control={control}
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
          render={({ field }) => (
            <SelectInput
              label="Industry"
              list={["School"]}
              placeholder="Choose your industry"
              // icon={
              //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
              // }
              error={""}
              {...field}
            />
          )}
        />
        <Controller
          name="industry"
          control={control}
          rules={{
            required: {
              value: true,
              message: "This field is required",
            },
          }}
          render={({ field }) => (
            <SelectInput
              label="Size of Institution"
              list={["Small", "Medium", "Large"]}
              placeholder="Select the size of your institution"
              // icon={
              //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
              // }
              error={""}
              {...field}
            />
          )}
        />

        <Controller
          name="phone_number"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please enter your email",
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
          name="location"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please enter your email",
            },
          }}
          render={({ field }) => (
            <TextInput
              label="Institution Location"
              placeholder="Enter your institution address"
              type={InputType.tel}
              icon={
                <CiLocationOn className="mx-3 relative top-[1px] text-[#89888D]" />
              }
              // error={errors?.phone_number?.message}
              {...field}
              ref={null}
            />
          )}
        />

        {/*       
        <Controller
          name="referral_code"
          control={control}
          render={({ field }) => (
            <TextInput
              label="Referral Code (Optional)"
              placeholder="Enter referral code"
              type={InputType.tel}
              icon={
                <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
              }
              {...field}
              ref={null}
            />
          )}
        />
        */}
        {/* <div className="relative">
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
        </div> */}
        <div className="mt-4">
          <Button
            type="button"
            withArrows
            title={isBusy ? <BeatLoader size={12} color="white" /> : "Next"}
            altClassName="btn-primary unbound !fw-600 w-full py-3"
            // disabled={!isValid || isBusy}
            onClick={() => setActiveForm(4)}
          />
        </div>
      </form>
    </div>
  );
};

export default InstitutionForm1;
