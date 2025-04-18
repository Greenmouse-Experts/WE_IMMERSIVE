import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";
import { Controller, useForm, useWatch } from "react-hook-form";
import SelectInput from "../../components/ui/SelectInput";

import { createCourse } from "../../api";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { BeatLoader } from "react-spinners";
import CreateCourse from "../../modules/creator/courses/createCourse";
import { getCourseCategory } from "../../api/creator";

const CreateCourses = () => {
  const { data: courseCategory, isLoading: isGettingCategory } =
    getCourseCategory();

  const [stepper, setStepper] = useState(1);

  const [isBusy, setIsBusy] = useState<boolean>(false);

  //   useEffect(() => {
  //     // if (courseCategory.data) {
  //     //   const options = courseCategory.data.data.map((category: any) => ({
  //     //     name: category.name,
  //     //     value: category.id,
  //     //   }));
  //     //   setCategoryOptions(options);
  //     // }
  //   }, [courseCategory.data]);

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      categoryId: "",
      subcategoryId: "",
    },
  });

  const [childCategories, setChildCategories] = useState([]);

  const selectedCategoryId = useWatch({ control, name: "categoryId" });

  // Update children when parent changes
  useEffect(() => {
    console.log("i ran");
    if (selectedCategoryId) {
      const selectedCategory = courseCategory.find(
        (cat: any) => cat.id === selectedCategoryId
      );
      setChildCategories(selectedCategory?.children || []);
    } else {
      setChildCategories([]);
    }
  }, [selectedCategoryId, courseCategory]);

  const handleStepper = (direction: string) => {
    setStepper((prev) => prev + (direction === "next" ? 1 : -1));
  };

  const onSubmit = (formData: any) => {
    const payload = {
      categoryId: formData.subcategoryId,
    };
    mutation.mutate(payload, {
      onSuccess: () => {
        handleStepper("next");
      },
    });
  };

  const mutation = useMutation({
    mutationFn: createCourse,
    onSuccess: (data: any) => {
      toast.success(data.message);
      localStorage.setItem("courseId", JSON.stringify(data.data.id));
      localStorage.setItem("categoryId", JSON.stringify(data.data.categoryId));
      setIsBusy(false); // Hide loader
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
    <>
      {stepper === 1 && (
        <div className="rounded-[20px] p-5 md:w-3/5 lg:w-1/2 w-full bg-white dark:bg-black">
          <div className="w-full">
            <p className="unbound text-[#06052A] fw-600">Create </p>
            <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
              <div className="flex flex-col gap-4 mt-5">
                {isGettingCategory ? (
                  <p>
                    loading category <BeatLoader />
                  </p>
                ) : (
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
                        label="Category"
                        list={courseCategory}
                        placeholder="Choose category"
                        // icon={
                        //   <IoCallOutline className="mx-3 relative top-[1px] text-[#89888D]" />
                        // }
                        error={errors.categoryId?.message}
                        {...field}
                      />
                    )}
                  />
                )}
                {childCategories.length > 0 && (
                  <Controller
                    name="subcategoryId"
                    control={control}
                    rules={{
                      required: {
                        value: true,
                        message: "This field is required",
                      },
                    }}
                    render={({ field }) => (
                      <SelectInput
                        label="Subcategory"
                        list={childCategories}
                        placeholder="Choose subcategory"
                        error={errors.subcategoryId?.message}
                        {...field}
                      />
                    )}
                  />
                )}
              </div>
              <div className="mt-10 flex">
                <Button
                  style={{ width: "fit-content" }}
                  title={
                    isBusy ? <BeatLoader size={12} color="white" /> : "Proceed"
                  }
                  withArrows
                  disabled={!isValid}
                  size={14}
                  altClassName="btn-primary px-10 py-2 whitespace-nowrap"
                />
              </div>
            </form>
          </div>
        </div>
      )}
      {stepper === 2 && (
        <>
          <CreateCourse />
        </>
      )}
    </>
  );
};

export default CreateCourses;
