import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

interface AddTutorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const FormModal: React.FC<AddTutorModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [content, setContent] = useState("");

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4 z-50"
     onClick={onClose}
    >
      <div className={`bg-white w-[900px] h-[500px] px-3 pt-11 md:p-11 lg:p-11 rounded-[15px] shadow-lg`}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 className="text-[24px] font-[600] mb-5">Add Text</h1>
        <form>
            <ReactQuill 
              value={content} 
              onChange={setContent} 
              style={{ minHeight: "40vh", backgroundColor:"#E9EBFB"}}
              />
        </form>
      </div>
    </div>
  );
};

export default FormModal;
