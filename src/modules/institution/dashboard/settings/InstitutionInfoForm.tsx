import { useEffect } from "react";
import Loader from "../../../../components/reusables/loader";
import {
  getGeneralUserDetails,
  updateGeneralUserDetails,
} from "../../../../api/general";
import { Controller, useForm } from "react-hook-form";
import SelectInput from "../../../../components/ui/SelectInput";
import Button from "../../../../components/ui/Button";
import { BeatLoader } from "react-spinners";
import TextInput, { InputType } from "../../../../components/ui/TextInput";
import PhoneInputWithCountrySelect from "react-phone-number-input/react-hook-form";

const InstitutionInfoForm = () => {
  const { data: userData, isLoading } = getGeneralUserDetails();
  const { mutate: updateUserInfo, isPending: isUpdating } =
    updateGeneralUserDetails();
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (userData) {
      setValue("name", userData.name);
      setValue("email", userData.email);
      setValue("phoneNumber", userData.phoneNumber);
      setValue("dateOfBirth", userData.dateOfBirth);
      setValue("industry", userData.industry);
      setValue("professionalSkill", userData.professionalSkill);
    }
  }, [userData]);

  const onSubmit = (data: any) => {
    updateUserInfo(
      {
        ...data,
      },
      {
        onSuccess: () => {},
      }
    );
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
  
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Controller
          name="name"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Full name is required",
            },
          }}
          render={({ field }) => (
            <TextInput
              disabled={isUpdating}
              type={InputType.text}
              label="Full Name"
              error={errors.name?.message}
              {...field}
              style={{ flex: 1 }}
            />
          )}
        />

        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Email is required",
            },
          }}
          render={({ field }) => (
            <TextInput
              disabled={isUpdating}
              type={InputType.email}
              label="Email"
              error={errors.email?.message}
              {...field}
            />
          )}
        />

        <Controller
          name="phoneNumber"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Phone number is required",
            },
          }}
          render={({}) => (
            <div className="mt-3">
              <label className="mb-1 block fw-500 text-[#343333] dark:text-white">
                Phone Number
              </label>
              <PhoneInputWithCountrySelect
                international
                defaultCountry="NG"
                countries={["US", "NG", "GB"]}
                name="phoneNumber"
                control={control}
                label="Phone Number"
                rules={{
                  required: true,
                  pattern: {
                    value:
                      /\+(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/,
                    message: "Please Enter A Valid Number",
                  },
                }}
                className="flex items-center bg-[#E9EBFB]  mt-2 text-black lg:p-3 rounded-[4px] placeholder:text-[13px] placeholder:text-[#999797] w-full border-0  outline-none py-2 px-2 "
              />
               {errors.phoneNumber && (
            <span className="error text-red-400 text-sm">
              Invalid Phone Number
            </span>
          )}
            </div>
          )}
        />
        <Controller
          name="dateOfBirth"
          control={control}
          //   rules={{
          //     required: {
          //       value: true,
          //       message: "Date of Birth is required",
          //     },
          //   }}
          render={({ field }) => (
            <TextInput
              disabled={isUpdating}
              type={InputType.date}
              label="Date of Birth"
              error={errors.dateOfBirth?.message}
              {...field}
            />
          )}
        />
        <Controller
          name="institutionType"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Institution type is required",
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
            list={[{ id: "Education", name: "Education" }]}
            placeholder="Choose your industry"
            error={errors.industry?.message}
            {...field}
          />
          )}
        />
      </div>

      <div className="mt-4">
        <Button title={isUpdating ? <BeatLoader /> : "Update Info"} />
      </div>
    </form>
  );
};

export default InstitutionInfoForm;
