import { BeatLoader } from "react-spinners";
import { getSubCategories } from "../../../../../api/general";
import ArrowsIcon from "../../../../../assets/svg-components/arrows";
import { ICategory } from "../../../../../types/category.types";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

interface MarketHeaderProp {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const MarketBar = ({ activeTab, setActiveTab }: MarketHeaderProp) => {
  const { data: subCategories, isLoading } = getSubCategories();

  if (isLoading) {
    return <BeatLoader />;
  }

  return (
    <div className="mt-6 pb-3 lg:mt-12 flex overflow-auto md:px-0 px-3 scroll-pro gap-x-5 ">
      {subCategories
        ?.slice()
        .reverse()
        ?.map((item: ICategory) => (
          <Menu key={item.id} allowHover>
            <MenuHandler>
              <div
                className={`bg-[#15171E] text-white dark:text-black dark:bg-[rgba(238,238,238,1)] cursor-pointer w-fit rounded-[8px] flex items-center whitespace-nowrap gap-x-4 px-4 lg:px-6  py-2 border ${
                  activeTab === item.id
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
                {item?.children!.map((subItem) => (
                  <MenuItem
                    onClick={() => setActiveTab(subItem.id)}
                    key={subItem.id}
                    className={`${
                      activeTab === subItem.name && "bg-primary text-white dark:!text-[#696767]"
                    }`}
                  >
                    <p className="text-white dark:!text-[#696767]">{subItem.name}</p>
                  </MenuItem>
                ))}
              </MenuList>
            )}
          </Menu>
        ))}
    </div>
  );
};

export default MarketBar;
