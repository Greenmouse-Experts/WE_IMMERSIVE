import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../components/ui/TextInput";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { GoMail } from "react-icons/go";
import { HiOutlineLockClosed } from "react-icons/hi";
import { useMutation } from "@tanstack/react-query"; // React Query import
import { toast } from "react-toastify";
import { login } from "../../api";
import { useDispatch } from "react-redux";
import { weImmersiveUser } from "../../reducers/usersSlice";

const LoginForm = () => {
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // React Query: Define mutation
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data: any) => {
      localStorage.setItem("we-immersiveUser", data.data.token);
      delete data.data.password;
      delete data.data.token;

      dispatch(weImmersiveUser(data.data));

      if (data.data.accountType === "user") {
        navigate("/user");
      }

      if (data.data.accountType === "creator") {
        navigate("/creator");
      }

      if (data.data.accountType === "student") {
        navigate("/students");
      }

      if (data.data.accountType === "institution") {
        navigate("/institution");
      }
      toast.success(data.message);
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
      if (
        error.response.data.message ===
        "Your email is not verified. A verification email has been sent to your email address."
      ) {
        navigate("/auth/verify-email");
      }
      setIsBusy(false); // Hide loader
    },
    onSettled: () => {
      setIsBusy(false); // Hide loader
    },
  });

  const onSubmit = (formData: any) => {
    setIsBusy(true);
    mutation.mutate(formData);
  };

  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <Controller
          name="email"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Please enter your email",
            },
          }}
          render={({ field }) => (
            <TextInput
              label="Email"
              placeholder="Enter your email address"
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
        <div className="relative">
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
        </div>
        <div className="mt-4 flex justify-end">
          <Link
            to={"/auth/forget-password"}
            className="text-[#5B32F2] inter underline"
          >
            Forget Password?
          </Link>
        </div>
        <div className="mt-4">
          <Button
            withArrows
            title={isBusy ? <BeatLoader size={12} color="white" /> : "Login"}
            altClassName="btn-primary w-full py-3"
            disabled={!isValid || isBusy}
          />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
