import { useState } from "react";
import SettingHeader from "../../modules/institution/dashboard/settings/settingHeader";
import AcctSettings from "../../modules/institution/dashboard/settings/acctSettings";
import SettingsSideBar from "../../modules/institution/dashboard/settings/settingsSideBar";
import { useSelector } from "react-redux";
import SubSetting from "../../modules/institution/dashboard/settings/subSetting";
import Support from "../../modules/institution/dashboard/settings/support";
import { FaAlignLeft } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import KycForm from "../../components/KycForm";

const SettingsTable = () => {
  const [ forms, setForms ] = useState("account-setting");
  const [ sideBar, setSideBar ] = useState(false);
  const user = useSelector((state: any) => state.userData.data);

  const handleSetForms = (formName: string) => {
      setForms(formName)
      setSideBar(!sideBar)
  }

  const handleSideBar = () => {
    setSideBar(!sideBar)
  }

  return (
    <div>
      <div>
        <SettingHeader/>
      </div>
      <div className='absolute right-8 top-[26.3%] md:hidden lg:hidden cursor-pointer'>
        {
          !sideBar ? <FaAlignLeft className="text-[18px]" onClick={() => handleSideBar()}/> : <MdOutlineCancel className="text-[25px]" onClick={() => handleSideBar()}/>
        }
      </div>
      <div className="flex justify-evenly md:gap-1 lg:gap-0">
        <div className={`absolute md:static lg:static md:w-[35%] lg:w-[38%] xl:w-[333px] ${!sideBar ? "-left-[250px] transition-all duration-300 z-40" : "-left-0 transition-all duration-300 z-40 shadow-xl" }`}>
          <SettingsSideBar user={user} handleSetForms={handleSetForms} forms={forms}/>
        </div>
        <div className="w-[100%] mt-5 md:mt-0 lg:mt-0 md:w-[58%] lg:w-[58%]">
          {
            forms === "account-setting" ? <AcctSettings/> 
            : 
            forms === "ev_token" ? <h1>EV TOKEN</h1> 
            : 
            forms === "kyc" ? <KycForm/> 
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