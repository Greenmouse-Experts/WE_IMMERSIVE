import { MdOutlineArrowDropDown } from "react-icons/md";
import { useState } from "react";
import Loader from "../../../components/reusables/loader";
import { dateFormat } from "../../../helpers/dateHelper";
import Button from "../../../components/ui/Button";
import { Dialog } from "@material-tailwind/react";
import AssetCategory from "./assetCategory";
import { useNavigate } from "react-router-dom";
import {
  deletePhysicalAsset,
  useAllAdminPhysicalAssets,
  publishPhysicalAsset,
} from "../../../api/admin";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { MoreVertical } from "lucide-react";
import useDialog from "../../../hooks/useDialog";
import Publish from "../../../components/reusables/Publish";
import { IAsset } from "../../../types/asset.types";

const PhysicalAssets = () => {
  // Fetch data for each group

  const navigate = useNavigate();

  const { data, isLoading } = useAllAdminPhysicalAssets();
  const [selected, setSelected] = useState<any>(null);
  const [open, setOpen] = useState(false);
  const { Dialog: PublishedDialog, setShowDialog } = useDialog();
  const { Dialog: DeleteDialog, setShowDialog: setDeleteDialog } = useDialog();

  const handleOpen = () => setOpen(!open);
  const openPublish = (asste: any) => {
    setSelected(asste);
    setShowDialog(true);
  };
  const openDelete = (asset: any) => {
    setSelected(asset);
    setDeleteDialog(true);
  };

  const { mutate: publishAsset, isPending } = publishPhysicalAsset();
  const { mutate: deleteAsset, isPending: isDeleting } = deletePhysicalAsset();

  const handlePublish = () => {
    publishAsset(
      {
        assetId: selected.id,
        status: selected?.status === "published" ? "unpublished" : "published",
        adminNote: "This is very much required",
      },
      {
        onSuccess() {
          setShowDialog(false);
        },
      },
    );
  };
  const handleDelete = () => {
    deleteAsset(selected.id, {
      onSuccess() {
        setDeleteDialog(false);
      },
    });
  };

  if (isLoading) return <Loader />;

  // useEffect(() => {
  //   // Check if all data is available before merging
  //   if (physicalAssetsQuery.data && creators.data) {
  //     const mergedData: DataItem[] = physicalAssetsQuery.data.data.map(
  //       (asset: { creatorId: any }) => {
  //         // Find the corresponding creator by ID
  //         const creator = creators.data?.data.find(
  //           (creator: { id: any }) => creator.id === asset.creatorId
  //         );
  //         return {
  //           ...asset,
  //           creatorName: creator ? creator.name : "Unknown", // Add creator name or default to "Unknown"
  //         };
  //       }
  //     );

  //     const sortedData = mergedData.sort(
  //       (a: DataItem, b: DataItem) =>
  //         new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  //     );
  //     setData(sortedData);
  //     setLoading(false);
  //   }
  // }, [physicalAssetsQuery.data, creators.data]); // Dependency array ensures this runs when data updates

  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] mt-10 px-4 lg:py-6 rounded-[20px]">
        <div className="flex w-full justify-between md:py-1 py-4 items-center">
          <p className="unbound flex flex-grow text-sm md:text-base text-[#06052A]">
            All Physical Assets
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
                onClick={() =>
                  navigate("/super-admin/assets/create?slug=physical")
                }
                title="Create New Asset"
                altClassName="btn-primary px-2 py-1 flex flex-grow whitespace-nowrap"
              />
            </div>
            <div className="flex items-center gap-x-1 px-2 py-1">
              <Button
                size={14}
                onClick={handleOpen}
                title="Create Asset Category"
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
                    <td className="unbound p-1 pb-2">Asset Name</td>
                    <td className="unbound p-1 pb-2">Image</td>
                    <td className="unbound p-1 pb-2">Price</td>
                    <td className="unbound p-1 pb-2">Published On</td>
                    <td className="unbound p-1 pb-2">Copies Sold</td>
                    <td className="unbound p-1 pb-2">Status</td>
                    <td className="unbound p-1 pb-2">Created By</td>
                    <td className="unbound p-1 pb-2">Action</td>
                  </tr>
                </thead>
                <tbody>
                  {data?.length > 0
                    ? data.map((item: IAsset, i: number) => (
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
                          <td className="p-2 py-4 capitalize">---</td>
                          <td className="p-2 py-4 capitalize">
                            {item?.status}
                          </td>
                          <td className="p-2 py-4">{item?.creatorName}</td>
                          <td className="p-2 py-4 pl-4">
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
                                      ? "Unpublish Asset"
                                      : "Publish Asset"}
                                  </span>
                                </MenuItem>
                                <MenuItem className="flex flex-col gap-3">
                                  <span
                                    className="cursor-pointer w-full"
                                    onClick={() => openDelete(item)}
                                  >
                                    Delete Asset
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
      <PublishedDialog title="" size="md">
        <Publish
          handleCancel={() => setShowDialog(false)}
          title={`Are you sure you want to ${
            selected?.status === "published" ? "unpublished" : "published"
          } this asset`}
          handleProceed={handlePublish}
          isLoading={isPending}
        />
      </PublishedDialog>
      <DeleteDialog title="" size="md">
        <Publish
          handleCancel={() => setDeleteDialog(false)}
          title={`Are you sure you want to delete this asset`}
          handleProceed={handleDelete}
          isLoading={isDeleting}
        />
      </DeleteDialog>

      <Dialog
        className="bg-transparent flex justify-center"
        open={open}
        handler={handleOpen}
        size="md"
      >
        <AssetCategory onClose={handleOpen} />
      </Dialog>
    </div>
  );
};

export default PhysicalAssets;
