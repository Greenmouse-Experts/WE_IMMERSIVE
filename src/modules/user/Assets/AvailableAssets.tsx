import { useState } from "react";
import { getGeneralCourses } from "../../../api/general";
import Loader from "../../../components/reusables/loader";
import { IAsset } from "../../../types/asset.types";

const AllAssets = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const { data: assets, isLoading } = getGeneralCourses();

  if (isLoading) return <Loader />;

  console.log(assets);

  const filteredAssets = assets?.filter((asset: IAsset) =>
    asset.assetName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-[#15171E] px-4 py-6 rounded-[20px]">
      <p className="unbound text-lg">All Assets</p>

      {/* Filters */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mt-4">
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border px-4 py-2 rounded-md w-full md:w-1/3 outline-none dark:bg-[#1E1E2E]"
        />
        <div className="flex gap-4">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="border px-4 py-2 rounded-md outline-none dark:bg-[#1E1E2E]"
          >
            <option value="All">Choose Category</option>
            <option value="Animation">Animation</option>
            <option value="Character Rigging">Character Rigging</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredAssets?.map((item:IAsset, i:number) => (
          <div key={i} className="p-4 rounded-lg bg-gray-50 dark:bg-[#1E1E2E]">
            {/* Asset Image */}
            <div>
              <img
                src={item.assetThumbnail}
                alt="asset-img"
                className="w-full rounded-lg"
              />
            </div>

            {/* Asset Details */}
            <div className="mt-2">
              <p className="unbound fs-500">{item.assetName}</p>
              <p className="fs-300 text-gray-500">{item.amount}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAssets;
