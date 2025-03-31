import { useState } from "react";
import ArrowsIcon from "../../assets/svg-components/arrows";
import TextToSpeech from "../../components/reusables/TextToSpeech";
import VoiceChanger from "../../components/reusables/VoiceChanger";

const TextToSpeechOverview = () => {
  const barItems = ["Text to Speech", "Voice Changer", "Sound Effect"];
  const [activeTab, setActiveTab] = useState("Text to Speech");
  return (
    <div className="rounded-[20px] p-5 bg-white dark:bg-black pb-20 mt-10">
      <p className="text-[#6C6969] fw-600">CREATE </p>
      <div className="mt-2">
        <h4 className=" ">Generate ‘Text to Speech’ Asset</h4>
      </div>
      <div>
        <div className="flex overflow-auto md:px-0 px-3 scroll-pro gap-x-5 mt-2">
          {barItems.map((item, key) => (
            <div
              className={` cursor-pointer w-fit rounded-[8px]  flex items-center whitespace-nowrap gap-x-4 px-4 lg:px-6 text-[#696767] py-3 border ${
                activeTab === item
                  ? "border-primary btn-primary text-white"
                  : "border-gray-600"
              }`}
              key={key}
              onClick={() => setActiveTab(item)}
            >
              <ArrowsIcon color={activeTab === item ? "#FFF" : "#696767"} />
              {item}
            </div>
          ))}
        </div>
      </div>
      {activeTab === "Text to Speech" && <TextToSpeech />}
      {activeTab === "Voice Changer" && <VoiceChanger />}
    </div>
  );
};

export default TextToSpeechOverview;
