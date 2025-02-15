import { Progress } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const ContinueCourse = () => {
  const courses = [
    {
      name: "Human Anatomy V2",
      chapter: "Chapter 1",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
      tutor: "Bryan Silva",
      value: 30,
    },
    {
      name: "Human Anatomy V3",
      chapter: "Chapter 2",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
      tutor: "Bryan Silva",
      value: 20,
    },
    {
      name: "Human Anatomy V4",
      chapter: "Chapter 3",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
      tutor: "Bryan Silva",
      value: 35,
    },
    {
      name: "Human Anatomy V5",
      chapter: "Chapter 4",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
      tutor: "Bryan Silva",
      value: 35,
    },
  ];

  return (
    <div className="bg-white dark:bg-[#15171E] px-4 py-6 rounded-[20px]">
      <p className="unbound text-lg">Ongoing Courses</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((item, i) => (
          <div key={i} className="p-4 rounded-lg shadow-md bg-gray-50 dark:bg-[#1E1E2E]">
            <div>
              <img src={item.img} alt="course-img" className="w-full rounded-lg" />
            </div>
            <div className="mt-2">
              <p className="unbound fs-500">{item.name}</p>
              <p className="fs-300 text-gray-500">{item.chapter}</p>
            </div>
            <div className="mt-3">
              <Progress size="sm" value={item.value} color="green" />
            </div>
            <div className="flex gap-x-3 mt-4 items-center">
              <img
                src="https://res.cloudinary.com/do2kojulq/image/upload/v1730279178/WE%20Immersive/image_6_k38vyh.png"
                alt="tutor-pic"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="fs-400">{item.tutor}</p>
                <p className="text-gray-500 fs-200">Tutor</p>
              </div>
            </div>

            {/* Course Details Link */}
            <div className="mt-4 text-center">
              <Link
                to={`/course-details/${encodeURIComponent(item.name)}`}
                className="text-gray-500 text-sm hover:underline"
              >
                View Course Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueCourse;
