import { Controller, useForm } from "react-hook-form";

import Loader from "../../../components/reusables/loader";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import { toast } from "react-toastify";
import Button from "../../../components/ui/Button";
import { BeatLoader } from "react-spinners";
import { useEffect } from "react";
import {
  getGeneralUserDetails,
  updateGeneralUserDetails,
} from "../../../api/general";

const PersonalInfo = () => {
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
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2 className="text-lg font-semibold mb-4">Personal Info</h2>
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
          render={({ field }) => (
            <TextInput
              disabled={isUpdating}
              type={InputType.tel}
              label="Phone Number"
              error={errors.phoneNumber?.message}
              {...field}
            />
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
      </div>
      <div className="mt-4">
        <Button title={isUpdating ? <BeatLoader /> : "Update"} />
      </div>
      {/* <button className="mt-5 bg-gradient text-white px-5 py-3 rounded-md">
        Update Info
      </button> */}
    </form>
  );
};

export default PersonalInfo;
