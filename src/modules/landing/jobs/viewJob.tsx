import { useEffect, useState } from "react";
import { getSingleJob } from "../../../api";
import Button from "../../../components/ui/Button";
import { useGetData } from "../../../hooks/useGetData";
import JobsBanner from "./herobanner";
import Loader from "../../../components/reusables/loader";
import { useParams } from "react-router-dom";
import { GrLocation } from "react-icons/gr";
import { dateFormat } from "../../../helpers/dateHelper";

const ViewJobIndex = () => {
    const [data, setData] = useState<any>({});
    const [loading, setLoading] = useState(true);

    const { id } = useParams();

    // Assuming getSingleJob returns a promise, let useGetData handle it
    const jobsData = useGetData(["singleJob", id], () => getSingleJob(id));

    useEffect(() => {
        console.log(jobsData)
        if (jobsData?.data) {
            setData(jobsData.data.data);
            setLoading(false);
        }
    }, [jobsData?.data]); // Run effect only when jobsData.data changes


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
                <div className="section">
                    <div className="box grid xl:grid-cols-4  gap-x-6 gap-y-10">
                        <div className="xl:col-span-4 col-span-5 grid lg:grid-cols-2  gap-6">
                            <div
                                className="form-shadow rounded-[30px] p-6 dark:bg-[#15171E]"
                                style={{ alignSelf: 'flex-start' }} // Ensure the card doesn't stretch in a flex container
                            >
                                <div className="flex items-center gap-3">
                                    <img
                                        src={`${data.logo}`}
                                        className="rounded-full w-[106px] h-[106px] border border-[#C4C4C4] object-cover"
                                        alt=""
                                    />
                                    <div>
                                        <p className="text-sm text-[#696767]">{data.company}</p>
                                        <p className="unbound fw-400 dark:text-white text-lg">{data.title}</p>
                                        <p className="text-lg text-[#6F0AFF] dark:!text-[#6F0AFF] flex items-center gap-1 capitalize">
                                            <GrLocation size={18} />{data.workplaceType}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-[#676767] mt-7">{data.description}</p>

                                <div className="mt-7">
                                    <p className="text-[#1D9CD7] dark:!text-[#1D9CD7] capitalize mb-2">Location</p>
                                    <p className="text-[#676767] mt-1">{data.location}</p>
                                </div>

                                <div className="mt-7">
                                    <p className="text-[#1D9CD7] dark:!text-[#1D9CD7] capitalize mb-2">Skills Required</p>
                                    <p className="text-[#676767] mt-1">{data.skills}</p>
                                </div>

                                <div className="mt-7">
                                    <p className="text-[#1D9CD7] dark:!text-[#1D9CD7] capitalize">{data.jobType}</p>

                                    <div className="fldatas-center justify-between py-4 border-t-[2px] border-[#C4C4C4] mt-4">
                                        <p className="text-[#676767]">
                                            Posted: {dateFormat(data?.createdAt, "dd MMMM yyyy")}
                                        </p>
                                    </div>

                                    <div className="mt-3">
                                        <a href={data.applyLink} target="_blank"
                                            className="btn-primary px-2 py-4 text-center justify-center flex flex-grow whitespace-nowrap"
                                        >
                                            Apply here
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* <div className="bg-[#F7F8FD] dark:bg-black rounded-[30px] h-fit p-4 lg:block hidden">
          <JobFilter />
        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ViewJobIndex