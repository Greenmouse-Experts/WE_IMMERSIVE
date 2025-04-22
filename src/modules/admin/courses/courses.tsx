import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import CreateAsset from "./create-asset";
import Loader from "../../../components/reusables/loader";
import { ICourse } from "../../../types/course.types";
import { dateFormat } from "../../../helpers";
import { MoreVertical } from "lucide-react";
import useDialog from "../../../hooks/useDialog";
import Publish from "../../../components/reusables/Publish";
import { getAdminCourses, publishCourse, unPublishCourse } from "../../../api/admin";

const Courses = () => {
  const [active, setActive] = useState(true);
  const { Dialog, setShowDialog } = useDialog();
  const [selected, setSelected] = useState<any>(null);

  const { data, isLoading } = getAdminCourses();
  const { mutate: publish, isPending } = publishCourse();
  const { mutate:unpublish, isPending:isUnPublishing } = unPublishCourse();
  const openPublish = (course: ICourse) => {
    setSelected(course);
    setShowDialog(true);
  };

  const handlePublish = () => {
    if(selected?.status === "unpublished"){
      publish(selected?.id, {
        onSuccess() {
          setShowDialog(false);
        },
      });
    }else{
      unpublish(selected?.id, {
        onSuccess() {
          setShowDialog(false);
        },
      });
    }
  };

  if (isLoading) return <Loader />;

  return (
    <div>
      {active ? (
        <div className="mt-6">
          <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
            <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-5 mb-14 items-center">
              <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row items-center">
                <p className="unbound text-[#06052A] text-[24px] md:text-[17px] lg:text-[15px] xl:text-[24px]">
                  All Courses
                </p>
                <div className="flex lg:ml-0 xl:ml-11 mt-5 mb-5 md:mt-0 md:mb-0 lg:mt-0 items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
                  <p className="text-[#2C3E50] fs-300">
                    <span className="text-[#2C3E50] fs-200">Sort:</span> Newest
                    First
                  </p>
                  <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
                </div>
              </div>
              <div className="flex flex-col md:flex-row lg:flex-row items-center gap-x-4">
                <div className="relative">
                  <FaSearch className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search"
                    className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-full text-sm
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <div className="flex items-center mt-5 mb-5 md:mt-2 md:mb-2 lg:mt-0 lg:mb-0 gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
                  <p className="text-[#2C3E50] fs-300">Export As</p>
                  <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
                </div>
                <button
                  type="button"
                  className="bg-gradient-to-r from-[#5f27f7] to-[#268cdb] text-white font-semibold
                                px-4 py-2 rounded-md shadow-md md:text-[12px]"
                  onClick={() => setActive(false)}
                >
                  Create New Course
                </button>
              </div>
            </div>
            <div className="mt-6 overflow-x-auto w-full">
              <table className="table-auto w-full">
                <thead>
                  <tr>
                    <td className="unbound pl-4 p-1 pb-2 text-[12px] md:text-[13px] xl:text-[17px]">
                      #
                    </td>
                    <td className="unbound p-1 pb-2 whitespace-nowrap text-[12px] md:text-[13px] xl:text-[17px]">
                      Courses Name
                    </td>
                    <td className="unbound p-1 pb-2 text-[12px] md:text-[13px] xl:text-[17px]">
                      Image
                    </td>
                    <td className="unbound p-1 pb-2 text-[12px] md:text-[13px] xl:text-[17px]">
                      Price
                    </td>
                    <td className="unbound p-1 pb-2 whitespace-nowrap text-[12px] md:text-[13px] xl:text-[17px]">
                      Published On
                    </td>
                    <td className="unbound p-1 pb-2 whitespace-nowrap text-[12px] md:text-[13px] xl:text-[17px]">
                      Status
                    </td>
                    <td className="unbound p-1 pb-2 whitespace-nowrap text-[12px] md:text-[13px] xl:text-[17px]">
                      Courses Income
                    </td>
                    <td className="unbound p-1 pb-2 text-[12px] md:text-[13px] xl:text-[17px]">
                      Action
                    </td>
                  </tr>
                </thead>
                <tbody className="">
                  {data.map((item: ICourse, i: number) => (
                    <tr className="odd:bg-[#E9EBFB] odd:dark:bg-black" key={i}>
                      <td className="p-2 py-4 pl-4 text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px]">{`0${
                        i + 1
                      }`}</td>
                      <td className="p-2 py-4 text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px]">
                        {item.title}
                      </td>
                      <td className="p-2 py-4 text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px]">
                        <img src={item.image} width="50px" alt="img" />
                      </td>
                      <td className="p-2 py-4 text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px]">
                        {item.price}
                      </td>
                      <td className="p-2 py-4 text-center md:text-center lg:text-center text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px] xl:text-left">
                        {dateFormat(item.createdAt, "dd MMMM yyyy")}
                      </td>
                      <td className="p-2 py-4 text-center md:text-center lg:text-center text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px] xl:text-left capitalize">
                        {item.status}
                      </td>
                      <td className="p-2 py-4 text-center md:text-center lg:text-center text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px] xl:text-left">
                        {/* {item.coursesIncome} */}
                      </td>
                      <td className="p-2 py-4 pl-4 cursor-pointer">
                        <Menu placement="left">
                          <MenuHandler>
                            <MoreVertical />
                          </MenuHandler>
                          <MenuList>
                            <MenuItem className="flex flex-col gap-3">
                              <span
                                className="cursor-pointer w-full"
                                onClick={() => openPublish(item)}
                              >
                                 {item.status === "unpublished" ? 'Publish Course' :'unpublish Course'}
                                
                              </span>
                            </MenuItem>
                            <MenuItem className="flex flex-col gap-3">
                              <span
                                className="cursor-pointer w-full"
                                // onClick={handlePublish}
                              >
                                Delete Course
                              </span>
                            </MenuItem>
                          </MenuList>
                        </Menu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-6">
          <CreateAsset />
        </div>
      )}
      <Dialog title="" size="md">
        <Publish
          handleCancel={() => setShowDialog(false)}
          title={`Are you sure you want to ${selected?.status === "unpublished" ? 'unpublish' :'publish'} this course`}
          handleProceed={handlePublish}
          isLoading={isPending || isUnPublishing}
        />
      </Dialog>
    </div>
  );
};

export default Courses;
