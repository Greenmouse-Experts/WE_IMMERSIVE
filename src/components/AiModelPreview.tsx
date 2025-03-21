import { useNavigate } from "react-router-dom";
import { IMeshiResponse } from "../types/meshy.types";
import { FaInfo } from "react-icons/fa6";
import { IoEyeOutline } from "react-icons/io5";
import { LiaTimesSolid } from "react-icons/lia";

interface IAiModelPreviewProps {
  model?: IMeshiResponse;
  handleOpenModal: () => void;
}

const AiModelPreview = ({ model, handleOpenModal }: IAiModelPreviewProps) => {
  const navigate = useNavigate();
  const handleDownload = () => {
    const downloadUrl = model?.model_urls.glb;
    if (downloadUrl) {
      window.open(downloadUrl, "_blank");
      navigate("");
    } else {
      console.error("Download URL is missing");
    }
  };
  return (
    <div className="p-10 text-black relative">
      <div onClick={handleOpenModal} className="h-8 w-8 bg-[#D9D9D9] rounded-full justify-center flex items-center absolute right-5 top-4 cursor-pointer">
        <LiaTimesSolid className="text-primary" />
      </div>
      <div className="mb-8">
        <p className="text-base fw-600 text-[#06052A]">MODEL PREVIEW</p>
      </div>
      <div className="bg-[#D9D9D9] flex justify-center ">
        <img src={model?.thumbnail_url} alt="" className="h-[300px]" />
        <a
          href={model?.thumbnail_url}
          target="_blank"
          rel="noopener noreferrer"
          className=""
        >
          <IoEyeOutline size={30} />
        </a>
      </div>
      <div className=" mt-5">
        {/* <Button
          style={{ width: "243px" }}
          title="Proceed"
          withArrows
          size={14}
          onClick={() => navigate(`with-ai?type=${queryParams}`)}
          // width={243}
          // disabled={!isValid}
          // altClassName="btn-primary px-10 py-2 whitespace-nowrap"
        /> */}
        <button
          onClick={handleDownload}
          type="button"
          className="btn-primary text-xs unbound fw-500 w-full h-10"
        >
          Download
        </button>
        <div className="flex items-center gap-4 mt-4">
          <div className="h-8 w-8 bg-[#D9D9D9] rounded-full justify-center flex items-center">
            <FaInfo className="text-primary" />
          </div>
          <p className="fw-600 ">
            Download model and re-upload on the next page{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AiModelPreview;
