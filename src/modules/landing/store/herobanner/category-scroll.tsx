import { useRef, useState } from "react";
import ArrowsIcon from "../../../../assets/svg-components/arrows";
import next from "../../../../assets/svg/left.svg";
import prev from "../../../../assets/svg/right.svg";
import { getSubCategories } from "../../../../api/general";
import { BeatLoader } from "react-spinners";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import { ICategory, ICategoryChildren } from "../../../../types/category.types";

interface MarketHeaderProp {
  activeTab: ICategoryChildren | null;
  setActiveTab: (tab: ICategoryChildren) => void;
}

const CategoryScroll = ({ activeTab, setActiveTab }: MarketHeaderProp) => {
  const [scrollValue, setScrollValue] = useState<number>(0);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  // const barItems = [
  //   "XR Learning and Experiences",
  //   "Digital Assets",
  //   "Immersive Experiences",
  //   "Game Assets",
  //   "Animation Packs",
  //   "Hardware & Tools",
  //   "Creator Services",
  //   "Animated Courses",
  // ];

  const { data: subCategories, isLoading } = getSubCategories();

  if (isLoading) {
    return <BeatLoader />;
  }

  const scrollAction = (scrollAmount: number, type: string) => {
    const value =
      type === "left" ? scrollValue - scrollAmount : scrollValue + scrollAmount;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        top: 0,
        left: value,
        behavior: "smooth", // You can remove this for instant scroll
      });
    }
    setScrollValue(value);
  };

  return (
    <div className="flex gap-x-5 items-center">
      <div
        className="w-[40px] cursor-pointer shrink-0 bg-white circle aspect-square place-center"
        onClick={() => scrollAction(30, "left")}
      >
        <img src={prev} alt="" />
      </div>
      <div
        className="w-full relative top-2 flex overflow-auto scroll-pro gap-x-5"
        ref={scrollRef}
      >
        {subCategories
          ?.slice()
          .reverse()
          ?.map((item: ICategory) => (
            <Menu key={item.id} allowHover>
              <MenuHandler>
                {/* <Button
                className={`bg-[#15171E] dark:bg-[rgba(238,238,238,1)] capitalize text-base !font-mulish font-light cursor-pointer w-fit rounded-[8px] flex items-center whitespace-nowrap gap-x-4 px-4 lg:px-6 text-[#696767] py-2 border mulish ${
                  activeTab === item.id
                    ? "border-gray-600"
                    : "border-transparent"
                }`}
                onClick={() => setActiveTab(item.id)}
              >
                <ArrowsIcon color="#696767" />
                {item.name}
              </Button> */}
                <div
                  className={`bg-[#15171E] dark:bg-darkMode text-white cursor-pointer w-fit rounded-[8px] flex items-center whitespace-nowrap gap-x-4 px-4 lg:px-6 py-2 border ${
                    activeTab === item
                      ? "border-gray-600"
                      : "border-transparent"
                  }`}
                >
                  <ArrowsIcon color="#696767" />
                  {item.name}
                </div>
              </MenuHandler>
              {item?.children?.length! > 0 && (
                <MenuList className="bg-[#15171E] dark:bg-[rgba(238,238,238,1)] text-white dark:text-black">
                  {item?.children!.map((subItem: ICategoryChildren) => (
                    <MenuItem
                      key={subItem.id}
                      onClick={() => setActiveTab(subItem)}
                      className={`${
                        activeTab === subItem && "bg-primary text-white"
                      }`}
                    >
                      <p
                        className={` ${
                          activeTab === subItem
                            ? " !text-white"
                            : "dark:!text-black "
                        }`}
                      >
                        {subItem.name}
                      </p>
                    </MenuItem>
                  ))}
                </MenuList>
              )}
            </Menu>
          ))}
      </div>
      <div
        className="w-[40px] cursor-pointer shrink-0 bg-white circle aspect-square place-center"
        onClick={() => scrollAction(30, "right")}
      >
        <img src={next} alt="" />
      </div>
    </div>
  );
};

export default CategoryScroll;
