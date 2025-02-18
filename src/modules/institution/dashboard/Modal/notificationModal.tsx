import React from "react";
import { GiCheckMark } from "react-icons/gi";

interface NotificationModalProps {
  userType: string;
  isOpen: boolean;
  onClose: () => void;
}

const NotificationModal: React.FC<NotificationModalProps> = ({userType, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4"
     onClick={onClose}
    >
      <div className="flex flex-col justify-center items-center bg-white w-[510px] h-[487px] p-11 rounded-[15px] shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="items-center justify-center flex w-[107px] h-[100px] bg-[#710AFC33] rounded-[10px] mb-3">
            <GiCheckMark className="text-[#710AFC] text-[50px] font-[500]"/>
        </div>
        <h2 className="unbound text-[20x] font-[500] my-4">
            {userType === "tutor" ? " Tutor Added" : "Request Sent"}
        </h2>
        {
            userType === "tutor" ? (
              <p className="text-[16px] font-[400] text-center px-7 mt-2 mb-7">You have successfully added a tutor to “ Name of Course” Course </p>
            ) : (
              <p className="text-[16px] font-[400] text-center px-7 mt-2 mb-7">We have sent a link to the email of your student, you’ll be notified when they login with the link</p>
            )
        }
        <button
            type="submit"
            className="unbound px-4 py-2 w-[237px] text-[13px] foont-[500] bg-gradient-to-r from-[#6F0AFF] to-[#1D9CD7] text-white rounded-lg hover:opacity-90"
        >
            Okey, Thanks
        </button>
       </div>
    </div>
  );
};

export default NotificationModal;
