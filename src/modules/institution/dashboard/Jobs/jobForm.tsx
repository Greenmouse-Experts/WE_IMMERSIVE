import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import DropZone from "../../../../components/DropZone";
import ReactQuill from "react-quill";
import { MdCancel } from "react-icons/md";
import { MdClose } from "react-icons/md";

interface activeProps {
  setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
}

const JobForm: React.FC<activeProps> = ({setIsActive}) => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [jobLocation, setJobLocation] = useState("Remote");
  const [employmentType, setEmploymentType] = useState("On Site");
  const [applyMethod, setApplyMethod] = useState("platform");
  const [companyName, setCompanyName] = useState("GreenMouse");
  const [files, setFiles] = useState<string[]>([]);

  const handleDrop = (data: string) => {
    setFiles((prevFiles) => [...prevFiles, data]);
  }

  const handleRemoveImage = (idx: any) => {
    setFiles((prevFile) => prevFile.filter((_, index) => index !== idx));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-2">
    <div className="mx-auto bg-white rounded-[20px] pt-5 md:p-8 lg:p-8">
      <div className="flex items-center justify-between">
        <h2 className="unbound text-[20px] md:text-[24px] lg:text-[24px] text-center md:text-left lg:text-left font-[600]">Post a Job</h2>
        <MdClose className="size-[30px] text-[red] cursor-pointer"
          onClick={() => setIsActive(true)}
        />
      </div>
    
    <form className="w-[100%] md:w-[100%] lg:w-[100%] mx-auto px-2 pb-5 md:p-8 lg:p-8 bg-white rounded-[30px] shadow-md mt-5">
      <label className="block text-[16px] md:text-[18px] lg:text-[18px] text-[#5B5959] font-[400]">Job Title</label>
      <input
        type="text"
        placeholder="eg Senior product designer"
        value={jobTitle}
        onChange={(e) => setJobTitle(e.target.value)}
        className="w-full p-2 border rounded-lg bg-[#E9EBFB] mt-5 mb-6 "
      />

      <label className="block mt-4 text-[16px] md:text-[18px] lg:text-[18px] text-[#5B5959] font-[400]">Job Description</label>
      <ReactQuill value={jobDescription} onChange={setJobDescription} className="mt-5 mb-6 bg-[#E9EBFB]" />

      <label className="block mt-4 text-[16px] md:text-[18px] lg:text-[18px] text-[#5B5959] font-[400]">Job Location</label>
      <select
        value={jobLocation}
        onChange={(e) => setJobLocation(e.target.value)}
        className="w-full p-2 border rounded-lg bg-[#E9EBFB] mt-5 mb-6"
      >
        <option value="Remote">Remote</option>
        <option value="On Site">On Site</option>
      </select>

      <label className="block mt-4 text-[16px] md:text-[18px] lg:text-[18px] text-[#5B5959] font-[400]">Employment Type</label>
      <select
        value={employmentType}
        onChange={(e) => setEmploymentType(e.target.value)}
        className="w-full p-2 border rounded-lg bg-[#E9EBFB] mt-5 mb-6"
      >
        <option value="On Site">On Site</option>
        <option value="Remote">Remote</option>
      </select>

      <label className="block mt-4 text-[16px] md:text-[18px] lg:text-[18px] text-[#5B5959] font-[400]">Where can applicants apply?</label>
      <div className="flex flex-col gap-4 mt-2 mb-6">
        <label className="flex items-center text-[14px] md:text-[18px] lg:text-[18px] text-[#5B5959] font-[400] border border-grey-1 px-3 py-2 rounded-[10px]">
          <input
            type="radio"
            name="applyMethod"
            value="platform"
            checked={applyMethod === "platform"}
            onChange={() => setApplyMethod("platform")}
            className="mr-2"
          />
          Here on WEimmersive platform
        </label>
        <label className="flex items-center text-[14px] md:text-[18px] lg:text-[18px] text-[#5B5959] font-[400] border border-grey-1 px-3 py-2 rounded-[10px]">
          <input
            type="radio"
            name="applyMethod"
            value="external"
            checked={applyMethod === "external"}
            onChange={() => setApplyMethod("external")}
            className="mr-2"
          />
          Enter An External Link
        </label>
      </div>

      <label className="block mt-4 text-[16px] md:text-[18px] lg:text-[18px] text-[#5B5959] font-[400]">Company Name</label>
      <input
        type="text"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
        className="w-full p-2 border rounded-lg bg-[#E9EBFB] mt-5 mb-6"
      />

      <div className="w-full flex flex-col gap-2">
          <div className="flex flex-col w-[100%] md:w-[50%] lg:w-[25%] h-[25vh] gap-6">
              <p className="mt-4 text-[16px] md:text-[18px] lg:text-[18px] text-[#5B5959] font-[400]">
                  Company Logo
              </p>
              <DropZone onUpload={handleDrop} text={'Upload Images of Product'} />
          </div>
          <div className="flex my-4 flex-wrap">
              {files.map((fileObj, index) => (
                  <div key={index} className="relative w-[18%] mr-3 mt-4">
                      <img
                          src={fileObj}
                          alt="preview"
                          className="w-full h-24 object-cover rounded"
                      />
                      <button type="button" className='absolute top-1 right-1 text-[red] text-[20px]' onClick={() => handleRemoveImage(index)}><MdCancel /></button>
                  </div>
              ))}
          </div>
      </div>

      <button className="unbound w-[100%] md:w-[50%] lg:w-[300px] xl-[350px] mt-6 p-3 text-[14px] lg:text-[16px] md:text-[18px] lg:text-[18px] text-white bg-gradient-to-r from-[#6F0AFF] to-[#1D9CD7] rounded-[9px]">
        Post Job »
      </button>
    </form>
   </div>
  </div>
  )
}

export default JobForm;