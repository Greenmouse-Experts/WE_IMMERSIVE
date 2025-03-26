import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { useGetData } from "../../hooks/useGetData";
import { useEffect, useState } from "react";
import Loader from "../../components/reusables/loader";
import { dateFormat } from "../../helpers/dateHelper";
import { getStudents } from "../../api";
import { BeatLoader } from "react-spinners";
import AdminKycForm from "../../components/AdminKycForm";
import { useParams } from "react-router-dom";
import { getUserDetails } from "../../api/admin";

interface DataItem {
  createdAt: string; // ISO 8601 date string
  // Other properties as needed
}

const UserDetails = () => {
  // Fetch data for each group
  const students = useGetData(["students"], getStudents);

  const {userId} = useParams();
  const {data:userDetails, isLoading:isGettingUser} =getUserDetails(userId!);

  console.log(userDetails);

  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if all data is available before merging
    if (students.data) {
      const mergedData: DataItem[] = [...students.data.data];

      const sortedData = mergedData.sort(
        (a: DataItem, b: DataItem) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
      );
      setData(sortedData);
      setLoading(false);
    }
  }, [students.data]);

  const isLoading = false;

  if(isGettingUser) {
    return <Loader />;
  }

  return (
    <div className="mt-10">
      <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
        <h4 className="fw-400 text-xl">User Details : {userDetails?.name}</h4>
      </div>
      <div className="flex items-start w-full gap-6 mt-10">
        <aside className="bg-white dark:bg-[#15171E] shadow-sm rounded-[20px] px-1 md:p-4 lg:p-4 w-[30%]">
          <p className="text-[16px] font-[400] mt-2 mb-8">Profile</p>
          <div className="flex flex-col items-center border-b pb-4 mb-4">
            <div className="relative">
              {loading || isLoading ? (
                <BeatLoader />
              ) : (
                <img
                  src={`${
                    userDetails?.photo
                      ? userDetails?.photo
                      : "https://res.cloudinary.com/do2kojulq/image/upload/v1730286484/default_user_mws5jk.jpg"
                  }
                `}
                  alt="img"
                  className="w-[155.38px] h-[156.47px]"
                />
              )}
            </div>

            <h2 className="unbound text-lg font-semibold my-2">
              {/* {userData?.name} */}
             {userDetails?.name}
            </h2>
            <p className="text-sm text-gray-500">{userDetails?.accountType} Account</p>

            <div className="flex gap-3 mt-4">
              <div className="text-center bg-[#E0C8FF] p-2 w-[70px] h-[70px] md:w-[65px] lg:w-[70px] xl:w-[92px] md:h-[75px] lg:h-[75px] rounded-md">
                <p className="text-xl font-bold text-[#710AFC]">100</p>
                <p className="text-xs text-[#710AFC] mt-1">Courses</p>
              </div>
              <div className="text-center bg-[#E0C8FF] p-2 w-[70px] h-[70px] md:w-[65px] lg:w-[70px] xl:w-[92px] md:h-[75px] lg:h-[75px] rounded-md">
                <p className="text-xl font-bold text-[#710AFC]">100</p>
                <p className="text-xs text-[#710AFC] mt-1">Likes</p>
              </div>
              <div className="text-center bg-[#E0C8FF] p-2 w-[70px] h-[70px] md:w-[65px] lg:w-[70px] xl:w-[92px]   md:h-[75px] lg:h-[75px] rounded-md ">
                <p className="text-xl font-bold text-[#710AFC]">100</p>
                <p className="text-xs text-[#710AFC] mt-1">Achievements</p>
              </div>
            </div>
          </div>

          {/* Sidebar Menu (example placeholders) */}
          <nav className="space-y-2 cursor-pointer">
            <ul className="flex-col flex gap-6">
              <p className="text-[#515153]">Email : {userDetails?.email}</p>
              <p className="text-[#515153]">Phone : {userDetails?.phoneNumber}</p>
              <p className="text-[#515153]">Industry : {userDetails?.industry}</p>
              <p className="text-[#515153]">Professional Skill : {userDetails?.professionalSkill}</p>
              <p className="text-[#515153]">Account Type : {userDetails?.accountType}</p>
              <p className="text-[#515153]">Registered On:   {dateFormat(userDetails?.createdAt, "dd-MM-yyyy")}</p>
            </ul>
          </nav>
        </aside>
        <div className=" w-[70%]">
          <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
            <div className="flex w-full justify-between md:py-1 py-4 items-center">
              <p className="unbound flex flex-grow text-sm md:text-base text-[#06052A]">
                Orders
              </p>
              <div className="md:flex hidden items-center gap-x-2">
                <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
                  <p className="text-[#2C3E50] fs-300">Export As</p>
                  <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
                </div>
                <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
                  <p className="text-[#2C3E50] fs-300">
                    <span className="text-[#2C3E50] fs-200">Sort:</span> Newest
                    First
                  </p>
                  <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="overflow-x-auto">
                {loading ? (
                  // Loading spinner or placeholder
                  <Loader />
                ) : (
                  <table className="table-auto md:w-full w-[1000px] text-sm">
                    <thead>
                      <tr className="bg-gray-100 dark:bg-gray-800">
                        <td className="unbound pl-4 p-1 pb-2">#</td>
                        <td className="unbound p-1 pb-2">Name</td>
                        <td className="unbound p-1 pb-2">Email</td>
                        <td className="unbound p-1 pb-2">Phone Number</td>
                        <td className="unbound p-1 pb-2">Points</td>
                        <td className="unbound p-1 pb-2">Date</td>
                        <td className="unbound p-1 pb-2">Status</td>
                        <td className="unbound p-1 pb-2">Action</td>
                      </tr>
                    </thead>
                    <tbody>
                      {data?.length > 0
                        ? [].map((item:any, i) => (
                            <tr
                              className="odd:bg-[#E9EBFB] odd:dark:bg-black"
                              key={i}
                            >
                              <td className={`p-2 py-4 pl-4`}>{`${i + 1}`}</td>
                              <td className="p-2 py-4">{item.name}</td>
                              <td className="pl-1 p-2 py-4">
                                {item?.email || "---"}
                              </td>
                              <td className="p-2 py-4">
                                {item?.phoneNumber || "---"}
                              </td>
                              <td className="p-2 py-4 capitalize">
                                {item?.evToken || "---"}
                              </td>
                              <td className="p-2 py-4 capitalize">
                                {dateFormat(item?.createdAt, "dd-MM-yyyy")}
                              </td>
                              <td className="p-2 py-4 text-[#4FCC36]">
                                <span
                                  className={`${
                                    item?.status === "active"
                                      ? "bg-[rgba(212,249,206,1)] text-[rgba(36,155,44,1)]"
                                      : "bg-[rgba(249,206,206,1)] text-[rgba(249,19,19,1)]"
                                  } p-2 text-xs rounded-md capitalize`}
                                >
                                  {item?.status}
                                </span>
                              </td>
                              <td className="p-2 py-4 pl-4">
                                <PiDotsThreeOutlineFill className="cursor-pointer" />
                              </td>
                            </tr>
                          ))
                        : null}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          </div>
          <div className="mt-10 ">
            <AdminKycForm userDetails={userDetails}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
