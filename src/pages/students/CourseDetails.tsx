import React, { useState } from "react";
import CourseSidebar from "../../modules/student/OngoingCourses/CourseSidebar";
// import CourseModules from "../../modules/student/OngoingCourses/CourseModules";
// import LessonDetails from "../../modules/student/OngoingCourses/LessonDetails";
import VideoPlayer from "../../modules/student/OngoingCourses/VideoPlayer";
import { getEnrolledCourseDetails } from "../../api/student";
import { useParams } from "react-router-dom";
import Loader from "../../components/reusables/loader";
import { ILesson } from "./lesson.types";

const App: React.FC = () => {
  const { courseId } = useParams();



  // State to track active module and lesson
  const [selectedLesson, setSelectedLesson] = useState<ILesson | null>(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to handle lesson selection
  const handleSelectLesson = (lesson: ILesson) => {
    setSelectedLesson(lesson);
  };

  const { data: courseDetails, isLoading } = getEnrolledCourseDetails(courseId);

  if (isLoading) return <Loader />;
  const courseModules = courseDetails.course.modules;
 

  const findLessonIndex = () => {
    for (let module of courseModules) {
      const lessonIndex = module.lessons.findIndex(
        (l: ILesson) => l.id === selectedLesson?.id
      );
      if (lessonIndex !== -1) {
        return {
          module,
          lessonIndex,
          moduleIndex: courseModules.indexOf(module),
        };
      }
    }
    return { module: null, lessonIndex: -1, moduleIndex: -1 };
  };

  const handleNextLesson = () => {
    const { module, lessonIndex, moduleIndex } = findLessonIndex();
    if (!module) return;

    if (lessonIndex < module.lessons.length - 1) {
      setSelectedLesson(module.lessons[lessonIndex + 1]);
    } else if (moduleIndex < courseModules.length - 1) {
      setSelectedLesson(courseModules[moduleIndex + 1].lessons[0]);
    }
  };

  const handlePreviousLesson = () => {
    const { module, lessonIndex, moduleIndex } = findLessonIndex();
    if (!module) return;

    if (lessonIndex > 0) {
      setSelectedLesson(module.lessons[lessonIndex - 1]);
    } else if (moduleIndex > 0) {
      const prevModule = courseModules[moduleIndex - 1];
      setSelectedLesson(prevModule.lessons[prevModule.lessons.length - 1]);
    }
  };

  const { lessonIndex, moduleIndex } = findLessonIndex();
  const isFirstLesson = moduleIndex === 0 && lessonIndex === 0;
  const isLastLesson =
    moduleIndex === courseModules.length - 1 &&
    lessonIndex === courseModules[courseModules.length - 1].lessons.length - 1;

  return (
    <div className="dark:bg-[#121212] min-h-screen">
      {/* Sidebar Toggle Button (Mobile) */}
      <button
        className="md:hidden px-4 py-2 bg-purple-600 text-white w-full text-center"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Close Modules" : "View Modules"}
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar (Hidden on mobile, appears on toggle) */}
        <div
          className={`md:block ${isSidebarOpen ? "block" : "hidden"} md:w-1/4`}
        >
          <CourseSidebar
            courseId={courseDetails.courseId}
            course={courseDetails}
            handleSelectLesson={handleSelectLesson}
          />
        </div>

        {/* Main Content (Video + Lesson Details) */}
        <div className="flex-1 space-y-6">
          <VideoPlayer
            courseId={courseDetails.courseId}
            selectedLesson={selectedLesson}
            handleNextLesson={handleNextLesson}
            handlePreviousLesson={handlePreviousLesson}
            disableNext={isLastLesson}
            disablePrev={isFirstLesson}
          />
          {/* <LessonDetails
            title={modules[activeModuleIndex].lessons[activeLessonIndex]}
            module={modules[activeModuleIndex].title}
            lesson={`Lesson ${activeLessonIndex + 1}`}
            transcript="This is the transcript content for the selected lesson..."
          /> */}
        </div>

        {/* Course Modules List (Hidden on Mobile, Shows in Sidebar) */}
        {/* <div
          className={`md:block ${isSidebarOpen ? "block" : "hidden"} md:w-1/4`}
        >
          <CourseModules
            modules={modules}
            activeModuleIndex={activeModuleIndex}
            activeLessonIndex={activeLessonIndex}
            onSelectLesson={handleSelectLesson}
          />
        </div> */}
      </div>
    </div>
  );
};

export default App;
