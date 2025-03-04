import { useEffect, useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { Link } from "react-router-dom";
import { useGetData } from "../../../hooks/useGetData";
import { getAllJobs } from "../../../api";
import Loader from "../../../components/reusables/loader";
import { saveJob } from "../../../api/general";
import { BeatLoader } from "react-spinners";


const JobsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [location, setLocation] = useState("");
  const [jobType, setJobType] = useState("");

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const jobsData = useGetData(["allJobs"], getAllJobs);

  useEffect(() => {
    // Check if all data is available before merging
    if (jobsData.data) {
      setData(jobsData.data.data);
      setLoading(false);
    }
  }, [jobsData.data]); // Dependency array ensures this runs when data updates

  const {mutate:savejob, isPending} =saveJob();

  const handleSave = (jobId: string) => {
    savejob(jobId);
  };


  if (loading) {
    return (
      // Loading spinner or placeholder
      <Loader />
    )
  }

  const filteredJobs = data.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (category ? job.title.includes(category) : true) &&
    (location ? job.location.includes(location) : true) &&
    (jobType ? job.type.includes(jobType) : true)
  );

  return (
    <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <p className="text-lg font-semibold">All Jobs</p>
        <div className="flex flex-wrap gap-3">
          <input
            type="text"
            placeholder="Search"
            className="px-3 py-2 border rounded-lg outline-none dark:bg-[#15171E]"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="px-3 py-2 border rounded-lg outline-none dark:bg-[#15171E]"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Choose Category</option>
            <option value="2D Modeling">2D Modeling</option>
            <option value="3D Modeling">3D Modeling</option>
            <option value="Graphic Designer">Graphic Designer</option>
          </select>
          <select
            className="px-3 py-2 border rounded-lg outline-none dark:bg-[#15171E]"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          >
            <option value="">Choose Location</option>
            <option value="Remote">Remote</option>
            <option value="Lagos, Nigeria">Lagos, Nigeria</option>
            <option value="Abuja, Nigeria">Abuja, Nigeria</option>
          </select>
          <select
            className="px-3 py-2 border rounded-lg outline-none dark:bg-[#15171E]"
            value={jobType}
            onChange={(e) => setJobType(e.target.value)}
          >
            <option value="">Job Type</option>
            <option value="Full Time">Full Time</option>
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job, index) => (
          <div key={index} className="border p-4 rounded-lg relative">
            <AiOutlineHeart onClick={() => handleSave(job.id)} className="absolute top-4 right-4 text-red-500 cursor-pointer" />
              {isPending && <BeatLoader/>}
            <div className="flex items-center gap-3">
              <img src={job.logo} alt="Company Logo" className="w-16 h-16 rounded-full" />
              <div>
                <p className="font-semibold text-lg">{job.title}</p>
                <p className="text-blue-500 text-sm">{job.location}</p>
              </div>
            </div>
            {/* <p className="mt-2 text-sm">We are looking for an experienced artist...</p> */}
            <p className="text-blue-500 text-sm mt-2">{job.type}</p>
            <p className="font-semibold mt-2">{job.salary}</p>
            <p className="text-gray-500 text-xs mt-1">Posted {job.posted}</p>
            <div className="mt-4 text-center">
              <Link
                to={`/user/job-details/${job.id}`}
                className="text-gray-500 text-sm hover:underline"
              >
                View Job Description
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
