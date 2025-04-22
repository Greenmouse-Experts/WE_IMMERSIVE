import { MdOutlineArrowDropDown } from "react-icons/md";
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

const Orders = () => {
  const { data: orders, isLoading } = getOrderHistory();

  if (isLoading) return <Loader />;

  return (
    <div className="bg-white dark:bg-[#15171E] p-6 lg:py-6 rounded-[20px]">
      <div className="flex w-full justify-between mb-5 items-center">
        <p className="unbound flex flex-grow text-sm md:text-base text-[#06052A]">
          All Orders
        </p>
        <div className="md:flex hidden items-center gap-x-2">
          <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
            <p className="text-[#2C3E50] fs-300">Export As</p>
            <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
          </div>
          <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer">
            <p className="text-[#2C3E50] fs-300">
              <span className="text-[#2C3E50] fs-200">Sort:</span> Newest First
            </p>
            <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
          </div>
        </div>
      </div>
      <div className="mt-5">
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
                            to={`/students/orders/${item.id}`}
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
    </div>
  );
};

export default Orders;
