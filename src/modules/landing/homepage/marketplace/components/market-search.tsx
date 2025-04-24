
import Button from "../../../../../components/ui/Button";

const MarketSearch = () => {
  return (
    <div className="flex gap-x-4 justify-between p-2 lg:p-3 w-full bg-white z-10 relative rounded-[12px]">
      <div className="w-full">
        <input
          type="text"
          placeholder="Search digital assets, courses, creators, etc"
          className="p-2 w-full outline-none border-none"
        />
      </div>
      <div className="flex items-stretch gap-x-3 justify-end w-[420px]">
        {/* <div className="bg-[#EFEFEF] text-[#757171] whitespace-nowrap cursor-pointer flex item-center gap-x-2 px-2 rounded-[6px] items-center">
          All Categories <IoCaretDown />
        </div> */}
        <div className="">
          <Button
            title={"Search"}
            withArrows
            altClassName="btn-primary px-4 lg:px-8 py-2"
          />
        </div>
      </div>
    </div>
  );
};

export default MarketSearch;
