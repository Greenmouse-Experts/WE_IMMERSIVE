import { FC } from "react";
import ReusableSearchBox from "../../../../components/reusables/reusable-serch";

interface Props {
  searchValue: string;
  setSearchValue: React.Dispatch<React.SetStateAction<string>>;
  categories: string[];
  selectedCateogry: string;
  setSelectedCategory: React.Dispatch<React.SetStateAction<string>>;
}
const FaqSidebar: FC<Props> = ({
  searchValue,
  setSearchValue,
  selectedCateogry,
  setSelectedCategory,
  categories,
}) => {
  return (
    <div className="w-full bg-[#F7F8FD] dark:bg-[#15171E] p-4 lg:py-6 rounded-[20px]">
      <div className="">
        <ReusableSearchBox
          placeholder="Search by keyword"
          params={searchValue}
          setParams={setSearchValue}
        />
      </div>
      <div className="mt-6">
        <p>Categories</p>
        <div className="mt-7 flex gap-4 flex-wrap justify-around">
          {categories.map((item, i) => (
            <div
              className={`whitespace-nowrap flex-grow border text-center rounded-[20px] cursor-pointer py-2 px-2 ${
                item === selectedCateogry
                  ? "bg-gradient text-white"
                  : "border-[#696767] text-[#696767]"
              }`}
              style={{ flex: "grow" }}
              key={i}
              onClick={() => setSelectedCategory(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSidebar;
