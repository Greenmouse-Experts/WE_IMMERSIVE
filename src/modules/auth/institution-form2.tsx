/* eslint-disable @typescript-eslint/ban-ts-comment */
//@ts-nocheck
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { HiOutlineLockClosed } from "react-icons/hi";
import { Controller, useForm } from "react-hook-form";
import { GoMail } from "react-icons/go";
import Button from "../../components/ui/Button";
import TextInput, { InputType } from "../../components/ui/TextInput";
import { BiUser } from "react-icons/bi";
import { useMutation } from "@tanstack/react-query"; // React Query import
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { registerInstitution } from "../../api";

const InstitutionForm2 = ({ setActiveForm }) => {
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const institutionPayload = JSON.parse(
    localStorage.getItem("institutionPayload")
  );
  const navigate = useNavigate();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      password: "",
      jobTitle: "",
    },
  });

  // React Query: Define mutation
  const mutation = useMutation({
    mutationFn: registerInstitution,
    onSuccess: (data: any) => {
      toast.success(data.message);
      navigate("/auth/verify-email");
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
      setIsBusy(false); // Hide loader
    },
    onSettled: () => {
      setIsBusy(false); // Hide loader
    },
  });

  const onSubmit = (formData: any) => {
    setIsBusy(false);
    const payload = { ...institutionPayload, ...formData };
    mutation.mutate(payload);
  };
  return (
    <div className="mt-3">
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        <Controller
          name="name"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Enter your full name",
            },
          }}
          render={({ field }) => (
            <TextInput
              label="Full Name"
              placeholder="Enter your full name"
              type={InputType.text}
              icon={
                <BiUser className="mx-3 relative top-[1px] text-[#89888D]" />
              }
              error={errors.name?.message}
              {...field}
              ref={null}
            />
          )}
        />
        <Controller
          name="jobTitle"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Job Title is required",
            },
          }}
          render={({ field }) => (
            <TextInput
              label="Job Title"
              placeholder="Enter your role"
              type={InputType.text}
              error={errors.jobTitle?.message}
              {...field}
              ref={null}
            />
          )}
        />
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
        <div className="mt-4 flex w-full gap-5 justify-between">
          <Button
            withArrows
            size={14}
            title={isBusy ? <BeatLoader size={12} color="white" /> : "Sign Up"}
            altClassName="btn-primary px-10 py-3 flex flex-grow whitespace-nowrap"
            disabled={!isValid || isBusy}
          />
          <Button
            style={{ width: "fit-content" }}
            size={14}
            onClick={() => setActiveForm(3)}
            title={"Go Back"}
            altClassName="btn-primary px-10 py-3 flex flex-grow whitespace-nowrap"
          />
        </div>
      </form>
    </div>
  );
};

export default InstitutionForm2;
