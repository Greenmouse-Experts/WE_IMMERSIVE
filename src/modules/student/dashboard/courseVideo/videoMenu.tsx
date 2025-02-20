import { useState } from "react";
import vidImg from "../../../../assets/vidImg.png";
import { FaPlayCircle, FaFileAlt, FaLock } from "react-icons/fa";
import { ChevronDown } from "lucide-react";


interface ModuleItem {
    type: "video" | "document" | "locked";
    title: string;
    duration: string;
    unlocked: boolean;
  }

  interface VideoItem {
    img:string,
    title:string,
    duration:string
  }
const VideoMenu = () => {
const [subVid, setSubVid] = useState<number | null>(null);
const [dropVideos, setDropVideos] = useState<number | null>(null);

const navigation :string[] = ["COURSE OVERVIEW", "MODULES", "GRADES", "LEADERBOARD"]

const videos: VideoItem[] = [
    {img:vidImg, title: "Introduction to Physics", duration: "04:28 min"},
    {img:vidImg, title: "Introduction to Physics", duration: "04:28 min"},
    {img:vidImg, title: "Introduction to Physics", duration: "04:28 min"},
    {img:vidImg, title: "Introduction to Physics", duration: "04:28 min"},
    {img:vidImg, title: "Introduction to Physics", duration: "04:28 min"},
    {img:vidImg, title: "Introduction to Physics", duration: "04:28 min"},
  ];

 
const modules: ModuleItem[] = [
    { type: "video", title: "Introduction to Physics", duration: "04:28 min", unlocked: true },
    { type: "document", title: "Introduction to Physics", duration: "04:28 min", unlocked: true },
    { type: "video", title: "Introduction to Physics", duration: "04:28 min", unlocked: true },
    { type: "video", title: "Introduction to Physics", duration: "04:28 min", unlocked: true },
    { type: "video", title: "Introduction to Physics", duration: "04:28 min", unlocked: false },
    { type: "video", title: "Introduction to Physics", duration: "04:28 min", unlocked: false },
  ];

  const toggleSubVideos = (index: number) => {
    setSubVid(subVid === index ? null : index);
  }

  const toggleDropVideos = (index: number, e:any) => {
    setDropVideos(dropVideos === index ? null : index);
    e.stopPropagation()
  };

  return (
    <div>
      <aside className="w-[300px] md:w-[380px] lg:w-[380px] bg-white p-4 rounded-lg shadow-md">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-6">
            <img src={vidImg} alt="img"/>
              <div>
                <h2 className="text-lg font-bold">Physics Vol 2</h2>
                <p className="text-sm text-gray-500">By Evolio & Co.</p>
              </div>
          </div>
          <p className="text-[10px] text-[#000000] mt-1 text-right">80% Completed</p>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-[#710AFC] h-2 rounded-full" style={{ width: "80%" }}></div>
          </div>
        </div>
 
          <div className=" bg-white rounded-2xl">
            {
                navigation.map((navItem, index) => (
                    <div key={index} onClick={() => toggleSubVideos(index)} className={`cursor-pointer mb-2`}>
                        <div className={`flex items-center justify-between py-5 px-3 ${subVid === index && "bg-[#242EF21A] border-l-4 border-[#242EF2]"}`}>
                            <h2 className="text-[18px] font-[600]">{navItem}</h2>
                            <ChevronDown className={`transition-transform ${subVid === index ? "rotate-180" : "rotate-0"}`} />
                        </div>
                        {
                            subVid === index && (
                                <div>
                                    {
                                    videos.map((video, index) => (
                                        <div key={index} className="px-2 py-3 cursor-pointer mb-3"  onClick={(e) => toggleDropVideos(index, e)}>
                                            <div className="flex items-center gap-2">
                                                <img src={video.img} alt="img" className="w-[51px] h-[47px]"/>
                                                <div className="pr-14">
                                                    <h2 className="text-[16px] font-[600]">{video.title}</h2>
                                                    <p className="text-[11px] text-[#696767]">{video.duration}</p>
                                                </div>
                                                <ChevronDown className={`transition-transform ${dropVideos === index  ? "rotate-180" : "rotate-0"}`} />
                                            </div>
                                            {dropVideos === index && (
                                                <div className="mt-4 w-[100%]">
                                                    <div className="mt-4 space-y-3">
                                                        {modules.map((item, index) => (
                                                        <div
                                                            key={index}
                                                            className={`flex items-center justify-between p-3 rounded-lg ${item.unlocked ? "bg-gray-100" : "bg-gray-200"}`}
                                                        >
                                                            <div className="flex items-center gap-3">
                                                            {item.type === "video" ? (
                                                                <FaPlayCircle className="text-purple-500 text-2xl" />
                                                            ) : item.type === "document" ? (
                                                                <FaFileAlt className="text-purple-500 text-2xl" />
                                                            ) : (
                                                                <FaLock className="text-purple-500 text-2xl" />
                                                            )}
                                                            <div>
                                                                <h3 className="text-sm font-medium">{item.title}</h3>
                                                                <p className="text-xs text-gray-500">{item.duration}</p>
                                                            </div>
                                                            </div>
                                                            {item.unlocked ? (
                                                            <input type="checkbox" checked={true} className="accent-purple-500" readOnly />
                                                            ) : (
                                                            <FaLock className="text-purple-500" />
                                                            )}
                                                        </div>
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
                                        </div>
                                      ))
                                    }
                                </div>
                            )
                        }
                    </div>
                ))   
              }
          </div>
      </aside>
    </div>
  )
}

export default VideoMenu;