import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import Navbar from "../../layout/user/components/navbar";

const OrderList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("Newest First");
  const [dropdownIndex, setDropdownIndex] = useState<number | null>(null);

  const orders = [
    {
      id: "ORD001",
      name: "John Doe",
      image:
        "https://res.cloudinary.com/greenmouse-tech/image/upload/v1739968690/We-Immersive/p_n1z7uw.png",
      category: "Electronics",
      price: "$299.99",
      status: "Completed",
    },
    {
      id: "ORD002",
      name: "Jane Smith",
      image:
        "https://res.cloudinary.com/greenmouse-tech/image/upload/v1739968690/We-Immersive/p_n1z7uw.png",
      category: "Books",
      price: "$19.99",
      status: "Pending",
    },
    {
      id: "ORD002",
      name: "Jane Smith",
      image:
        "https://res.cloudinary.com/greenmouse-tech/image/upload/v1739968690/We-Immersive/p_n1z7uw.png",
      category: "Books",
      price: "$19.99",
      status: "Pending",
    },
    {
      id: "ORD002",
      name: "Jane Smith",
      image:
        "https://res.cloudinary.com/greenmouse-tech/image/upload/v1739968690/We-Immersive/p_n1z7uw.png",
      category: "Books",
      price: "$19.99",
      status: "Pending",
    },
    {
      id: "ORD001",
      name: "John Doe",
      image:
        "https://res.cloudinary.com/greenmouse-tech/image/upload/v1739968690/We-Immersive/p_n1z7uw.png",
      category: "Electronics",
      price: "$299.99",
      status: "Completed",
    },
  ];

  const filteredOrders = orders.filter(
    (order) =>
      order.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      order.category.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <div className="mx-auto">
        <Navbar />
      </div>
      <div className="bg-white dark:bg-[#15171E] p-4 rounded-[20px] overflow-hidden">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-4 gap-4">
          <p className="unbound text-[#06052A] text-lg">All Orders</p>

          <div className="flex flex-wrap items-center gap-2">
            <input
              type="text"
              placeholder="Search orders..."
              className="px-3 py-3 border rounded-lg outline-none w-full sm:w-auto dark:bg-[#15171E]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="flex items-center gap-x-1 bg-gray-200 px-3 py-3 rounded-lg cursor-pointer dark:bg-[#15171E]">
              <p className="text-gray-700">Export As</p>
              <MdOutlineArrowDropDown className="text-gray-700" />
            </div>
            <div
              className="flex items-center gap-x-1 bg-gray-200 px-3 py-3 rounded-lg cursor-pointer dark:bg-[#15171E]"
              onClick={() =>
                setSortOrder(
                  sortOrder === "Newest First" ? "Oldest First" : "Newest First"
                )
              }
            >
              <p className="text-gray-700">Sort: {sortOrder}</p>
              <MdOutlineArrowDropDown className="text-gray-700" />
            </div>
          </div>
        </div>

        <div className="overflow-auto">
          <table className="w-full min-w-[600px] border-collapse">
            <thead>
              <tr className="border-b border-gray-300">
                <th className="p-4 text-left">#</th>
                <th className="p-4 text-left">Name</th>
                <th className="p-4 text-left">Image</th>
                <th className="p-4 text-left">Category</th>
                <th className="p-4 text-left">Price</th>
                <th className="p-4 text-left">Status</th>
                <th className="p-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => (
                <tr
                  key={order.id}
                  className="odd:bg-[#E9EBFB] odd:dark:bg-black"
                >
                  <td className="p-3">{index + 1}</td>
                  <td className="p-3">{order.name}</td>
                  <td className="p-3">
                    <img
                      src={order.image}
                      alt="Customer"
                      className="w-14 h-10 rounded-lg"
                    />
                  </td>
                  <td className="p-3">{order.category}</td>
                  <td className="p-3">{order.price}</td>
                  <td className="p-3">
                    <span
                      className={`px-3 py-3 rounded-lg text-sm font-medium ${
                        order.status === "Completed"
                          ? "bg-[#2EF91333] text-[#249B2C]"
                          : "bg-[#F9F91333] text-[#BEA40E]"
                      }`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 relative">
                    <div className="relative inline-block">
                      <PiDotsThreeOutlineFill
                        className="cursor-pointer text-lg"
                        onClick={() =>
                          setDropdownIndex(
                            dropdownIndex === index ? null : index
                          )
                        }
                      />
                      {dropdownIndex === index && (
                        <div className="absolute right-0 mt-2 w-36 bg-white shadow-lg rounded-lg p-2 z-10 dark:bg-[#15171E]">
                          <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:bg-[#15171E]">
                            View Details
                          </button>
                          <button className="block w-full text-left px-4 py-2 text-sm hover:bg-gray-100 dark:bg-[#15171E]">
                            Cancel Order
                          </button>
                        </div>
                      )}
                    </div>
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

export default OrderList;
