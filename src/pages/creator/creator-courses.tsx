import { MdOutlineArrowDropDown } from "react-icons/md";
import { useGetData } from "../../hooks/useGetData";
import { useEffect, useState } from "react";
import Loader from "../../components/reusables/loader";
import { dateFormat } from "../../helpers/dateHelper";
import {
  courseThumbnail,
  getAllCreatorCourses,
  publishCourseApi,
} from "../../api";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import {
  ButtonGroup,
  Dialog,
  DialogBody,
  DialogFooter,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { MoreVertical } from "lucide-react";
import DropZone from "../../components/DropZone";
import UpdateCourseInfo from "../../modules/creator/courses/updateCourseInfo";
import { ICourse } from "../../types/course.types";

const CreatorCoursesScreen = () => {
  const queryClient = useQueryClient();
  // Fetch data for each group
  const creatorCoursesQuery = useGetData(["courses"], getAllCreatorCourses);

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [courseId, setCourseId] = useState<string>("");
  const [open, setOpen] = useState(false);
  const [openThumbnail, setOpenThumbnail] = useState(false);
  const [openCourseInfo, setOpenCourseInfo] = useState(false);
  const [isBusy, setIsBusy] = useState<boolean>(false);
  const [files, setFiles] = useState("");
  const [selected, setSelected] = useState<ICourse | null>(null);

  const navigate = useNavigate();

  const mutationPublish = useMutation({
    mutationFn: (courseId: string) => publishCourseApi(courseId),
    onSuccess: (data: any) => {
      toast.success(data.message);
      setIsBusy(false); // Hide loader
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
      setIsBusy(false); // Hide loader
    },
    onSettled: () => {
      setIsBusy(false); // Hide loader
    },
  });

  useEffect(() => {
    if (creatorCoursesQuery.data) {
      setData(creatorCoursesQuery.data.data);
      setLoading(false);
    }
  }, [creatorCoursesQuery.data]); // Dependency array ensures this runs when data updates

  const handleModulePublish = (moduleId: string) => {
    setCourseId(moduleId);
    setOpen(true);
  };

  const handleModuleThumbnail = (moduleId: string) => {
    setCourseId(moduleId);
    setOpenThumbnail(true);
  };

  const handleOpen = () => setOpen(!open);
  const handleOpenCourseInfo = (course: ICourse) => {
    setSelected(course);
    setOpenCourseInfo(!openCourseInfo);
  };
  const handleCloseCourseInfo = () => {
    setSelected(null);
    setOpenCourseInfo(false)
  };

  const handleOpenThumbnail = () => setOpenThumbnail(!openThumbnail);

  const publishCourse = () => {
    if (courseId) {
      mutationPublish.mutate(courseId, {
        onSuccess: () => {
          handleOpen();
          if (courseId) {
            queryClient.invalidateQueries({ queryKey: ["courses"] });
          }
        },
      });
    }
  };

  const handleDrop = (data: any) => {
    setFiles(data);
  };

  const createThumbnail = () => {
    if (courseId) {
      const payload = {
        courseId: courseId,
        thumbnail: files,
      };
      mutation.mutate(payload, {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: ["courses"] });
        },
      });
    }
  };

  const mutation = useMutation({
    mutationFn: courseThumbnail,
    onSuccess: (data: any) => {
      toast.success(data.message);
      setIsBusy(false); // Hide loader
    },
    onError: (error: any) => {
      toast.error(error.response.data.message);
      setIsBusy(false); // Hide loader
    },
    onSettled: () => {
      setIsBusy(false); // Hide loader
    },
  });

  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] mt-10 px-4 lg:py-6 rounded-[20px]">
        <div className="flex w-full justify-between md:py-1 py-4 items-center">
          <p className="unbound flex flex-grow text-sm md:text-base text-[#06052A]">
            All Courses
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
                onClick={() => navigate("create")}
                title="Create Courses"
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
                    <td className="unbound p-1 pb-2">Course Name</td>
                    <td className="unbound p-1 pb-2">Image</td>
                    <td className="unbound p-1 pb-2">Price</td>
                    <td className="unbound p-1 pb-2">Published On</td>
                    <td className="unbound p-1 pb-2">Status</td>
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
                          <td className="p-2 py-4">{item.title}</td>
                          <td className="pl-1 p-2 py-4">
                            <img src={item.image} className="w-[50px]" />
                          </td>
                          <td className="p-2 py-4">
                            {`${item?.currency ? item.currency : ""} ${
                              item?.price
                            }` || "---"}
                          </td>
                          <td className="p-2 py-4 capitalize">
                            {dateFormat(item?.createdAt, "dd-MM-yyyy")}
                          </td>
                          <td className="p-2 py-4 capitalize">
                            {item?.status}
                          </td>
                          <td className="p-2 py-4 pl-4">
                            <button className="text-gray-500 hover:text-gray-700">
                              <Menu placement="left">
                                <MenuHandler>
                                  <MoreVertical />
                                </MenuHandler>
                                <MenuList>
                                  {item?.status === "draft" && (
                                    <MenuItem className="flex flex-col gap-3">
                                      <span
                                        className="cursor-pointer w-full"
                                        onClick={() =>
                                          handleModulePublish(item.id)
                                        }
                                      >
                                        Publish
                                      </span>
                                    </MenuItem>
                                  )}
                                  <MenuItem className="flex flex-col gap-3">
                                    <span
                                      className="cursor-pointer w-full"
                                      onClick={() => [
                                        navigate(`create/modules`),
                                        localStorage.setItem(
                                          "courseId",
                                          JSON.stringify(item.id)
                                        ),
                                      ]}
                                    >
                                      Add Modules
                                    </span>
                                  </MenuItem>
                                  <MenuItem className="flex flex-col gap-3">
                                    <span
                                      className="cursor-pointer w-full"
                                      onClick={() => handleOpenCourseInfo(item)}
                                    >
                                      Update Info
                                    </span>
                                  </MenuItem>
                                  <MenuItem className="flex flex-col gap-3">
                                    <span
                                      className="cursor-pointer w-full"
                                      onClick={() =>
                                        handleModuleThumbnail(item.id)
                                      }
                                    >
                                      Add Thumbnail
                                    </span>
                                  </MenuItem>
                                </MenuList>
                              </Menu>
                            </button>
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

      <Dialog open={open} handler={handleOpen}>
        <DialogBody>
          <p className="unbound w-full text-center p-2">
            Are you sure you want to publish this course?
          </p>
        </DialogBody>
        <DialogFooter>
          <div className="flex gap-4">
            <ButtonGroup
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1 px-10 py-1 rounded-md cursor-pointer whitespace-nowrap border"
            >
              <span>Cancel</span>
            </ButtonGroup>
            <Button
              style={{ width: "fit-content" }}
              title={
                isBusy ? <BeatLoader size={12} color="white" /> : "Publish"
              }
              withArrows
              size={14}
              onClick={() => publishCourse()}
              altClassName="btn-primary px-10 py-2 whitespace-nowrap"
            />
          </div>
        </DialogFooter>
      </Dialog>
      <Dialog open={openCourseInfo} handler={handleCloseCourseInfo}>
        <DialogBody>
          <p className="unbound w-full text-center p-2">
            Are you sure you want to publish this course?
          </p>
        </DialogBody>
        <div className=" overflow-y-auto h-[90vh]">
          <UpdateCourseInfo selected={selected} handleCloseCourseInfo={handleCloseCourseInfo} />
        </div>
      </Dialog>

      <Dialog open={openThumbnail} handler={handleOpenThumbnail}>
        <DialogBody>
          <div className="w-full flex flex-col items-center justify-center">
            <div className="grid gap-4 w-full max-w-md">
              <div className="flex flex-col gap-4 mt-5 items-center text-center">
                <p className="w-full">Upload Thumbnail</p>

                <div className="bg-[#E9EBFB] rounded-[10px] w-full max-w-[400px] h-[254px] border border-dashed border-primary flex flex-col justify-center items-center px-10 gap-6">
                  <DropZone onUpload={handleDrop} />
                </div>

                {/* Centering the thumbnail preview */}
                {files !== "" && (
                  <div className="grid grid-cols-1 place-items-center mt-2">
                    <div className="relative">
                      <img
                        src={files}
                        className="object-cover w-32 h-32 rounded-lg"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <div className="flex gap-4">
            <ButtonGroup
              variant="text"
              color="red"
              onClick={handleOpenThumbnail}
              className="mr-1 px-10 py-1 rounded-md cursor-pointer whitespace-nowrap border"
            >
              <span>Cancel</span>
            </ButtonGroup>
            <Button
              style={{ width: "fit-content" }}
              title={isBusy ? <BeatLoader size={12} color="white" /> : "Submit"}
              withArrows
              size={14}
              onClick={() => createThumbnail()}
              altClassName="btn-primary px-10 py-2 whitespace-nowrap"
            />
          </div>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default CreatorCoursesScreen;
