import { useEffect, useState } from "react";
import { getAllJobs } from "../../../api";
import Button from "../../../components/ui/Button";
import { useGetData } from "../../../hooks/useGetData";
import AllJobsList from "./asset-list";
import JobsBanner from "./herobanner";
import Loader from "../../../components/reusables/loader";

const JobsIndex = () => {
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


  if (loading) {
    return (
      // Loading spinner or placeholder
      <Loader />
    )
  }

  return (
    <div>
      <div>
        <JobsBanner />
      </div>
      <div className="mt-7 lg:mt-12 box">
        <div className="flex gap-x-4 justify-between p-2 lg:p-3 w-full bg-white z-10 relative rounded-[12px] div-shadow">
          <div className="w-full">
            <input
              type="text"
              placeholder="Search by keyword, name, etc"
              className="p-2 w-full outline-none border-none"
            />
          </div>
          <div className="flex items-stretch gap-x-3 justify-end ">

            <div className="">
              <Button
                title={"Search"}
                withArrows
                altClassName="btn-primary px-4 lg:px-8 py-2"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <AllJobsList data={data} />
      </div>
    </div>
  );
}

export default JobsIndex