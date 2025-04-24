import { MdOutlineArrowDropDown } from "react-icons/md";
import JobItem from "../../modules/landing/jobs/asset-list/job-item";
import Button from "../../components/ui/Button";
import { useNavigate } from "react-router-dom";
import { getCreatorJobs } from "../../api";
import { useGetData } from "../../hooks/useGetData";
import { useEffect, useState } from "react";
import Loader from "../../components/reusables/loader";
import { Dialog } from "@material-tailwind/react";
import Publish from "../../components/reusables/Publish";
import { deleteCreatorJob } from "../../api/creator";

const JobsScreen = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const [deleteDialog, setShowDeleteDialog] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);
  const handleDeleteModal = () => setShowDeleteDialog(!deleteDialog);

  const jobsData = useGetData(["creatorJobs"], getCreatorJobs);

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const openDelete = (job: any) => {
    setSelected(job);
    setShowDeleteDialog(true);
  };

  const { mutate: deleteAsset, isPending: isDeleting } =
  deleteCreatorJob();

const handleDelete = () => {
  deleteAsset(selected.id, {
    onSuccess: () => {
      setShowDeleteDialog(false);
    },
  });
};
  useEffect(() => {
    // Check if all data is available before merging
    if (jobsData.data) {
      setData(jobsData.data.data);
      setLoading(false);
    }
  }, [jobsData.data]); // Dependency array ensures this runs when data updates

  return (
    <div className="rounded-[20px] p-5 bg-white dark:bg-black">
      <div className="flex w-full justify-between md:py-1 py-4 items-center">
        <p className="fw-600 unbound text-2xl">All Jobs</p>
        <div className="md:flex hidden items-center gap-x-2">
          <div className="flex items-center gap-x-1 px-2 py-1">
            <Button
              size={14}
              onClick={() => navigate("create")}
              title="Post New Job"
              altClassName="btn-primary px-2 py-1 flex flex-grow whitespace-nowrap"
            />
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between flex-col md:flex-row mb-8 mt-10">
        <div className="md:w-[55%] w-full">
          <input
            type="text"
            className="border rounded-[10px] h-9 w-full px-3 border-[#2C3E50]"
            placeholder="Search"
          />
        </div>

        <div className=" flex items-center md:w-[40%] w-full justify-end">
          <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
            <p className="text-[#2C3E50] fs-300">Choose Category</p>
            <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
          </div>
          <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
            <p className="text-[#2C3E50] fs-300">
              <span className="fs-200 text-[#9094A2]">Sort:</span> Newest First
            </p>
            <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
          </div>
          <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
            <p className="text-[#2C3E50] fs-300">Export As</p>
            <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
          </div>
        </div>
      </div>

      {loading ? (
        // Loading spinner or placeholder
        <Loader />
      ) : (
        <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-x-6 gap-y-10">
          {data.length > 0 ? (
            data.map((item: any, i: any) => <JobItem handleDeleteModal={() => openDelete(item)} item={item} key={i} />)
          ) : (
            <></>
          )}
        </div>
      )}
      <Dialog
        className="bg-transparent flex justify-center"
        open={open}
        handler={handleOpen}
        size="md"
      >
        <div></div>
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

export default JobsScreen;
