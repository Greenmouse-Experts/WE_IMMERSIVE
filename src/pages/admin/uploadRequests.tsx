import { MdOutlineArrowDropDown } from "react-icons/md";
import { useGetData } from "../../hooks/useGetData"
import { useEffect, useState } from "react";
import Loader from "../../components/reusables/loader";
import { dateFormat } from "../../helpers/dateHelper";
import { getCreators } from "../../api";
import { Dialog } from "@material-tailwind/react";
import { getAdminDigitalAssets, getAdminPhysicalAssets } from "../../api/admin";
import AcceptRequets from "./requestsModal/acceptRequests";
import DeclineRequets from "./requestsModal/declineRequests";

interface DataItem {
    createdAt: string; // ISO 8601 date string
    // Other properties as needed
}

interface HandleOpenParams {
    type: 'approve' | 'decline';
}


const UploadRequests = () => {
    // Fetch data for each group
    const physicalAssetsQuery = useGetData(["physicalAssets"], getAdminPhysicalAssets);
    const digitalAssetsQuery = useGetData(["digitalAssets"], getAdminDigitalAssets);

    const creators = useGetData(["creators"], getCreators);

    const [data, setData] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [type, setType] = useState<HandleOpenParams['type']>('approve');
    const [asset, setAssetData] = useState<any>({});

    const handleOpen = (params: HandleOpenParams, data: any): void => {
        setOpen(!open);
        setType(params.type);
        setAssetData(data);
    }

    useEffect(() => {
        // Check if all data is available before merging
        if (physicalAssetsQuery.data && creators.data && digitalAssetsQuery.data) {
            const assetsData = [
                ...digitalAssetsQuery.data.data
                    .filter((item: any) => item.status === 'under_review')
                    .map((item: any) => ({ ...item, assetType: 'digital asset' })),
                ...physicalAssetsQuery.data.data
                    .filter((item: any) => item.status === 'under_review')
                    .map((item: any) => ({ ...item, assetType: 'physical asset' }))
            ];

            const mergedData: any = assetsData.map(
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
    }, [physicalAssetsQuery.data, creators.data, digitalAssetsQuery.data]); // Dependency array ensures this runs when data updates

    return (
        <div>
            <div className="bg-white dark:bg-[#15171E] mt-10 px-4 lg:py-6 rounded-[20px]">
                <div className="flex w-full justify-between md:py-1 py-4 items-center">
                    <p className="unbound flex flex-grow text-sm md:text-base text-[#06052A]">
                        Upload Requests
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
                                        <td className="unbound p-1 pb-2">Name</td>
                                        <td className="unbound p-1 pb-2">Image</td>
                                        <td className="unbound p-1 pb-2">Category</td>
                                        <td className="unbound p-1 pb-2">Created By</td>
                                        <td className="unbound p-1 pb-2">Price</td>
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
                                                <td className="pl-1 p-2 py-4">
                                                    <img
                                                        src={item.assetThumbnail}
                                                        className="w-[50px]"
                                                    />
                                                </td>
                                                <td className="p-2 py-4 capitalize">
                                                    {item.assetType}
                                                </td>
                                                <td className="p-2 py-4">{item?.creatorName}</td>
                                                <td className="p-2 py-4">
                                                    {`${item?.currency} ${item?.amount}` || "---"}
                                                </td>
                                                <td className="p-2 py-4 capitalize">
                                                    {dateFormat(item?.createdAt, "dd-MM-yyyy")}
                                                </td>
                                                <td className="p-2 py-4 flex gap-1 whitespace-nowrap">
                                                    <button onClick={() => handleOpen({ type: 'decline' }, { asset: item })} className="bg-[rgba(249,206,206,1)] rounded-md text-[rgba(249,19,19,1)] px-2 py-2 flex whitespace-nowrap">
                                                        Decline
                                                    </button>
                                                    <button onClick={() => handleOpen({ type: 'approve' }, { asset: item })} className="btn-primary px-2 py-2 flex whitespace-nowrap">Approve</button>
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
                handler={() => setOpen(!open)}
                size="md"
            >
                {type === 'approve' ? (
                    <AcceptRequets 
                        assetData={asset} 
                        onClose={() => {
                            setOpen(!open);
                            physicalAssetsQuery.refetch();
                            digitalAssetsQuery.refetch();
                        }} 
                    />
                )
                    : (
                        <DeclineRequets 
                            assetData={asset} 
                            onClose={() => {
                                setOpen(!open);
                                physicalAssetsQuery.refetch();
                                digitalAssetsQuery.refetch();
                            }} 
                        />
                    )
                }
                <></>
            </Dialog>
        </div>
    );
};

export default UploadRequests;
