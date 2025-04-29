
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { MoreVertical } from "lucide-react";

const Transaction = () => {

  const data = [
    {
      id: "#CD456YHGT78IUK",
      desc: "+23490674321",
      date: "500.00",
      amount: "5000.00",
      status: "Active",
    },
    {
      id: "#CD456YHGT78IUK",
      desc: "+23490674321",
      date: "500.00",
      amount: "5000.00",
      status: "Active",
    },
    {
      id: "#CD456YHGT78IUK",
      desc: "+23490674321",
      date: "500.00",
      amount: "5000.00",
      status: "Active",
    },
    {
      id: "#CD456YHGT78IUK",
      desc: "+23490674321",
      date: "500.00",
      amount: "5000.00",
      status: "Active",
    },
    {
      id: "#CD456YHGT78IUK",
      desc: "+23490674321",
      date: "500.00",
      amount: "5000.00",
      status: "Active",
    },
    {
      id: "#CD456YHGT78IUK",
      desc: "+23490674321",
      date: "500.00",
      amount: "5000.00",
      status: "Active",
    },
  ];

 

  return (
    <div>
      <div className="mt-6">
        <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
          <div className="flex flex-col md:flex-row lg:flex-row justify-between mt-5 mb-14 items-center">
            <div className="flex flex-col md:flex-col lg:flex-col xl:flex-row items-center">
              <p className="unbound text-[#06052A] text-[24px] md:text-[18px] lg:text-[14px] xl:text-[24px]">
                All Transactions
              </p>
              <div className="flex lg:ml-0 xl:ml-11 mt-5 mb-5 md:mt-0 md:mb-0 lg:mt-0 items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
                <p className="text-[#2C3E50] fs-300">
                  <span className="text-[#2C3E50] fs-200">Sort:</span> Newest
                  First
                </p>
                <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
              </div>
            </div>
            <div className="flex flex-col md:flex-row lg:flex-row items-center gap-x-4">
              <div className="relative">
                <FaSearch className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 w-64 border border-gray-300 rounded-full text-sm
                                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              <div className="flex items-center mt-5 mb-5 md:mt-2 md:mb-2 lg:mt-0 lg:mb-0 gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
                <p className="text-[#2C3E50] fs-300">Export As</p>
                <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
              </div>
              <button
                type="button"
                className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold
                                px-4 py-2 rounded-md shadow-md hover:from-indigo-600 hover:to-purple-700
                                transition-colors md:text-[12px] lg:text-[10px]"
              >
                Add New Transaction
              </button>
            </div>
          </div>
          <div className="mt-6 overflow-x-auto w-full">
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <td className="unbound pl-4 p-1 pb-2 text-[12px] md:text-[13px] xl:text-[17px]">
                    #
                  </td>
                  <td className="unbound p-1 pb-2 text-[12px] md:text-[13px] xl:text-[17px]">
                    Transaction ID
                  </td>
                  <td className="unbound p-1 pb-2 text-[12px] md:text-[13px] xl:text-[17px]">
                    Description
                  </td>
                  <td className="unbound p-1 pb-2 text-center md:text-left lg:text-left text-[12px] md:text-[13px] xl:text-[17px]">
                    Date
                  </td>
                  <td className="unbound p-1 pb-2 text-[12px] md:text-[13px] xl:text-[17px]">
                    Amount
                  </td>
                  <td className="unbound p-1 pb-2 text-center md:text-center text-[12px] md:text-[13px] xl:text-[17px] xl:text-left">
                    Status
                  </td>
                  <td className="unbound p-1 pb-2 text-[12px] md:text-[13px] xl:text-[17px]">
                    Action
                  </td>
                </tr>
              </thead>
              <tbody className="">
                {data.map((item, i) => (
                  <tr className="odd:bg-[#E9EBFB] odd:dark:bg-black" key={i}>
                    <td className="p-2 py-4 pl-4 text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px]">{`0${
                      i + 1
                    }`}</td>
                    <td className="p-2 py-4 text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px]">
                      {item.id}
                    </td>
                    <td className="p-2 py-4 text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px]">
                      {item.desc}
                    </td>
                    <td className="p-2 py-4 text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px]">
                      {item.date}
                    </td>
                    <td className="p-2 py-4 text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px]">
                      {item.amount}
                    </td>
                    <td className="p-2 py-4 text-[12px] md:text-[13px] text-[#2C3E50] xl:text-[17px]">
                      <span
                        className={`py-2 px-8 rounded-[8px] ${
                          item.status == "Active"
                            ? "text-[green] bg-[#AEFFADFF]"
                            : "text-[red] bg-[#FF9595FF]"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                    <td className="p-2 py-4 pl-4 cursor-pointer">
                      <Menu placement="left">
                        <MenuHandler>
                          <MoreVertical />
                        </MenuHandler>
                        <MenuList>
                          <MenuItem className="flex flex-col gap-3">
                            <span className="cursor-pointer w-full">View</span>
                          </MenuItem>
                        </MenuList>
                      </Menu>
                    </td>
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

export default Transaction;
