import { Controller, useForm } from "react-hook-form";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import Button from "../../../components/ui/Button";
import { useEffect, useState } from "react";
import { BeatLoader } from "react-spinners";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  createCourseModule,
  deleteCourseModule,
  deleteLessonApi,
  getCourseModules,
  getModulesLesson,
  getSingleCourse,
} from "../../../api";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useGetData } from "../../../hooks/useGetData";
import { MoreVertical, GripVertical } from "lucide-react";
import {
  ButtonGroup,
  Dialog,
  DialogBody,
  DialogFooter,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import LessonItem from "./lesson-Item";
import { ICourseItem } from "./courses.types";

const CreateModules = () => {
  const queryClient = useQueryClient();
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const navigate = useNavigate();
  const [course, setCourse] = useState<any>({});
  const [modules, setModules] = useState<any[]>([]);
  const [lessonsArr, setLessons] = useState<any[]>([]);
  const [moduleId, setModuleId] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [viewLesson, setViewLesson] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<ICourseItem | null>(
    null
  );

  const lessons = useGetData(
    ["lessonModules", selectedId], // Correct query key placement
    async () => (selectedId ? getModulesLesson(selectedId) : null),
    {
      queryKey: ["lessonModules", selectedId],
      enabled: !!selectedId, // Prevents fetching when selectedId is null
      staleTime: 1000 * 60, // Optional: Keeps data fresh for 1 minute
    }
  );

  const courseId: any = localStorage.getItem("courseId");

  const courses = useGetData(
    ["singleCourse", courseId ? JSON.parse(courseId) : ""],
    () => getSingleCourse(courseId ? JSON.parse(courseId) : "")
  );

  const module = useGetData(
    ["courseModules", courseId ? JSON.parse(courseId) : ""],
    () => getCourseModules(courseId ? JSON.parse(courseId) : "")
  );

  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
    },
  });

  const mutation = useMutation({
    mutationFn: createCourseModule,
    onSuccess: (data: any) => {
      toast.success(data.message);
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

  const mutationDelete = useMutation({
    mutationFn: deleteCourseModule,
    onSuccess: (data: any) => {
      toast.success(data.message);
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

  const onSubmit = (formData: any) => {
    const courseId = localStorage.getItem("courseId");

    if (courseId) {
      const payload = {
        ...formData,
        courseId: JSON.parse(courseId),
      };
      mutation.mutate(payload, {
        onSuccess: () => {
          if (courseId) {
            queryClient.invalidateQueries({
              queryKey: ["singleCourse", JSON.parse(courseId)],
            });
          }
          if (courseId) {
            queryClient.invalidateQueries({
              queryKey: ["courseModules", JSON.parse(courseId)],
            });
          }
        },
      });
    }
  };

  useEffect(() => {
    if (courses.data) {
      setCourse(courses.data.data);
    }
  }, [courses.data]);

  useEffect(() => {
    if (module.data) {
      const sortedModules = module.data.data.sort(
        (a: { sortOrder: number }, b: { sortOrder: number }) =>
          a.sortOrder - b.sortOrder
      );
      setModules(sortedModules);
    }
  }, [module.data]);

  useEffect(() => {
    if (lessons.data) {
      setLessons(lessons.data.data);
    }
  }, [lessons.data]);

  const handleModuleDelete = (moduleId: string) => {
    setModuleId(moduleId);
    setOpen(true);
  };

  const handleOpen = () => setOpen(!open);
  const handleViewLessons = () => setViewLesson(!viewLesson);

  const deleteModule = () => {
    if (moduleId) {
      mutationDelete.mutate(moduleId, {
        onSuccess: () => {
          handleOpen();
          if (courseId) {
            queryClient.invalidateQueries({
              queryKey: ["singleCourse", JSON.parse(courseId)],
            });
          }
          if (courseId) {
            queryClient.invalidateQueries({
              queryKey: ["courseModules", JSON.parse(courseId)],
            });
          }
        },
      });
    }
  };

  const { mutate: deleteLesson, isPending: isDeleting } = useMutation({
    mutationFn: deleteLessonApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["lessonModules", selectedId],
      });
      handleViewLessons();
    },
    onError: (error: any) => {
      console.log(error);
      toast.error(error.response.data.message);
    },
  });

  //     if (moduleId) {
  //       mutationDelete.mutate(moduleId, {
  //         onSuccess: () => {
  //           handleOpen();
  //           if (courseId) {
  //             queryClient.invalidateQueries({
  //               queryKey: ["singleCourse", JSON.parse(courseId)],
  //             });
  //           }
  //           if (courseId) {
  //             queryClient.invalidateQueries({
  //               queryKey: ["courseModules", JSON.parse(courseId)],
  //             });
  //           }
  //         },
  //       });
  //     }
  //   };

  const handleDisplayLessons = (id: any) => {
    setSelectedId(id);
  };

  return (
    <div className="rounded-[20px] py-5 px-7 md:w-3/4 w-full bg-white dark:bg-black">
      <p className="fw-600 text-sm text-grey uppercase">
        CREATE MODULES ON {course?.title}
      </p>

      {modules?.length > 0 &&
        modules?.map((module, index) => (
          <div
            className="bg-gray-100 rounded-xl mt-5 shadow-sm border border-gray-200"
            key={index}
          >
            {/* Module Header */}
            <div className="flex items-center justify-between px-4 py-3 bg-indigo-50 rounded-t-xl">
              {/* Drag Handle */}
              <div className="cursor-grab p-2">
                <GripVertical className="text-gray-500" />
              </div>

              {/* Module Title */}
              <h3 className="flex-1 text-gray-800 font-medium">
                {module.title}
              </h3>

              {/* More Options Button */}
              <button className="text-gray-500 hover:text-gray-700">
                <Menu placement="left">
                  <MenuHandler>
                    <MoreVertical />
                  </MenuHandler>
                  <MenuList>
                    <MenuItem className="flex flex-col gap-3">
                      <span
                        className="cursor-pointer w-full"
                        onClick={() => handleModuleDelete(module.id)}
                      >
                        Delete Module
                      </span>
                    </MenuItem>
                    <MenuItem
                      onClick={() => handleDisplayLessons(module.id)}
                      className="flex flex-col gap-3"
                    >
                      {/* <Link 
                      // to={`/creator/courses/create/modules/view-lesson/${module.id}`}
                      > */}
                      View Lessons
                      {/* </Link> */}
                    </MenuItem>
                  </MenuList>
                </Menu>
              </button>
            </div>

            {/* Content Section */}
            <div className="p-4">
              {lessonsArr?.length > 0 && selectedId === module.id ? (
                <div className="flex flex-col gap-3 p-2 mb-3">
                  {lessonsArr.map((lesson, index) => (
                    <LessonItem
                      item={lesson}
                      key={index}
                      handleView={() => {
                        navigate(
                          `/creator/courses/create/modules/view-lesson/${module.id}`
                        );
                        handleViewLessons();
                        setSelectedLesson(lesson);
                      }}
                    />
                  ))}
                </div>
              ) : (
                <></>
              )}
              <Button
                style={{ width: "fit-content" }}
                title={"Add Lesson"}
                withArrows
                onClick={() => navigate(`lessons/${module.id}`)}
                size={14}
                altClassName="btn-primary px-10 py-2 whitespace-nowrap"
              />
            </div>
          </div>
        ))}

      <div className="w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          <div className="flex flex-col gap-4 mt-5">
            <Controller
              name="title"
              control={control}
              rules={{
                required: {
                  value: true,
                  message: "Please enter module title",
                },
              }}
              render={({ field }) => (
                <TextInput
                  type={InputType.text}
                  label="Module Title"
                  placeholder="Enter module title"
                  error={errors.title?.message}
                  {...field}
                  ref={null}
                />
              )}
            />
          </div>
          <div className="mt-1 flex">
            <Button
              style={{ width: "fit-content" }}
              title={
                isBusy ? (
                  <BeatLoader size={12} color="white" />
                ) : (
                  "Create Module"
                )
              }
              withArrows
              disabled={!isValid}
              size={14}
              altClassName="btn-primary px-10 py-2 whitespace-nowrap"
            />
          </div>
        </form>
      </div>

      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
          <p className="unbound w-full text-center p-2">
            Are you sure you want to delete this module?
          </p>
        </DialogBody>
        <DialogFooter>
          <div className="flex gap-4">
            <ButtonGroup
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1 px-10 py-1 rounded-md whitespace-nowrap border"
            >
              <span>Cancel</span>
            </ButtonGroup>
            <Button
              style={{ width: "fit-content" }}
              title={
                isBusy ? (
                  <BeatLoader size={12} color="white" />
                ) : (
                  "Delete Module"
                )
              }
              withArrows
              size={14}
              onClick={() => deleteModule()}
              altClassName="btn-primary px-10 py-2 whitespace-nowrap"
            />
          </div>
        </DialogFooter>
      </Dialog>

      <Dialog
        open={viewLesson}
        handler={handleViewLessons}
        size="md"
        className="dark:bg-darkMood "
      >
        <DialogBody>
          <div className="">
            <p className=" font-medium text-black mb-4">
              {selectedLesson?.title}
            </p>
            {selectedLesson?.contentType === "video" && (
              <video
                controls
                className="h-[500px] mx-auto w-full"
                src={selectedLesson?.contentUrl}
              ></video>
            )}
            {selectedLesson?.contentType === "text" && (
              <div className="h-[300px]">
                <p className="text-black">{selectedLesson?.content}</p>
              </div>
            )}
          </div>
        </DialogBody>
        <DialogFooter>
          <div className="flex gap-4">
            <ButtonGroup
              variant="text"
              color="red"
              onClick={handleViewLessons}
              className="mr-1 px-10 py-1 rounded-md whitespace-nowrap border"
            >
              <span>Cancel</span>
            </ButtonGroup>
            <Button
              style={{ width: "fit-content" }}
              title={
                isDeleting ? (
                  <BeatLoader size={12} color="white" />
                ) : (
                  "Delete Lessson"
                )
              }
              withArrows
              size={14}
              onClick={() => deleteLesson(selectedLesson?.id)}
              altClassName="btn-primary px-10 py-2 whitespace-nowrap"
            />
          </div>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default CreateModules;
