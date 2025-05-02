import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Dialog,
} from "@material-tailwind/react";
import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import {
  deleteAdminFaq,
  getAdminFaq,
  getAdminFaqCategory,
  publishAdminFaq,
} from "../../../api/admin";
import Loader from "../../../components/reusables/loader";
import { MoreVertical } from "lucide-react";
import Publish from "../../../components/reusables/Publish";
import CreateFaqModal from "./createFaqModal";
import { IFaq } from "../../../types/faq.types";

const FaqTable = () => {
  const [open, setOpen] = useState(false);
  const [publish, setPublish] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const { data: faqs, isLoading } = getAdminFaq();
  const { mutate: publishblog, isPending: isPublishing } = publishAdminFaq();
  const [selected, setSelected] = useState<any>(null);
  const handleOpen = () => setOpen(!open);

  const { mutate: deleteBlog, isPending: isDeleting } = deleteAdminFaq();

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

  const openPublish = (blog: IFaq) => {
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

  const [openFaq, setOpenFaq] = useState<string | null>(null);

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  const { data: blogCategory, isLoading: isGettingCategory } =
    getAdminFaqCategory();

  if (isGettingCategory || isLoading) return <Loader />;

  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px] mt-14">
        <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-5 mb-14 items-center">
          <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row items-center">
            <p className="unbound text-[#06052A] text-[24px] md:text-[17px] lg:text-[15px] xl:text-[24px]">
              All Faqs
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
              Create New Faq
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {faqs?.map((item) => (
            <div
              key={item.id}
              className="border border-gray-200 rounded-lg shadow-sm p-4 h-fit"
            >
            <div>
              <p className="capitalize text-grey">{item.status}</p>
            <div className="flex justify-between items-center">
                <button
                  onClick={() => toggleFaq(item.id)}
                  className="text-left w-full text-[#2C3E50] dark:text-white font-medium text-[16px] md:text-[18px]"
                >
                  {item.question}
                </button>
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
                        {item.status === "published" ? "Unpublish" : "Publish"}
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
              </div>
            </div>
              {openFaq === item.id && (
                <div
                  className="mt-4 text-sm text-gray-700"
                  dangerouslySetInnerHTML={{ __html: item.answer }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
      <Dialog
        className=" dark:bg-darkMode"
        open={open}
        handler={handleOpen}
        size="lg"
      >
        <CreateFaqModal
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
          title="Are you sure you want to delete this item"
          handleProceed={handleDelete}
          handleCancel={() => setDeleteModal(!deleteModal)}
          isLoading={isDeleting}
        />
      </Dialog>
    </div>
  );
};

export default FaqTable;
