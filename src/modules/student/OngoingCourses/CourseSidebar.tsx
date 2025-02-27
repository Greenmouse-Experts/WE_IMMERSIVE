import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ICourseData, IModule } from "../../../pages/students/lesson.types";
import { IoIosCheckbox } from "react-icons/io";
import { Progress } from "@material-tailwind/react";

interface ISidebarProps {
  course: ICourseData;
  handleSelectLesson: (lesson: any) => void;
}

const Sidebar = ({ course, handleSelectLesson }: ISidebarProps) => {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [showModules, setShowModules] = useState(false);

  const courseModules = course.course.modules;

  //   tutor: "Dr. Farah S.",
  //   progress: "80% Completed",
  //   modules: [
  //     {
  //       title: "Introduction to Physics",
  //       lessons: [
  //         "What is Physics?",
  //         "Basic Concepts in Physics",
  //         "Introduction to Measurements",
  //         "Scientific Methods in Physics",
  //         "Physics and Technology",
  //       ],
  //     },
  //     {
  //       title: "Kinematics",
  //       lessons: [
  //         "Motion and Types of Motion",
  //         "Speed, Velocity, and Acceleration",
  //         "Graphical Representation of Motion",
  //       ],
  //     },
  //     {
  //       title: "Forces and Motion",
  //       lessons: [
  //         "Newton’s Laws of Motion",
  //         "Friction and Its Effects",
  //         "Work, Energy, and Power",
  //         "Momentum and Impulse",
  //       ],
  //     },
  //     {
  //       title: "Introduction to Programming",
  //       lessons: [
  //         "Getting Started with HTML",
  //         "CSS Fundamentals",
  //         "JavaScript Basics",
  //         "Introduction to Python",
  //       ],
  //     },
  //     {
  //       title: "Thermodynamics",
  //       lessons: [
  //         "Introduction to Thermodynamics",
  //         "Laws of Thermodynamics",
  //         "Heat and Work",
  //         "Entropy and Energy Transfer",
  //       ],
  //     },
  //     {
  //       title: "Electricity and Magnetism",
  //       lessons: [
  //         "Electric Charge and Fields",
  //         "Ohm’s Law and Circuits",
  //         "Magnetism and Electromagnetic Induction",
  //         "Applications of Electricity in Daily Life",
  //       ],
  //     },
  //     {
  //       title: "Web Development Basics",
  //       lessons: [
  //         "Introduction to Web Development",
  //         "HTML & CSS Basics",
  //         "JavaScript and DOM Manipulation",
  //         "Version Control with Git & GitHub",
  //       ],
  //     },
  //   ],
  // };

  return (
    <div className="bg-white dark:bg-[#15171E] w-full p-6 rounded-lg">
      {/* Course Details */}
      <div className="mb-4">
        <h2 className="text-lg font-bold dark:text-white">
          {course.course.title}
        </h2>
        <p className="text-gray-500 dark:text-gray-400">Tutor</p>
        <Progress size="sm" value={20} color="blue"  />
      </div>

      {/* Modules & Lessons */}
      <div>
        <div className="mb-3">
          <button
            className="flex justify-between items-center w-full text-left text-gray-700 dark:text-white font-medium py-2 focus:outline-none bg-lightPrimary  px-3 rounded-tr-lg rounded-br-lg text-lg"
            onClick={() => setShowModules(!showModules)}
          >
            Modules
            {showModules ? (
              <FaChevronUp size={12} />
            ) : (
              <FaChevronDown size={12} />
            )}
          </button>
          {showModules && (
            <div className=" ">
              {courseModules?.map((module: IModule, index: number) => (
                <div key={index} className="mb-1">
                  <button
                    className="flex justify-between items-center w-full text-left text-gray-700 dark:text-white font-medium py-2 focus:outline-none  px-3 text-base"
                    onClick={() =>
                      setOpenModule(openModule === index ? null : index)
                    }
                  >
                    {module.title}
                    {openModule === index ? (
                      <FaChevronUp size={12} />
                    ) : (
                      <FaChevronDown size={12} />
                    )}
                  </button>

                  {openModule === index && (
                    <ul className="pl-6 mt-2 text-sm text-gray-600 dark:text-gray-300">
                      {module.lessons.map((lesson, i) => (
                        <li
                          onClick={() => handleSelectLesson(lesson)}
                          key={i}
                          className="flex items-center gap-2 py-2 cursor-pointer"
                        >
                          {lesson?.title}
                          <div className="ml-auto">
                            <IoIosCheckbox className="text-primary" size={18} />
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
