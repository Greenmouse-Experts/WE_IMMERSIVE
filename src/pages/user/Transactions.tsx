import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import Navbar from "../../layout/user/components/navbar";

const TransactionList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("Newest First");

  const data = [
    {
      id: "TXN001",
      description: "Samsung Gear Purchase",
      date: "2025-02-15",
      amount: "$299.99",
      status: "Completed",
    },
    {
      id: "TXN002",
      description: "Human Anatomy Course",
      date: "2025-02-14",
      amount: "$99.99",
      status: "Pending",
    },
    {
      id: "TXN003",
      description: "Chukka Uzo Digital Asset",
      date: "2025-02-13",
      amount: "$49.99",
      status: "Failed",
    },
    {
      id: "TXN004",
      description: "Frank Hamzy Tour Booking",
      date: "2025-02-12",
      amount: "$199.99",
      status: "Completed",
    },
    {
      id: "TXN005",
      description: "Chukka Uzo Space Rental",
      date: "2025-02-11",
      amount: "$399.99",
      status: "Completed",
    },
  ];

  const filteredData = data.filter(
    (item) =>
      item.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="mx-auto">
        <Navbar />
      </div>
      <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
        <div className="flex justify-between items-center">
          <p className="unbound text-[#06052A] text-lg">All Transactions</p>
          <div className="flex items-center gap-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-1 border rounded-lg outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex items-center gap-x-1 btn-shadow px-2 py-3 rounded-lg  cursor-pointer">
              <p className="text-[#2C3E50] fs-300">Export As</p>
              <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
            </div>
            <div
              className="flex items-center gap-x-1 btn-shadow px-2 py-3 rounded-lg cursor-pointer"
              onClick={() =>
                setSortOrder(
                  sortOrder === "Newest First" ? "Oldest First" : "Newest First"
                )
              }
            >
              <p className="text-[#2C3E50] fs-300">
                <span className="text-[#2C3E50] fs-200">Sort:</span> {sortOrder}
              </p>
              <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-x-auto">
          <table className="table-auto w-full min-w-[600px]">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="p-5 text-left">#</th>
                <th className="p-5 text-left">Transaction ID</th>
                <th className="p-5 text-left">Description</th>
                <th className="p-5 text-left">Date</th>
                <th className="p-5 text-left">Amount</th>
                <th className="p-5 text-left">Status</th>
                <th className="p-5 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map((item, i) => (
                <tr key={i} className="odd:bg-[#E9EBFB] odd:dark:bg-black">
                  <td className="p-4 pl-4">{`0${i + 1}`}</td>
                  <td className="p-4 text-sm">{item.id}</td>
                  <td className="p-4 text-sm">{item.description}</td>
                  <td className="p-4 text-sm">{item.date}</td>
                  <td className="p-4 text-sm">{item.amount}</td>
                  <td className="p-4 text-sm">{item.status}</td>
                  <td className="p-4 text-sm">
                    <PiDotsThreeOutlineFill className="cursor-pointer text-md" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TransactionList;
