import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import { useEffect } from "react";
import SelectInput from "../../../components/ui/SelectInput";
import Button from "../../../components/ui/Button";
import { BeatLoader } from "react-spinners";

const AboutTab = ({ userData }: any) => {
  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();

  // const { data: userData, isLoading } = getGeneralUserDetails();

  useEffect(() => {
    if (userData) {
      setValue("name", userData.name);
      setValue("email", userData.email);
      setValue("phoneNumber", userData.phoneNumber);
      setValue("dateOfBirth", userData.dateOfBirth);
      setValue("industry", userData.industry);
      setValue("professionalSkill", userData.professionalSkill);
    }
  }, [userData]);

  const isUpdating = false;

  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <div>
      <div className="bg-[#E9EBFB] rounded-[20px] p-8 mt-8">
        <p className=" leading-9">
          Chukka is a creative professional specialising in graphic design,
          interior design. Known for a unique approach that blends innovation,
          functionality, and artistry, transforms ideas into impactful designs.
          With a background in relevant experience or education, I have worked
          with notable brands/clients to deliver solutions that resonate with
          modern trends and timeless elegance. Passionate about creating
          solution
        </p>
      </div>

      <div className="mt-10">
        <p className="">CONTACT</p>
        <form
          className="grid grid-cols-2 gap-x-8 gap-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
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
                disabled
                type={InputType.email}
                label="Email"
                error={errors.email?.message}
                {...field}
                style={{ flex: 1 }}
              />
            )}
          />
          <Controller
            name="x"
            control={control}
            render={({ field }) => (
              <TextInput
                disabled
                type={InputType.text}
                placeholder="Enter x profile link"
                label="X"
                error={errors.x?.message}
                {...field}
                style={{ flex: 1 }}
              />
            )}
          />
          <Controller
            name="instagram"
            control={control}
            render={({ field }) => (
              <TextInput
                disabled
                type={InputType.text}
                placeholder="Enter instagram profile link"
                label="Instagram"
                error={errors.instagram?.message}
                {...field}
                style={{ flex: 1 }}
              />
            )}
          />
          <Controller
            name="facebook"
            control={control}
            render={({ field }) => (
              <TextInput
                disabled
                type={InputType.text}
                placeholder="Enter x facebook link"
                label="Facebook"
                error={errors.facebook?.message}
                {...field}
                style={{ flex: 1 }}
              />
            )}
          />
        </form>

        <div className="mt-12">
          <p className="">HIRING INTERESTS</p>
          <SelectInput
            label="Role Type"
            list={[
              { id: "Freelance", name: "Freelance" },
              { id: "FullTime", name: "FullTime" },
              { id: "Contract", name: "Contract" },
            ]}
            placeholder="Freelance, FullTime, Contract"
          />
        </div>
        <div className="mt-16">
          <Button
            title={isUpdating ? <BeatLoader /> : "Update Info"}
            style={{ width: 350 }}
            withArrows
          />
        </div>
      </div>
    </div>
  );
};

export default AboutTab;
