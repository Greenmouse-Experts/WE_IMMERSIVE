import { Progress } from "@material-tailwind/react";

const CoursesUpdate = () => {
  const updates = [
    {
      title: "(Upcoming Test)",
      duration: "(2 days left)",
      name: "Human Anatomy V2",
      value: 80,
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279178/WE%20Immersive/image_7_vsjd0q.png",
    },
    {
      title: "(Upcoming Test)",
      duration: "(8 days left)",
      name: "Science Technology V2",
      value: 70,
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279178/WE%20Immersive/image_8_ejx9cb.png",
    },
  ];

  return (
    <div className="bg-white dark:bg-[#15171E] px-4 py-6 rounded-[20px]">
      <p className="unbound text-[#06052A] text-lg">Courses Update</p>
      <div className="mt-6 grid gap-5">
        {updates.map((item, i) => (
          <div key={i} className="flex flex-wrap items-center gap-4">
            <div className="w-16 h-16 shrink-0">
              <img src={item.img} alt="course-img" className="w-full h-full object-cover rounded-md" />
            </div>
            <div className="flex-1 min-w-[180px]">
              <div className="flex justify-between items-center">
                <p className="fs-500 fw-500">{item.title}</p>
                <p className={`fs-200 ${i > 0 ? "text-gray-500" : "text-red-500"}`}>
                  {item.duration}
                </p>
              </div>
              <p className="text-gray-500 fs-200 mt-1">{item.name}</p>
              <div className="pt-1">
                <Progress size="sm" value={item.value} color="green" className="!h-[3px]" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoursesUpdate;