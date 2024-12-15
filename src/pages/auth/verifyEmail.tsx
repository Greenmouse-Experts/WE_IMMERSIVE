import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../components/ui/TextInput";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { HiOutlineLockClosed } from "react-icons/hi";
import FormContainer from "../../modules/auth/form-container";
import { useMutation } from "@tanstack/react-query"; // React Query import
import { toast } from "react-toastify";
import { resendOTP, verifyEmail } from "../../api";
import { useSelector } from "react-redux";

const EmailValidate = () => {
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const navigate = useNavigate();

  const email = useSelector((state: any) => state.userData.email);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: email,
      otpCode: "",
    },
  });

  // React Query: Define mutation
  const verifyEmailMutation = useMutation({
    mutationFn: verifyEmail,
    onSuccess: (data: any) => {
      toast.success(data.message);
      navigate("/auth/login");
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
      setIsBusy(false); // Hide loader
    },
    onSettled: () => {
      setIsBusy(false); // Hide loader
    },
  });

  // Submit handler
  const onSubmit = (formData: any) => {
    setIsBusy(true); // Show loader
    verifyEmailMutation.mutate(formData);
  };

  // React Query: Define mutation
  const OtpMutation = useMutation({
    mutationFn: resendOTP,
    onSuccess: (data: any) => {
      toast.success(data.message);
      navigate("/auth/login");
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
      setIsBusy(false); // Hide loader
    },
    onSettled: () => {
      setIsBusy(false); // Hide loader
    },
  });

  const resendOTPCode = () => {
    const payload = {
      email: email,
    };
    OtpMutation.mutate(payload);
  };

  return (
    <div className="w-full lg:w-[500px]">
      <div className="mt-3">
        <FormContainer>
          <div className="px-2">
            <p className="unbound fw-500 lg:text-lg mb-4">
              Verify your account
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div className="relative">
                <Controller
                  name="otpCode"
                  control={control}
                  rules={{
                    required: {
                      value: true,
                      message: "Please enter your otp",
                    },
                  }}
                  render={({ field }) => (
                    <TextInput
                      label="OTP Code"
                      placeholder="Enter your otp"
                      type={InputType.text}
                      icon={
                        <HiOutlineLockClosed className="mx-3 relative top-[1px] text-[18px] text-[#89888D]" />
                      }
                      error={errors.otpCode?.message}
                      {...field}
                      ref={null}
                    />
                  )}
                />
              </div>
              <div className="mt-4">
                <Button
                  withArrows
                  title={
                    isBusy ? <BeatLoader size={12} color="white" /> : "Verify"
                  }
                  altClassName="btn-primary w-full py-3"
                  disabled={!isValid || isBusy}
                />
              </div>
            </form>
            <div className="mt-4 flex justify-end">
              <span
                className="text-[#5B32F2] inter underline cursor-pointer"
                onClick={() => resendOTPCode()}
              >
                Resend OTP Code
              </span>
            </div>
          </div>
        </FormContainer>
      </div>
    </div>
  );
};

export default EmailValidate;
