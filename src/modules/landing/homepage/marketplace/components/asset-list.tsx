import { FC, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ICategoryChildren } from "../../../../../types/category.types";

interface Props {
  data: any[];
  classStyle?: any;
  activeTab?: ICategoryChildren | null;
}

const AssetList: FC<Props> = ({
  data,
  classStyle,
  activeTab = null,
}) => {
  const navigate = useNavigate();
  const itemsPerPage = 12;
  const [currentPage, setCurrentPage] = useState(1);

  // console.log(data);
  // Filtered data by activeTab
  const filteredData = data?.filter(
    (item) => item.categoryId === activeTab?.id || activeTab === null
  );

  // Pagination logic
  const totalItems = filteredData.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const handleNavigate = (type: string, id: string) => {
    if (type === "digital") {
      navigate(`/asset/${id}`);
    } else if (type === "physical") {
      navigate(`/physical/asset/${id}`);
    } else if (type === "courses") {
      navigate(`/learn/view-course/${id}`);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between">
        <span className={`unbound fw-500 ${classStyle}`}>
          {!activeTab ? "All Assets" : activeTab.name}
        </span>
        <Link to={"/explore"} className="text-[#5E2AF7] fs-500 underline">
          See More
        </Link>
      </div>

      <div className="mt-6">
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-6">
          {currentItems.map((item) => (
            <div
              key={item.id}
              onClick={() => handleNavigate(item.type, item.id)}
              className="cursor-pointer"
            >
              <img
                src={item.assetThumbnail || item.image}
                alt="image-banner"
                className="rounded-md h-[230px] object-cover w-full"
              />
              <div className="mt-4">
                <span className={`${classStyle} font-bold`}>
                  {item.assetName || item.title}
                </span>
              </div>
              <div className="mt-4 flex gap-1">
                <span className={`capitalize ${classStyle} font-semibold`}>
                  {item.currency === "" ? item.pricingType : item.currency}
                </span>
                <span className={`${classStyle}`}>
                  {item.currency === "" ? "" : item.amount || item.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8 gap-3">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-1 rounded bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Prev
            </button>
            <span className="self-center text-black dark:text-white">
              {currentPage} of {totalPages}
            </span>
            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-1 rounded bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Next
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AssetList;
