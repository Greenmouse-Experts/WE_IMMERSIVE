import { FC } from "react";
import { IoCaretDown } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  name: string;
  data: any;
  addFilter?: boolean;
  classStyle?: any;
  activeTab?: string;
}
const PhysicalAssetList: FC<Props> = ({ name, data, addFilter, classStyle, activeTab }) => {
  // const arrayStar = new Array(5).fill("");

  console.log("activeTab", activeTab)
  const navigate = useNavigate();
  return (
    <div>
      {addFilter ? (
        <div className="flex items-center gap-x-5">
          <span className={`unbound fw-500 ttext-black dark:text-white`}>{name}</span>
          <div className="bg-[#EFEFEF] text-[#757171] whitespace-nowrap cursor-pointer flex item-center gap-x-2 px-2 py-[4px] rounded-[6px] items-center">
            Best Sellers <IoCaretDown />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between">
          <span className={`unbound fw-500 ttext-black dark:text-white`}>{name}</span>
          <Link to={"/explore"} className="text-[#5E2AF7] fs-500 underline">
            See More
          </Link>
        </div>
      )}
      <div className="mt-6">
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-6">
          {data?.map((item: any) => {
            if (item.categoryId === activeTab) {
              return (
                <div
                  onClick={() => navigate(`/physical/asset/${item.id}`)}
                  className=" cursor-pointer"
                >
                  <img
                    src={item?.assetThumbnail}
                    alt="image-banner"
                    className="rounded-md h-[230px] object-cover w-full"
                  />
                  <div className="mt-4">
                    <span className={`ttext-black dark:text-white`}>{item.assetName}</span>
                  </div>
                  <div className="mt-4 flex gap-1">
                    <span className={`capitalize ttext-black dark:text-white`}>
                      {item.currency === "" ? item.pricingType : item.currency}
                    </span>
                    <span className={`ttext-black dark:text-white`}>
                      {item.currency === "" ? "" : item.amount}
                    </span>
                  </div>
                </div>
              );
            }
          })}
        </div>
      </div>
    </div>
  );
};

export default PhysicalAssetList;
