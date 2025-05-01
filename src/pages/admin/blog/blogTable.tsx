import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Dialog,
} from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import CreateBlogModal from "./createBlogModal";
import { useState } from "react";
import {
  deleteAdminBlog,
  getAdminBlog,
  getAdminBlogCategory,
  publishAdminBlog,
} from "../../../api/admin";
import Loader from "../../../components/reusables/loader";
import { IBlog } from "../../../types/blog.types";
import { dateFormat } from "../../../helpers";
import { MoreVertical } from "lucide-react";
import Publish from "../../../components/reusables/Publish";

const BlogTable = () => {
  const [open, setOpen] = useState(false);
  const [publish, setPublish] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const { data: blog, isLoading } = getAdminBlog();
  const { mutate: publishblog, isPending: isPublishing } = publishAdminBlog();
  const [selected, setSelected] = useState<any>(null);
  const handleOpen = () => setOpen(!open);

  const { mutate: deleteBlog, isPending: isDeleting } = deleteAdminBlog();

  const handleDelete = () => {
    deleteBlog(selected.id, {
      onSuccess: () => {
        setDeleteModal(false);
      },
    });
  };

  const openDelete = (asset: any) => {
    setSelected(asset);
    setDeleteModal(true);
  };

  const openPublish = (blog: IBlog) => {
    setSelected(blog);
    setPublish(true);
  };

  const handlePublish = () => {
    publishblog(
      {
        ...selected,
        status: selected.status === "published" ? "draft" : "published",
      },
      {
        onSuccess: () => {
          setPublish(false);
          setSelected(null);
        },
      }
    );
  };

  const { data: blogCategory, isLoading: isGettingCategory } =
    getAdminBlogCategory();

  if (isGettingCategory || isLoading) return <Loader />;

  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px] mt-14">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-5 mb-14 items-center">
          <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row items-center">
            <p className="unbound text-[#06052A] text-[24px] md:text-[17px] lg:text-[15px] xl:text-[24px]">
              All Blogs
            </p>
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

            <button
              onClick={() => {
                setSelected(null);
                handleOpen();
              }}
              type="button"
              className="bg-gradient-to-r from-[#5f27f7] to-[#268cdb] text-white font-semibold
                                px-4 py-2 rounded-md shadow-md md:text-[12px]"
            >
              Create New Blog
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
                <td className="unbound p-1 pb-2 text-[12px] md:text-[13px] xl:text-[17px]">
                  Image
                </td>
                <td className="unbound p-1 pb-2 whitespace-nowrap text-[12px] md:text-[13px] xl:text-[17px]">
                  Blog Title
                </td>
                <td className="unbound p-1 pb-2 whitespace-nowrap text-[12px] md:text-[13px] xl:text-[17px]">
                  Status
                </td>
                <td className="unbound p-1 pb-2 whitespace-nowrap text-[12px] md:text-[13px] xl:text-[17px]">
                  Date Created
                </td>
                <td className="unbound p-1 pb-2 text-[12px] md:text-[13px] xl:text-[17px]">
                  Action
                </td>
              </tr>
            </thead>
            <tbody className="">
              {blog?.map((item: IBlog, i: number) => (
                <tr className="odd:bg-[#E9EBFB] odd:dark:bg-black" key={i}>
                  <td className="p-2 py-4 pl-4 text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px]">{`0${
                    i + 1
                  }`}</td>
                   <td className="p-2 py-4 text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px]">
                    <img
                      src={item?.featuredImage || ""}
                      width="50px"
                      alt="img"
                      className=" object-cover object-center"
                    />
                  </td>
                  <td className="p-2 py-4 text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px]">
                    {item.title}
                  </td>
                 
                  <td className="p-2 py-4 text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px]">
                    {item.status}
                  </td>
                  <td className="p-2 py-4 text-center md:text-center lg:text-center text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px] xl:text-left">
                    {dateFormat(item.createdAt, "dd MMMM yyyy")}
                  </td>
                  <td className="p-2 py-4 text-center md:text-center lg:text-center text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px] xl:text-left capitalize">
                    {item.status}
                  </td>
                  {/* <td className="p-2 py-4 text-center md:text-center lg:text-center text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px] xl:text-left">
                        {item.coursesIncome}
                      </td> */}
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
                            {item.status === "published"
                              ? "Unpublish"
                              : "Publish"}
                          </span>
                        </MenuItem>
                        <MenuItem className="flex flex-col gap-3">
                          <span
                            className="cursor-pointer w-full"
                            onClick={() => {
                              setSelected(item);
                              handleOpen();
                            }}
                          >
                            Edit
                          </span>
                        </MenuItem>
                        <MenuItem className="flex flex-col gap-3">
                          <span
                            className="cursor-pointer w-full"
                            onClick={() => openDelete(item)}
                          >
                            Delete
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
      <Dialog
        className=" dark:bg-darkMode"
        open={open}
        handler={handleOpen}
        size="lg"
      >
        <CreateBlogModal
          blogCategory={blogCategory}
          onClose={handleOpen}
          selected={selected}
        />
      </Dialog>
      <Dialog open={publish} handler={() => setPublish(!publish)} size="md">
        <Publish
          handleCancel={() => setPublish(false)}
          title={`Are you sure you want to ${
            selected?.status === "published" ? "unpublish" : "publish"
          } this course`}
          handleProceed={handlePublish}
          isLoading={isPublishing}
        />
      </Dialog>
      <Dialog open={deleteModal} handler={() => setDeleteModal(!deleteModal)}>
        <Publish
          title="Are you sure you want to delete this course"
          handleProceed={handleDelete}
          handleCancel={() => setDeleteModal(!deleteModal)}
          isLoading={isDeleting}
        />
      </Dialog>
    </div>
  );
};

export default BlogTable;
