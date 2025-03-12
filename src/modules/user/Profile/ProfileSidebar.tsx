import { useEffect, useRef, useState } from "react";
import { FaUser } from "react-icons/fa";
import {
  MdSettings,
  MdSupport,
  MdDelete,
  MdChevronRight,
  MdElectricBolt,
} from "react-icons/md";
import { uploadImage } from "../../../helpers";
import { BiSolidEdit } from "react-icons/bi";
import { BeatLoader } from "react-spinners";
import { getGeneralUserDetails, updateGeneralUserPhoto } from "../../../api/general";

interface ProfileSidebarProps {
  setActiveSection: (section: string) => void;
  activeSection: string;
}

const ProfileSidebar: React.FC<ProfileSidebarProps> = ({
  setActiveSection,
  activeSection,
}) => {
  const { data: userData, isLoading } = getGeneralUserDetails();
  const [photo, setPhoto] = useState<string | null>(userData?.photo || null);
  const [error, setError] = useState<string | null>(null);
  const photoInputRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);
  const { mutate: updatePhoto, isPending } = updateGeneralUserPhoto();
  const handlePhotoChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLoading(true);
    setError(null);

    const file = event.target.files?.[0];
    if (!file) {
      setLoading(false);
      return;
    }

    const result = await uploadImage(file);
    setLoading(false);

    if (result.isSuccess) {
      setPhoto(result.fileUrl);
      updatePhoto({
        photo: result.fileUrl,
      });
    } else {
      setError("Thumbnail upload failed.");
    }
  };

  useEffect(() => {
    setPhoto(userData?.photo);
  }, [userData]);

  // const openFilePicker = (inputRef: React.RefObject<HTMLInputElement>) => {
  //   if (inputRef.current) {
  //     inputRef.current.click();
  //   }
  // };
  return (
    <div className="w-full md:w-1/4 bg-white rounded-lg p-6">
      <p className="unbound text-[#06052A] text-lg text-left">Profile</p>
      <div className="flex flex-col items-center w-full">
        <div className="relative">
          <BiSolidEdit
            size={25}
            className=" absolute top-2 right-2  cursor-pointer"
            onClick={() => photoInputRef.current?.click()}
          />
          {loading ? (
            <BeatLoader />
          ) : (
            <img
              src={
                photo
                  ? photo
                  : "https://res.cloudinary.com/do2kojulq/image/upload/v1730286484/default_user_mws5jk.jpg"
              }
              alt="User Avatar"
              className="w-24 h-24 rounded-full border-4 border-white shadow-lg"
            />
          )}
           <p className="text-xs">{error}</p>
          <input
            type="file"
            ref={photoInputRef}
            onChange={handlePhotoChange}
            accept="image/*"
            className="hidden"
            disabled={isPending}
          />
        </div>
        <h3 className="text-xl font-semibold mt-3 leading-loose">{userData?.name}</h3>
        <p className="text-gray-600 text-sm capitalize">{userData?.accountType} Account</p>

        <div className="flex justify-center gap-3 mt-4">
          <div className="text-center bg-[#E0C8FF] px-2 py-2 rounded-lg w-20">
            <span className="block text-lg font-semibold text-[#710AFC]">
              100
            </span>
            <span className="text-[#710AFC] text-xs">Following</span>
          </div>
          <div className="text-center bg-[#E0C8FF] px-2 py-2 rounded-lg w-20">
            <span className="block text-lg font-semibold text-[#710AFC]">
              100
            </span>
            <span className="text-[#710AFC] text-xs">Likes</span>
          </div>
          <div className="text-center bg-[#E0C8FF] px-2 py-2 rounded-lg w-20">
            <span className="block text-lg font-semibold text-[#710AFC]">
              100
            </span>
            <span className="text-[#710AFC] text-xs">Purchased</span>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        {[
          { key: "info", label: "Personal Info", icon: <FaUser /> },
          { key: "settings", label: "Settings", icon: <MdSettings /> },
          { key: "support", label: "Support", icon: <MdSupport /> },
          { key: "ev-token", label: "EV Token", icon: <MdElectricBolt /> },
          { key: "likes", label: "Likes", icon: <MdSettings /> },
          {
            key: "delete-account",
            label: "Delete Account",
            icon: <MdDelete />,
            danger: true,
          },
        ].map(({ key, label, icon, danger }) => (
          <button
            key={key}
            onClick={() => setActiveSection(key)}
            className={`flex items-center justify-between w-full px-4 py-4 rounded transition text-sm font-medium ${
              activeSection === key
                ? "active-class text-purple-600"
                : danger
                ? "text-red-600 hover:bg-red-100"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <div className="flex items-center gap-3">
              {icon} {label}
            </div>
            <MdChevronRight className="text-gray-500" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProfileSidebar;
