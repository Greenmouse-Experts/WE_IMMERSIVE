import { useRef, useState } from "react";
import ArrowsIcon from "../../../../assets/svg-components/arrows";
import next from "../../../../assets/svg/left.svg";
import prev from "../../../../assets/svg/right.svg";

const CategoryScroll = () => {
  const [scrollValue, setScrollValue] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [activeTab, setActiveTab] = useState("XR Courses");
  const barItems = [
    "XR Learning and Experiences",
    "Digital Assets",
    "Immersive Experiences",
    "Game Assets",
    "Animation Packs",
    "Hardware & Tools",
    "Creator Services",
    "Animated Courses",
  ];

  const scrollAction = (scrollAmount: number, type:string) => {
    const value = type === "left"? scrollValue - scrollAmount : scrollValue + scrollAmount
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: value,
        behavior: "smooth", // You can remove this for instant scroll
      });
    }
    setScrollValue(value)
  };

  return (
    <div className="flex gap-x-5 items-center">
      <div className="w-[40px] cursor-pointer shrink-0 bg-white circle aspect-square place-center" onClick={() => scrollAction(30, "left")}>
        <img src={prev} alt="" />
      </div>
      <div
        className="w-full relative top-2 flex overflow-auto scroll-pro gap-x-5"
        ref={scrollRef}
      >
        {barItems.map((item, key) => (
          <div
            className={`bg-[#15171E] cursor-pointer w-fit rounded-[8px] flex items-center whitespace-nowrap gap-x-4 px-4 lg:px-6 text-[#AEACAC] py-2 border ${
              activeTab === item ? "border-gray-600" : "border-transparent"
            }`}
            key={key}
            onClick={() => setActiveTab(item)}
          >
            <ArrowsIcon color="#AEACAC" />
            {item}
          </div>
        ))}
      </div>
      <div className="w-[40px] cursor-pointer shrink-0 bg-white circle aspect-square place-center" onClick={() => scrollAction(30, "right")}>
        <img src={next} alt="" />
      </div>
    </div>
  );
};

export default CategoryScroll;
