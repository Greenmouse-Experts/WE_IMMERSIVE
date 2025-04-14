import { GrLocation } from "react-icons/gr";
import { dateFormat } from "../../../../helpers/dateHelper";
import { useNavigate } from "react-router-dom";
import Button from "../../../../components/ui/Button";

const JobItemPublic = ({ item }: any) => {
  const navigate = useNavigate();

  return (
    <div
      className="form-shadow rounded-[30px] p-6 dark:bg-[#15171E] h-full"
      style={{ alignSelf: "flex-start" }} // Ensure the card doesn't stretch in a flex container
    >
      <div className="flex items-center gap-3">
        <img
          src={`${item.logo}`}
          className="rounded-full w-[106px] h-[106px] border border-[#C4C4C4] object-cover"
          alt=""
        />
        <div>
          <p className="text-sm text-[#696767]">{item.company}</p>
          <p className="unbound fw-400 dark:text-white text-lg">{item.title}</p>
          <p className="text-lg text-[#6F0AFF] dark:!text-[#6F0AFF] flex items-center gap-1 capitalize">
            <GrLocation size={18} />
            {item.workplaceType}
          </p>
        </div>
      </div>

      {item?.description && (
        <div
          className="text-sm text-gray-700 leading-loose"
          dangerouslySetInnerHTML={{ __html: item?.description.slice(0, 200) }}
        ></div>
      )}

      <div className="mt-7">
        <p className="text-[#1D9CD7] dark:!text-[#1D9CD7] capitalize">
          {item.jobType}
        </p>

        <div className="flex items-center justify-between py-4 border-t-[2px] border-[#C4C4C4] mt-4">
          <p className="text-[#676767]">
            Posted: {dateFormat(item?.createdAt, "dd MMMM yyyy")}
          </p>
        </div>

        <div className="mt-3">
          <Button
            size={14}
            onClick={() => navigate(`/jobs/view/${item.id}`)}
            title="View Job"
            altClassName="btn-primary px-2 py-1 flex flex-grow whitespace-nowrap"
          />
        </div>
      </div>
    
    </div>
  );
};

export default JobItemPublic;
