import { FC } from "react";

interface LessonDetailsProps {
  title: string;
  module: string;
  lesson: string;
  transcript: string;
}

const LessonDetails: FC<LessonDetailsProps> = ({ title, module, lesson, transcript }) => {
  return (
    <div className="bg-white dark:bg-[#15171E] p-6 rounded-lg shadow-md">
      {/* Lesson Header */}
      <h2 className="text-xl font-semibold dark:text-white">{title}</h2>
      <p className="text-gray-500 dark:text-gray-400">
        {module} • {lesson}
      </p>

      {/* Tabs: Transcript, Summary, Attachments */}
      <div className="flex gap-6 mt-4 border-b pb-2">
        <button className="text-blue-600 dark:text-blue-400 font-medium">Transcript</button>
        <button className="text-gray-500 dark:text-gray-400 hover:text-blue-600">Summary</button>
        <button className="text-gray-500 dark:text-gray-400 hover:text-blue-600">Attachments</button>
      </div>

      {/* Lesson Content */}
      <p className="mt-4 text-gray-600 dark:text-gray-300">{transcript}</p>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white">
          Back
        </button>
        <button className="px-4 py-2 rounded-lg bg-purple-500 text-white hover:bg-purple-600">
          Next Lesson
        </button>
      </div>
    </div>
  );
};

export default LessonDetails;
