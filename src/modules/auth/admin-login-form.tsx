import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../components/ui/TextInput";
import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { GoMail } from "react-icons/go";
import { HiOutlineLockClosed } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { useMutation } from "@tanstack/react-query";
import { weImmersiveUser } from "../../reducers/usersSlice";
import { loginAdmin } from "../../api";

const AdminLoginForm = () => {
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

  const mutation = useMutation({
    mutationFn: loginAdmin,
    onSuccess: (data: any) => {
      localStorage.setItem("we-immersiveUser", data.token);
      delete data.data.password;
      let route = "/";
      dispatch(weImmersiveUser(data.data));
      navigate("/super-admin");
      route = "/super-admin";
      navigate(route, { replace: true });
    },
  });

  const onSubmit = (formData: any) => {
    setIsBusy(false);
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

export default AdminLoginForm;
