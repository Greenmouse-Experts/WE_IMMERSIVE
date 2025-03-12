import PersonalInfo from "./PersonalInfo";

interface ProfileFormProps {
  settingsTab?: string;
}

const ProfileForm: React.FC<ProfileFormProps> = ({ settingsTab }) => {
  return (
    <div className="rounded-lg w-full">
      {settingsTab ? (
        <>
          <h2 className="text-lg font-semibold mb-4 capitalize">
            {settingsTab.replace("-", " ")}
          </h2>
          {settingsTab === "reset-password" && (
            <div>
              <label className="text-black">New Password</label>
              <input
                type="password"
                className="w-full px-4 py-4 rounded-md mt-4 bg-[#E9EBFB] outline-none"
                placeholder="Enter new password"
              />
              <label className="text-black mt-3">Confirm Password</label>
              <input
                type="password"
                className="w-full px-4 py-4 rounded-md mt-4 bg-[#E9EBFB] outline-none"
                placeholder="Confirm new password"
              />
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                Update Password
              </button>
            </div>
          )}
          {settingsTab === "bank-details" && (
            <div>
              <label className="text-black">Bank Name</label>
              <input
                type="text"
                className="w-full px-4 py-4 rounded-md mt-4 bg-[#E9EBFB] outline-none"
                placeholder="Enter bank name"
              />
              <label className="text-black mt-3">Account Number</label>
              <input
                type="text"
                className="w-full px-4 py-4 rounded-md mt-4 bg-[#E9EBFB] outline-none"
                placeholder="Enter account number"
              />
              <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg">
                Save Bank Details
              </button>
            </div>
          )}
          {settingsTab === "pair-gear" && (
            <div>
              <p className="text-gray-500">Pair Gear section (Dummy Content)</p>
            </div>
          )}
          {settingsTab === "notification-settings" && (
            <div>
              <p className="text-gray-500">
                Notification Settings section (Dummy Content)
              </p>
            </div>
          )}
        </>
      ) : (
        <PersonalInfo/>
      )}
    </div>
  );
};

export default ProfileForm;
