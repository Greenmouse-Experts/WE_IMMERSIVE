import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { GoMail } from "react-icons/go";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { forgotPassword, verifyCode, resetPassword } from "../../api";
import { useNavigate } from "react-router-dom";

const ForgetForm = () => {
  const [status, setStatus] = useState<"email" | "code" | "password">("email");
  const [email, setEmail] = useState<string>("");
  const [verifiedCode, setVerifiedCode] = useState<string>("");
  const navigate = useNavigate();

  // Email form
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    getValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
    },
  });

  // 6-digit code form
  const {
    control: codeControl,
    handleSubmit: handleCodeSubmit,
    formState: { errors: codeErrors, isValid: isCodeValid },
    reset: resetCode,
    getValues: getCodeValues,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      code: "",
    },
  });

  // Password reset form
  const {
    control: passwordControl,
    handleSubmit: handlePasswordSubmit,
    formState: { errors: passwordErrors, isValid: isPasswordValid },
    reset: resetPasswordForm,
    watch,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  const watchNewPassword = watch("newPassword");

  // Send reset link mutation
  const sendResetLinkMutation = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (data: any) => {
      toast.success(data.message || "Password reset code sent to your email");
      setEmail(getValues("email"));
      setStatus("code");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to send reset code");
    },
  });

  // Verify code mutation
  const verifyCodeMutation = useMutation({
    mutationFn: verifyCode,
    onSuccess: (data: any) => {
      toast.success(data.message || "Code verified successfully");
      setVerifiedCode(getCodeValues("code"));
      setStatus("password");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to verify code");
    },
  });

  // Reset Password mutation
  const resetPasswordMutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: (data: any) => {
      toast.success(data.message || "Password reset successfully");
      navigate("/auth/login");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to reset password");
    },
  });

  const onSubmit = (data: { email: string }) => {
    console.log("Submitting email:", data.email);
    sendResetLinkMutation.mutate({ email: data.email });
  };

  const onCodeSubmit = (data: { code: string }) => {
    console.log("Verifying code:", {
      email: email,
      code: data.code,
    });

    verifyCodeMutation.mutate({
      email: email,
      otpCode: data.code,
    });
  };

  const onPasswordSubmit = (data: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    console.log("Resetting password:", {
      email: email,
      otpCode: verifiedCode,
      newPassword: data.newPassword,
      confirmPassword: data.confirmPassword,
    });

    resetPasswordMutation.mutate({
      email: email,
      otpCode: verifiedCode,
      newPassword: data.newPassword,
      confirmPassword: data.confirmPassword,
    });
  };

  const handleBackToEmail = () => {
    setStatus("email");
    resetCode();
    setEmail("");
  };

  const handleBackToCode = () => {
    setStatus("code");
    resetPasswordForm();
    setVerifiedCode("");
  };

  return (
    <div className="mt-3">
      {status === "email" && (
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Please enter your email",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Email"
                placeholder="Enter your email address to get your reset code"
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
          <div className="mt-4">
            <Button
              withArrows
              title={
                sendResetLinkMutation.isPending ? (
                  <BeatLoader size={12} color="white" />
                ) : (
                  "Send password reset code"
                )
              }
              altClassName="btn-primary w-full py-3"
              disabled={!isValid || sendResetLinkMutation.isPending}
              type="submit"
            />
          </div>
        </form>
      )}

      {status === "code" && (
        <div className="grid gap-4">
          <div className="rounded-lg shadow p-6">
            <div className="mb-4 text-center">
              <h2 className="text-lg font-semibold mb-2">Enter 6-digit Code</h2>
              <p className="text-sm text-gray-500">
                We sent a 6-digit code to{" "}
                <span className="font-medium">{email}</span>. Please enter it
                below.
              </p>
            </div>
            <form
              onSubmit={handleCodeSubmit(onCodeSubmit)}
              className="grid gap-4"
            >
              <Controller
                name="code"
                control={codeControl}
                rules={{
                  required: {
                    value: true,
                    message: "Please enter the 6-digit code",
                  },
                  pattern: {
                    value: /^\d{6}$/,
                    message: "Code must be exactly 6 digits",
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    label="6-digit Code"
                    placeholder="Enter the code"
                    type={InputType.text}
                    error={codeErrors.code?.message}
                    maxLength={6}
                    {...field}
                    ref={null}
                  />
                )}
              />
              <div className="flex gap-2 mt-4">
                <Button
                  title="Back"
                  altClassName="bg-gray-400 w-full rounded-lg py-3"
                  type="button"
                  onClick={handleBackToEmail}
                />
                <Button
                  withArrows
                  title={
                    verifyCodeMutation.isPending ? (
                      <BeatLoader size={12} color="white" />
                    ) : (
                      "Verify Code"
                    )
                  }
                  altClassName="btn-primary w-full py-3"
                  disabled={!isCodeValid || verifyCodeMutation.isPending}
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      )}

      {status === "password" && (
        <div className="grid gap-4">
          <div className="rounded-lg shadow p-6">
            <div className="mb-4 text-center">
              <h2 className="text-lg font-semibold mb-2">
                Reset Your Password
              </h2>
              <p className="text-sm text-gray-500">
                Enter your new password for{" "}
                <span className="font-medium">{email}</span>
              </p>
            </div>
            <form
              onSubmit={handlePasswordSubmit(onPasswordSubmit)}
              className="grid gap-4"
            >
              <Controller
                name="newPassword"
                control={passwordControl}
                rules={{
                  required: {
                    value: true,
                    message: "Please enter your new password",
                  },
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters long",
                  },
                  pattern: {
                    value:
                      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/,
                    message:
                      "Password must contain uppercase, lowercase, number and special character",
                  },
                }}
                render={({ field }) => (
                  <TextInput
                    label="New Password"
                    placeholder="Enter your new password"
                    type={InputType.password}
                    error={passwordErrors.newPassword?.message}
                    {...field}
                    ref={null}
                  />
                )}
              />

              <Controller
                name="confirmPassword"
                control={passwordControl}
                rules={{
                  required: {
                    value: true,
                    message: "Please confirm your new password",
                  },
                  validate: (value) =>
                    value === watchNewPassword || "Passwords do not match",
                }}
                render={({ field }) => (
                  <TextInput
                    label="Confirm New Password"
                    placeholder="Confirm your new password"
                    type={InputType.password}
                    error={passwordErrors.confirmPassword?.message}
                    {...field}
                    ref={null}
                  />
                )}
              />

              <div className="flex gap-2 mt-4">
                <Button
                  title="Back"
                  altClassName="bg-gray-400 rounded-lg w-full py-3"
                  type="button"
                  onClick={handleBackToCode}
                />
                <Button
                  withArrows
                  title={
                    resetPasswordMutation.isPending ? (
                      <BeatLoader size={12} color="white" />
                    ) : (
                      "Reset Password"
                    )
                  }
                  altClassName="btn-primary w-full py-3"
                  disabled={!isPasswordValid || resetPasswordMutation.isPending}
                  type="submit"
                />
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ForgetForm;
