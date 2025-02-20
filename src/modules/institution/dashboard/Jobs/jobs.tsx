import { useState } from "react";
import { BsGear } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { useSelector } from "react-redux";
import JobCard from "./jobCard";
import JobListings from "./jobListing";
import JobForm from "./jobForm";

const Jobs = () => {
const user = useSelector((state: any) => state.userData.data);
const [ isActive, setIsActive ] = useState<boolean>(true);

  return (
    <div>
    <header className="shadow-sm">
      <div className="flex flex-col md:flex-row lg:flex-row items-center justify-between mb-8 mt-2">
            <div className="">
              <div className="flex items-center h-[44px] 2xl:w-[481px] px-4 bg-white rounded-[14px] overflow-hidden">
                <CiSearch size={20} />
                <input
                  type="text"
                  className="h-full w-full  px-2 placeholder:text-sm ]"
                  placeholder="Search with keyword"
                />
              </div>
              {/* <TextInput type={InputType.text} icon={<CiSearch />} placeholder="Search with keyword" style={{backgroundColor:"#fff"}}/> */}
            </div>
            <div className="flex gap-x-2 mt-4 md:mt-0 lg:mt-0 items-center justify-end w-[100%] md:w-[40%] lg:w-[40%]">
              <div className="size-[44px] cursor-pointer hover:shadow rounded-[14px] place-center bg-white dark:bg-[#15171E]">
                <CiSearch />
              </div>
              <div className="size-[44px] cursor-pointer hover:shadow rounded-[14px] place-center bg-white dark:bg-[#15171E]">
                <BsGear className="text-[#718EBF]" />
              </div>
              <div className="size-[44px] cursor-pointer hover:shadow rounded-[14px] place-center bg-white dark:bg-[#15171E]">
                <IoMdNotificationsOutline className="text-[#A324F2]" />
              </div>
           
              <div className="flex items-center justify-between bg-[#E9EBFB] dark:bg-black rounded-[14px] px-4 py-2 w-[60%]">
                <p className="unbound fw-400 text-[#06052A] fs-500 text-[10px] md:text-[14px] lg:text-[14px]">
                    Institution Account
                </p>
                <img
                src={`${
                    user.photo
                    ? user.photo
                    : "https://res.cloudinary.com/do2kojulq/image/upload/v1731789862/Greenchmas-1_s5suif.png"
                }
                `}
                alt="profile"
                className="w-6"
                />
               </div>
            </div>
        </div>
      </header>
      <div>
        {
          isActive ? (
            <div className="bg-gray-100 p-2">
              <div className="mx-auto bg-white rounded-[20px] p-2 md:p-8 lg:p-8">
                  <h2 className="unbound text-[24px] text-center md:text-left lg:text-left font-[600]">Posted Jobs</h2>
                  <div className="flex flex-col md:flex-row lg;flex-row justify-between items-center my-11">
                      <input
                          type="text"
                          placeholder="Search"
                          className="w-[100%] md:w-[736px] lg:w-[736px] p-2 border rounded-[10px] focus:outline-none"
                      />
                      <button className="unbound px-4 py-2 mt-3 md:mt-0 lg:mt-0 w-[100%] md:w-[177px] lg:w-[177px] bg-gradient-to-r from-[#5f27f7] to-[#268cdb] text-white rounded-md text-[11px]"
                          onClick={() => {setIsActive(false)}}
                      >
                        Post A New Job
                      </button>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 lg:gap-[4%]">
                      {JobListings.map((job, index) => (
                          <JobCard key={index} {...job} />
                      ))}
                  </div>
              </div>
            </div>
          ) : (
            <JobForm setIsActive={setIsActive}/>
          )
        }
      </div>
    </div>
  )
}

export default Jobs;