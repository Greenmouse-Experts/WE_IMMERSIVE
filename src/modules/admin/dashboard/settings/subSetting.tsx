
import { MdEmail, MdLocationPin } from "react-icons/md";
import { TbBuildingSkyscraper } from "react-icons/tb";

const SubSetting = () => {

  return (
    <div className="min-h-screen w-[100%]">
      <main className="px-0 bg-white rounded-[20px] md:px-4 lg:px-4 py-8 flex flex-col md:flex-row gap-6">
        <section className="w-[100%]">
          <div className="shadow-sm rounded-md p-2 md:p-3 xl:p-8">
            <p className='unbound text-[16px] font-[400] mb-5'>Settings</p>

            {/* Tab Content */}
              <form className="space-y-4">
                <div className='pt-4 md:pt-8 lg:pt-8'>
                  <label
                    htmlFor="location"
                    className="Mulish block text-[14px] xl:text-[18px] mb-2 font-[400] text-gray-700"
                  >
                    Old Password
                  </label>
                  <input
                    id="location"
                    name="location"
                    type="text"
                    placeholder='Enter current passwoord'
                    className="mt-1 text-[14px] w-full bg-[#E9EBFB] pl-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                  />
                  <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                        <MdLocationPin className="text-[#A6A4A4] text-[25px]" />
                   </div>
                </div>

                <div className='xl:flex items-center justify-between xl:pt-4 pb-5'>
                  <div className='w-[100%] xl:w-[48%]'>
                    <label
                        htmlFor="name"
                        className="Mulish block text-[14px] xl:text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        New Password
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder='Enter new password'
                        className="mt-1 text-[14px] w-full bg-[#E9EBFB] pl-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                    />
                    <div className="relative -top-9 flex items-center pl-3 pointer-events-none">
                        <TbBuildingSkyscraper className="text-[#A6A4A4] text-[25px]" />
                    </div>
                  </div>
            
                  <div className='w-[100%] xl:w-[48%] pt-3 lg:pt-0'>
                    <label
                        htmlFor="email"
                        className="Mulish block text-[14px] xl:text-[18px] mb-2 font-[400] text-gray-700"
                    >
                        Re-Enter New Password
                    </label>
                    <input
                        id="email"
                        name="email"
                        type="email"
                        placeholder='re-enter new password'
                        className="mt-1 text-[14px] w-full bg-[#E9EBFB] pl-11 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
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
          </div>
        </section>
      </main>
    </div>
  )
}

export default SubSetting;






