interface SettingsProps {
  settingsTab: string;
  setSettingsTab: (tab: string) => void;
}

const Settings: React.FC<SettingsProps> = ({ settingsTab, setSettingsTab }) => {
  return (
    <div>
    <h2 className="text-lg font-semibold mb-4">Settings</h2>
  
    {/* Responsive Tab Navigation */}
    <div className="border-b flex flex-wrap gap-4 md:gap-10 justify-between text-center">
      {[
        { key: "reset-password", label: "Reset Password" },
        { key: "bank-details", label: "Bank Details" },
        { key: "pair-gear", label: "Pair Gear" },
        { key: "notification-settings", label: "Notification Settings" },
      ].map(({ key, label }) => (
        <button
          key={key}
          className={`pb-4 px-2 md:px-4 text-sm md:text-base ${
            settingsTab === key
              ? "border-b-2 border-[#1D9CD7] text-[#1D9CD7]"
              : "text-gray-500"
          }`}
          onClick={() => setSettingsTab(key)}
        >
          {label}
        </button>
      ))}
    </div>
  
    {/* Tab Content */}
    <div className="mt-4">
      {settingsTab === "reset-password" && (
        <div>
          <h3 className="text-md font-semibold">Reset Password</h3>
          <input
            type="password"
            placeholder="Enter current password"
            className="w-full px-4 py-3 rounded-md mt-4 bg-[#E9EBFB] outline-none text-black"
          />
          <input
            type="password"
            placeholder="Enter new password"
            className="w-full px-4 py-3 rounded-md mt-4 bg-[#E9EBFB] outline-none text-black"
          />
          <input
            type="password"
            placeholder="Re-enter new password"
            className="w-full px-4 py-3 rounded-md mt-4 bg-[#E9EBFB] outline-none text-black"
          />
          <button className="mt-4 w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg">
            Reset Password
          </button>
        </div>
      )}
  
      {settingsTab === "bank-details" && (
        <div>
          <label className="text-black">Bank Name</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-md mt-2 bg-[#E9EBFB] outline-none"
            placeholder="Enter bank name"
          />
          <label className="text-black mt-3">Account Number</label>
          <input
            type="text"
            className="w-full px-4 py-3 rounded-md mt-2 bg-[#E9EBFB] outline-none"
            placeholder="Enter account number"
          />
          <button className="mt-4 w-full md:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg">
            Save Bank Details
          </button>
        </div>
      )}
  
      {settingsTab === "pair-gear" && (
        <div className="text-center p-4 bg-gray-100 rounded-lg">Pair Gear Section (Coming Soon)</div>
      )}
  
      {settingsTab === "notification-settings" && (
        <div className="text-center p-4 bg-gray-100 rounded-lg">Notification Settings (Coming Soon)</div>
      )}
    </div>
  </div>
  
  );
};

const Support = () => {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-4">Support</h2>
      <p>If you have any issues, please contact our support team.</p>
      <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
        Contact Support
      </button>
    </div>
  );
};

export { Settings, Support };
