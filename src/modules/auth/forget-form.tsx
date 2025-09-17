import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../components/ui/TextInput";
import Button from "../../components/ui/Button";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { GoMail } from "react-icons/go";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { forgotPassword, verifyCode } from "../../api";

const ForgetForm = () => {
  const [status, setStatus] = useState<"email" | "code">("email");
  const [email, setEmail] = useState<string>("");

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
  } = useForm({
    mode: "onChange",
    defaultValues: {
      code: "",
    },
  });

  // Send reset link mutation
  const sendResetLinkMutation = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (data: any) => {
      toast.success(data.message || "Password reset link sent to your email");
      setEmail(getValues("email"));
      setStatus("code");
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to send reset link");
    },
  });

  // Verify code mutation
  const verifyCodeMutation = useMutation({
    mutationFn: verifyCode,
    onSuccess: (data: any) => {
      toast.success(data.message || "Code verified successfully");
      // Add your redirect logic here, e.g.:
      // navigate('/reset-password');
    },
    onError: (error: any) => {
      toast.error(error.message || "Failed to verify code");
    },
  });

  const onSubmit = (data: { email: string }) => {
    console.log("Submitting email:", data.email);
    sendResetLinkMutation.mutate({ email: data.email });
  };

  const onCodeSubmit = (data: { code: string }) => {
    // Log the values being sent to ensure they're correct
    console.log("Verifying code:", {
      email: email,
      code: data.code,
    });

    // Make sure both email and code are passed to the API
    verifyCodeMutation.mutate({
      email: email,
      code: data.code,
    });
  };

  const handleBackToEmail = () => {
    setStatus("email");
    resetCode();
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
                placeholder="Enter your email address to get your reset link"
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
                  "Send password reset link"
                )
              }
              altClassName="btn-primary w-full py-3"
              disabled={!isValid || sendResetLinkMutation.isPending}
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
