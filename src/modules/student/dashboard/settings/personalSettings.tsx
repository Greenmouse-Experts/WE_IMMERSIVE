import { MdEmail } from "react-icons/md";
import { HiIdentification } from "react-icons/hi2";
import { TbBuildingSkyscraper } from "react-icons/tb";

const PersonalSettings = () => {


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
            <p className='unbound text-[16px] font-[400] mb-5'>Personal Info</p>

            {/* Tab Content */}
              <form className="space-y-4">
                <div className='lg:flex items-center justify-between mt-8'>
                  <div className='w-[100%] lg:w-[48%]'>
                    <label
                        htmlFor="name"
                        className="Mulish block text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder='Full name'
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
                        Email
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='Email'
                        className="mt-1 w-full bg-[#E9EBFB] pl-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                        <MdEmail className="text-[#A6A4A4] text-[25px]" />
                    </div>
                  </div>
                </div>

                <div className='lg:flex items-center justify-between pt-0 lg:pt-1'>
                  <div className='w-[100%] lg:w-[48%]'>
                    <label
                        htmlFor="name"
                        className="Mulish block text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        Phone Number
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder='Phone number'
                        className="mt-1 w-full bg-[#E9EBFB] px-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
            
                  <div className='w-[100%] lg:w-[48%] mt-10 md:mt-0 lg:mt-0'>
                    <label
                        htmlFor="name"
                        className="Mulish block text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        Date Of Birth
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="date"
                        placeholder='Phone number'
                        className="mt-1 w-full bg-[#E9EBFB] px-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className='lg:flex items-center justify-between lg:pt-8 pb-11'>
                  <div className='w-[100%] lg:w-[48%] mb-5 mt-10 md:mt-0 lg:mt-0'>
                    <label
                        htmlFor="educational level"
                        className="Mulish block text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        Educational Level
                    </label>
                    <select
                        id="industry"
                        name="industry"
                        className="mt-1 w-full bg-[#E9EBFB] px-2 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    >
                        <option>Architecture</option>
                        <option>Education</option>
                        <option>Technology</option>
                        <option>Healthcare</option>
                    </select>
                  </div>

          
                  <div className='w-[100%] lg:w-[48%] mt-10 md:mt-0 lg:mt-0'>
                    <label
                        htmlFor="school_id"
                        className="Mulish block text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        School ID
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder='School ID'
                        className="mt-1 w-full bg-[#E9EBFB] pl-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                        <HiIdentification className="text-[#A6A4A4] text-[25px]" />
                    </div>
                  </div>
                </div>

                <button
                    type="button"
                    className="unbound bg-gradient-to-r from-[#5f27f7] to-[#268cdb] text-white font-[500]
                            px-4 py-2 md:text-[13px] rounded-md shadow-md transition-colors w-[100%] lg:w-[350px] h-[50px]"
                >
                    Update Info
                </button>
              </form>
          </div>
        </section>
      </main>
    </div>
  )
}

export default PersonalSettings;