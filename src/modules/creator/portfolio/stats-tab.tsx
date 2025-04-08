const StatTab = () => {
  const projects = [
    {
      image: "https://placekitten.com/100/100", // replace with actual image URL
      title: "3D Stuffed Animal Render",
      category: "Digital Asset",
      date: "02-12-24",
      likes: 12,
      rating: 4.5,
      sold: 17,
      income: "N 2M",
    },
    // Add more items as needed
  ];

  return (
    <div className=" overflow-x-auto">
      <p className=" unbound">Assets Performance</p>
      <table className="min-w-full text-left border-separate border-spacing-y-4">
        <thead>
          <tr className="text-[#5B5959] text-sm mulish ">
            <th className="px-4 py-2 !font-semibold">Project</th>
            <th className="px-4 py-2 text-center !font-semibold">Likes</th>
            <th className="px-4 py-2 text-center !font-semibold">Rating</th>
            <th className="px-4 py-2 text-center !font-semibold">Sold</th>
            <th className="px-4 py-2 text-right !font-semibold">Income</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="px-4 py-2">
              <div className="flex items-center gap-4">
                <img
                  src="https://res.cloudinary.com/do2kojulq/image/upload/v1733858200/image_2_pylkii.png"
                  alt="Preview"
                  className="w-[131px] rounded-[10px] object-cover"
                />
                <div>
                  <p>3D Stuffed Animal Render</p>
                  <p className=" text-[#5B5959] text-sm mt-2">Digital Asset</p>
                  <p className="text-xs text-[#5B5959] mt-5">
                    Published on 02-12-24
                  </p>
                </div>
              </div>
            </td>
            <td className="text-center">12</td>
            <td className="text-center">4.5</td>
            <td className="text-center">17</td>
            <td className="text-right font-semibold">N 2M</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StatTab;
