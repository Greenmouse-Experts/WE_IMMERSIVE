import { BsGear } from "react-icons/bs";
import { IoMdNotificationsOutline } from "react-icons/io";

const Navbar = () => {
  return (
    <div className="flex items-center justify-end w-full bg-white dark:bg-gray-900 p-4 rounded-lg mb-5">
      {/* Search Bar (Hidden on Mobile) */}
      <div className="hidden md:block">
        <input
          type="text"
          placeholder="Search with keyword"
          className="w-[250px] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 dark:bg-[#1E1E2E]"
        />
      </div>

      {/* Icons and Profile - Inline on all screens & Right-aligned */}
      <div className="flex items-center gap-3 md:gap-4 ml-auto">
        {[BsGear, IoMdNotificationsOutline].map((Icon, index) => (
          <div
            key={index}
            className="size-[40px] md:size-[44px] cursor-pointer hover:shadow rounded-[14px] flex items-center justify-center bg-gray-100 dark:bg-[#15171E]"
          >
            <Icon
              className={`text-gray-600 ${index === 1 ? "text-blue-500" : index === 2 ? "text-purple-500" : ""}`}
            />
          </div>
        ))}

        {/* General Account (Inline with Icons) */}
        <div className="bg-purple-100 px-4 py-2 rounded-lg flex items-center dark:bg-[#1E1E2E]">
          <span className="text-sm font-medium">General Account</span>
          <img
            src="https://res.cloudinary.com/do2kojulq/image/upload/v1729716093/WE%20Immersive/Group_1000005705_c9ddis.png"
            alt="User"
            className="ml-2 w-8 h-8 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
