import { Progress } from "@material-tailwind/react";

const AllCourses = () => {
  const courses = [
    {
      name: "Human Anatomy V2",
      chapter: "Chapter 1",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
      tutor: "Bryan Silva",
      value: 30,
    },
    {
      name: "Human Anatomy V4",
      chapter: "Chapter 5",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
      tutor: "Bryan Silva",
      value: 50,
    },
    {
      name: "Human Anatomy V5",
      chapter: "Chapter 6",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
      tutor: "Bryan Silva",
      value: 35,
    },
    {
      name: "Human Anatomy V5",
      chapter: "Chapter 6",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
      tutor: "Bryan Silva",
      value: 35,
    },
    {
      name: "Human Anatomy V5",
      chapter: "Chapter 6",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
      tutor: "Bryan Silva",
      value: 25,
    },
    {
      name: "Human Anatomy V5",
      chapter: "Chapter 6",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
      tutor: "Bryan Silva",
      value: 35,
    },

    {
      name: "Human Anatomy V5",
      chapter: "Chapter 6",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
      tutor: "Bryan Silva",
      value: 50,
    },
  ];
  return (
    <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
      <p className="unbound text-lg">All Courses</p>
      <div className="mt-6 grid lg:grid-cols-4 gap-y-10 gap-x-4">
        {courses.map((item, i) => (
          <div className="" key={i}>
            <div>
              <img src={item.img} alt="course-img" className="" />
            </div>
            <div className="mt-1">
              <p className="unbound fs-500">{item.name}</p>
              <p className="fs-300">{item.chapter}</p>
            </div>
            <div className="mt-3">
              <Progress size="sm" value={item.value} color="light-green" />
            </div>
            <div className="flex gap-x-2 mt-4">
              <img
                src="https://res.cloudinary.com/do2kojulq/image/upload/v1730279178/WE%20Immersive/image_6_k38vyh.png"
                alt="tutor-pic"
                className="w-9"
              />
              <div>
                <p className="fs-400">{item.tutor}</p>
                <p className="text-[#696767] fs-200">Tutor</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
