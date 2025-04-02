import { useState, useRef } from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { ILesson } from "../../../pages/students/lesson.types";
import { saveCourseProgress } from "../../../api/student";

interface IVideoPlayerProps {
  selectedLesson: ILesson | null;
  handleNextLesson: () => void;
  handlePreviousLesson: () => void;
  disableNext: boolean;
  disablePrev: boolean;
  courseId: string;
}

const VideoPlayer = ({
  courseId,
  selectedLesson,
  handleNextLesson,
  handlePreviousLesson,
}: IVideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  // const { courseId } = useParams();
  const { mutate: saveProgress } = saveCourseProgress(courseId!);

  // Toggle Play/Pause
  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Update video progress
  const [hasSavedProgress, setHasSavedProgress] = useState(false);

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setDuration(videoRef.current.duration);

      // Check if video is almost finished and has not been saved yet
      if (
        !hasSavedProgress &&
        videoRef.current.duration - videoRef.current.currentTime <= 5
      ) {
        console.log("Video is almost finished!");
        if (courseId && selectedLesson?.id) {
          saveProgress({
            courseId,
            lessonId: selectedLesson?.id,
          });
        }
        setHasSavedProgress(true); // Prevent further executions
      }
    }
  };

  // Handle when video ends
  const handleVideoEnd = () => {
    console.log("Video has ended!");
    handleNextLesson(); // Automatically move to the next lesson
  };

  return (
    <div className="bg-white dark:bg-[#15171E] p-4 rounded-lg w-full">
      {/* Video Element */}
      <div className="relative h-[500px]">
        <div>
          {selectedLesson?.contentType === "video" && (
            <>
              <video
                ref={videoRef}
                src={selectedLesson.contentUrl}
                className="w-full rounded-lg h-[500px]"
                controls
                onTimeUpdate={handleTimeUpdate}
                onEnded={handleVideoEnd}
                onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)} // Set video duration on load
              />
              <button
                onClick={togglePlayPause}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full"
              >
                {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
              </button>
            </>
          )}
        </div>
        <div>
          {selectedLesson?.contentType === "text" && (
            <p>{selectedLesson.content}</p>
          )}
        </div>
      </div>

      {/* Video Controls */}
      <div className="flex justify-between items-center mt-3 text-gray-700 dark:text-white">
        <button onClick={handlePreviousLesson}>
          <FaBackward size={20} />
        </button>
        <p className="text-sm">
          {formatTime(currentTime)} / {formatTime(duration)}
        </p>
        <button onClick={handleNextLesson}>
          <FaForward size={20} />
        </button>
      </div>
    </div>
  );
};

// Format time helper function (e.g., 1:30)
const formatTime = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
};

export default VideoPlayer;
