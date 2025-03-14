// import { MdEmail } from "react-icons/md";
// import { HiIdentification } from "react-icons/hi2";
// import { TbBuildingSkyscraper } from "react-icons/tb";
import SelectInput from "../../../../components/ui/SelectInput";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../../../components/ui/TextInput";
import Loader from "../../../../components/reusables/loader";
import { useEffect } from "react";
import {
  getGeneralUserDetails,
  updateGeneralUserDetails,
} from "../../../../api/general";
import { BeatLoader } from "react-spinners";
import Button from "../../../../components/ui/Button";
import PhoneInputWithCountrySelect from "react-phone-number-input/react-hook-form";

const PersonalSettings = () => {
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
      setValue("schoolId", userData.schoolId);
      setValue("educationalLevel", userData.educationalLevel);
    }
  }, [userData]);

  const onSubmit = (data: any) => {
    updateUserInfo({
      ...data,
    });
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
                  name="educationalLevel"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Select educational level",
                    },
                  }}
                  render={({ field }) => (
                    <SelectInput
                      disabled={isUpdating}
                      label="Educational Level"
                      list={[
                        { id: "High School", name: "High School" },
                        { id: "HND", name: "HND" },
                        { id: "ND", name: "ND" },
                        { id: "Bachelor's", name: "Bachelor's" },
                        { id: "Master's", name: "Master's" },
                        { id: "PhD", name: "PhD" },
                        { id: "Diploma", name: "Diploma" },
                      ]}
                      placeholder="Select professional skill"
                      // icon={
                      //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                      // }
                      error={errors.educationalLevel?.message}
                      {...field}
                    />
                  )}
                />

                <Controller
                  name="schoolId"
                  control={control}
                  // rules={{
                  //   required: {
                  //     value: true,
                  //     message: "Industry skill is required",
                  //   },
                  // }}
                  render={({ field }) => (
                    <TextInput
                      disabled={isUpdating}
                      type={InputType.text}
                      label="School ID"
                      error={errors.schoolId?.message}
                      {...field}
                    />
                  )}
                />
              </div>

              <div className="mt-10">
                <Button
                  title={isUpdating ? <BeatLoader /> : "Update Info"}
                  style={{ width: 350 }}
                />
              </div>
            </form>
            {/* <form className="space-y-4">
                <div className='xl:flex items-center justify-between mt-8'>
                  <div className='w-[100%] xl:w-[48%]'>
                    <label
                        htmlFor="name"
                        className="Mulish block text-[14px] xl:text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder='Full name'
                        className="mt-1 w-full text-[14px] bg-[#E9EBFB] pl-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                        <TbBuildingSkyscraper className="text-[#A6A4A4] text-[25px]" />
                    </div>
                  </div>
            
                  <div className='w-[100%] xl:w-[48%] pt-3 lg:pt-0'>
                    <label
                        htmlFor="email"
                        className="Mulish block text-[14px] xl:text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='Email'
                        className="mt-1 w-full text-[14px] bg-[#E9EBFB] pl-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                        <MdEmail className="text-[#A6A4A4] text-[25px]" />
                    </div>
                  </div>
                </div>

                <div className='xl:flex items-center justify-between pt-0 xl:pt-1'>
                  <div className='w-[100%] xl:w-[48%]'>
                    <label
                        htmlFor="name"
                        className="Mulish block text-[14px] xl:text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        Phone Number
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder='Phone number'
                        className="mt-1 w-full text-[14px] bg-[#E9EBFB] px-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
            
                  <div className='w-[100%] xl:w-[48%] mt-10 md:mt-8 xl:pb-9'>
                    <label
                        htmlFor="name"
                        className="Mulish block text-[14px] xl:text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        Date Of Birth
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="date"
                        placeholder='Phone number'
                        className="mt-1 w-full text-[14px] bg-[#E9EBFB] px-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className='xl:flex items-center justify-between md:pt-3 xl:pt-8 pb-11'>
                  <div className='w-[100%] xl:w-[48%] mb-5 mt-10 md:mt-0 lg:mt-0'>
                    <label
                        htmlFor="educational level"
                        className="Mulish block text-[14px] xl:text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        Educational Level
                    </label>
                    <select
                        id="schoolId"
                        name="schoolId"
                        className="mt-1 w-full text-[14px] bg-[#E9EBFB] px-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option>Architecture</option>
                        <option>Education</option>
                        <option>Technology</option>
                        <option>Healthcare</option>
                    </select>
                  </div>

                  <div className='w-[100%] xl:w-[48%] mt-10 md:mt-5 xl:mt-0 md:pt-3 xl:pb-3'>
                    <label
                        htmlFor="school_id"
                        className="Mulish block text-[14px] xl:text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        School ID
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder='School ID'
                        className="mt-1 w-full text-[14px] bg-[#E9EBFB] pl-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                        <HiIdentification className="text-[#A6A4A4] text-[25px]" />
                    </div>
                  </div>
                </div>

                <button
                    type="button"
                    className="unbound bg-gradient-to-r from-[#5f27f7] to-[#268cdb] text-white font-[500]
                            px-4 py-2 text-[12px] md:text-[13px] rounded-md shadow-md transition-colors w-[100%] xl:w-[350px] h-[50px]"
                >
                    Update Info
                </button>
              </form> */}
          </div>
        </section>
      </main>
    </div>
  );
};

export default PersonalSettings;
