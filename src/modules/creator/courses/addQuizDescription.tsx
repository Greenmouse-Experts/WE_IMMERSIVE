import { useState } from "react";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import { createAssignment, createQuizBasic } from "../../../api/creator";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../../../components/ui/Button";
import { Controller, useForm } from "react-hook-form";
import { useParams } from "react-router-dom";

const AddQuizDescription = ({
  lessonQuizId,
  handleOpen,
}: {
  lessonQuizId: string;
  handleOpen: () => void;
}) => {
  const { id: moduleId } = useParams();

  const { mutate: createquiz, isPending } = createQuizBasic();

  const {
    control,
    handleSubmit,
    formState: { errors /*isValid*/ },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      lessonTitle: "",
      title: "",
      description: "",
      timePerQuestion: "",
    },
  });

  const onSubmit = (formData: any) => {
    console.log(formData);
    createquiz(
      {
        moduleId,
        ...formData,
        timePerQuestion: parseInt(formData.timePerQuestion),
      },
      {
        onSuccess: () => {
          handleOpen();
        },
        onError: () => {
          handleOpen();
        },
      }
    );
  };

  return (
    <div className="p-6 rounded-xl bg-white w-full max-w-4xl mx-auto shadow-xl text-black">
      <h2 className="text-xl font-bold mb-6">Add Quiz Description</h2>

      <div className="border rounded-xl p-6 bg-violet-50">
        <form onSubmit={handleSubmit(onSubmit)} className="mb-4">
          {/* <label className="block font-semibold text-lg mb-2">Assignment Title</label> */}
          <Controller
            name="lessonTitle"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Lesson title is required",
              },
            }}
            render={({ field }) => (
              <TextInput
                type={InputType["text"]}
                label="Lesson Title"
                placeholder="Enter the main title for this quiz"
                error={errors.lessonTitle?.message}
                {...field}
                ref={null}
              />
            )}
          />

          <Controller
            name="title"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Title is required",
              },
            }}
            render={({ field }) => (
              <TextInput
                type={InputType["text"]}
                label="Quiz Title"
                placeholder="Enter the title for this quiz"
                error={errors.title?.message}
                {...field}
                ref={null}
              />
            )}
          />
          {/* 
          <ReactQuill
            value={description}
            onChange={setDescription}
            style={{ backgroundColor: "#E9EBFB" }}
          /> */}
          <Controller
            name="description"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Description is required",
              },
            }}
            render={({ field }) => (
              <div className="mb-4 mt-4">
                <label className="block text-base mb-2 mulish">
                  Description
                </label>
                <ReactQuill
                  value={field.value}
                  onChange={field.onChange}
                  style={{ backgroundColor: "#E9EBFB" }}
                />
                {errors?.description && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors?.description.message}
                  </p>
                )}
              </div>
            )}
          />

          <Controller
            name="timePerQuestion"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Time per question is required",
              },
            }}
            render={({ field }) => (
              <TextInput
                type={InputType["number"]}
                label="Enter time per question"
                placeholder="Enter time"
                error={errors.timePerQuestion?.message}
                {...field}
                ref={null}
              />
            )}
          />
          <div className="mt-6 flex justify-end gap-4">
            <Button disabled={isPending} title={"Save"} withArrows />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddQuizDescription;
