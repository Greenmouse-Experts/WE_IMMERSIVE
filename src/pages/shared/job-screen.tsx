import { MdOutlineArrowDropDown, MdWorkOutline, MdAdd } from "react-icons/md";
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

// Define types for job and props
type Job = {
  id: string | number;
  // Add other job properties as needed
  [key: string]: unknown;
};

type EmptyJobsStateProps = {
  onCreateJob: () => void;
};

// Empty State Component
const EmptyJobsState = ({ onCreateJob }: EmptyJobsStateProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6">
      <div className="w-24 h-24 bg-gradient-to-br from-blue-100 to-indigo-200 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-full flex items-center justify-center mb-6">
        <MdWorkOutline className="w-12 h-12 text-blue-600 dark:text-blue-400" />
      </div>

      <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 mb-3 unbound">
        No Jobs Posted Yet
      </h3>

      <p className="text-gray-600 dark:text-gray-400 text-center max-w-md mb-8 leading-relaxed">
        Start building your team by posting your first job. Connect with
        talented professionals and grow your business with the right people.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={onCreateJob}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors duration-200 font-medium shadow-lg hover:shadow-xl"
        >
          <MdAdd className="w-5 h-5" />
          Post Your First Job
        </button>

        <button className="flex items-center gap-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 px-6 py-3 rounded-lg transition-colors duration-200 font-medium">
          Learn More
        </button>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl">
        <div className="text-center">
          <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
            <span className="text-green-600 dark:text-green-400 font-bold text-lg">
              1
            </span>
          </div>
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
            Create Job Post
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Define your requirements and post your job
          </p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
            <span className="text-blue-600 dark:text-blue-400 font-bold text-lg">
              2
            </span>
          </div>
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
            Review Applications
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Get applications from qualified candidates
          </p>
        </div>

        <div className="text-center">
          <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mx-auto mb-3">
            <span className="text-purple-600 dark:text-purple-400 font-bold text-lg">
              3
            </span>
          </div>
          <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-1">
            Hire & Collaborate
          </h4>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Select the best fit and start working
          </p>
        </div>
      </div>
    </div>
  );
};

const JobsScreen = () => {
  const navigate = useNavigate();

  const [selected, setSelected] = useState<Job | null>(null);
  const [open, setOpen] = useState(false);

  const [deleteDialog, setShowDeleteDialog] = useState<boolean>(false);

  const handleOpen = () => setOpen(!open);
  const handleDeleteModal = () => setShowDeleteDialog(!deleteDialog);

  const jobsData = useGetData(["creatorJobs"], getCreatorJobs);

  const [data, setData] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);

  const openDelete = (job: Job) => {
    setSelected(job);
    setShowDeleteDialog(true);
  };

  const { mutate: deleteAsset, isPending: isDeleting } = deleteCreatorJob();

  const handleDelete = () => {
    if (!selected) return;
    deleteAsset(selected.id, {
      onSuccess: () => {
        setShowDeleteDialog(false);
      },
    });
  };

  const handleCreateJob = () => {
    navigate("create");
  };

  useEffect(() => {
    // Check if all data is available before merging
    if (jobsData.data) {
      setData(jobsData.data.data as Job[]);
      setLoading(false);
    }
  }, [jobsData.data]); // Dependency array ensures this runs when data updates

  const hasJobs = data && data.length > 0;

  return (
    <div className="rounded-[20px] p-5 bg-white dark:bg-black">
      <div className="flex w-full justify-between md:py-1 py-4 items-center">
        <p className="fw-600 unbound text-2xl">All Jobs</p>
        <div className="md:flex hidden items-center gap-x-2">
          <div className="flex items-center gap-x-1 px-2 py-1">
            <Button
              size={14}
              onClick={handleCreateJob}
              title="Post New Job"
              altClassName="btn-primary px-2 py-1 flex flex-grow whitespace-nowrap"
            />
          </div>
        </div>
      </div>

      {/* Only show filters and search when there are jobs */}
      {hasJobs && (
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
                <span className="fs-200 text-[#9094A2]">Sort:</span> Newest
                First
              </p>
              <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
            </div>
            <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
              <p className="text-[#2C3E50] fs-300">Export As</p>
              <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
            </div>
          </div>
        </div>
      )}

      {loading ? (
        // Loading spinner or placeholder
        <Loader />
      ) : hasJobs ? (
        <div className=" grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1  gap-x-6 gap-y-10">
          {data.map((item, i) => (
            <JobItem
              handleDeleteModal={() => openDelete(item)}
              item={item}
              key={i}
            />
          ))}
        </div>
      ) : (
        <EmptyJobsState onCreateJob={handleCreateJob} />
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
