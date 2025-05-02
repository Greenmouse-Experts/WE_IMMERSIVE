import FormContainer from "../../../modules/auth/form-container";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import Button from "../../../components/ui/Button";
import { BeatLoader } from "react-spinners";
import {  addAdminFaq, publishAdminFaq } from "../../../api/admin";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import SelectInput from "../../../components/ui/SelectInput";
import { IFaq, IFaqCategory } from "../../../types/faq.types";

const CreateFaqModal = ({
  onClose,
  selected,
  blogCategory,
}: {
  onClose: (status: boolean) => void;
  selected: IFaq;
  blogCategory: IFaqCategory;
}) => {
  const { mutate: addCategory, isPending } = addAdminFaq();
  const { mutate: editBlog, isPending: isEditting } = publishAdminFaq();
 

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      question: selected?.question || "",
      answer: selected?.answer || "",
      categoryId: selected?.categoryId || "",
    },
  });

  const onSubmit = (formData: any) => {
    if (selected) {
      editBlog(
        { ...formData, categoryId: selected.id, id: selected.id },
        {
          onSuccess: () => {
            onClose(false);
          },
        }
      );
    } else {
      addCategory(
        { ...formData },
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
              <p className="unbound fw-500 lg:text-lg mb-4">Add Faq</p>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                <div className="relative">
                  <Controller
                    name="question"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Enter faq question",
                      },
                    }}
                    render={({ field }) => (
                      <TextInput
                        label="Faq question"
                        placeholder="Enter faq question"
                        type={InputType.text}
                        error={errors.question?.message}
                        {...field}
                        ref={null}
                      />
                    )}
                  />
                  <Controller
                    name="answer"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Answer is required",
                      },
                    }}
                    render={({ field }) => (
                      <div className="mb-4 mt-4">
                        <label className="block text-base mb-2 mulish">
                          Faq answer
                        </label>
                        <ReactQuill
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </div>
                    )}
                  />
                  <Controller
                    name="categoryId"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    }}
                    render={({ field }) => (
                      <SelectInput
                        label="Faq Category"
                        list={blogCategory}
                        placeholder="Choose category"
                        error={errors.categoryId?.message}
                        {...field}
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

export default CreateFaqModal;
