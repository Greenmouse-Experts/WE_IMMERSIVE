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
import { identifyUser, setUserProperties } from "../../helpers/mixpanelClient";

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

  const handleLogin = (user: any) => {
    identifyUser(user.id);
    setUserProperties({
      $email: user.email,
      name: user.name,
    });
  };

  // React Query: Define mutation
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data: any) => {
      console.log("🔑 LOGIN SUCCESS - FULL RESPONSE:");
      console.log("📊 Complete API Response:", JSON.stringify(data, null, 2));
      console.log("📋 Response Structure:");
      console.log("  - data:", data);
      console.log("  - data.data:", data.data);
      console.log("  - data.message:", data.message);
      console.log("🎫 Token being stored:", data.data.token);
      console.log("👤 User Account Type:", data.data.accountType);
      console.log("📧 User Email:", data.data.email);
      console.log("🏷️ User Name:", data.data.name);
      console.log("🆔 User ID:", data.data.id);

      localStorage.setItem("we-immersiveUser", data.data.token);

      // Log what's actually stored
      const storedToken = localStorage.getItem("we-immersiveUser");
      console.log(
        "💾 Token stored in localStorage:",
        storedToken ? `${storedToken.substring(0, 20)}...` : "NULL",
      );

      delete data.data.password;
      delete data.data.token;

      console.log(
        "👤 User data being stored in Redux (after cleanup):",
        JSON.stringify(data.data, null, 2),
      );
      dispatch(weImmersiveUser(data.data));

      if (data.data.accountType !== "institution") {
        handleLogin(data.data);
      }

      let route = "/";
      if (data.data.accountType === "user") {
        route = "/user";
      } else if (data.data.accountType === "creator") {
        route = "/creator";
      } else if (data.data.accountType === "student") {
        route = "/students";
      } else if (data.data.accountType === "institution") {
        route = "/institution";
      }

      console.log("🚀 Navigating to:", route);
      console.log(
        "🎯 Final user data in Redux after login:",
        JSON.stringify(data.data, null, 2),
      );
      navigate(route, { replace: true });
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
