import { Controller, useForm } from "react-hook-form";
import { useEffect } from "react";
import Loader from "../../../components/reusables/loader";
import { toast } from "react-toastify";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import {
  getGeneralUserDetails,
  updateGeneralUserDetails,
} from "../../../api/general";
import { BeatLoader } from "react-spinners";
import Button from "../../../components/ui/Button";
import SelectInput from "../../../components/ui/SelectInput";
import PhoneInputWithCountrySelect from "react-phone-number-input/react-hook-form";

const CreatorSettings = () => {
  const { data: userData, isLoading } = getGeneralUserDetails();
  const { mutate: updateUserInfo, isPending: isUpdating } =
    updateGeneralUserDetails();
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  console.log(userData);
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
        onError: (error) => {
          toast.error(error.message);
        },
      }
    );
  };

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div className="min-h-screen w-[100%]">
      <main className="px-0 bg-white rounded-[20px] md:px-2 xl:px-4 md:py-2 xl:py-8">
        <section className="w-[100%]">
          {/* Settings Tabs */}
          <div className="shadow-sm rounded-md p-2 md:p-3 xl:p-8">
            <p className="unbound text-[16px] font-[400] mb-5">Personal Info</p>

            {/* Tab Content */}
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
                  render={({ }) => (
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
                  name="professionalSkill"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Professional skill is required",
                    },
                  }}
                  render={({ field }) => (
                    <SelectInput
                      disabled={isUpdating}
                      label="Professional Skill"
                      list={[
                        { id: "Java", name: "Java" },
                        { id: "Machine Learning", name: "Machine Learning" },
                        { id: "Frontend", name: "Frontend" },
                      ]}
                      placeholder="Select professional skill"
                      // icon={
                      //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                      // }
                      error={errors.professionalSkill?.message}
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
                      message: "Industry skill is required",
                    },
                  }}
                  render={({ field }) => (
                    <SelectInput
                      disabled={isUpdating}
                      label="Industry"
                      list={[
                        { id: "Private", name: "Private" },
                        { id: "Public", name: "Public" },
                      ]}
                      placeholder="Select industry"
                      // icon={
                      //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                      // }
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
          </div>
        </section>
      </main>
    </div>
  );
};

export default CreatorSettings;
