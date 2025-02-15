import { useState, useRef } from "react";
import { FaPlay, FaPause, FaForward, FaBackward } from "react-icons/fa";

const VideoPlayer = () => {
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
      <div className="relative">
        <video
          ref={videoRef}
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          className="w-full rounded-lg"
          controls
        />

        {/* Play/Pause Button */}
        <button
          onClick={togglePlayPause}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black/60 text-white p-3 rounded-full"
        >
          {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
        </button>
      </div>

      {/* Video Controls */}
      <div className="flex justify-between items-center mt-3 text-gray-700 dark:text-white">
        <button onClick={() => videoRef.current?.currentTime && (videoRef.current.currentTime -= 10)}>
          <FaBackward size={20} />
        </button>
        <p className="text-sm">0:00 / 1:45</p>
        <button onClick={() => videoRef.current?.currentTime && (videoRef.current.currentTime += 10)}>
          <FaForward size={20} />
        </button>
      </div>
    </div>
  );
};

export default VideoPlayer;
