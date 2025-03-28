import FormContainer from "../../../modules/auth/form-container";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import Button from "../../../components/ui/Button";
import { BeatLoader } from "react-spinners";
import {
  addAdminCourseSubCategory,
  updateAdminCourseSubCategory,
} from "../../../api/admin";
import { ICourseSubCategory } from "../../../types/course.types";
import { useParams, useSearchParams } from "react-router-dom";

const CourseSubCategoryModal = ({
  onClose,
  selected,
}: {
  onClose: (status: boolean) => void;
  selected: ICourseSubCategory;
}) => {
  const { mutate: addCategory, isPending } = addAdminCourseSubCategory();
  const { mutate: editCategory, isPending: isEditting } =
  updateAdminCourseSubCategory();

  const { categoryId } = useParams();
  const [searchParams] = useSearchParams();
  const type = searchParams.get("type"); 

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      name: selected?.name || "",
      description: selected?.description || "",
    },
  });

  const onSubmit = (formData: any) => {
    if (selected) {
      editCategory(
        { ...formData, id: selected.id, type },
        {
          onSuccess: () => {
            onClose(false);
          },
        }
      );
    } else {
      addCategory(
        { ...formData, parentId: categoryId, type },
        {
          onSuccess: () => {
            onClose(false);
          },
        }
      );
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="mt-3">
          <FormContainer>
            <div className="px-2">
              <p className="unbound fw-500 lg:text-lg mb-4">
                Add Sub Category
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                <div className="relative">
                  <Controller
                    name="name"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Please enter sub category name",
                      },
                    }}
                    render={({ field }) => (
                      <TextInput
                        label="Name"
                        placeholder="Enter name of sub category"
                        type={InputType.text}
                        error={errors.name?.message}
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
                        message: "Please a description",
                      },
                    }}
                    render={({ field }) => (
                      <TextInput
                        label="Description"
                        placeholder="Enter description of category"
                        type={InputType.textarea}
                        error={errors?.description?.message}
                        className="bg-[#e9ebfb] w-full text-black"
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

export default CourseSubCategoryModal;
