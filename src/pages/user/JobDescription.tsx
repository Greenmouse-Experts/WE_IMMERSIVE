import React, { useState } from "react";
import Navbar from "../../layout/user/components/navbar";
import { submitApplication, viewJobDetails } from "../../api/general";
import { useNavigate, useParams } from "react-router-dom";
import Loader from "../../components/reusables/loader";
import { dateFormat, uploadImage } from "../../helpers";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";

const JobDescription: React.FC = () => {
  const { jobId } = useParams();
  const [loading, setLoading] = useState(false);
  const [resume, setResume] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const user = useSelector((state: any) => state.userData.data);
  const { data: jobDetails, isLoading } = viewJobDetails(jobId);
  const navigate = useNavigate();
  // console.log(jobDetails);
  const handleThumbnailChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoading(true);
    setError(null);

    const file = event.target.files?.[0];
    if (!file) {
      setLoading(false);
      return;
    }

    const result = await uploadImage(file);
    setLoading(false);

    if (result.isSuccess) {
      setResume(result.fileUrl);
    } else {
      setError("Thumbnail upload failed.");
    }
  };

  const { mutate: apply, isPending: isSubmitting } = submitApplication();

  const handleSubmit = async () => {
    if (!resume) {
      toast.error("Kindly upload your resume.");
      return;
    }
    apply(
      {
        jobId,
        email: user.email,
        phone: user.phoneNumber,
        resume: resume,
      },
      {
        onSuccess() {
          navigate("-1");
        },
      }
    );
  };
  if (isLoading) return <Loader />;

  return (
    <>
      <div className="mx-auto">
        <Navbar />
      </div>
      <div className="bg-white dark:bg-darkMode p-6 rounded-lg">
        <h2 className="text-2xl font-bold mb-6">Job Description</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Sidebar Card */}
          <div className="bg-white dark:bg-black p-6 border rounded-lg flex flex-col items-center text-center">
            <img
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1739649406/We-Immersive/D6696853-14FC-467D-A319-F71EAEF7C8CF_iighc4.png"
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
          <div className="md:col-span-2 bg-white dark:bg-black rounded-lg p-6 border">
            <h3 className="text-xl font-semibold mb-2">{jobDetails?.title}</h3>

            {jobDetails?.description && (
              <div
                className="text-sm text-black leading-loose"
                dangerouslySetInnerHTML={{ __html: jobDetails?.description }}
              ></div>
            )}
            {/* <h4 className="text-lg font-semibold mb-2">Qualification</h4>
            <ul className="list-disc list-inside text-gray-700 space-y-2 mb-4">
              <li>Develop and elevate brand identities and website designs.</li>
              <li>
                Collaborate with the development team to implement designs.
              </li>
              <li>
                Utilize design and web software including Figma, Framer,
                Illustrator.
              </li>
              <li>Create and edit engaging video content and animations.</li>
              <li>
                Design presentations, social media graphics, and other marketing
                materials.
              </li>
            </ul>
            <h4 className="text-lg font-semibold mb-2">Company Description</h4>
            <p className="text-gray-700 mb-6">
              GreenMouse is a dynamic software agency based in Lagos, Nigeria.
              Their services involve mobile app development...
            </p> */}
            <div className="my-4">
              <p>Upload Resume (max 2mb)</p>
              <input
                type="file"
                // ref={thumbnailInputRef}
                onChange={handleThumbnailChange}
                accept=".pdf"
                // className="hidden"
              />
              {error && <p className="text-red-600">fail to uploda</p>}
              <div>{loading && <BeatLoader />}</div>
            </div>
            <button
              onClick={handleSubmit}
              className="bg-gradient-to-r from-purple-600 to-blue-500 text-white px-6 py-3 rounded-lg shadow-md hover:opacity-90"
            >
              {isSubmitting ? <BeatLoader /> : "Apply »"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobDescription;
