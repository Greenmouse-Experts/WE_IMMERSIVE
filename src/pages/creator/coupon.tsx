import { MdOutlineArrowDropDown } from "react-icons/md";
import Loader from "../../components/reusables/loader";
import { dateFormat } from "../../helpers/dateHelper";
import Button from "../../components/ui/Button";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { MoreVertical } from "lucide-react";
import { useState } from "react";
import { Dialog } from "@material-tailwind/react";
// import AssetCategoryModal from "./assetCategoryModal";
import Publish from "../../components/reusables/Publish";
import CouponModal from "../../components/CouponModal";
import { deleteCoupon, getCoupons } from "../../api/coupon";
import { ICoupon } from "../../types/coupon.types";

const Coupon = () => {
  const { data: coupons, isLoading } = getCoupons();

  const [selected, setSelected] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const [deleteDialog, setShowDeleteDialog] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);
  const handleDeleteModal = () => setOpen(!deleteDialog);
  const openEdit = (item: ICoupon) => {
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
  const { mutate: deleteData, isPending: isDeleting } = deleteCoupon();

  const handleDelete = () => {
    deleteData(selected.id, {
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
            Coupons
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
                title="Add Coupon"
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
                    <td className="unbound p-1 pb-2">Coupon Code</td>
                    <td className="unbound p-1 pb-2">Discount Type</td>
                    <td className="unbound p-1 pb-2">Valid From</td>
                    <td className="unbound p-1 pb-2">Valid Until</td>
                    <td className="unbound p-1 pb-2">Current uses</td>
                    <td className="unbound p-1 pb-2">Date Created</td>
                    <td className="unbound p-1 pb-2">Action</td>
                  </tr>
                </thead>
                <tbody>
                  {coupons?.length > 0
                    ? coupons.map((item: ICoupon, i: number) => (
                        <tr
                          className="odd:bg-[#E9EBFB] odd:dark:bg-black"
                          key={i}
                        >
                          <td className={`p-2 py-4 pl-4`}>{`${i + 1}`}</td>
                          <td className="p-2 py-4">{item.code}</td>
                          <td className="p-2 py-4">{item.discountType}</td>
                          <td className="p-2 py-4">
                            {dateFormat(item?.validFrom, "dd-MM-yyyy")}
                          </td>
                          <td className="p-2 py-4">
                            {dateFormat(item?.validUntil, "dd-MM-yyyy")}
                          </td>
                          <td className="p-2 py-4">{item.currentUses}</td>
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
        <CouponModal onClose={handleOpen} selected={selected} />
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

export default Coupon;
