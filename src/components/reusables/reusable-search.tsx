import { FC, useState } from "react";
import { LuSearch } from "react-icons/lu";
import { useDebouncedCallback } from "use-debounce";

interface Props {
  params: string;
  setParams: React.Dispatch<React.SetStateAction<string>>;
}
const ReusableSearchBox: FC<Props> = ({ setParams }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const debounced = useDebouncedCallback((value) => {
    setParams(value);
  }, 1000);

  const openSearch = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`${
        isExpanded ? "w-full px-2 drop-width" : "up-width w-[52px] pl-[6px]"
      } flex items-center gap-x-2 border border-[#B2B0B0] bg-[#E9EBFB] dark:bg-[#131313] rounded-full py-[3px]`}
    >
      <input
        type="search"
        placeholder="Search creators, items, courses, etc"
        className={`border-none fs-400 placeholder:fs-300 outline-none bg-transparent p-[6px] py-2 w-full ${
          isExpanded ? "" : "hidden"
        }`}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          debounced(e.target.value)
        }
      />
      <div
        className="w-[38px] h-[32px] shrink-0 place-center bg-primary rounded-[30px] cursor-pointer"
        onClick={openSearch}
      >
        <LuSearch className="shrink-0 text-white text-lg" />
      </div>
    </div>
  );
};

export default ReusableSearchBox;
