import { FC } from "react";
import { LuSearch } from "react-icons/lu";
import { useDebouncedCallback } from "use-debounce";

interface Props {
  params: string;
  setParams: React.Dispatch<React.SetStateAction<string>>;
  placeholder?: string;
}
const ReusableSearchBox: FC<Props> = ({setParams, placeholder }) => {
  const debounced = useDebouncedCallback((value) => {
    setParams(value);
  }, 1000);
  return (
    <div className="w-full flex items-center gap-x-2 border border-[#B2B0B0] bg-[#E9EBFB] dark:bg-[#131313] rounded-full px-2 py-[3px]">
      <input
        type="search"
        placeholder={placeholder? placeholder : 'search for items'}
        className="border-none fs-400 outline-none bg-transparent p-[6px] w-full"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          debounced(e.target.value)
        }
      />
      <div className="w-[38px] h-[29px] place-center bg-primary rounded-[30px]">
        <LuSearch className="shrink-0 text-white text-lg" />
      </div>
    </div>
  );
};

export default ReusableSearchBox;