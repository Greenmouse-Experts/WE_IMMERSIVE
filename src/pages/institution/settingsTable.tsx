import { useState } from "react";
import SettingHeader from "../../modules/institution/dashboard/settings/settingHeader";
import AcctSettings from "../../modules/institution/dashboard/settings/acctSettings";
import SettingsSideBar from "../../modules/institution/dashboard/settings/settingsSideBar";
import { useSelector } from "react-redux";
import SubSetting from "../../modules/institution/dashboard/settings/subSetting";
import Support from "../../modules/institution/dashboard/settings/support";
import { FaAlignLeft } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";

const SettingsTable = () => {
  const [ forms, setForms ] = useState("account-setting");
  const [ sideBar, setSideBar ] = useState(false);
  const user = useSelector((state: any) => state.userData.data);

  const handleSetForms = (formName: string) => {
      setForms(formName)
  }

  const handleSideBar = () => {
    setSideBar(!sideBar)
  }

  return (
    <div>
      <div>
        <SettingHeader user={user}/>
      </div>
      <div className='absolute right-5  top-[35%] md:hidden lg:hidden cursor-pointer'>
        {
          !sideBar ? <FaAlignLeft className="text-[18px]" onClick={() => handleSideBar()}/> : <MdOutlineCancel className="text-[25px]" onClick={() => handleSideBar()}/>
        }
      </div>
      <div className="flex justify-evenly md:gap-1 lg:gap-0">
        <div className={`absolute md:static lg:static ${!sideBar ? "-left-[250px] transition-all duration-300 z-40" : "-left-0 transition-all duration-300 z-40 shadow-xl" }`}>
          <SettingsSideBar user={user} handleSetForms={handleSetForms}/>
        </div>
        <div className="w-[100%] mt-5 md:mt-0 lg:mt-0 md:w-[68%] lg:w-[68%]">
          {
            forms === "account-setting" ? <AcctSettings/> 
            : 
            forms === "ev_token" ? <h1>EV TOKEN</h1> 
            : 
            forms === "sub-setting" ? <SubSetting/> 
            : 
            forms === "support" ? <Support/> : "" 
          }
         
        </div>
      </div>
        
    </div>
  )
}

export default SettingsTable;