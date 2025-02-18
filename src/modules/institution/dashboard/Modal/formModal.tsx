import React from "react";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

interface AddTutorModalProps {
  userType: string;
  isOpen: boolean;
  onClose: () => void;
}

const FormModal: React.FC<AddTutorModalProps> = ({ userType, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
     onClick={onClose}
    >
      <div className={`bg-white w-[1000px] px-3 pt-11 md:p-11 lg:p-11 rounded-[15px] shadow-lg ${userType === "student" ? "h-[419px]" : "h-[600px]"}`}
        onClick={(e) => e.stopPropagation()}
      >
         {userType === "tutor" && (
        <div>
            <h2 className="unbound md:text-[24px] lg:text-[24px] font-[600] mb-4">Add New Tutor</h2>
            <form>
                <div className="mb-4 mt-11">
                    <label className="block mb-2 text-[18px] font-[400] text-gray-700">Tutor's Full Name</label>
                    <input
                    type="text"
                    placeholder="Enter tutor's full name"
                    className="w-full mt-1 pl-11 py-2 border bg-[#E9EBFB] rounded-lg focus:ring focus:ring-blue-300"
                    />
                    <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                        <TbBuildingSkyscraper className="text-[#A6A4A4] text-[25px]" />
                    </div>
                </div>
                <div className="mb-4 mt-3">
                    <label className="block mb-2 text-[18px] font-[400] text-gray-700">Tutor's Email</label>
                    <input
                    type="email"
                    placeholder="Enter tutor's email"
                    className="w-full mt-1 pl-11 py-2 border bg-[#E9EBFB] rounded-lg focus:ring focus:ring-blue-300"
                    />
                    <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                        <MdEmail className="text-[#A6A4A4] text-[25px]" />
                    </div>
                </div>
                <div className="mb-4 mt-3">
                    <label className="block  mb-2 text-[18px] font-[400] text-gray-700">Course</label>
                    <select className="w-full mt-1 p-2 border bg-[#E9EBFB] rounded-lg focus:ring focus:ring-blue-300">
                    <option>Choose A Course</option>
                    <option>Course 1</option>
                    <option>Course 2</option>
                    <option>Course 3</option>
                    </select>
                </div>
                <div className="mt-11">
                    <button
                    type="submit"
                    className="unbound px-4 py-2 w-[100%] bg-gradient-to-r from-[#6F0AFF] to-[#1D9CD7] text-white rounded-lg hover:opacity-90"
                    >
                    Add Tutor
                    </button>
                </div>
            </form>
        </div>
        )}

        {userType === "student" && (
            <div className="pt-5 md:pt-3 lg:pt-3">
              <h2 className="unbound md:text-[24px] lg:text-[24px] font-[600] mb-4">Add New Student</h2>
              <form className="pt-5 md:pt-3 lg:pt-3">
                 <div className="mb-4 mt-3">
                    <label className="block mb-2 text-[18px] font-[400] text-gray-700">Student Email</label>
                    <input
                    type="email"
                    placeholder="Enter tutor's email"
                    className="w-full mt-1 pl-11 py-2 border bg-[#E9EBFB] rounded-lg focus:ring focus:ring-blue-300"
                    />
                    <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                        <MdEmail className="text-[#A6A4A4] text-[25px]" />
                    </div>
                  </div>
                  <div className="md:mt-11 lg:mt-11">
                      <button
                      type="submit"
                      className="unbound px-4 py-2 w-[100%] bg-gradient-to-r from-[#6F0AFF] to-[#1D9CD7] text-white rounded-lg hover:opacity-90"
                      >
                        Add Student
                      </button>
                  </div>
              </form>
          </div>

        )}
      </div>
    </div>
  );
};

export default FormModal;
