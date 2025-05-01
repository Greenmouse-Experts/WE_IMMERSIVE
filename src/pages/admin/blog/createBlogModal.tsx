import FormContainer from "../../../modules/auth/form-container";
import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import Button from "../../../components/ui/Button";
import { BeatLoader } from "react-spinners";
import { addAdminBlog, publishAdminBlog } from "../../../api/admin";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useRef, useState } from "react";
import { uploadImage } from "../../../helpers";
import SelectInput from "../../../components/ui/SelectInput";
import { IBlog, IBlogCategory } from "../../../types/blog.types";

const CreateBlogModal = ({
  onClose,
  selected,
  blogCategory,
}: {
  onClose: (status: boolean) => void;
  selected: IBlog;
  blogCategory: IBlogCategory;
}) => {
  const { mutate: addCategory, isPending } = addAdminBlog();
  const { mutate: editBlog, isPending: isEditting } = publishAdminBlog();
  const [thumbnail, setThumbnail] = useState<string | null>(
    selected?.featuredImage || ""
  );
  const thumbnailInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const handleThumbnailChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoading(true);

    const file = event.target.files?.[0];
    if (!file) {
      setLoading(false);
      return;
    }

    const result = await uploadImage(file);
    setLoading(false);

    if (result.isSuccess) {
      setThumbnail(result.fileUrl);
    } else {
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: selected?.title || "",
      content: selected?.title || "",
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
        { ...formData, featuredImage: thumbnail },
        {
          onSuccess: () => {
            onClose(false);
          },
        }
      );
    }
  };

  const openFilePicker = (inputRef: React.RefObject<HTMLInputElement>) => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  return (
    <>
      <div className="w-full">
        <div className="mt-3">
          <FormContainer>
            <div className="px-2">
              <p className="unbound fw-500 lg:text-lg mb-4">Add Blog</p>
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
                <div className="relative">
                  <Controller
                    name="title"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Please enter blog title",
                      },
                    }}
                    render={({ field }) => (
                      <TextInput
                        label="Blog Title"
                        placeholder="Enter blog title"
                        type={InputType.text}
                        error={errors.title?.message}
                        {...field}
                        ref={null}
                      />
                    )}
                  />
                  <Controller
                    name="content"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "Content is required",
                      },
                    }}
                    render={({ field }) => (
                      <div className="mb-4 mt-4">
                        <label className="block text-base mb-2 mulish">
                          Blog content
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
                        label="Blog Category"
                        list={blogCategory}
                        placeholder="Choose category"
                        error={errors.categoryId?.message}
                        {...field}
                      />
                    )}
                  />
                </div>
                <div>
                  <p>Blog Image</p>

                  <div
                    className="h-[200px] w-[200px] border-primary border-dashed border rounded-[10px] overflow-hidden flex flex-col items-center justify-center cursor-pointer relative"
                    onClick={() => openFilePicker(thumbnailInputRef)}
                  >
                    {thumbnail ? (
                      <img
                        src={thumbnail}
                        alt="Thumbnail Preview"
                        className="h-full w-full object-cover rounded-lg"
                      />
                    ) : (
                      <img
                        src="https://res.cloudinary.com/do2kojulq/image/upload/v1744902410/Group_1171275478_1_jzfh6b.png"
                        alt="Image Placeholder"
                        className="h-full w-full object-cover"
                      />
                    )}
                    <input
                      type="file"
                      ref={thumbnailInputRef}
                      onChange={handleThumbnailChange}
                      accept="image/*"
                      className="hidden"
                    />
                  </div>

                  {loading && <p className="mt-2">Uploading...</p>}

                  {thumbnail && (
                    <button
                      onClick={() => openFilePicker(thumbnailInputRef)}
                      className="mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                    >
                      Change Thumbnail
                    </button>
                  )}
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

export default CreateBlogModal;
