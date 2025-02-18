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
      {
        name: "Iwa Tay",
        img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279177/WE%20Immersive/Rectangle_19409_j4mzhx.png",
        category: "Space",
        creators: "WEimmersive",
      },
    ];

  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px] mb-8 md:mb-0 lg:mb-0">
        <div className="md:flex lg:flex md:flex-row lg:flex-row justify-between items-center pt-6 md:pt-0 lg:pt-0">
          <p className="unbound text-[#06052A]">Newly Added Students</p>
          <div className="flex items-center gap-x-4 mt-3 md:mt-0 lg:mt-0">
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
        <div className="mt-6 overflow-x-auto w-full">
          <table className="table-auto w-full">
            <thead>
              <tr>
                <td className="unbound pl-4 p-1 pb-2">#</td>
                <td className="unbound p-1 pb-2 text-center md:text-left lg:text-left">Name</td>
                <td className="unbound p-1 pb-2 text-center md:text-left lg:text-left">Email</td>
                <td className="unbound p-1 pb-2 whitespace-nowrap">Student ID</td>
                <td className="unbound p-1 pb-2 text-center md:text-left lg:text-left">Date</td>
                <td className="unbound p-1 pb-2">Action</td>
              </tr>
            </thead>
            <tbody className="">
              {data.map((item, i) => (
                <tr className="odd:bg-[#E9EBFB] odd:dark:bg-black" key={i}>
                  <td className={`p-2 py-4 pl-4`}>{`0${i + 1}`}</td>
                  <td className="p-2 py-4 whitespace-nowrap">{item.name}</td>
                  <td className="p-2 py-4">testmail@gmail.com</td>
                  <td className="p-2 py-4 whitespace-nowrap">GRE-198832</td>
                  <td className="p-2 py-4 whitespace-nowrap">1-11-24</td>
                  <td className="p-2 py-4 pl-4">
                    <PiDotsThreeOutlineFill className="cursor-pointer"/>
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
