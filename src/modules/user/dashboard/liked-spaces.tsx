

const LikedSpaces = () => {
  const liked = [
    {
      name: "Jailbreak Prison Run",
      author: "By Eviola & Co",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279177/WE%20Immersive/image_9_m9gw6n.png",
    },
    {
      name: "Faming Sim",
      author: "By Eviola & Co",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1728997628/WE%20Immersive/farmin_p4ijt8.png",
    },
    {
      name: "Castle Black",
      author: "By Eviola & Co",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1728997628/WE%20Immersive/castle_eoaney.png",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#15171E] px-4 py-6 rounded-[20px]">
      <p className="unbound text-[#06052A] text-lg">Liked Spaces & Tours</p>
      <div className="mt-6 grid gap-4">
        {liked.map((item, i) => (
          <div key={i} className="flex flex-wrap items-center gap-4">
            <div className="w-20 h-14 rounded-xl overflow-hidden shrink-0">
              <img
                src={item.img}
                alt="liked-space-img"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 min-w-[180px]">
              <p className="fs-400 fw-500">{item.name}</p>
              <p className="fs-200 text-gray-500">{item.author}</p>
            </div>
            {/* <div className="min-w-[90px]">
              <Button title="Explore" altClassName="btn-primary px-3 py-1 fs-400 w-full sm:w-auto" />
            </div> */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedSpaces;