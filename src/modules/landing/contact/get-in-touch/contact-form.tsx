import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../../../components/ui/TextInput";
import { useState } from "react";
import Button from "../../../../components/ui/Button";
import { BeatLoader } from "react-spinners";

const ContactForm = () => {
  const [isBusy, setIsBusy] = useState<boolean>(false);
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
    },
  });

  const onSubmit = () => {
    setIsBusy(false);
  };
  return (
    <div className="flex justify-end">
      <div className="w-11/12 border border-gray-300 pt-8 p-8 dark:border-[#2E2F36] rounded-[15px]">
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
                label="Name"
                placeholder="Enter your full name"
                type={InputType.text}
                error={errors.name?.message}
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
                error={errors.email?.message}
                {...field}
                ref={null}
              />
            )}
          />
           <Controller
            name="name"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Enter the subject of your message",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Subject"
                placeholder="Enter the subject of your message"
                type={InputType.text}
                error={errors.name?.message}
                {...field}
                ref={null}
              />
            )}
          />
           <Controller
            name="name"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Enter your message",
              },
            }}
            render={({ field }) => (
              <TextInput
                label="Message"
                placeholder="Enter your message"
                altClassName="h-36 w-full bg-transparent p-2 outline-none placeholder:fs-300"
                type={InputType.textarea}
                error={errors.name?.message}
                {...field}
                ref={null}
              />
            )}
          />
          <div className="mt-4">
            <Button
              withArrows
              title={
                isBusy ? <BeatLoader size={12} color="white" /> : "Submit"
              }
              altClassName="btn-primary unbound !fw-600 w-full py-3"
              disabled={!isValid || isBusy}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
