import { FC } from "react";
import { IoCaretDown } from "react-icons/io5";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  data: any;
  addFilter?: boolean;
  classStyle?: any;
}
const AssetList: FC<Props> = ({ name, data, addFilter, classStyle }) => {
  // const arrayStar = new Array(5).fill("");
  return (
    <div>
      {addFilter ? (
        <div className="flex items-center gap-x-5">
          <span className={`unbound fw-500 ${classStyle}`}>{name}</span>
          <div className="bg-[#EFEFEF] text-[#757171] whitespace-nowrap cursor-pointer flex item-center gap-x-2 px-2 py-[4px] rounded-[6px] items-center">
            Best Sellers <IoCaretDown />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <span className={`unbound fw-500 ${classStyle}`}>{name}</span>
          <Link to={"/explore"} className="text-[#5E2AF7] fs-500 underline">
            See More
          </Link>
        </div>
      )}
      <div className="mt-6">
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-6">
          {data?.map((item: any) => (
            <div>
              <img
                src={item?.assetThumbnail}
                alt="image-banner"
                className="rounded-md h-[230px] object-cover w-full"
              />
              <div className="mt-4">
                <span className={`${classStyle}`}>{item.assetName}</span>
              </div>
              <div className="mt-4 flex gap-1">
                <span className={`capitalize ${classStyle}`}>
                  {item.currency === "" ? item.pricingType : item.currency}
                </span>
                <span className={`${classStyle}`}>
                  {item.currency === "" ? "" : item.amount}
                </span>
                {/*item.creator && (
                  <span className="text-white fs-500">{item.creator}</span>
                )*/}
              </div>
              {/*item.rating && (
                <div className="flex gap-x-3 pt-1">
                {arrayStar.map((_, index) => (
                  <IoStar
                    className="text-[#FFD154] text-[17px]"
                    key={index}
                  />
                ))}
              </div>
                */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AssetList;
