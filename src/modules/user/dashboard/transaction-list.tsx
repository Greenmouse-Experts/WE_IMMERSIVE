import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";

const TransactionList = () => {
  const data = [
    {
      name: "Samsung Gear",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279177/WE%20Immersive/image_10_hsicwi.png",
      category: "Physical Product",
      creators: "Samsung",
    },
    {
      name: "Human Anatomy V2",
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
      name: "Chukka Uzo",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279177/WE%20Immersive/Rectangle_19409_j4mzhx.png",
      category: "Space",
      creators: "WEimmersive",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
      {/* Header Section */}
      <div className="flex justify-between items-center">
        <p className="unbound text-[#06052A] text-lg">Transactions</p>
        <div className="flex items-center gap-x-4">
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

      {/* Scrollable Table Container */}
      <div className="mt-6 overflow-x-auto">
        <table className="table-auto w-full min-w-[600px]">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="unbound p-5 text-left">#</th>
              <th className="unbound p-5 text-left">Name</th>
              <th className="unbound p-5 text-left">Image</th>
              <th className="unbound p-5 text-left">Category</th>
              <th className="unbound p-5 text-left">Creators</th>
              <th className="unbound p-5 text-left">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={i} className="odd:bg-[#E9EBFB] odd:dark:bg-black">
                <td className="p-5 pl-4">{`0${i + 1}`}</td>
                <td className="p-5">{item.name}</td>
                <td className="p-5">
                  <img
                    src={item.img}
                    alt="purchase-image"
                    className="w-[60px] h-[40px] object-cover rounded-md"
                  />
                </td>
                <td className="p-5">{item.category}</td>
                <td className="p-5">{item.creators}</td>
                <td className="p-5 pl-4">
                  <PiDotsThreeOutlineFill className="cursor-pointer text-lg" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionList;
