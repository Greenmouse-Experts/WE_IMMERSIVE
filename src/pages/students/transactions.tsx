import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import { getOrderHistory } from "../../api/general";
import Loader from "../../components/reusables/loader";
import { dateFormat } from "../../helpers";

const TransactionList = () => {
 

  const { data: orders, isLoading } = getOrderHistory();

  if (isLoading) return <Loader />;

  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px] ">
        <div className="flex justify-between items-center">
          <p className="unbound text-[#06052A]">Transactions</p>
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
        <div className="mt-6 overflow-x-auto">
          <table className="table-auto  w-[1000px] ">
            <thead>
              <tr>
                <td className="unbound pl-4 p-1 pb-2">#</td>
                <td className="unbound p-1 pb-2">Transaction ID</td>
                {/* <td className="unbound p-1 pb-2">Description</td> */}
                <td className="unbound p-1 pb-2">Date</td>
                <td className="unbound p-1 pb-2">Amount</td>
                <td className="unbound p-1 pb-2">Status</td>
                <td className="unbound p-1 pb-2">Action</td>
              </tr>
            </thead>
            <tbody className="">
              {orders.data.map((item:any, i:number) => (
                <tr className="odd:bg-[#E9EBFB] odd:dark:bg-black" key={i}>
                  <td className={`p-2 pl-4`}>{`0${i + 1}`}</td>
                  <td className="p-2">{item.gatewayReference.slice(0, 14)}</td>
                  {/* <td className="pl-1 p-2">{item.description}</td> */}
                  <td className="p-2">{dateFormat(item.createdAt)}</td>
                  <td className="p-2">{item.amount}</td>
                  <td className="p-2 py-4 text-[#4FCC36]">{item.status}</td>
                  <td className="p-2 pl-4">
                    <PiDotsThreeOutlineFill className="cursor-pointer" />
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

export default TransactionList;
