//@ts-nocheck

import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { getAdminNewUsers } from "../../../api/admin";
import Loader from "../../../components/reusables/loader";
import { IAdminNewUser } from "../../../types/dashboard.types";
import { dateFormat } from "../../../helpers";
import { useState } from "react";
import SelectInput from "../../../components/ui/SelectInput";

const TransactionList = () => {
  const [accountType, setAccountType] = useState("");
  const { data: newUsers, isLoading } = getAdminNewUsers(accountType);
  if (isLoading) return <Loader />;

  return (
    <div className="w-full">
      <div className="bg-white dark:bg-[#15171E] w-full px-4 lg:py-6 rounded-[20px]">
        <div className="md:flex justify-between items-center">
          <div className="flex items-center gap-10">
            <p className="unbound text-center md:text-left text-[#06052A]">
              New Users
            </p>
            <SelectInput
              onChange={(e:any) => setAccountType(e.target.value)}
              value={accountType}
              list={[
                { name: "user", id: "user" },
                { name: "creator", id: "creator" },
                { name: "student", id: "student" },
                { name: "institution", id: "institution" },
              ]}
              placeholder="All Users"
              style={{ width: 200 }}
            />
          </div>
          <div className="flex items-center gap-x-4">
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
        <div className="mt-6 w-full overflow-x-auto overflow-y-auto max-h-[400px]">
          <div className="">
            <table className="table-auto md:w-full w-[1000px] text-sm">
              <thead>
                <tr>
                  <td className="unbound pl-4 p-1 pb-2">#</td>
                  <td className="unbound p-1 pb-2">Name</td>
                  {/* <td className="unbound p-1 pb-2">Image</td> */}
                  <td className="unbound p-1 pb-2">Email</td>
                  <td className="unbound p-1 pb-2">User Type </td>
                  <td className="unbound p-1 pb-2">Date Created</td>
                  <td className="unbound p-1 pb-2">Last LoggedIn</td>
                  {/* <td className="unbound p-1 pb-2">Action</td> */}
                </tr>
              </thead>
              <tbody className="">
                {newUsers!.map((item: IAdminNewUser, i) => (
                  <tr className="odd:bg-[#E9EBFB] odd:dark:bg-black" key={i}>
                    <td className={`p-2 py-4 pl-4`}>{`0${i + 1}`}</td>
                    <td className="p-2 py-4">{item.name}</td>
                    <td className="p-2 py-4">{item.email}</td>
                    {/* <td className="pl-1 p-2 py-4">
                    <img src={item.img} alt="purchase-image" className="w-[70px]" />
                  </td> */}
                    <td className="p-2 py-4 text-[#F03CE0] capitalize">{item.type}</td>
                    <td className="p-2 py-4">{dateFormat(item.createdAt)} </td>
                    <td className="p-2 py-4">{dateFormat(item.lastLogin)} {dateFormat(item.lastLogin, "HH:mm")}</td>
                    {/* <td className="p-2 py-4 pl-4">
                      <PiDotsThreeOutlineFill className="cursor-pointer" />
                    </td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
