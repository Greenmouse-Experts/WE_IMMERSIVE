import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/reusables/loader";
import { dateFormat } from "../../helpers";
import { BeatLoader } from "react-spinners";
import { deleteCreatorJob, postCreatorJob, viewCreatorJobDetails } from "../../api/creator";
import { Dialog } from "@material-tailwind/react";
import Publish from "../../components/reusables/Publish";

const JobDetails: React.FC = () => {
  const { jobId } = useParams();

  const { data: jobDetails, isLoading } = viewCreatorJobDetails(jobId);
  const navigate = useNavigate();
  const [deleteDialog, setShowDeleteDialog] = useState<boolean>(false);
  const handleDeleteModal = () => setShowDeleteDialog(!deleteDialog);
  const [publishDialog, setPublishDialog] = useState<boolean>(false);
  const handlePublishModal = () => setPublishDialog(!publishDialog);

  const { mutate: deleteAsset, isPending: isDeleting } = deleteCreatorJob();
  const {mutate:postJob, isPending:isPosting} = postCreatorJob();

  const handlePublish = () => {
    postJob(
      {
        company: jobDetails?.company,
        logo: jobDetails?.logo,
        jobType: jobDetails?.jobType,
        workplaceType: jobDetails?.workplaceType,
        location: jobDetails?.location,
        description: jobDetails?.description,
        jobId: jobId as string,
        applicantCollectionEmailAddress: "hr@techcorp.com",
        rejectionEmails: false,
        status: "published",
      },
      {
        onSuccess() {
          setPublishDialog(false);
        },
        onError: () => {
          setPublishDialog(false);
        },
      }
    );
  }

  const handleDelete = () => {
    deleteAsset(jobId as string, {
      onSuccess: () => {
        setShowDeleteDialog(false);
        navigate(-1);
      },
    });
  };

  if (isLoading) return <Loader />;

  return (
    <>
      <div className="mx-auto"></div>
      <div className="bg-white p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Job Description</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar Card */}
          <div className="bg-white p-6 border rounded-lg flex flex-col items-center text-center">
            <img
              src={jobDetails?.logo}
              alt="GreenMouse Tech Logo"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h3 className="text-lg font-semibold">{jobDetails?.company}</h3>
            <p className="text-gray-500">{jobDetails?.location}</p>
            <div className="mt-4 w-full border-t pt-4">
              <p className="text-sm text-gray-700 flex items-center gap-2 capitalize">
                <span className="font-semibold">Job Type:</span>{" "}
                {jobDetails?.jobType}
              </p>
              <p className="text-sm text-gray-700 flex items-center gap-2 mt-4 capitalize">
                <span className="font-semibold">Job Location:</span>{" "}
                {jobDetails?.workplaceType}
              </p>
              <p className="text-sm text-gray-700 flex items-center gap-2 mt-4">
                <span className="font-semibold">Posted On:</span>{" "}
                {dateFormat(jobDetails?.createdAt, "yyyy-MM-dd")}
              </p>
            </div>
          </div>
          {/* Main Content */}
          <div className="md:col-span-2 bg-white rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-2">{jobDetails?.title}</h3>

            {jobDetails?.description && (
              <div
                className="text-sm text-black leading-loose"
                dangerouslySetInnerHTML={{ __html: jobDetails?.description }}
              ></div>
            )}

            <div className="gap-4 flex">
              <button
                onClick={()=> navigate(`/creator/jobs/edit/${jobId}`) }
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90"
              >
                {isDeleting ? <BeatLoader /> : "Edit »"}
              </button>
              <button
                onClick={handleDeleteModal}
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90"
              >
                {isDeleting ? <BeatLoader /> : "Delete »"}
              </button>
              <button
                onClick={handlePublishModal}
                className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90"
              >
                {isPosting ? <BeatLoader /> : "Post Job »"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <Dialog handler={handleDeleteModal} open={deleteDialog} size="md">
        <div className="p-5">
          <Publish
            handleCancel={() => setShowDeleteDialog(false)}
            title={`Are you sure you want to delete this job`}
            handleProceed={handleDelete}
            isLoading={isDeleting}
          />
        </div>
      </Dialog>
      <Dialog handler={handlePublishModal} open={publishDialog} size="md">
        <div className="p-5">
          <Publish
            handleCancel={() => setPublishDialog(false)}
            title={`Are you sure you want to post this job`}
            handleProceed={handlePublish}
            isLoading={isPosting}
          />
        </div>
      </Dialog>
    </>
  );
};

export default JobDetails;
