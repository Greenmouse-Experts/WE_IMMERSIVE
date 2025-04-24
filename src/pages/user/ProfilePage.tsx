import { useState } from "react";
import ProfileSidebar from "../../modules/user/Profile/ProfileSidebar";
import ProfileHeader from "../../modules/user/Profile/ProfileHeader";
import ProfileForm from "../../modules/user/Profile/ProfileForm";
import { Settings , Support } from "../../modules/user/Profile/Settings";
import Navbar from "../../layout/user/components/navbar";

const Setting = () => {
    const [activeSection, setActiveSection] = useState("info");
    const [settingsTab, setSettingsTab] = useState("reset-password");

    return (
        <>
            {/* Navbar */}
            <div className="mx-auto">
                <Navbar />
            </div>

            {/* Main Content */}
            <div className="min-h-screen flex flex-col items-center relative">
                <ProfileHeader />

                <div className="flex flex-col xl:flex-row gap-6 px-6 mt-[-80px] w-full relative z-10">
                    {/* Sidebar */}
                    <ProfileSidebar setActiveSection={setActiveSection} activeSection={activeSection} />

                    {/* Dynamic Content Section */}
                    <div className="flex-1 bg-white dark:bg-darkMode p-6 rounded-lg">
                        {activeSection === "info" && <ProfileForm />}
                        {activeSection === "settings" && <Settings settingsTab={settingsTab} setSettingsTab={setSettingsTab} />}
                        {activeSection === "support" && <Support />}
                        {activeSection === "delete-account" && (
                            <div className="text-red-600 font-semibold">Delete Account Section (Dummy)</div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Setting;
