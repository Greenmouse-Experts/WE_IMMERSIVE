import React, { useState } from "react";
import Navbar from "../../layout/user/components/navbar";
import CourseSidebar from "../../modules/user/OngoingCourses/CourseSidebar";
import CourseModules from "../../modules/user/OngoingCourses/CourseModules";
import LessonDetails from "../../modules/user/OngoingCourses/LessonDetails";
import VideoPlayer from "../../modules/user/OngoingCourses/VideoPlayer";

const App: React.FC = () => {
  const modules = [
    {
      title: "Introduction to Physics",
      lessons: [
        "Lesson 1: Overview",
        "Lesson 2: Basic Concepts",
        "Lesson 3: Motion and Forces",
        "Lesson 4: Energy and Work",
        "Lesson 5: Waves and Sound",
      ],
    },
    {
      title: "Advanced Physics",
      lessons: [
        "Lesson 1: Thermodynamics",
        "Lesson 2: Quantum Mechanics",
        "Lesson 3: Relativity",
        "Lesson 4: Nuclear Physics",
        "Lesson 5: Astrophysics",
      ],
    },
  ];

  // State to track active module and lesson
  const [activeModuleIndex, setActiveModuleIndex] = useState(0);
  const [activeLessonIndex, setActiveLessonIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Function to handle lesson selection
  const handleSelectLesson = (moduleIndex: number, lessonIndex: number) => {
    setActiveModuleIndex(moduleIndex);
    setActiveLessonIndex(lessonIndex);
  };

  return (
    <div className="dark:bg-[#121212] min-h-screen">
      <Navbar />

      {/* Sidebar Toggle Button (Mobile) */}
      <button
        className="md:hidden px-4 py-2 bg-purple-600 text-white w-full text-center"
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
      >
        {isSidebarOpen ? "Close Modules" : "View Modules"}
      </button>

      <div className="flex flex-col md:flex-row gap-6">
        {/* Sidebar (Hidden on mobile, appears on toggle) */}
        <div className={`md:block ${isSidebarOpen ? "block" : "hidden"} md:w-1/4`}>
          <CourseSidebar />
        </div>

        {/* Main Content (Video + Lesson Details) */}
        <div className="flex-1 space-y-6">
          <VideoPlayer />
          <LessonDetails
            title={modules[activeModuleIndex].lessons[activeLessonIndex]}
            module={modules[activeModuleIndex].title}
            lesson={`Lesson ${activeLessonIndex + 1}`}
            transcript="This is the transcript content for the selected lesson..."
          />
        </div>

        {/* Course Modules List (Hidden on Mobile, Shows in Sidebar) */}
        <div className={`md:block ${isSidebarOpen ? "block" : "hidden"} md:w-1/4`}>
          <CourseModules
            modules={modules}
            activeModuleIndex={activeModuleIndex}
            activeLessonIndex={activeLessonIndex}
            onSelectLesson={handleSelectLesson}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
