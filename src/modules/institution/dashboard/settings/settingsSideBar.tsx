import {
  MdSettings,
  MdPerson,
  MdContactSupport,
  MdDelete,
  MdChevronRight,
} from "react-icons/md";
import { FaRev } from "react-icons/fa";
import ev from "../../../../assets/ev.png";
import { uploadImage } from "../../../../helpers";
import { useEffect, useRef, useState } from "react";
import {
  getGeneralUserDetails,
  updateGeneralUserPhoto,
} from "../../../../api/general";
import { BeatLoader } from "react-spinners";
import { BiSolidEdit } from "react-icons/bi";

interface User {
  name: string;
  email: string;
  photo: string;
}

interface MyComponentProps {
  user: User;
  handleSetForms: (formName: string) => void;
  forms: string;
}

const SettingsSideBar: React.FC<MyComponentProps> = ({
  user,
  handleSetForms,
  forms,
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

  return (
    <aside className="bg-white shadow-sm rounded-[20px] px-1 md:p-4 lg:p-4">
      {/* Profile Card */}
      <div className="flex flex-col items-center border-b pb-4 mb-4">
        <div className="relative">
          <BiSolidEdit
            size={25}
            className=" absolute top-2 right-2  cursor-pointer"
            onClick={() => photoInputRef.current?.click()}
          />
          {loading || isLoading ? (
            <BeatLoader />
          ) : (
            <img
              src={`${
                photo
                  ? photo
                  : "https://res.cloudinary.com/do2kojulq/image/upload/v1730286484/default_user_mws5jk.jpg"
              }
                `}
              alt="img"
              className="w-[155.38px] h-[156.47px]"
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
        <h2 className="unbound text-lg font-semibold my-2">{userData?.name}</h2>
        <p className="text-sm text-gray-500 capitalize">{userData?.accountType} Account</p>
        <div className="flex text-center my-3 bg-white shadow-sm">
          <img src={ev} width="25px" alt="img" />
          <p>4</p>
        </div>
        <div className="flex gap-3 mt-4">
          <div className="text-center bg-[#E0C8FF] p-2 w-[70px] h-[70px] md:w-[65px] lg:w-[70px] xl:w-[92px] md:h-[75px] lg:h-[75px] rounded-md">
            <p className="text-xl font-bold text-[#710AFC]">100</p>
            <p className="text-xs text-[#710AFC] mt-1">Student</p>
          </div>
          <div className="text-center bg-[#E0C8FF] p-2 w-[70px] h-[70px] md:w-[65px] lg:w-[70px] md:h-[75px] lg:h-[75px] xl:w-[92px] rounded-md">
            <p className="text-xl font-bold text-[#710AFC]">100</p>
            <p className="text-xs text-[#710AFC] mt-1">Courses</p>
          </div>
          <div className="text-center bg-[#E0C8FF] p-2 w-[70px] h-[70px] md:w-[65px] lg:w-[70px] md:h-[75px] lg:h-[75px] c rounded-md ">
            <p className="text-xl font-bold text-[#710AFC]">100</p>
            <p className="text-xs text-[#710AFC] mt-1">Assets</p>
          </div>
        </div>
      </div>

      {/* Sidebar Menu (example placeholders) */}
      <nav className="space-y-2 cursor-pointer">
        <ul>
          <li
            className={`block flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-m ${
              forms === "account-setting" &&
              "bg-[#E9EAFE] border-l-4 border-[#6F0AFF]"
            }`}
            onClick={() => handleSetForms("account-setting")}
          >
            <MdPerson className="text-[#710AFC] bg-[#E0C8FF] w-[51px] h-[47px] p-2 rounded-[10px]" />
            <span className="ml-4 flex items-center justify-between w-[70%]">
              <p>Account Info</p>
              <MdChevronRight />
            </span>
          </li>
          <li
            className={`block flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md ${
              forms === "ev_token" && "bg-[#E9EAFE] border-l-4 border-[#6F0AFF]"
            }`}
            onClick={() => handleSetForms("ev_token")}
          >
            <FaRev className="text-[#710AFC] bg-[#E0C8FF] w-[51px] h-[47px] p-2 rounded-[10px]" />
            <span className="ml-4 flex items-center justify-between w-[70%]">
              <p>EV Token</p>
              <MdChevronRight />
            </span>
          </li>
          <li
            className={`block flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md ${
              forms === "sub-setting" &&
              "bg-[#E9EAFE] border-l-4 border-[#6F0AFF]"
            }`}
            onClick={() => handleSetForms("sub-setting")}
          >
            <MdSettings className="text-[#710AFC] bg-[#E0C8FF] w-[51px] h-[47px] p-2 rounded-[10px]" />
            <span className="ml-4 flex items-center justify-between w-[70%]">
              <p>Settings</p>
              <MdChevronRight />
            </span>
          </li>
          <li
            className={`block flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md ${
              forms === "support" && "bg-[#E9EAFE] border-l-4 border-[#6F0AFF]"
            }`}
            onClick={() => handleSetForms("support")}
          >
            <MdContactSupport className="text-[#710AFC] bg-[#E0C8FF] w-[51px] h-[47px] p-2 rounded-[10px]" />
            <span className="ml-4 flex items-center justify-between w-[70%]">
              <p>Support</p>
              <MdChevronRight />
            </span>
          </li>
          <li className="block flex items-center px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md">
            <MdDelete className="text-[#710AFC] bg-[#E0C8FF] w-[51px] h-[47px] p-2 rounded-[10px]" />
            <span className="ml-4 flex items-center justify-between w-[70%]">
              <p>Delete Account</p>
              <MdChevronRight />
            </span>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default SettingsSideBar;
