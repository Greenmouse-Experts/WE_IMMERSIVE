
import React, { useState } from 'react';
import { MdPerson, MdEmail, MdLocationPin } from "react-icons/md";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { GrUserManager } from "react-icons/gr";

interface InstitutionFormData {
    name: string;
    email: string;
    phone: string;
    industry: string;
    size: string;
    location: string;
  }
const SubSetting = () => {

const [activeTab, setActiveTab] = useState<'reset-password' | 'bank-details' | "notification-settings">(
    'reset-password'
);

const [formData, setFormData] = useState<InstitutionFormData>({
    name: 'GreenMouse',
    email: 'testmail@gmail.com',
    phone: 'Enter your phone number',
    industry: 'Architecture',
    size: '10-20',
    location: 'Lagos, Nigeria',
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform update logic here (e.g., API call)
    alert('Info updated!');
  };

  return (
    <div className="min-h-screen w-[100%]">
      {/* header Section */}
      {/* <SettingHeader user={user}/> */}

      {/* Main Content */}
      <main className="px-0 bg-white rounded-[20px] md:px-4 lg:px-4 py-8 flex flex-col md:flex-row gap-6">
        {/* Left Sidebar */}
        {/* <SettingsSideBar user={user}/> */}
        {/* Right Content */}
        <section className="w-[100%]">
          {/* Settings Tabs */}
          <div className="shadow-sm rounded-md p-2 md:p-8 lg:p-8">
            <p className='unbound text-[16px] font-[400] mb-5'>Settings</p>
            <div className="flex gap-11 border-b pb-2 mb-4">
              <button
                onClick={() => setActiveTab('reset-password')}
                className={`pb-2 text-[13px] lg:text-[18px] font-[400] cursor-pointer ${
                  activeTab === 'reset-password'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500'
                }`}
              >
                Reset Password
              </button>
              <button
                onClick={() => setActiveTab('bank-details')}
                className={`pb-2 md:text-[13px] lg:text-[18px] font-[400] cursor-pointer${
                  activeTab === 'bank-details'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500'
                }`}
              >
                Bank Details
              </button>
              <button
                onClick={() => setActiveTab("notification-settings")}
                className={`pb-2 md:text-[13px] lg:text-[18px] font-[400] cursor-pointer${
                  activeTab === "notification-settings"
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500'
                }`}
              >
                Notification Settings
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'reset-password' && (
              <form className="space-y-4" onSubmit={handleSubmit}>

                <div className='pt-4 md:pt-8 lg:pt-8'>
                  <label
                    htmlFor="location"
                    className="Mulish block text-[18px] mb-2 font-[400] text-gray-700"
                  >
                    Old Password
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder='Enter current passwoord'
                    onChange={handleInputChange}
                    className="mt-1 w-full bg-[#E9EBFB] pl-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                        <MdLocationPin className="text-[#A6A4A4] text-[25px]" />
                   </div>
                </div>

                <div className='lg:flex items-center justify-between pt-4'>
                  <div className='w-[100%] lg:w-[48%]'>
                    <label
                        htmlFor="name"
                        className="Mulish block text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        New Password
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder='Enter new password'
                        onChange={handleInputChange}
                        className="mt-1 w-full bg-[#E9EBFB] pl-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                        <TbBuildingSkyscraper className="text-[#A6A4A4] text-[25px]" />
                    </div>
                  </div>
            
                  <div className='w-[100%] lg:w-[48%] pt-3 lg:pt-0'>
                    <label
                        htmlFor="email"
                        className="Mulish block text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        Re-Enter New Password
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='re-enter new password'
                        onChange={handleInputChange}
                        className="mt-1 w-full bg-[#E9EBFB] pl-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                        <MdEmail className="text-[#A6A4A4] text-[25px]" />
                    </div>
                  </div>
                </div>

                <button
                    type="button"
                    className="unbound bg-gradient-to-r from-[#5f27f7] to-[#268cdb] text-white font-[500]
                            px-4 py-2 md:text-[13px] rounded-md shadow-md transition-colors w-[100%] lg:w-[350px] h-[50px]"
                >
                    Reset Password
                </button>
              </form>
            )}

            {activeTab === 'bank-details' && (
              <div className="space-y-4">
         
                {/* Example input */}

                <div className='lg:flex items-center justify-between pt-4'>
                  <div className='w-[100%] lg:w-[48%]'>
                    <label
                        htmlFor="name"
                        className="Mulish block text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        Account Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder='Enter account name'
                        onChange={handleInputChange}
                        className="mt-1 w-full bg-[#E9EBFB] pl-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                        <TbBuildingSkyscraper className="text-[#A6A4A4] text-[25px]" />
                    </div>
                  </div>
            
                  <div className='w-[100%] lg:w-[48%] pt-3 lg:pt-0'>
                    <label
                        htmlFor="email"
                        className="Mulish block text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        Bank Name
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='Enter bank name'
                        onChange={handleInputChange}
                        className="mt-1 w-full bg-[#E9EBFB] pl-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                        <MdEmail className="text-[#A6A4A4] text-[25px]" />
                    </div>
                  </div>
                </div>

                <div className='lg:flex items-center justify-between pt-4'>
                  <div className='w-[100%] lg:w-[48%]'>
                    <label
                        htmlFor="name"
                        className="Mulish block text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        Account Number
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder='Enter account number'
                        onChange={handleInputChange}
                        className="mt-1 w-full bg-[#E9EBFB] pl-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                        <TbBuildingSkyscraper className="text-[#A6A4A4] text-[25px]" />
                    </div>
                  </div>
            
                  <div className='w-[100%] lg:w-[48%] pt-3 lg:pt-0'>
                    <label
                        htmlFor="email"
                        className="Mulish block text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        Card Number
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='Enter card number'
                        onChange={handleInputChange}
                        className="mt-1 w-full bg-[#E9EBFB] pl-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                        <MdEmail className="text-[#A6A4A4] text-[25px]" />
                    </div>
                  </div>
                </div>

                <div className='lg:flex items-center justify-between pt-4'>
                  <div className='w-[100%] lg:w-[48%]'>
                    <label
                        htmlFor="name"
                        className="Mulish block text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        Expiry Date
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder='mm/yy'
                        onChange={handleInputChange}
                        className="mt-1 w-full bg-[#E9EBFB] pl-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                        <TbBuildingSkyscraper className="text-[#A6A4A4] text-[25px]" />
                    </div>
                  </div>
            
                  <div className='w-[100%] lg:w-[48%] pt-3 lg:pt-0'>
                    <label
                        htmlFor="email"
                        className="Mulish block text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        CVV
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='Enter your cvv'
                        onChange={handleInputChange}
                        className="mt-1 w-full bg-[#E9EBFB] pl-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                        <MdEmail className="text-[#A6A4A4] text-[25px]" />
                    </div>
                  </div>
                </div>

                <button
                    type="button"
                    className="unbound bg-gradient-to-r from-[#5f27f7] to-[#268cdb] text-white font-[500]
                            px-4 py-2 md:text-[13px] rounded-md shadow-md transition-colors w-[100%] lg:w-[350px] h-[50px]"
                >
                     Add Bank Details 
                </button>
              </div>
            )}

            {activeTab === 'notification-settings' && (
              <div className="space-y-4">
         
                {/* Example input */}
                <div className='mt-11'>
                  <label
                    htmlFor="adminField"
                    className="block text-[18px] font-[400] text-gray-700 mb-5"
                  >
                    Admin Full Name
                  </label>
                  <input
                    id="adminField"
                    name="adminField"
                    placeholder='Full name'
                    type="text"
                    className="w-full bg-[#E9EBFB] border border-gray-300 rounded-[10px] pl-11 py-3 focus:outline-none focus:border-blue-500"
                  />
                  <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                      <MdPerson className="text-[#A6A4A4] text-[25px]" />
                   </div>
                </div>

                <div className='pt-[1%]'>
                  <label
                    htmlFor="adminField"
                    className="block text-[18px] font-[400] text-gray-700 mb-5"
                  >
                    Job TItle
                  </label>
                  <input
                    id="adminField"
                    name="adminField"
                    placeholder='Manager'
                    type="text"
                    className="w-full bg-[#E9EBFB] border border-gray-300 rounded-[10px] pl-11 py-3 focus:outline-none focus:border-blue-500"
                  />
                  <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                      <GrUserManager className="text-[#A6A4A4] text-[25px]" />
                   </div>
                </div>

                <div className='pt-[1%] pb-[5%]'>
                  <label
                    htmlFor="adminField"
                    className="block text-[18px] font-[400] text-gray-700 mb-5"
                  >
                    Admin Email
                  </label>
                  <input
                    id="adminField"
                    name="adminField"
                    placeholder='testmail@gmail.com'
                    type="text"
                    className="w-full bg-[#E9EBFB] border border-gray-300 rounded-[10px] pl-11 py-3 focus:outline-none focus:border-blue-500"
                  />
                  <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                    <MdEmail className="text-[#A6A4A4] text-[25px]" />
                  </div>
                </div>
                <button
                    type="button"
                    className="unbound bg-gradient-to-r from-[#5f27f7] to-[#268cdb] text-white font-[500]
                            px-4 py-2 md:text-[13px] rounded-md shadow-md transition-colors w-[100%] lg:w-[350px] h-[50px]"
                >
                     Save Admin Settings
                </button>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  )
}

export default SubSetting;






