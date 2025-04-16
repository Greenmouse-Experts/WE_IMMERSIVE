import { FaRegEdit } from "react-icons/fa";
import { dateFormat } from "../../../helpers";
import { FaRegTrashCan } from "react-icons/fa6";

const AssignmentCard = ({ assignment, onEdit, onDelete }: any) => {
  return (
    <div className=" mx-auto p-6 bg-white dark:bg-darkMode rounded-2xl shadow-lg border border-gray-200">
    <div className="flex justify-between">
    <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {assignment.title}
      </h2>
      <div className="flex gap-6 items-center">
        <FaRegEdit onClick={onEdit} className=" cursor-pointer" size={20} />
        <FaRegTrashCan
          color="red"
          className=" cursor-pointer"
          size={20}
          onClick={onDelete}
        />
      </div>
    </div>

      <p className="text-sm text-gray-500 mb-4">
        <span className="font-semibold">Lesson ID:</span> {assignment.lessonId}
      </p>

      <div
        className="prose prose-sm mb-4 text-gray-700"
        dangerouslySetInnerHTML={{ __html: assignment.description }}
      />

      <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
        <div>
          <span className="font-semibold">Due Date:</span>
          <div>{dateFormat(assignment.dueDate)}</div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentCard;
