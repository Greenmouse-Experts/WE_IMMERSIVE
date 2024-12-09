import Button from "../../../components/ui/Button";

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
    <div>
      <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
        <p className="unbound text-[#06052A]">Liked Spaces & Tours</p>
        <div className="mt-6 grid gap-4">
          {liked.map((item, i) => (
            <div className="flex items-center gap-x-2" key={i}>
              <div className="w-[75px] h-[50px] rounded-xl overflow-hidden shrink-0">
                <img
                  src={item.img}
                  alt="course-img"
                  className="w-full h-full"
                />
              </div>
              <div className="w-full">
                <p className="fs-400 fw-500">{item.name}</p>
                <p className={`fs-200 text-[#696767]`}>{item.author}</p>
              </div>
              <div>
                <Button
                  title={"Explore"}
                  altClassName="btn-primary px-3 py-1 fs-400"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default LikedSpaces