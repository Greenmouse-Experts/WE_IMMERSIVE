import { useState } from "react";
import { Play, RotateCw, Volume2, ChevronLeft, ChevronRight } from "lucide-react";
import VideoMenu from "./videoMenu";
import { MdClose } from "react-icons/md";
import { RxHamburgerMenu } from "react-icons/rx";
import attach01 from "../../../../assets/attach01.png"
import attach02 from "../../../../assets/attach02.png"
import attach03 from "../../../../assets/attach3.png"
import attach04 from "../../../../assets/attach4.png"

const CourseVideo = () => {
  const [activeTab, setActiveTab] = useState("Transcript");
  const [navVisible, setNavVisible] = useState(false);

  const attachImg : string[] = [attach01, attach02, attach03, attach04]

  const playVideo = (e:any, title:string) => {
    setNavVisible(false)
    console.log("PLAYING: ", title)
    e.stopPropagation()
  }


  return (
    <div className="flex flex-col gap-1 md:flex-row min-h-screen">
      <div className=" xl:hidden absolute right-[4%] top-[8%] md:right-[6%] md:top-[14.5%]" onClick={() => setNavVisible(!navVisible)}>
          <RxHamburgerMenu className={`size-[20px] ${!navVisible ? "block" : "hidden" }`} />
          <MdClose className={`size-[20px] ${!navVisible ? "hidden" : "block" }`}/>
      </div>
      {/* Sidebar */}
      <div className={`absolute xl:static -left-[300px] md:-left-[380px] z-40 transition-all duration-2 ${navVisible && "left-[12px] md:left-[15px] lg:left-[300px]"}`}>
        <VideoMenu playVideo={playVideo} />
      </div>
      {/* Main Content */}
      <main className="flex-1 p-0 md:p-4 xl:p-4">
        {/* Video Player */}
        <div className="bg-black rounded-lg shadow-md relative aspect-video">
          <div className="absolute inset-0 flex justify-center items-center text-white">
            <button className="p-4 bg-gray-700 rounded-full">
              <Play size={30} />
            </button>
          </div>
          <div className="absolute top-2 right-2 text-white text-sm">480P  1.0X</div>
          <div className="absolute bottom-2 left-2 text-white flex items-center gap-2">
            <RotateCw size={20} />
            <Volume2 size={20} />
          </div>
        </div>

        {/* Lesson Details */}
        <div className="mt-4 bg-white p-2 md:p-6 lg:p-6 rounded-lg shadow-md">
          <h2 className="unbound text-[16px] md:text-[20px] lg:text-[20px] font-[400] mb-2">Introduction To Physics</h2>
          <p className="text-[18px] text-[#696767]">Module 1. Lesson 5</p>

          {/* Tabs */}
          <div className="flex justify-between border-b mt-11 space-x-4">
            {["Transcript", "Summary", "Attachments"].map((tab) => (
              <button
                key={tab}
                className={`pb-2 border-b-2 text-[14px] md:text-[18px] lg:text-[18px] ${activeTab === tab ? "border-[#1D9CD7] text-[#1D9CD7]" : "border-transparent text-gray-500"}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="mt-11 text-gray-700 text-[14px] text-justify">
            {activeTab === "Transcript" && (
              <p>
                 Discover Unreal Engine by creating a simple project that touches on various aspects of the software. 
                 Learn how to import data from a variety of sources, then use that data to create a simple environment, 
                 author basic materials, explore the lighting system, and add basic Landscape and Foliage to bring the scene to life. 
                 Learn how to import data from a variety of sources, then use that data to create a simple environment, 
                 author basic materials, explore the lighting system, and add basic Landscape and Foliage to bring the scene to life..
              </p>
            )}
            {activeTab === "Summary" && (
              <p>
                 Discover Unreal Engine by creating a simple project that touches on various aspects of the software. 
                 Learn how to import data from a variety of sources, then use that data to create a simple environment, 
                 author basic materials, explore the lighting system, and add basic Landscape and Foliage to bring the scene to life. 
              </p>)}
            {activeTab === "Attachments" && (
                <div className="flex justify-evenly gap-1  lg:gap-0">
                  {
                    attachImg.map((img, index) => (
                      <div key={index}>
                         <img src={img} alt="img"/>
                      </div>
                    ))
                  }
                </div>
             )}
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-[15%]">
            <button className="unbound flex items-center justify-center w-[60px] md:w-[96px] lg:w-[96px] h-[40px] md:h-[50px] lg:h-[50px] text-[10px] md:text-[13px] lg:text-[13px] text-white rounded-[9px] bg-[#D9D9D9]">
              <ChevronLeft size={18} /> Back
            </button>
            <button className="unbound border border-[#710AFC] text-[#710AFC] w-[120px] md:w-[170px] lg:w-[170px] h-[40px] md:h-[50px] lg:h-[50px] text-[10px] md:text-[13px] lg:text-[13px] flex items-center justify-center rounded-[9px]">
              Next Lesson <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default CourseVideo;
