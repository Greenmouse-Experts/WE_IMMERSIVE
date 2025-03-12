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
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";

const InstitutionForm1 = ({ setActiveForm }) => {
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const institutionPayload = JSON.parse(
    localStorage.getItem("institutionPayload")
  );

  console.log(institutionPayload);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      institutionName: institutionPayload
        ? institutionPayload.institutionName
        : "",
      institutionEmail: institutionPayload
        ? institutionPayload.institutionEmail
        : "",
      institutionPhoneNumber: institutionPayload
        ? institutionPayload.institutionPhoneNumber
        : "",
      institutionType: institutionPayload
        ? institutionPayload.institutionType
        : "",
      institutionIndustry: institutionPayload
        ? institutionPayload.institutionIndustry
        : "",
      institutionLocation: institutionPayload
        ? institutionPayload.institutionLocation
        : "",
    },
  });

  const onSubmit = (formData: any) => {
    setIsBusy(false);
    localStorage.setItem("institutionPayload", JSON.stringify(formData));
    setActiveForm(4);
  };
  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <Controller
          name="institutionName"
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
              error={errors.institutionName?.message}
              {...field}
              ref={null}
            />
          )}
        />
        <Controller
          name="institutionEmail"
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
              error={errors.institutionEmail?.message}
              {...field}
              ref={null}
            />
          )}
        />
        <Controller
          name="institutionType"
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
              list={[
                { id: "Private", name: "Private" },
                { id: "Public", name: "Public" },
              ]}
              placeholder="Choose your institution type"
              error={errors.institutionType?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="institutionIndustry"
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
              list={[{ id: "Education", name: "Education" }]}
              placeholder="Choose your industry"
              error={errors.institutionIndustry?.message}
              {...field}
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
            name="institutionPhoneNumber"
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
          {errors.institutionPhoneNumber && (
            <span className="error text-red-400 text-sm">
              Invalid Phone Number
            </span>
          )}
        </div>

        <Controller
          name="institutionLocation"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please enter your institution address",
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
              error={errors.institutionLocation?.message}
              {...field}
              ref={null}
            />
          )}
        />

        <div className="mt-4">
          <Button
            type="button"
            withArrows
            title={isBusy ? <BeatLoader size={12} color="white" /> : "Next"}
            altClassName="btn-primary unbound !fw-600 w-full py-3"
          />
        </div>
      </form>
    </div>
  );
};

export default InstitutionForm1;
