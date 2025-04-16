import Button from "../../../components/ui/Button";

import { useParams } from "react-router-dom";
import {
  deleteAssignment,
  deleteQuizBasic,
  getModuleAssignments,
  getModuleLessons,
} from "../../../api/creator";
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
import { GripVertical, MoreVertical } from "lucide-react";
import AddQuiz from "./add-quiz";
import { useState } from "react";
import QuizCreator from "./AddQuizModal";
import Loader from "../../../components/reusables/loader";
import AssignmentCreator from "./AddAssignmentModal";
import AddQuizDescription from "./addQuizDescription";
import LessonItem from "./lesson-Item";
import QuizItem from "./quiz-Item";
import { BeatLoader } from "react-spinners";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { deleteLessonApi } from "../../../api";
import Publish from "../../../components/reusables/Publish";
import AssignmentItem from "./assignment-Item";

const ViewLessons = () => {
  // const navigate = useNavigate();

  const { id } = useParams();
  const [contentType, setContentType] = useState("quiz");
  const [openQuizDesc, setOpenQuizDesc] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const [openDelete2, setOpenDelete2] = useState(false);
  const [openAssignment, setOpenAssignment] = useState(false);
  const [selectLesson, setSelectLesson] = useState<any>(null);
  const [tab, setTab] = useState(0);
  const [viewLesson, setViewLesson] = useState(false);
  const handleViewLessons = () => setViewLesson(!viewLesson);
  const queryClient = useQueryClient();
  const { data: moduleLessons, isLoading } = getModuleLessons(id);
  const { data: moduleAssignment, isLoading: isLoadingAssignment } =
    getModuleAssignments(id);

  const handleOpenQuizDesc = () => setOpenQuizDesc(!openQuizDesc);
  const handleOpen = () => setOpen(!open);
  const handleOpenAssignment = () => {
    // setSelectLesson(assignment);
    setOpenAssignment(!openAssignment);
  };
  const handleDelete = () => setOpenDelete(!openDelete);
  const handleDelete2 = () => setOpenDelete2(!openDelete2);

  const { mutate: deleteQuiz, isPending: isDeletingQuiz } = deleteQuizBasic();
  const { mutate: deleteAssign, isPending: isDeletingAssignment } =
    deleteAssignment();

  const { mutate: deleteLesson, isPending: isDeleting } = useMutation({
    mutationFn: deleteLessonApi,
    onSuccess: (data) => {
      toast.success(data.message);
      queryClient.invalidateQueries({
        queryKey: ["lessonModules", selectLesson.id],
      });
      handleViewLessons();
    },
    onError: (error: any) => {
      console.log(error);
      toast.error(error.response.data.message);
    },
  });

  if (isLoading || isLoadingAssignment) return <Loader />;

  // const selectedLesson = moduleLessons ? moduleLessons[0] : {};

  // console.log(selectedLesson)

  const handleAddQuestion = (lesson: any) => {
    setSelectLesson(lesson);
    handleOpen();
  };

  const handleDeleteQuizBasic = () => {
    deleteQuiz(selectLesson.id, {
      onSuccess: () => {
        handleDelete();
      },
    });
  };

  const handleDeleteAssignment = () => {
    deleteAssign(selectLesson.id, {
      onSuccess: () => {
        handleDelete2();
      },
    });
  };

  console.log("assignments", moduleAssignment);

  return (
    <>
      <div className="flex flex-row items-start gap-5">
        <div className="rounded-[20px] py-5 px-7 md:w-3/4 w-full bg-white dark:bg-black">
          <h4 className="fw-600  text-black">Module 1 : Lesson 1</h4>
          <p className="fw-600 text-sm text-grey mt-3">
            Lets add content to this lesson
          </p>
          <div className="flex items-center gap-8 fw-600 mt-4">
            <div
              onClick={() => setTab(0)}
              className={` cursor-pointer ${
                tab === 0 && "border-b-2 border-primary fw-700"
              }`}
            >
              <p>Lessons</p>
            </div>
            <div
              onClick={() => setTab(1)}
              className={` cursor-pointer ${
                tab === 1 && "border-b-2 border-primary fw-700"
              }`}
            >
              <p>Quiz</p>
            </div>
            <div
              onClick={() => setTab(2)}
              className={` cursor-pointer ${
                tab === 2 && "border-b-2 border-primary fw-700"
              }`}
            >
              <p>Assignment</p>
            </div>
          </div>
          {tab === 0 && (
            <div className="w-full border-[#C4C4C4] border rounded-[20px] overflow-hidden mt-8">
              <div
                className="bg-gray-100 rounded-xl shadow-sm border border-gray-200"
                // key={index}
              >
                {/* Module Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-indigo-50 rounded-t-xl">
                  {/* Drag Handle */}
                  <div className="cursor-grab p-2">
                    <GripVertical className="text-gray-500" />
                  </div>

                  {/* Module Title */}
                  <h3 className="flex-1 text-gray-800 font-medium">
                    {moduleLessons[0]?.title}
                  </h3>

                  {/* More Options Button */}
                  <button className="text-gray-500 hover:text-gray-700">
                    {/* <Menu placement="left">
                      <MenuHandler>
                        <MoreVertical />
                      </MenuHandler>
                      <MenuList>
                        <MenuItem className="flex flex-col gap-3">
                          <span
                            className="cursor-pointer w-full"
                            // onClick={() => handleModuleDelete(module.id)}
                          >
                            Edit Lesson
                          </span>
                        </MenuItem>
                        <MenuItem className="flex flex-col gap-3">
                          <span
                            className="cursor-pointer w-full"
                            // onClick={() => handleModuleDelete(module.id)}
                          >
                            Delete Lesson
                          </span>
                        </MenuItem>
                      </MenuList>
                    </Menu> */}
                  </button>
                </div>

                {/* Content Section */}
              </div>

              <div>
                {moduleLessons &&
                  moduleLessons[0]?.lessons?.map(
                    (lesson: any, index: number) => {
                      if (lesson.contentType !== "quiz") {
                        return (
                          <LessonItem
                            item={lesson}
                            key={index}
                            handleView={() => {
                              setSelectLesson(lesson);
                              // navigate(
                              //   `/creator/courses/create/modules/view-lesson/${module.id}`
                              // );
                              handleViewLessons();
                            }}
                            handleAddQuestion={() => handleAddQuestion(lesson)}
                          />
                        );
                      }
                    }
                  )}
              </div>

              <div className="mt-10 mb-8 gap-8 text-center flex flex-col items-center justify-center w-full ">
                <p className="">
                  Turn your knowledge to Impact – create and share your course!{" "}
                </p>
                <Button
                  onClick={() => {
                    if (contentType === "quiz") {
                      handleOpenQuizDesc();
                    } else if (contentType === "assignment") {
                      handleOpenAssignment();
                    }
                  }}
                  title="Add Content"
                  withArrows
                  style={{ width: 211 }}
                />
              </div>
            </div>
          )}
          {tab === 1 && (
            <div className="w-full border-[#C4C4C4] border rounded-[20px] overflow-hidden mt-8">
              <div
                className="bg-gray-100 rounded-xl shadow-sm border border-gray-200"
                // key={index}
              >
                {/* Module Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-indigo-50 rounded-t-xl">
                  {/* Drag Handle */}
                  <div className="cursor-grab p-2">
                    <GripVertical className="text-gray-500" />
                  </div>

                  {/* Module Title */}
                  <h3 className="flex-1 text-gray-800 font-medium">Quiz</h3>

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
                            // onClick={() => handleModuleDelete(module.id)}
                          >
                            Edit Quiz
                          </span>
                        </MenuItem>
                        <MenuItem className="flex flex-col gap-3">
                          <span
                            className="cursor-pointer w-full"
                            // onClick={() => handleModuleDelete(module.id)}
                          >
                            Delete Quiz
                          </span>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </button>
                </div>

                {/* Content Section */}
              </div>

              <div>
                {moduleLessons &&
                  moduleLessons[0]?.quizzes?.map(
                    (lesson: any, index: number) => (
                      <QuizItem
                        item={lesson}
                        key={index}
                        handleView={() => {
                          // navigate(
                          //   `/creator/courses/create/modules/view-lesson/${module.id}`
                          // );
                          // handleViewLessons();
                        }}
                        handleAddQuestion={() => handleAddQuestion(lesson)}
                        handleDelete={() => {
                          setSelectLesson(lesson);
                          handleDelete();
                        }}
                      />
                    )
                  )}
              </div>

              <div className="mt-10 mb-8 gap-8 text-center flex flex-col items-center justify-center w-full ">
                <p className="">
                  Turn your knowledge to Impact – create and share your course!{" "}
                </p>
                <Button
                  onClick={() => {
                    if (contentType === "quiz") {
                      handleOpenQuizDesc();
                    } else {
                      handleOpenAssignment();
                    }
                  }}
                  title="Add Content"
                  withArrows
                  style={{ width: 211 }}
                />
              </div>
            </div>
          )}
          {tab === 2 && (
            <div className="w-full border-[#C4C4C4] border rounded-[20px] overflow-hidden mt-8">
              <div
                className="bg-gray-100 rounded-xl shadow-sm border border-gray-200"
                // key={index}
              >
                {/* Module Header */}
                <div className="flex items-center justify-between px-4 py-3 bg-indigo-50 rounded-t-xl">
                  {/* Drag Handle */}
                  <div className="cursor-grab p-2">
                    <GripVertical className="text-gray-500" />
                  </div>

                  {/* Module Title */}
                  <h3 className="flex-1 text-gray-800 font-medium">
                    Assignment
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
                            // onClick={() => handleModuleDelete(module.id)}
                          >
                            Edit Quiz
                          </span>
                        </MenuItem>
                        <MenuItem className="flex flex-col gap-3">
                          <span
                            className="cursor-pointer w-full"
                            // onClick={() => handleModuleDelete(module.id)}
                          >
                            Delete Quiz
                          </span>
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </button>
                </div>

                {/* Content Section */}
              </div>

              <div>
                {moduleAssignment &&
                  moduleAssignment?.map((lesson: any, index: number) => (
                    <AssignmentItem
                      item={lesson}
                      key={index}
                      handleView={() => {
                        // navigate(
                        //   `/creator/courses/create/modules/view-lesson/${module.id}`
                        // );
                        // handleViewLessons();
                      }}
                      handleAddQuestion={() => handleOpenAssignment()}
                      handleDelete={() => {
                        setSelectLesson(lesson);
                        handleDelete2();
                      }}
                    />
                  ))}
              </div>

              <div className="mt-10 mb-8 gap-8 text-center flex flex-col items-center justify-center w-full ">
                <p className="">
                  Turn your knowledge to Impact – create and share your course!{" "}
                </p>
                <Button
                  onClick={() => {
                    if (contentType === "quiz") {
                      handleOpenQuizDesc();
                    } else {
                      handleOpenAssignment();
                    }
                  }}
                  title="Add Content"
                  withArrows
                  style={{ width: 211 }}
                />
              </div>
            </div>
          )}
        </div>
        <div className=" w-1/4">
          <AddQuiz
            setContentType={setContentType}
            selectedContent={contentType}
          />
        </div>
      </div>

      <Dialog open={openQuizDesc} handler={handleOpenQuizDesc}>
        <div>
          <AddQuizDescription
            lessonQuizId={selectLesson?.id}
            handleOpen={handleOpenQuizDesc}
          />
        </div>
      </Dialog>
      <Dialog open={open} handler={handleOpen}>
        <div>
          <QuizCreator
            lessonQuizId={selectLesson?.id}
            handleOpen={handleOpen}
          />
        </div>
      </Dialog>
      <Dialog open={openAssignment} handler={handleOpenAssignment}>
        <div>
          <AssignmentCreator
            lessonQuizId={id}
            handleOpen={handleOpenAssignment}
          />
        </div>
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
              {selectLesson?.title}
            </p>
            {selectLesson?.contentType === "video" && (
              <video
                controls
                className="h-[500px] mx-auto w-full"
                src={selectLesson?.contentUrl}
              ></video>
            )}
            {selectLesson?.contentType === "text" && (
              <div className="h-[300px]">
                <p className="text-black">{selectLesson?.content}</p>
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
              onClick={() => deleteLesson(selectLesson?.id)}
              altClassName="btn-primary px-10 py-2 whitespace-nowrap"
            />
          </div>
        </DialogFooter>
      </Dialog>
      <Dialog className="" open={openDelete} handler={handleDelete} size="md">
        <div className="p-6 bg-white rounded-xl overflow-hidden">
          <Publish
            handleCancel={handleDelete}
            title={`Are you sure you want to delete this quiz?`}
            handleProceed={handleDeleteQuizBasic}
            isLoading={isDeletingQuiz}
          />
        </div>
      </Dialog>
      <Dialog className="" open={openDelete2} handler={handleDelete2} size="md">
        <div className="p-6 bg-white rounded-xl overflow-hidden">
          <Publish
            handleCancel={handleDelete2}
            title={`Are you sure you want to delete this assignment?`}
            handleProceed={ handleDeleteAssignment}
            isLoading={ isDeletingAssignment}
          />
        </div>
      </Dialog>
    </>
  );
};

export default ViewLessons;
