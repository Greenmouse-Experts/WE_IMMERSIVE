import { IoLocationOutline } from "react-icons/io5";
import { IJob } from "../../../../types/job.types";

const JobCard: React.FC<IJob> = ({
  logo,
  title,
  company,
  location,
  description,
}) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-2 md:p-3 lg:p-3 xl:p-8 border border-gray-200">
      <div className="flex flex-col md:flex-row lg:flex-row items-center gap-3 mb-3">
        <img
          src={logo}
          alt="Company Logo"
          className="w-[106px] h-[106px] rounded-full"
        />
        <div className="text-center md:text-left lg:text-left">
          <p className="text-[13px] font-[500] text-[#696767]">{company}</p>
          <h3 className="unbound font-[400] text-[16px] lg:text-[14px] xl:text-[20px] my-1">
            {title}
          </h3>
          <div className="flex items-center justify-center md:justify-start lg:justify-start text-[16px] font-[400] text-[#6F0AFF]">
            <IoLocationOutline /> <p className="ml-2">{location}</p>
          </div>
        </div>
      </div>
      {/* <p className="mulish text-[14px] text-center md:text-left lg:text-left my-4 md:my-6 lg:my-6 md:text-justify">{description}</p> */}
      {description && (
        <div
          className="text-sm text-gray-700 leading-loose"
          dangerouslySetInnerHTML={{ __html: description.slice(0, 200) }}
        ></div>
      )}
      <div className="flex flex-wrap gap-0 lg:gap-1 xl:gap-2 mb-4">
        {/* {tags?.map((tag, index) => (
            <span key={index} className="flex items-center text-xs px-1 lg:px-3 py-1 rounded-full text-[#1D9CD7]">
              <GiCheckMark className="mr-1"/>
              {tag}
            </span>
          ))} */}
      </div>
      <hr className="border-t-2 border-gray-400 border-dashed my-5 md:my-3 xl:my-11"></hr>
      <div className="flex justify-between gap-1 md:gap-4 lg:gap-4">
        <button className="unbound px-4 py-2 w-[292px] border border-[#BDBDBD] text-[#7B7B7B] rounded-md text-[10px] lg:text-[12px] xl:text-[13px]">
          See Details »
        </button>
        <button className="unbound px-4 py-2 w-[292px] border border-[#BDBDBD] text-[#7B7B7B] rounded-md text-[10px] lg:text-[12px] xl:text-[13px]">
          See Bids (10) »
        </button>
      </div>
    </div>
  );
};

export default JobCard;
