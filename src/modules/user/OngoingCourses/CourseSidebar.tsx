import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { BsCheckCircleFill } from "react-icons/bs";

const Sidebar = () => {
  const [openModule, setOpenModule] = useState<number | null>(0);

  const course = {
    title: "Physics Vol 2",
    tutor: "Dr. Farah S.",
    progress: "80% Completed",
    modules: [
      {
        title: "Introduction to Physics",
        lessons: ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4", "Lesson 5"],
      },
      {
        title: "Kinematics",
        lessons: ["Lesson 1", "Lesson 2", "Lesson 3"],
      },
      {
        title: "Forces and Motion",
        lessons: ["Lesson 1", "Lesson 2", "Lesson 3", "Lesson 4"],
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-[#15171E] w-[280px] p-4 rounded-lg shadow-md">
      {/* Course Details */}
      <div className="mb-4">
        <h2 className="text-lg font-bold dark:text-white">{course.title}</h2>
        <p className="text-gray-500 dark:text-gray-400">{course.tutor}</p>
        <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
          {course.progress}
        </p>
      </div>

      {/* Modules & Lessons */}
      <div>
        {course.modules.map((module, index) => (
          <div key={index} className="mb-3">
            <button
              className="flex justify-between w-full text-left text-gray-700 dark:text-white font-medium py-2"
              onClick={() => setOpenModule(openModule === index ? null : index)}
            >
              {module.title}
              {openModule === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            {/* Lessons (Show if Module is Open) */}
            {openModule === index && (
              <ul className="pl-4 mt-2 text-sm text-gray-600 dark:text-gray-300">
                {module.lessons.map((lesson, i) => (
                  <li key={i} className="flex items-center gap-2 py-1">
                    <BsCheckCircleFill className="text-green-500" />
                    {lesson}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
