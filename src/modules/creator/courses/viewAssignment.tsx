// import {  useForm } from "react-hook-form";
// import SelectInput from "../../../components/ui/SelectInput";
// import Button from "../../../components/ui/Button";

import { useParams } from "react-router-dom";
import { deleteAssignment, getModuleAssignments } from "../../../api/creator";
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
import Loader from "../../../components/reusables/loader";
import AddQuizDescription from "./addQuizDescription";
import Publish from "../../../components/reusables/Publish";
import AssignmentCard from "./assignment-card";
import AssignmentCreator from "./AddAssignmentModal";

const ViewAssignment = () => {
  // const navigate = useNavigate();

  const { id } = useParams();

  const [openQuizDesc, setOpenQuizDesc] = useState(false);
  const [open, setOpen] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);

  const [selectLesson, setSelectLesson] = useState<any>(null);
  console.log(setSelectLesson);
  const { data: moduleAssignment, isLoading } = getModuleAssignments(id);
  const { mutate: deleteQuestion, isPending: isDeleting } =
    deleteAssignment();

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

  if (isLoading) return <Loader />;
  return (
    <>
      <div className="flex flex-row items-start gap-5">
        <div className="rounded-[20px] py-5 px-7 md:w-3/4 w-full bg-white dark:bg-black">
          <h4 className="fw-600  text-black">Module 1 : Assignment</h4>
          <p className="fw-600 text-sm text-grey mt-3">Assignment list</p>

          <div>
            <div className="max-w-4xl mx-auto mt-10">
              {moduleAssignment?.map((assignment: any) => (
                
                <AssignmentCard
                  key={assignment.id}
                  assignment={assignment}
                  onDelete={async () => {
                    setSelectLesson(assignment);
                    handleDelete();
                  }}
                  onEdit={async () => {
                    setSelectLesson(assignment);
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
          <AssignmentCreator
            selectedAssignment={selectLesson}
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

export default ViewAssignment;
