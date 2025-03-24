import FormContainer from "../../../modules/auth/form-container";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import Button from "../../../components/ui/Button";
import { BeatLoader } from "react-spinners";
import {
  addAdminJobCategory,
  editAdminJobCategory,
} from "../../../api/admin";
import { ICourseCategory } from "../../../types/course.types";

const JobCategoryModal = ({
  onClose,
  selected,
}: {
  onClose: (status: boolean) => void;
  selected: ICourseCategory;
}) => {
  const { mutate: addCategory, isPending } = addAdminJobCategory();
  const { mutate: editCategory, isPending: isEditting } =
  editAdminJobCategory();

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: selected?.name || "",
    },
  });

  const onSubmit = (formData: any) => {
    if (selected) {
      editCategory(
        { ...formData, id: selected.id },
        {
          onSuccess: () => {
            onClose(false);
          },
        }
      );
    } else {
      addCategory(formData, {
        onSuccess: () => {
          onClose(false);
        },
      });
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="mt-3">
          <FormContainer>
            <div className="px-2">
              <p className="unbound fw-500 lg:text-lg mb-4">
                Add Job Category
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                <div className="relative">
                  <Controller
                    name="name"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Please enter Category name",
                      },
                    }}
                    render={({ field }) => (
                      <TextInput
                        label="Category"
                        placeholder="Enter name of category"
                        type={InputType.text}
                        error={errors.name?.message}
                        {...field}
                        ref={null}
                      />
                    )}
                  />
                </div>
                <div className="mt-4">
                  <Button
                    withArrows
                    title={
                      isPending || isEditting ? (
                        <BeatLoader size={12} color="white" />
                      ) : selected ? (
                        "Update"
                      ) : (
                        "Submit"
                      )
                    }
                    altClassName="btn-primary w-full py-3"
                    disabled={!isValid || isPending}
                  />
                </div>
              </form>
            </div>
          </FormContainer>
        </div>
      </div>
    </>
  );
};

export default JobCategoryModal;
