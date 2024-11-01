import { FC } from "react";
import { IoCaretDown, IoStar } from "react-icons/io5";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  data: { name: string; image: string; creator: string; rating: string }[];
  addFilter?: boolean;
}
const AssetList: FC<Props> = ({ name, data, addFilter }) => {
  const arrayStar = new Array(5).fill("");
  return (
    <div>
      {addFilter ? (
        <div className="flex items-center gap-x-5">
          <p className="unbound fw-500 dark:text-white">{name}</p>
          <div className="bg-[#EFEFEF] text-[#757171] whitespace-nowrap cursor-pointer flex item-center gap-x-2 px-2 py-[4px] rounded-[6px] items-center">
            Best Sellers <IoCaretDown />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <p className="unbound fw-500 darK:text-white">{name}</p>
          <Link to={""} className="text-[#5E2AF7] fs-500 underline">
            See More
          </Link>
        </div>
      )}
      <div className="mt-6">
        <div className="grid lg:grid-cols-4 gap-4 lg:gap-6">
          {data.map((item) => (
            <div>
              <img src={item.image} alt="image-banner" />
              <div className="mt-4">
                <p className="dark:text-white">{item.name}</p>
                {item.creator && (
                  <p className="text-[#696767] fs-500">{item.creator}</p>
                )}
              </div>
              {item.rating && (
                <div className="flex gap-x-3 pt-1">
                  {arrayStar.map((_, index) => (
                    <IoStar
                      className="text-[#FFD154] text-[17px]"
                      key={index}
                    />
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
