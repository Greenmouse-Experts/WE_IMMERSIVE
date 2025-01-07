import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { useState } from "react";
import Loader from "../../../components/reusables/loader";
import { dateFormat } from "../../../helpers/dateHelper";
import Button from "../../../components/ui/Button";
import { Dialog } from "@material-tailwind/react";
import JobCategory from "./jobCategory";

const Jobs = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  const data = [
    {
        assetName: "2D/3D Designer",
        description: "Looking for a 2D Designer to create designs for an upcoming ...",
        postedBy: "Chukka Ude",
        createdAt: "2022-10-10T00:00:00Z",
    },
    {
        assetName: "2D/3D Designer",
        description: "Looking for a 2D Designer to create designs for an upcoming ...",
        postedBy: "Chukka Ude",
        createdAt: "2022-10-10T00:00:00Z",
    },
    {
        assetName: "2D/3D Designer",
        description: "Looking for a 2D Designer to create designs for an upcoming ...",
        postedBy: "Chukka Ude",
        createdAt: "2022-10-10T00:00:00Z",
    },
    {
        assetName: "2D/3D Designer",
        description: "Looking for a 2D Designer to create designs for an upcoming ...",
        postedBy: "Chukka Ude",
        createdAt: "2022-10-10T00:00:00Z",
    },
    {
        assetName: "2D/3D Designer",
        description: "Looking for a 2D Designer to create designs for an upcoming ...",
        postedBy: "Chukka Ude",
        createdAt: "2022-10-10T00:00:00Z",
    }
  ]

  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] mt-10 px-4 lg:py-6 rounded-[20px]">
        <div className="flex w-full justify-between md:py-1 py-4 items-center">
          <p className="unbound flex flex-grow text-sm md:text-base text-[#06052A]">
            All Posted Jobs
          </p>
          <div className="md:flex hidden items-center gap-x-2">
            <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
              <p className="text-[#2C3E50] fs-300">Export As</p>
              <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
            </div>
            <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
              <p className="text-[#2C3E50] fs-300">
                <span className="text-[#2C3E50] fs-200">Sort:</span> Newest
                First
              </p>
              <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
            </div>
            <div className="flex items-center gap-x-1 px-2 py-1">
              <Button
                size={14}
                title="Post New Job"
                altClassName="btn-primary px-2 py-1 flex flex-grow whitespace-nowrap"
              />
            </div>
            <div className="flex items-center gap-x-1 px-2 py-1">
              <Button
                size={14}
                onClick={handleOpen}
                title="Create Job Category"
                altClassName="btn-primary px-2 py-1 flex flex-grow whitespace-nowrap"
              />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="overflow-x-auto">
            {loading ? (
              // Loading spinner or placeholder
              <Loader />
            ) : (
              <table className="table-auto md:w-full w-[1000px] text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <td className="unbound pl-4 p-1 pb-2">#</td>
                    <td className="unbound p-1 pb-2">Job Title</td>
                    <td className="unbound p-1 pb-2">Job Description</td>
                    <td className="unbound p-1 pb-2">Posted By</td>
                    <td className="unbound p-1 pb-2">Date</td>
                    <td className="unbound p-1 pb-2">Action</td>
                  </tr>
                </thead>
                <tbody>
                  {data?.length > 0
                    ? data.map((item, i) => (
                        <tr
                          className="odd:bg-[#E9EBFB] odd:dark:bg-black"
                          key={i}
                        >
                          <td className={`p-2 py-4 pl-4`}>{`${i + 1}`}</td>
                          <td className="p-2 py-4">{item.assetName}</td>
                          <td className="p-2 py-4">
                            {item.description}
                          </td>
                          <td className="p-2 py-4">
                            {item.postedBy}
                          </td>
                          <td className="p-2 py-4 capitalize">
                            {dateFormat(item?.createdAt, "dd-MM-yyyy")}
                          </td>
                          <td className="p-2 py-4 pl-4">
                            <PiDotsThreeOutlineFill className="cursor-pointer" />
                          </td>
                        </tr>
                      ))
                    : null}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>

      <Dialog
        className="bg-transparent flex justify-center"
        open={open}
        handler={handleOpen}
        size="md"
      >
        <JobCategory onClose={handleOpen} />
      </Dialog>
    </div>
  );
};

export default Jobs;
