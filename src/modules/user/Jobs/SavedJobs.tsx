import { useState } from "react";
import { AiOutlineHeart } from "react-icons/ai";

const jobs = [
  {
    title: "2D Modeling",
    company: "ArtLabs",
    location: "Remote",
    type: "Full Time",
    salary: "₦320,000/month",
    posted: "27 October",
    logo: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1739649406/We-Immersive/D6696853-14FC-467D-A319-F71EAEF7C8CF_iighc4.png",
  },
  {
    title: "3D Modeling",
    company: "ArtLabs",
    location: "Remote",
    type: "Full Time",
    salary: "₦320,000/month",
    posted: "27 October",
    logo: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1739649406/We-Immersive/D6696853-14FC-467D-A319-F71EAEF7C8CF_iighc4.png",
  },
  {
    title: "Graphic Designer",
    company: "Pixel Studio",
    location: "Lagos, Nigeria",
    type: "Part Time",
    salary: "₦250,000/month",
    posted: "25 October",
    logo: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1739649406/We-Immersive/D6696853-14FC-467D-A319-F71EAEF7C8CF_iighc4.png",
  },
  {
    title: "UI/UX Designer",
    company: "Creative Hub",
    location: "Remote",
    type: "Contract",
    salary: "₦400,000/month",
    posted: "20 October",
    logo: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1739649406/We-Immersive/D6696853-14FC-467D-A319-F71EAEF7C8CF_iighc4.png",
  },
  {
    title: "Product Manager",
    company: "Visionary Inc.",
    location: "Lagos, Nigeria",
    type: "Full Time",
    salary: "₦600,000/month",
    posted: "5 October",
    logo: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1739649406/We-Immersive/D6696853-14FC-467D-A319-F71EAEF7C8CF_iighc4.png",
  },
];

const JobsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [category, setCategory] = useState("");
  const [location,] = useState("");
  const [jobType,] = useState("");

  const filteredJobs = jobs.filter((job) =>
    job.title.toLowerCase().includes(searchQuery.toLowerCase()) &&
    (category ? job.title.includes(category) : true) &&
    (location ? job.location.includes(location) : true) &&
    (jobType ? job.type.includes(jobType) : true)
  );

  return (
    <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <p className="text-lg font-semibold">Saved Jobs</p>
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
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredJobs.map((job, index) => (
          <div key={index} className="border p-4 rounded-lg relative">
            <AiOutlineHeart className="absolute top-4 right-4 text-red-500 cursor-pointer" />
            <div className="flex items-center gap-3">
              <img src={job.logo} alt="Company Logo" className="w-16 h-16 rounded-full" />
              <div>
                <p className="font-semibold text-lg">{job.title}</p>
                <p className="text-blue-500 text-sm">{job.location}</p>
              </div>
            </div>
            <p className="mt-2 text-sm">We are looking for an experienced artist...</p>
            <p className="text-blue-500 text-sm mt-2">{job.type}</p>
            <p className="font-semibold mt-2">{job.salary}</p>
            <p className="text-gray-500 text-xs mt-1">Posted {job.posted}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
