import { MdOutlineArrowDropDown } from "react-icons/md";
import JobItem from "../../modules/landing/jobs/asset-list/job-item";

const JobsScreen = () => {
  return (
    <div className="rounded-[20px] p-5 bg-white dark:bg-black">
      <p className="fw-600 unbound text-2xl">All Jobs</p>
      <div className="flex items-center justify-between mb-8 mt-10">
        <div className="w-[55%]">
          <input
            type="text"
            className="border rounded-[10px] h-9 w-full px-3 border-[#2C3E50]"
            placeholder="Search"
          />
        </div>

        <div className=" flex items-center w-[40%] justify-end">
        <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
          <p className="text-[#2C3E50] fs-300">Choose Category</p>
          <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
        </div>
        <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
          <p className="text-[#2C3E50] fs-300">
            <span className="fs-200 text-[#9094A2]">Sort:</span> Newest First
          </p>
          <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
        </div>
        <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
          <p className="text-[#2C3E50] fs-300">Export As</p>
          <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
        </div>
        </div>
      </div>

      <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-x-6 gap-y-10">
        {[...Array(9)].map((item, i) => (
          <JobItem item={item} key={i} />
        ))}
      </div>
    </div>
  );
};

export default JobsScreen;
