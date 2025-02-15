import { useState } from "react";

const AllAssets = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const assets = [
    {
      name: "AnnaElsa Frozen 3D",
      creator: "By Chuka Uzo",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1739646333/We-Immersive/image_zh7h9q.png",
      category: "Animation",
    },
    {
      name: "Skull Chaser Rig",
      creator: "By Hamzat Abdulazeez",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1739646333/We-Immersive/image4_qcpt2t.png",
      category: "Character Rigging",
    },
    {
      name: "Troll Hunters Anim Rig",
      creator: "By Stephen Finn",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1739646333/We-Immersive/image3_mvln32.png",
      category: "Character Rigging",
    },
    {
      name: "Cartoon Family Pack",
      creator: "By Adeleke Evulo",
      img: "https://res.cloudinary.com/greenmouse-tech/image/upload/v1739646333/We-Immersive/image2_fmojtk.png",
      category: "Animation",
    },
  ];

  const filteredAssets = assets.filter(
    (asset) =>
      (category === "All" || asset.category === category) &&
      asset.name.toLowerCase().includes(search.toLowerCase())
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
        {filteredAssets.map((item, i) => (
          <div key={i} className="p-4 rounded-lg bg-gray-50 dark:bg-[#1E1E2E]">
            {/* Asset Image */}
            <div>
              <img
                src={item.img}
                alt="asset-img"
                className="w-full rounded-lg"
              />
            </div>

            {/* Asset Details */}
            <div className="mt-2">
              <p className="unbound fs-500">{item.name}</p>
              <p className="fs-300 text-gray-500">{item.creator}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllAssets;
