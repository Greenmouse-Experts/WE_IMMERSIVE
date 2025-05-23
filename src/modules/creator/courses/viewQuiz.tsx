// import {  useForm } from "react-hook-form";
// import SelectInput from "../../../components/ui/SelectInput";
// import Button from "../../../components/ui/Button";

import { useParams } from "react-router-dom";
import { deleteQuizQuestion, getModuleQuizzes } from "../../../api/creator";
import {
  Dialog,
  // Menu,
  // MenuHandler,
  // MenuItem,
  // MenuList,
} from "@material-tailwind/react";
// import { GripVertical, MoreVertical } from "lucide-react";
// import AddQuiz from "./add-quiz";
import { useState } from "react";
import QuizCreator from "./AddQuizModal";
import Loader from "../../../components/reusables/loader";
import AddQuizDescription from "./addQuizDescription";
import QuizCard from "./quiz-card";
import Publish from "../../../components/reusables/Publish";

const ViewQuiz = () => {
  // const navigate = useNavigate();

  const { id } = useParams();

  const [openQuizDesc, setOpenQuizDesc] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectLesson, setSelectLesson] = useState<any>(null);
  console.log(setSelectLesson);
  const { data: moduleQuiz, isLoading } = getModuleQuizzes(id);
  const { mutate: deleteQuestion, isPending: isDeleting } =
    deleteQuizQuestion();

  const handleOpenQuizDesc = () => setOpenQuizDesc(!openQuizDesc);
  const handleOpen = () => setOpen(!open);
  const handleDelete = () => setOpenDelete(!openDelete);

  const handleDeleteQuestion = () => {
    deleteQuestion(selectLesson.id, {
      onSuccess: () => {
        handleDelete();
      },
    });
  };

  // console.log(moduleQuiz);

  // const {
  //   control,
  //   handleSubmit,
  //   setValue,
  //   formState: { errors, isValid },
  // } = useForm({
  //   mode: "onChange",
  //   defaultValues: {
  //     title: "",
  //     contentType: "",
  //     content: "",
  //     duration: "",
  //     contentUrl: "",
  //   },
  // });

  if (isLoading) return <Loader />;

  // console.log(selectedLesson)

  // const handleAddQuestion = (lesson: any) => {
  //   setSelectLesson(lesson);
  //   handleOpen();
  // };

  return (
    <>
      <div className="flex flex-row items-start gap-5">
        <div className="rounded-[20px] py-5 px-7 md:w-3/4 w-full bg-white dark:bg-black">
          <h4 className="fw-600  text-black">Module 1 : Quiz</h4>
          <p className="fw-600 text-sm text-grey mt-3">Questions list</p>

          <div>
            <div className="max-w-4xl mx-auto mt-10">
              {moduleQuiz?.map((quiz: any) => (
                <QuizCard
                  key={quiz.id}
                  quiz={quiz}
                  onDelete={async () => {
                    setSelectLesson(quiz);
                    handleDelete();
                  }}
                  onEdit={async () => {
                    setSelectLesson(quiz);
                    handleOpen();
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <Dialog open={openQuizDesc} handler={handleOpenQuizDesc}>
        <div>
          <AddQuizDescription
            // lessonQuizId={selectedLesson?.id}
            handleOpen={handleOpenQuizDesc}
          />
        </div>
      </Dialog>
      <Dialog open={open} handler={handleOpen}>
        <div>
          <QuizCreator
            selectedQuestion={selectLesson}
            lessonQuizId={selectLesson?.id}
            handleOpen={handleOpen}
          />
        </div>
      </Dialog>
      <Dialog className="" open={openDelete} handler={handleDelete} size="md">
        <div className="p-6 bg-white rounded-xl overflow-hidden">
          <Publish
            handleCancel={handleDelete}
            title={`Are you sure you want to delete this question?`}
            handleProceed={handleDeleteQuestion}
            isLoading={isDeleting}
          />
        </div>
      </Dialog>
    </>
  );
};

export default ViewQuiz;
