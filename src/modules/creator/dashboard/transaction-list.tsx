import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

const TransactionList = () => {
  const data:any = [
  ];

  return (
    <div className="w-full">
      <div className="bg-white w-full dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
        <div className="flex w-full justify-between md:py-1 py-4 items-center">
          <p className="unbound text-[#06052A]">All Orders</p>
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
        <div className="mt-6 w-full">
          <div className="overflow-x-auto w-full">
            <table className="table-auto md:w-full w-[1000px] text-sm">
              <thead>
                <tr>
                  <td className="unbound pl-4 p-1 pb-2">#</td>
                  <td className="unbound p-1 pb-2">Product Name</td>
                  {/* <td className="unbound p-1 pb-2">Image</td> */}
                  <td className="unbound p-1 pb-2">Category</td>
                  <td className="unbound p-1 pb-2">Status </td>
                  <td className="unbound p-1 pb-2">Date</td>
                  <td className="unbound p-1 pb-2">Action</td>
                </tr>
              </thead>
              <tbody className="">
                {data.map((item:any, i:number) => {
                  console.log(item);
                  return (
                    <tr className="odd:bg-[#E9EBFB] odd:dark:bg-black" key={i}>
                      <td className={`p-2 py-4 pl-4`}>{`0${i + 1}`}</td>
                      <td className="p-2 py-4">Tesla Model Y</td>
                      <td className="p-2 py-4">testmail@gmail.com</td>
                      {/* <td className="pl-1 p-2 py-4">
                    <img src={item.img} alt="purchase-image" className="w-[70px]" />
                  </td> */}
                      <td className="p-2 py-4 text-[#4FCC36]">Completed</td>
                      <td className="p-2 py-4">1-11-24</td>
                      <td className="p-2 py-4 pl-4">
                        <PiDotsThreeOutlineFill className="cursor-pointer" />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionList;
