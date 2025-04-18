import { MdOutlineArrowDropDown } from "react-icons/md";
import { useGetData } from "../../hooks/useGetData";
import { useEffect, useState } from "react";
import Loader from "../../components/reusables/loader";
import { dateFormat } from "../../helpers/dateHelper";
import { getCreatorPhysicalAssets } from "../../api";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Dialog,
} from "@material-tailwind/react";
import { MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";
import useDialog from "../../hooks/useDialog";
import Publish from "../../components/reusables/Publish";
import { deleteDigitalAsset, editPhysicalAsset } from "../../api/creator";
import { IAsset } from "../../types/asset.types";

const CreatorPhysicalAssetsScreen = () => {
  // Fetch data for each group

  const physicalAssetsQuery = useGetData(
    ["physicalAssets"],
    getCreatorPhysicalAssets
  );

  const [selected, setSelected] = useState<any>(null);
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const { Dialog: DeleteDialog, setShowDialog: setDeleteDialog } = useDialog();
  const [open, setopen] = useState(false);

  const { mutate: update, isPending } = editPhysicalAsset();
  const [selectedAsset, setselectedAsset] = useState<IAsset | null>(null);
  const handleOpenModal = (asset: IAsset) => {
    setselectedAsset(asset);
    setopen(!open);
  };
  const { mutate: deleteAsset, isPending: isDeleting } = deleteDigitalAsset();

  const openDelete = (asset: any) => {
    setSelected(asset);
    setDeleteDialog(true);
  };

  const handleDelete = () => {
    deleteAsset(selected, {
      onSuccess() {
        setDeleteDialog(false);
      },
    });
  };

  const handleUpdate = () => {
    update(
      { ...selectedAsset, isPublished: !selectedAsset?.isPublished },
      {
        onSuccess: () => {
          setopen(false);
        },
        onError: () => {
          setopen(false);
        },
      }
    );
  };

  useEffect(() => {
    // Check if all data is available before merging
    if (physicalAssetsQuery.data) {
      const assetsData = [...physicalAssetsQuery.data.data];

      setData(assetsData);
      setLoading(false);
    }
  }, [physicalAssetsQuery.data]); // Dependency array ensures this runs when data updates

  return (
    <>
      <div>
        <div className="bg-white dark:bg-[#15171E] mt-10 px-4 lg:py-6 rounded-[20px]">
          <div className="flex w-full justify-between md:py-1 py-4 items-center">
            <p className="unbound flex flex-grow text-sm md:text-base text-[#06052A]">
              Created Assets
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
                      <td className="unbound p-1 pb-2">Asset Name</td>
                      <td className="unbound p-1 pb-2">Image</td>
                      <td className="unbound p-1 pb-2">Price</td>
                      <td className="unbound p-1 pb-2">Published On</td>
                      {/* <td className="unbound p-1 pb-2">Copies Sold</td> */}
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
                            <td className="p-2 py-4">{item.assetName}</td>
                            <td className="pl-1 p-2 py-4">
                              <img
                                src={item.assetThumbnail}
                                className="w-[50px]"
                              />
                            </td>
                            <td className="p-2 py-4">
                              {`${item?.currency} ${item?.amount}` || "---"}
                            </td>
                            <td className="p-2 py-4 capitalize">
                              {dateFormat(item?.createdAt, "dd-MM-yyyy")}
                            </td>
                            {/* <td className="p-2 py-4 capitalize">---</td> */}
                            <td className="p-2 py-4 capitalize">
                              {item.isPublished ? "Live" : "Unpublish"}
                            </td>
                            <td className="p-2 py-4 pl-4">
                              <Menu placement="left">
                                <MenuHandler>
                                  <MoreVertical className="cursor-pointer" />
                                </MenuHandler>
                                <MenuList>
                                  <MenuItem className="flex flex-col gap-3">
                                    <Link to={`/creator/asset/physical/edit/${item.id}`}>
                                      <span
                                        className="cursor-pointer w-full"
                                        // onClick={handleView}
                                      >
                                        Edit Asset
                                      </span>
                                    </Link>
                                  </MenuItem>
                                  <MenuItem className="flex flex-col gap-3">
                                    <span
                                      className="cursor-pointer w-full"
                                      onClick={() => handleOpenModal(item)}
                                    >
                                      {item.isPublished
                                        ? "Unpublish Asset"
                                        : "Publish Asset"}
                                    </span>
                                  </MenuItem>
                                  <MenuItem className="flex flex-col gap-3">
                                    <span
                                      className="cursor-pointer w-full"
                                      onClick={() => openDelete(item.id)}
                                    >
                                      Delete Asset
                                    </span>
                                  </MenuItem>
                                  {/* <MenuItem className="flex flex-col gap-3">
              <span
                className="cursor-pointer w-full"
                // onClick={() => handleDisplayLessons(module.id)}
              >
                Delete Lessons
              </span>
            </MenuItem> */}
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
      </div>
      <DeleteDialog title="" size="md">
        <Publish
          handleCancel={() => setDeleteDialog(false)}
          title={`Are you sure you want to delete this asset`}
          handleProceed={handleDelete}
          isLoading={isDeleting}
        />
      </DeleteDialog>
      <Dialog open={open} size="md" handler={() => setopen(!open)}>
        <Publish
          handleCancel={() => setopen(false)}
          title={`Are you sure you want to ${
            selectedAsset?.isPublished ? "upublish" : "publish"
          } this asset`}
          handleProceed={handleUpdate}
          isLoading={isPending}
        />
      </Dialog>
    </>
  );
};

export default CreatorPhysicalAssetsScreen;
