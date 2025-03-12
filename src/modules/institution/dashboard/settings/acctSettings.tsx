import { useState } from 'react';
import { MdPerson, MdEmail, MdLocationPin } from "react-icons/md";
import { TbBuildingSkyscraper } from "react-icons/tb";
import { GrUserManager } from "react-icons/gr";
import InstitutionInfoForm from './InstitutionInfoForm';

const AcctSettings = () => {

const [activeTab, setActiveTab] = useState<'organisation' | 'admin'>(
    'organisation'
);


  return (
    <div className="min-h-screen w-[100%]">
      <main className="px-0 bg-white rounded-[20px] md:px-2 xl:px-4 md:py-2 xl:py-8">
    
        <section className="w-[100%]">
          {/* Settings Tabs */}
          <div className="shadow-sm rounded-md p-2 md:p-3 xl:p-8">
            <p className='unbound text-[16px] font-[400] mb-5'>Settings</p>
            <div className="flex gap-4 border-b pb-2 mb-4">
              <button
                onClick={() => setActiveTab('organisation')}
                className={`pb-2 text-[14px] xl:text-[18px] font-[400] cursor-pointer ${
                  activeTab === 'organisation'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500'
                }`}
              >
                Organisation Info
              </button>
              <button
                onClick={() => setActiveTab('admin')}
                className={`pb-2 text-[14px] xl:text-[18px] font-[400] cursor-pointer ${
                  activeTab === 'admin'
                    ? 'text-blue-600 border-b-2 border-blue-600'
                    : 'text-gray-500'
                }`}
              >
                Admin Info
              </button>
            </div>

            {/* Tab Content */}
            {activeTab === 'organisation' && (
             <InstitutionInfoForm/>
            )}

            {activeTab === 'admin' && (
              <div className="space-y-4">
         
                {/* Example input */}
                <div className='mt-11'>
                  <label
                    htmlFor="adminField"
                    className="block text-[14px] xl:text-[18px] font-[400] text-gray-700 mb-5"
                  >
                    Admin Full Name
                  </label>
                  <input
                    id="adminField"
                    name="adminField"
                    placeholder='Full name'
                    type="text"
                    className="w-full text-[14px] bg-[#E9EBFB] border border-gray-300 rounded-[10px] pl-11 py-3 focus:outline-none focus:border-blue-500"
                  />
                  <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                      <MdPerson className="text-[#A6A4A4] text-[25px]" />
                   </div>
                </div>

                <div className='pt-[1%]'>
                  <label
                    htmlFor="adminField"
                    className="block text-[14px] xl:text-[18px] font-[400] text-gray-700 mb-5"
                  >
                    Job TItle
                  </label>
                  <input
                    id="adminField"
                    name="adminField"
                    placeholder='Manager'
                    type="text"
                    className="w-full text-[14px] bg-[#E9EBFB] border border-gray-300 rounded-[10px] pl-11 py-3 focus:outline-none focus:border-blue-500"
                  />
                  <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                      <GrUserManager className="text-[#A6A4A4] text-[25px]" />
                   </div>
                </div>

                <div className='pt-[1%] pb-[5%]'>
                  <label
                    htmlFor="adminField"
                    className="block text-[14px] xl:text-[18px] font-[400] text-gray-700 mb-5"
                  >
                    Admin Email
                  </label>
                  <input
                    id="adminField"
                    name="adminField"
                    placeholder='testmail@gmail.com'
                    type="text"
                    className="w-full text-[14px] bg-[#E9EBFB] border border-gray-300 rounded-[10px] pl-11 py-3 focus:outline-none focus:border-blue-500"
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

export default AcctSettings;