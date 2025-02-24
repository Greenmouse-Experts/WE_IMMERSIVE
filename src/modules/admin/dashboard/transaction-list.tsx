import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

const TransactionList = () => {
  const data = [
    {
      name: "Franka Yusuf",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279177/WE%20Immersive/image_10_hsicwi.png",
      category: "Physical Product",
      creators: "Samsung",
    },
    {
      name: "Zeb Phoebe",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279177/WE%20Immersive/image_11_vzeysg.png",
      category: "Courses",
      creators: "ProLab",
    },
    {
      name: "Chukka Uzo",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279177/WE%20Immersive/image_12_c53ldv.png",
      category: "Digital Asset",
      creators: "Chukka",
    },
    {
      name: "Frank Hamzy",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279177/WE%20Immersive/Rectangle_19409_j4mzhx.png",
      category: "Tour",
      creators: "WEimmersive",
    },
    {
      name: "Iwa Tay",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279177/WE%20Immersive/Rectangle_19409_j4mzhx.png",
      category: "Space",
      creators: "WEimmersive",
    },
  ];

  return (
    <div className="w-full">
      <div className="bg-white dark:bg-[#15171E] w-full px-4 lg:py-6 rounded-[20px]">
        <div className="md:flex justify-between items-center">
          <p className="unbound text-center md:text-left text-[#06052A]">New Users</p>
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
        <div className="mt-6 w-full">
          <div className="overflow-x-auto w-full">
            <table className="table-auto md:w-full w-[1000px] text-sm">
              <thead>
                <tr>
                  <td className="unbound pl-4 p-1 pb-2">#</td>
                  <td className="unbound p-1 pb-2">Name</td>
                  {/* <td className="unbound p-1 pb-2">Image</td> */}
                  <td className="unbound p-1 pb-2">Email</td>
                  <td className="unbound p-1 pb-2">User Type </td>
                  <td className="unbound p-1 pb-2">Date</td>
                  <td className="unbound p-1 pb-2">Action</td>
                </tr>
              </thead>
              <tbody className="">
                {data.map((item, i) => (
                  <tr className="odd:bg-[#E9EBFB] odd:dark:bg-black" key={i}>
                    <td className={`p-2 py-4 pl-4`}>{`0${i + 1}`}</td>
                    <td className="p-2 py-4">{item.name}</td>
                    <td className="p-2 py-4">testmail@gmail.com</td>
                    {/* <td className="pl-1 p-2 py-4">
                    <img src={item.img} alt="purchase-image" className="w-[70px]" />
                  </td> */}
                    <td className="p-2 py-4 text-[#F03CE0]">Student</td>
                    <td className="p-2 py-4">1-11-24</td>
                    <td className="p-2 py-4 pl-4">
                      <PiDotsThreeOutlineFill className="cursor-pointer" />
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

export default TransactionList;
