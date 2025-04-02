import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { ICourseData, IModule } from "../../../pages/students/lesson.types";
import { IoIosCheckbox } from "react-icons/io";
import { Progress } from "@material-tailwind/react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";
import { saveCourseProgress } from "../../../api/student";

interface ISidebarProps {
  course: ICourseData;
  handleSelectLesson: (lesson: any) => void;
  courseId: string;
}

const Sidebar = ({ course, handleSelectLesson, courseId }: ISidebarProps) => {
  const [openModule, setOpenModule] = useState<number | null>(0);
  const [showModules, setShowModules] = useState(false);

  const courseModules = course.course.modules;
  const { mutate: saveProgress } = saveCourseProgress(courseId!);

  const handleSaveCourse = (lessonId: string) => {
    saveProgress({
      courseId,
      lessonId,
    });
  };

  return (
    <div className="bg-white dark:bg-[#15171E] w-full p-6 rounded-lg">
      {/* Course Details */}
      <div className="mb-4">
        <h2 className="text-lg font-bold dark:text-white">
          {course.course.title}
        </h2>
        <p className="text-gray-500 dark:text-gray-400">Tutor</p>
        <Progress size="sm" value={20} color="blue" />
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
                          <div
                            className="ml-auto"
                            onClick={() => handleSaveCourse(lesson.id)}
                          >
                            {lesson.completed === null ? (
                              <MdCheckBoxOutlineBlank size={20} />
                            ) : (
                              <IoIosCheckbox
                                className="text-primary"
                                size={20}
                              />
                            )}
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
