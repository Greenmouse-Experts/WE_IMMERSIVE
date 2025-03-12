import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import Button from "../../../components/ui/Button";
import { BeatLoader } from "react-spinners";
import { updateGeneralUserPassword } from "../../../api/general";


const UpdatePassword = () => {
  const { mutate: updatePassword, isPending: isUpdating } =
    updateGeneralUserPassword();
  const {
    handleSubmit,
    control,
    getValues,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    updatePassword(
      {
        ...data,
      },
      {
        onSuccess: () => {
          reset();
        },
      }
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="text-md font-semibold">Reset Password</h3>

      <Controller
        name="oldPassword"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Current Password is required",
          },
        }}
        render={({ field }) => (
          <TextInput
            disabled={isUpdating}
            type={InputType.password}
            placeholder="Enter current password"
            error={errors.oldPassword?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="newPassword"
        control={control}
        rules={{
          required: {
            value: true,
            message: "New password is required",
          },
          minLength: {
            value: 6,
            message: "Password must be at least 6 characters",
          },
        }}
        render={({ field }) => (
          <TextInput
            disabled={isUpdating}
            type={InputType.password}
            placeholder="Enter new password"
            error={errors.newPassword?.message}
            {...field}
          />
        )}
      />

      <Controller
        name="confirmNewPassword"
        control={control}
        rules={{
          required: {
            value: true,
            message: "Confirm Password is required",
          },
          validate: (value) =>
            value === getValues("newPassword") || "Passwords do not match",
        }}
        render={({ field }) => (
          <TextInput
            disabled={isUpdating}
            type={InputType.password}
            placeholder="Confirm new password"
            error={errors.confirmNewPassword?.message}
            {...field}
          />
        )}
      />

      <div className="mt-4">
        <Button title={isUpdating ? <BeatLoader /> : "Update"} />
      </div>
    </form>
  );
};

export default UpdatePassword;
