import { useState } from "react";
import { MoreVertical, GripVertical } from 'lucide-react';
import Button from "../../../components/ui/Button";

interface Lesson {
  id: number;
  title: string;
}

interface Module {
  id: number;
  title: string;
  lessons: Lesson[];  
}

interface CreateAssetItemProps {
  handleStepper: (direction: string) => void;
}
const CourseModule = ({ handleStepper }: CreateAssetItemProps ) => {
  const [modules, setModules] = useState<Module[]>([]);

  // Add a new module
  const addModule = () => {
    const newModule: Module = {
      id: Date.now(),
      title: 'New Module',
      lessons: [],
    };
    setModules([...modules, newModule]);
  };

  // Add a lesson to a module
  // const addLesson = (moduleId: number) => {
  //   setModules((prevModules) =>
  //     prevModules.map((module) =>
  //       module.id === moduleId
  //         ? {
  //             ...module,
  //             lessons: [
  //               ...module.lessons,
  //               {
  //                 id: Date.now(),
  //                 title: `Lesson ${module.lessons.length + 1}`,
  //               },
  //             ],
  //           }
  //         : module
  //     )
  //   );
  // };

  return (
    <div>
          <div className="md:p-4 xl:p-4 mx-auto space-y-6">
          <p className="fw-600 text-sm text-grey">CREATE</p>
          <p className="unbound text-[#06052A] fw-600 mt-3">Course Content</p>
            {modules.map((module) => (
              <div
                key={module.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden"
              >
                {/* Module Header */}
                <div className="flex items-center justify-between bg-indigo-50 p-4 rounded-t-2xl">
                  <div className="flex items-center gap-2">
                    <GripVertical className="text-gray-400" />
                    <h3 className="font-semibold text-lg text-gray-800">
                      {module.title}
                    </h3>
                  </div>
                  <MoreVertical className="text-gray-400 cursor-pointer" />
                </div>

                {/* Add Lesson Button */}
                <div className="p-4 space-y-2">
                  {module.lessons.map((lesson) => (
                    <div
                      key={lesson.id}
                      className="p-2 bg-gray-100 rounded-lg shadow-sm"
                    >
                      {lesson.title}
                    </div>
                  ))}
                  <button
                    onClick={() => handleStepper("next")}
                    className="w-[211px] py-2 mt-2 bg-gradient-to-r from-[#5f27f7] to-[#268cdb] text-white rounded-lg hover:from-purple-600 hover:to-blue-600 transition"
                  >
                    Add Lesson &raquo;
                  </button>
                </div>
              </div>
            ))}

            {/* Add New Module Button */}
            <div className="border-2 border-dashed border-blue-400 p-4 rounded-lg flex justify-center items-center cursor-pointer hover:bg-blue-50 transition">
              <Button
                style={{ width: "fit-content" }}
                title="Add New Module"
                withArrows
                size={14}
                // disabled={!isValid}
                altClassName="btn-primary px-10 py-2 whitespace-nowrap"
                onClick={addModule}
              />
            </div>
          </div>
    </div>
  );
};

export default CourseModule;
