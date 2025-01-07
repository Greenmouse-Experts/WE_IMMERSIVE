import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { useGetData } from "../../../hooks/useGetData";
import { useEffect, useState } from "react";
import Loader from "../../../components/reusables/loader";
import { dateFormat } from "../../../helpers/dateHelper";
import { getDigitalAssets, getCreators } from "../../../api";
import Button from "../../../components/ui/Button";
import { Dialog } from "@material-tailwind/react";
import AssetCategory from "./assetCategory";
import { useNavigate } from "react-router-dom";

interface DataItem {
  createdAt: string; // ISO 8601 date string
  // Other properties as needed
}

const DigitalAssets = () => {
  // Fetch data for each group
  const digitalAssetsQuery = useGetData(["digitalAssets"], getDigitalAssets);
  const creators = useGetData(["creators"], getCreators);
  const navigate = useNavigate
  ();

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    // Check if all data is available before merging
    if (digitalAssetsQuery.data && creators.data) {
      const mergedData: DataItem[] = digitalAssetsQuery.data.data.map(
        (asset: { creatorId: any }) => {
          // Find the corresponding creator by ID
          const creator = creators.data?.data.find(
            (creator: { id: any }) => creator.id === asset.creatorId
          );
          return {
            ...asset,
            creatorName: creator ? creator.name : "Unknown", // Add creator name or default to "Unknown"
          };
        }
      );

      const sortedData = mergedData.sort(
        (a: DataItem, b: DataItem) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setData(sortedData);
      setLoading(false);
    }
  }, [digitalAssetsQuery.data, creators.data]); // Dependency array ensures this runs when data updates

  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] mt-10 px-4 lg:py-6 rounded-[20px]">
        <div className="flex w-full justify-between md:py-1 py-4 items-center">
          <p className="unbound flex flex-grow text-sm md:text-base text-[#06052A]">
            All Digital Assets
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
                onClick={() => navigate('/super-admin/assets/create?slug=digital')}
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
                    <td className="unbound p-1 pb-2">Copies Sold</td>
                    <td className="unbound p-1 pb-2">Created By</td>
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
                          <td className="p-2 py-4 capitalize">---</td>
                          <td className="p-2 py-4">{item?.creatorName}</td>
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
        <AssetCategory onClose={handleOpen} />
      </Dialog>
    </div>
  );
};

export default DigitalAssets;
