import { useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Navbar from "../../layout/user/components/navbar";
import { getOrderHistory } from "../../api/general";
import Loader from "../../components/reusables/loader";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { MoreVertical } from "lucide-react";
import { Link } from "react-router-dom";

const OrderList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("Newest First");
 

  const { data: orders, isLoading } = getOrderHistory();

  if (isLoading) return <Loader />;
 

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

        <div className="overflow-x-auto">
          <table className="table-auto md:w-full text-sm">
            <thead>
              <tr className="bg-gray-100 dark:bg-gray-800">
                <td className="unbound p-5">#</td>
                <td className="unbound p-5 pb-2">Ref</td>
                <td className="unbound p-5 pb-2">Payment Method</td>

                <td className="unbound p-5 pb-2">Price</td>
                <td className="unbound p-5 pb-2">Status</td>
                <td className="unbound p-5 pb-2">Action</td>
              </tr>
            </thead>
            <tbody>
              {orders.data.map((item: any, i: number) => (
                <tr className="odd:bg-[#E9EBFB] odd:dark:bg-black" key={i}>
                  <td className="p-4">{`0${i + 1}`}</td>
                  <td className="p-4">{item.gatewayReference.slice(0, 10)}</td>
                  <td className="pl-1 p-4">{item.paymentMethod}</td>

                  <td className="p-4">{item.amount}</td>
                  <td className="p-4 text-[#4FCC36]">{item.status}</td>
                  <td className="p-4 pl-4">
                    <Menu placement="left">
                      <MenuHandler>
                        <MoreVertical />
                      </MenuHandler>
                      <MenuList>
                        <MenuItem className="flex flex-col gap-3">
                          <Link
                            to={`/user/orders/${item.id}`}
                            className="cursor-pointer w-full"
                          >
                            View Details
                          </Link>
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
    </>
  );
};

export default OrderList;
