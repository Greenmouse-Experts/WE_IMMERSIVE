import { FC, useState } from "react";

interface LessonDetailsProps {
  title: string;
  module: string;
  lesson: string;
  transcript: string;
}

const LessonDetails: FC<LessonDetailsProps> = ({ title, module, lesson, transcript }) => {
  const [activeTab, setActiveTab] = useState("transcript");

  return (
    <div className="bg-white dark:bg-[#15171E] p-6 rounded-lg">
      {/* Lesson Header */}
      <h2 className="text-xl font-semibold dark:text-white">{title}</h2>
      <p className="text-gray-500 dark:text-gray-400 leading-loose">{module} • {lesson}</p>

      {/* Tabs Navigation */}
      <div className="flex gap-6 mt-4 border-b pb-2">
        <button
          className={`pb-2 ${activeTab === "transcript" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 dark:text-gray-400 hover:text-blue-600"}`}
          onClick={() => setActiveTab("transcript")}
        >
          Transcript
        </button>
        <button
          className={`pb-2 ${activeTab === "summary" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 dark:text-gray-400 hover:text-blue-600"}`}
          onClick={() => setActiveTab("summary")}
        >
          Summary
        </button>
        <button
          className={`pb-2 ${activeTab === "attachments" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 dark:text-gray-400 hover:text-blue-600"}`}
          onClick={() => setActiveTab("attachments")}
        >
          Attachments
        </button>
      </div>

      {/* Lesson Content */}
      <div className="mt-4 text-gray-600 dark:text-gray-300">
        {activeTab === "transcript" && <p>{transcript}</p>}
        {activeTab === "summary" && <p>This is a summary of the lesson. It provides a concise overview of the key points covered.</p>}
        {activeTab === "attachments" && <p>No attachments available for this lesson.</p>}
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-between mt-6">
        <button className="px-4 py-2 rounded-lg bg-gray-300 dark:bg-gray-700 text-gray-700 dark:text-white">
          Back
        </button>
        <button className="px-4 py-2 rounded-lg bg-gradient text-white hover:bg-purple-600">
          Next Lesson
        </button>
      </div>
    </div>
  );
};

export default LessonDetails;
