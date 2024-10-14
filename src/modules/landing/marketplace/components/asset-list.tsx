import { FC } from "react";
import { IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  data: { name: string; image: string; creator: string; rating: string }[];
}
const AssetList: FC<Props> = ({ name, data }) => {
  const arrayStar = new Array(5).fill("");
  return (
    <div>
      <div className="flex items-center justify-between">
        <p className="unbound fw-500 text-white">{name}</p>
        <Link to={""} className="text-[#5E2AF7] fs-500 underline">
          See More
        </Link>
      </div>
      <div className="mt-6">
        <div className="grid lg:grid-cols-4 gap-4 lg:gap-6">
          {data.map((item) => (
            <div>
              <img src={item.image} alt="image-banner" />
              <div className="mt-4">
                <p className="text-white">{item.name}</p>
                {item.creator && (
                  <p className="text-[#696767] fs-500">{item.creator}</p>
                )}
              </div>
              {item.rating && (
                <div className="flex gap-x-3 pt-1">
                  {arrayStar.map((_, index) => (
                    <IoStar className="text-[#FFD154] text-[17px]" key={index}/>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssetList;
