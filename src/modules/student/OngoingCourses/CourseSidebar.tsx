// import { useState } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";
// import { BsCheckCircleFill } from "react-icons/bs";

const Sidebar = () => {
  // const [openModule, setOpenModule] = useState<number | null>(0);

  const course = {
    title: "Physics Vol 2",
    tutor: "Dr. Farah S.",
    progress: "80% Completed",
    modules: [
      {
        title: "Introduction to Physics",
        lessons: [
          "What is Physics?",
          "Basic Concepts in Physics",
          "Introduction to Measurements",
          "Scientific Methods in Physics",
          "Physics and Technology",
        ],
      },
      {
        title: "Kinematics",
        lessons: [
          "Motion and Types of Motion",
          "Speed, Velocity, and Acceleration",
          "Graphical Representation of Motion",
        ],
      },
      {
        title: "Forces and Motion",
        lessons: [
          "Newton’s Laws of Motion",
          "Friction and Its Effects",
          "Work, Energy, and Power",
          "Momentum and Impulse",
        ],
      },
      {
        title: "Introduction to Programming",
        lessons: [
          "Getting Started with HTML",
          "CSS Fundamentals",
          "JavaScript Basics",
          "Introduction to Python",
        ],
      },
      {
        title: "Thermodynamics",
        lessons: [
          "Introduction to Thermodynamics",
          "Laws of Thermodynamics",
          "Heat and Work",
          "Entropy and Energy Transfer",
        ],
      },
      {
        title: "Electricity and Magnetism",
        lessons: [
          "Electric Charge and Fields",
          "Ohm’s Law and Circuits",
          "Magnetism and Electromagnetic Induction",
          "Applications of Electricity in Daily Life",
        ],
      },
      {
        title: "Web Development Basics",
        lessons: [
          "Introduction to Web Development",
          "HTML & CSS Basics",
          "JavaScript and DOM Manipulation",
          "Version Control with Git & GitHub",
        ],
      },
    ],
  };

  return (
    <div className="bg-white dark:bg-[#15171E] w-full p-6 rounded-lg">
      {/* Course Details */}
      <div className="mb-4">
        <h2 className="text-lg font-bold dark:text-white">{course.title}</h2>
        <p className="text-gray-500 dark:text-gray-400">{course.tutor}</p>
        <p className="text-sm text-purple-600 dark:text-purple-400 font-medium">
          {course.progress}
        </p>
      </div>

      {/* Modules & Lessons */}
      <div className="overflow-y-auto max-h-[60vh] md:max-h-none">
        {/* {course.modules.map((module, index) => (
          <div key={index} className="mb-3">
            <button
              className="flex justify-between w-full text-left text-gray-700 dark:text-white font-medium py-2 focus:outline-none"
              onClick={() => setOpenModule(openModule === index ? null : index)}
            >
              {module.title}
              {openModule === index ? <FaChevronUp /> : <FaChevronDown />}
            </button>

            
            {openModule === index && (
              <ul className="pl-4 mt-2 text-sm text-gray-600 dark:text-gray-300">
                {module.lessons.map((lesson, i) => (
                  <li key={i} className="flex items-center gap-2 py-2">
                    <BsCheckCircleFill className="text-green-500" />
                    {lesson}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Sidebar;
