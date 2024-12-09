import { MdOutlineArrowDropDown } from "react-icons/md";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import Button from "../../components/ui/Button";

const CreatorAssetsScreen = () => {
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
  ];
  return (
    <div className="rounded-[20px] p-5 bg-white dark:bg-black">
      <div className="flex justify-between items-center">
        <div className="flex gap-10 items-center">
        <p className="unbound text-[#06052A] fw-600">Created Courses</p>
        <div className="flex items-center gap-x-1 btn-shadow px-2 py-2 rounded-full cursor-pointer">
            <p className="text-[#2C3E50] fs-300">
              <span className="fs-200 text-[#9094A2]">Sort:</span> Newest First
            </p>
            <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
          </div>
        </div>
        <div className="flex items-center gap-x-4">
          <div>
            <input
              type="text"
              className="border rounded-[10px] h-9 w-[171px] px-3 border-[#2C3E50]"
              placeholder="Search"
            />
          </div>
        
          <div className="flex items-center gap-x-1 btn-shadow px-2 py-2 rounded-full cursor-pointer text-nowrap">
            <p className="text-[#2C3E50] fs-300">Export As</p>
            <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
          </div>
          <Button title="Create New Course" size={12} altClassName="btn-primary px-4 py-2 whitespace-nowrap rounded-md"/>
        </div>
      </div>
      <div className="mt-6">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <td className="unbound pl-4 p-1 pb-2">#</td>
              <td className="unbound p-1 pb-2">Name</td>
              <td className="unbound p-1 pb-2">Image</td>
              <td className="unbound p-1 pb-2">Category</td>
              <td className="unbound p-1 pb-2">Buyer Name</td>
              <td className="unbound p-1 pb-2">Price</td>
              <td className="unbound p-1 pb-2">Date</td>
              <td className="unbound p-1 pb-2">Status </td>
              <td className="unbound p-1 pb-2">Action</td>
            </tr>
          </thead>
          <tbody className="">
            {data.map((item, i) => (
              <tr className="odd:bg-[#E9EBFB] odd:dark:bg-black" key={i}>
                <td className={`p-2 py-4 pl-4`}>{`0${i + 1}`}</td>
                <td className="p-2 py-4">Tesla Model Y</td>
                <td className="pl-1 p-2 py-4">
                  <img
                    src={item.img}
                    alt="purchase-image"
                    className="w-[70px]"
                  />
                </td>
                <td className="p-2 py-4">Digital Asset</td>
                <td className="p-2 py-4">Samuel Franka</td>
                <td className="p-2 py-4">N 30,000</td>
                <td className="p-2 py-4">1-11-24</td>
                <td className="p-2 py-4 "> <p className="text-green bg-lightGreen border border-[#2EF91333] rounded-lg px-5 py-3 text-center w-fit">Completed</p></td>
                <td className="p-2 py-4 pl-4">
                  <PiDotsThreeOutlineFill className="cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CreatorAssetsScreen;
