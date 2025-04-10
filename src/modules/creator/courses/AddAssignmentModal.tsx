import { useState } from "react";
import TextInput, { InputType } from "../../../components/ui/TextInput";
import { createAssignment } from "../../../api/creator";
import { toast } from "react-toastify";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const AssignmentCreator = ({
  // lessonQuizId,
  handleOpen,
}: {
  lessonQuizId: string;
  handleOpen: () => void;
}) => {
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [dueDate, setDueDate] = useState("");
  const { mutate: createassignment, isPending } = createAssignment();

  const handleSave = () => {
    if (!title) {
      toast.warn("Complete quiz before saving");
      return;
    }
    createassignment(
      {
        moduleId: "9b302372-549b-48b2-82f7-d02c402aa918",
        lessonTitle: "Module Quiz",
        title: "Assignment 1",
        description: "Complete this assignment before the due date.",
        dueDate: "2024-12-31",
      },
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

      <div className="border rounded-xl p-6 bg-violet-50">
        <div className="mb-4">
          {/* <label className="block font-semibold text-lg mb-2">Assignment Title</label> */}
          <TextInput
            type={InputType["text"]}
            label="Assignment Title"
            placeholder="Enter the tile of the assignment"
            value={title}
            onChange={(e: any) => setTitle(e.target.value)}
          />
        </div>

        <div className="mt-6">
          <ReactQuill
            value={description}
            onChange={setDescription}
            style={{ backgroundColor: "#E9EBFB" }}
          />
          <TextInput
            type={InputType["date"]}
            label="Due Date"
            placeholder="Select a due date "
            value={dueDate}
            onChange={(e: any) => setDueDate(e.target.value)}
          />
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <button className="text-gray-500 hover:underline">Cancel</button>
        <button
          onClick={handleSave}
          disabled={isPending}
          className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-2 rounded-lg shadow hover:opacity-90"
        >
          Save &gt;&gt;
        </button>
      </div>
    </div>
  );
};

export default AssignmentCreator;
