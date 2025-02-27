import { useState, useRef } from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";
import { ILesson } from "../../../pages/students/lesson.types";

interface IVideoPlayerProps {
  selectedLesson: ILesson | null;
  handleNextLesson: () => void;
  handlePreviousLesson: () => void;
  disableNext: boolean;
  disablePrev: boolean;
}
const VideoPlayer = ({
  selectedLesson,
  handleNextLesson,
  handlePreviousLesson,
}: IVideoPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

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
        <p className="text-sm">0:00 / 1:45</p>
        <button onClick={handleNextLesson}>
          <FaForward size={20} />
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
