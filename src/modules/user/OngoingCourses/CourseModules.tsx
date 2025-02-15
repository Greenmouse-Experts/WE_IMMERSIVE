import { FC } from "react";

interface Module {
  title: string;
  lessons: string[];
}

interface CourseModulesProps {
  modules: Module[];
  activeModuleIndex: number;
  activeLessonIndex: number;
  onSelectLesson: (moduleIndex: number, lessonIndex: number) => void;
}

const CourseModules: FC<CourseModulesProps> = ({ modules, activeModuleIndex, activeLessonIndex, onSelectLesson }) => {
  return (
    <aside className="bg-white dark:bg-[#15171E] p-4 rounded-lg shadow-md w-full md:w-[300px]">
      <h2 className="text-lg font-semibold mb-4 dark:text-white">Course Modules</h2>
      <div className="space-y-4">
        {modules.map((module, moduleIndex) => (
          <div key={moduleIndex}>
            <h3 className="font-medium text-gray-700 dark:text-gray-300">{module.title}</h3>
            <ul className="mt-2 space-y-2">
              {module.lessons.map((lesson, lessonIndex) => (
                <li
                  key={lessonIndex}
                  className={`p-2 rounded-md cursor-pointer text-sm 
                    ${moduleIndex === activeModuleIndex && lessonIndex === activeLessonIndex 
                      ? "bg-purple-500 text-white" 
                      : "text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700"}`}
                  onClick={() => onSelectLesson(moduleIndex, lessonIndex)}
                >
                  {lesson}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  );
};

export default CourseModules;