import { useState } from "react";
import JobCard from "./jobCard";
import JobForm from "./jobForm";
import { getInstitutionJob } from "../../../../api/institution";
import Loader from "../../../../components/reusables/loader";
import { IJob } from "../../../../types/job.types";

const Jobs = () => {
  const [isActive, setIsActive] = useState<boolean>(true);

  const { data: jobs, isLoading } = getInstitutionJob();

  console.log(jobs);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <div>
        {isActive ? (
          <div className="bg-gray-100 p-2">
            <div className="mx-auto bg-white rounded-[20px] p-2 md:p-8 lg:px-4 lg:pt-4 lg:pb-[9%] xl:pb-[6%]">
              <h2 className="unbound text-[24px] text-center md:text-left lg:text-left font-[600]">
                Posted Jobs
              </h2>
              <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center my-11">
                <input
                  type="text"
                  placeholder="Search"
                  className="w-[100%] md:w-[736px] lg:w-[420px] xl:w-[720px] p-2 border rounded-[10px] focus:outline-none"
                />
                <button
                  className="unbound px-4 py-2 mt-3 md:mt-0 lg:mt-0 w-[100%] md:w-[177px] lg:w-[177px] bg-gradient-to-r from-[#5f27f7] to-[#268cdb] text-white rounded-md text-[11px]"
                  onClick={() => {
                    setIsActive(false);
                  }}
                >
                  Post A New Job
                </button>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-[2%] xl:gap-[2%]">
                {jobs && jobs?.map((job:IJob, index:number) => (
                  <JobCard key={index} {...job} />
                ))}
              </div>
            </div>
          </div>
        ) : (
          <JobForm setIsActive={setIsActive} />
        )}
      </div>
    </div>
  );
};

export default Jobs;
