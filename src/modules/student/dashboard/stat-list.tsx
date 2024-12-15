import { Link } from "react-router-dom";

const StatisticList = () => {
  const list = [
    {
      name: "Ongoing Courses",
      count: 7,
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1729716454/WE%20Immersive/learning-2_xy21e0.png",
      color: "#FFC7F0",
      route: "/students/ongoing-courses",
    },
    {
      name: "All Courses",
      count: 22,
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1729716404/WE%20Immersive/books_hkqetx.png",
      color: "#C7C8FF",
      route: "/students/all-courses",
    },
    {
      name: "Completed Courses",
      count: 37,
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1734263437/WE%20Immersive/Group_1171275333_v5nnqw.png",
      color: "#FFD7C7",
      route: "#",
    },
  ];
  return (
    <div className="w-full">
      <div className="grid grid-cols-3 gap-6 mt-10">
        {list.map((item) => (
          <div className="relative h-[120px]">
            <div className="box-drop rounded-[20px] p-4 h-full bg-white dark:bg-[#15171E] flex items-center">
              <Link to={`${item.route}`}>
                <p className="text monts text-[#7F7F7F] fw-600 text-lg">
                  {item.count}
                </p>
                <p className="unbound fs-500 fw-400 text-[#06052A] pt-1">
                  {item.name}
                </p>
              </Link>
            </div>
            <div
              className="absolute top-0 right-0 w-[70px] h-[60px] place-center border-[8px] rounded-[14px] border-[#F6F7FB]"
              style={{ backgroundColor: `${item.color}` }}
            >
              <img src={item.img} alt="icon-image" className="size-[32px]" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticList;
