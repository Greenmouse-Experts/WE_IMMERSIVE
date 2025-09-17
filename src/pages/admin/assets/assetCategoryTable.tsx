import { MdOutlineArrowDropDown } from "react-icons/md";
import Loader from "../../../components/reusables/loader";
import { dateFormat } from "../../../helpers/dateHelper";
import Button from "../../../components/ui/Button";
import {
  useDeleteAdminAssetCategory,
  useAdminAssetCategory,
} from "../../../api/admin";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import Publish from "../../../components/reusables/Publish";
import { MoreVertical } from "lucide-react";
import { useState } from "react";
import { Dialog } from "@material-tailwind/react";
import { ICourseCategory } from "../../../types/course.types";
import AssetCategoryModal from "./assetCategoryModal";
import { Link } from "react-router-dom";

const AssetCategory = () => {
  const { data: assetCategory, isLoading } = useAdminAssetCategory();

  const [selected, setSelected] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const [deleteDialog, setShowDeleteDialog] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);
  const handleDeleteModal = () => setOpen(!deleteDialog);
  const openEdit = (item: ICourseCategory) => {
    setSelected(item);
    handleOpen();
  };
  const openCreate = () => {
    setSelected(null);
    handleOpen();
  };

  const openDelete = (asset: any) => {
    setSelected(asset);
    setShowDeleteDialog(true);
  };
  const { mutate: deleteAsset, isPending: isDeleting } =
    useDeleteAdminAssetCategory();

  const handleDelete = () => {
    deleteAsset(selected.id, {
      onSuccess: () => {
        setShowDeleteDialog(false);
        setShowDeleteDialog(false);
      },

      onError: () => {
        setShowDeleteDialog(false);
      },
    });
  };

  if (isLoading) return <Loader />;

  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] mt-10 px-4 lg:py-6 rounded-[20px]">
        <div className="flex w-full justify-between md:py-1 py-4 items-center">
          <p className="unbound flex flex-grow text-sm md:text-base text-[#06052A]">
            Asset Category
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
                onClick={openCreate}
                title="Add Asset Category"
                altClassName="btn-primary px-2 py-1 flex flex-grow whitespace-nowrap"
              />
            </div>
          </div>
        </div>
        <div className="mt-2">
          <div className="overflow-x-auto">
            {isLoading ? (
              // Loading spinner or placeholder
              <Loader />
            ) : (
              <table className="table-auto md:w-full w-[1000px] text-sm">
                <thead>
                  <tr className="bg-gray-100 dark:bg-gray-800">
                    <td className="unbound pl-4 p-1 pb-2">#</td>
                    <td className="unbound p-1 pb-2">Category Name</td>
                    <td className="unbound p-1 pb-2">Date Created</td>
                    <td className="unbound p-1 pb-2">Action</td>
                  </tr>
                </thead>
                <tbody>
                  {assetCategory?.length > 0
                    ? assetCategory.map((item: ICourseCategory, i: number) => (
                        <tr
                          className="odd:bg-[#E9EBFB] odd:dark:bg-black"
                          key={i}
                        >
                          <td className={`p-2 py-4 pl-4`}>{`${i + 1}`}</td>
                          <td className="p-2 py-4">{item.name}</td>
                          <td className="p-2 py-4 capitalize">
                            {dateFormat(item?.createdAt, "dd-MM-yyyy")}
                          </td>
                          <td className="p-2 py-4 pl-4">
                            <Menu placement="left">
                              <MenuHandler>
                                <MoreVertical />
                              </MenuHandler>
                              <MenuList>
                                <MenuItem className="flex flex-col gap-3">
                                  <span
                                    className="cursor-pointer w-full"
                                    onClick={() => openEdit(item)}
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
                                <MenuItem className="flex flex-col gap-3">
                                  <span
                                    className="cursor-pointer w-full"
                                    onClick={() => openDelete(item)}
                                  >
                                    <Link
                                      to={`/super-admin/sub-category/${item.id}?type=asset`}
                                    >
                                      Sub categories
                                    </Link>
                                  </span>
                                </MenuItem>
                              </MenuList>
                            </Menu>
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
        <AssetCategoryModal onClose={handleOpen} selected={selected} />
      </Dialog>

      <Dialog handler={handleDeleteModal} open={deleteDialog} size="md">
        <div className="p-5">
          <Publish
            handleCancel={() => setShowDeleteDialog(false)}
            title={`Are you sure you want to delete this item`}
            handleProceed={handleDelete}
            isLoading={isDeleting}
          />
        </div>
      </Dialog>
    </div>
  );
};

export default AssetCategory;
