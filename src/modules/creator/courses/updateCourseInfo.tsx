import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import SelectInput from "../../../components/ui/SelectInput";
import Button from "../../../components/ui/Button";
import { useState } from "react";
import { BeatLoader } from "react-spinners";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createCourseBasic } from "../../../api";
import { toast } from "react-toastify";
import { ICourse } from "../../../types/course.types";

const UpdateCourseInfo = ({
  selected,
  handleCloseCourseInfo,
}: {
  selected: ICourse | null;
  handleCloseCourseInfo: () => void;
}) => {
  const [isBusy, setIsBusy] = useState<boolean>(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: selected?.title ?? "",
      subtitle: selected?.subtitle ?? "",
      description: selected?.description ?? "",
      language: selected?.language ?? "",
      whatToLearn: selected?.whatToLearn ?? "",
      requirement: selected?.requirement ?? "",
      level: selected?.level ?? "",
      currency: selected?.currency ?? "",
      price: selected?.price ?? "",
    },
  });

  const onSubmit = (formData: any) => {
    if (selected) {
      const payload = {
        ...formData,
        courseId: selected?.id,
        categoryId: selected?.categoryId,
      };
      mutation.mutate(payload, {
        onSuccess: () => {
          handleCloseCourseInfo();
        },
      });
    }
  };

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: createCourseBasic,
    onSuccess: (data: any) => {
      toast.success(data.message);
      setIsBusy(false);
      queryClient.invalidateQueries({
        queryKey: ["courses"],
      });
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
      setIsBusy(false); // Hide loader
    },
    onSettled: () => {
      setIsBusy(false); // Hide loader
    },
  });

  return (
    <div className="rounded-[20px] py-5 px-7 w-full bg-white dark:bg-darkMode">
      <p className="fw-600 text-sm text-grey">CREATE COURSE</p>

      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)} className=" gap-4 w-full">
          <div className="flex-col gap-4 mt-5 w-full">
            <Controller
              name="title"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter course title",
                },
              }}
              render={({ field }) => (
                <TextInput
                  type={InputType.text}
                  label="Course Title"
                  placeholder="Enter course title"
                  error={errors.title?.message}
                  {...field}
                  ref={null}
                />
              )}
            />

            <Controller
              name="subtitle"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter subtitle",
                },
              }}
              render={({ field }) => (
                <TextInput
                  type={InputType.text}
                  label="Course SubTitle"
                  placeholder="Enter course subtitle"
                  error={errors.subtitle?.message}
                  {...field}
                  ref={null}
                />
              )}
            />

            <Controller
              name="description"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter course description",
                },
              }}
              render={({ field }) => (
                <TextInput
                  className="bg-[#E9EBFB] h-[150px] w-full focus:outline-none rounded-[10px]"
                  type={InputType.textarea}
                  label="Course Description"
                  placeholder="Enter course description"
                  error={errors.description?.message}
                  {...field}
                  ref={null}
                />
              )}
            />

            <Controller
              name="language"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter language",
                },
              }}
              render={({ field }) => (
                <TextInput
                  type={InputType.text}
                  label="Course Language"
                  placeholder="Enter course language"
                  error={errors.language?.message}
                  {...field}
                  ref={null}
                />
              )}
            />

            <Controller
              name="whatToLearn"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter what to learn",
                },
              }}
              render={({ field }) => (
                <TextInput
                  type={InputType.text}
                  label="What to Learn"
                  placeholder="Enter what to learn"
                  error={errors.whatToLearn?.message}
                  {...field}
                  ref={null}
                />
              )}
            />

            <Controller
              name="requirement"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter requirement",
                },
              }}
              render={({ field }) => (
                <TextInput
                  type={InputType.text}
                  label="Course Requirement"
                  placeholder="Enter course requirement"
                  error={errors.requirement?.message}
                  {...field}
                  ref={null}
                />
              )}
            />

            <Controller
              name="level"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter course level",
                },
              }}
              render={({ field }) => (
                <TextInput
                  type={InputType.text}
                  label="Course Level"
                  placeholder="Enter course level"
                  error={errors.level?.message}
                  {...field}
                  ref={null}
                />
              )}
            />

            <Controller
              name="currency"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "This field is required",
                },
              }}
              render={({ field }) => (
                <SelectInput
                  label="Currency"
                  list={[
                    {
                      id: "₦",
                      name: "₦",
                    },
                    {
                      id: "$",
                      name: "$",
                    },
                    {
                      id: "€",
                      name: "€",
                    },
                    {
                      id: "£",
                      name: "£",
                    },
                    {
                      id: "¥",
                      name: "¥",
                    },
                  ]}
                  placeholder="Select Currency"
                  // icon={
                  //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                  // }
                  error={errors.currency?.message}
                  {...field}
                />
              )}
            />

            <Controller
              name="price"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter course price",
                },
              }}
              render={({ field }) => (
                <TextInput
                  type={InputType.text}
                  label="Course Price"
                  placeholder="Enter course price"
                  error={errors.price?.message}
                  {...field}
                  ref={null}
                />
              )}
            />
          </div>

          <div className="mt-5 flex">
            <Button
              style={{ width: "fit-content" }}
              title={isBusy ? <BeatLoader size={12} color="white" /> : "Update"}
              withArrows
              disabled={!isValid}
              size={14}
              altClassName="btn-primary px-10 py-2 whitespace-nowrap"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateCourseInfo;
