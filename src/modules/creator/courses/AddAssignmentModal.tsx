import TextInput, { InputType } from "../../../components/ui/TextInput";
import { createAssignment } from "../../../api/creator";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Controller, useForm } from "react-hook-form";

const AssignmentCreator = ({
  lessonQuizId,
  handleOpen,
}: {
  lessonQuizId?: string;
  handleOpen: () => void;
}) => {
  const { mutate: createassignment, isPending } = createAssignment();

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
      dueDate: "",
    },
  });

  const onSubmit = (formData: any) => {
    console.log(formData);
    createassignment(
      { ...formData, moduleId: lessonQuizId },
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
      <h2 className="text-xl font-bold mb-6">Create Assignment</h2>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="border rounded-xl p-6 bg-violet-50"
      >
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
              label="Assignment Title"
              placeholder="Enter the title for this quiz"
              error={errors.title?.message}
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
              message: "Description is required",
            },
          }}
          render={({ field }) => (
            <div className="mb-4 mt-4">
              <label className="block text-base mb-2 mulish">Description</label>
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
          name="dueDate"
          control={control}
          rules={{
            required: {
              value: true,
              message: "Due date is required",
            },
          }}
          render={({ field }) => (
            <TextInput
              type={InputType["date"]}
              label="Due Date"
              placeholder="Select a due date "
              error={errors.dueDate?.message}
              {...field}
              ref={null}
            />
          )}
        />

        <div className="mt-6 flex justify-end gap-4">
          <button
            onClick={handleOpen}
            type="button"
            className="text-gray-500 hover:underline"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isPending}
            className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg shadow hover:opacity-90"
          >
            Save &gt;&gt;
          </button>
        </div>
      </form>
    </div>
  );
};

export default AssignmentCreator;
