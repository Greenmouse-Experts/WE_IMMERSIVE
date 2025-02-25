import { Progress } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";

const ContinueCourse = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const courses = [
    {
      name: "Human Anatomy V2",
      chapter: "Chapter 1",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
      tutor: "Bryan Silva",
      value: 30,
      category: "Science",
      status: "Ongoing",
    },
    {
      name: "Human Anatomy V3",
      chapter: "Chapter 2",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
      tutor: "Bryan Silva",
      value: 20,
      category: "Science",
      status: "Completed",
    },
    {
      name: "Physics Essentials",
      chapter: "Chapter 5",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
      tutor: "Lisa Adams",
      value: 50,
      category: "Science",
      status: "Ongoing",
    },
    {
      name: "Biochemistry Basics",
      chapter: "Chapter 3",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
      tutor: "James Carter",
      value: 40,
      category: "Health",
      status: "Completed",
    },
    {
      name: "Human Anatomy V4",
      chapter: "Chapter 3",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
      tutor: "Bryan Silva",
      value: 35,
      category: "Health",
      status: "Ongoing",
    },
    {
      name: "Human Anatomy V5",
      chapter: "Chapter 4",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
      tutor: "Bryan Silva",
      value: 35,
      category: "Health",
      status: "Completed",
    },
    {
      name: "Introduction to Genetics",
      chapter: "Chapter 1",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
      tutor: "Sophia Lee",
      value: 60,
      category: "Health",
      status: "Ongoing",
    },
    {
      name: "Organic Chemistry",
      chapter: "Chapter 2",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
      tutor: "Mark Johnson",
      value: 25,
      category: "Science",
      status: "Completed",
    },
  ];

  const filteredCourses = courses.filter(
    (course) =>
      (category === "All" || course.category === category) &&
      (status === "All" || course.status === status) &&
      course.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-white dark:bg-[#15171E] px-4 py-6 rounded-[20px]">
      <p className="unbound text-lg">All Courses</p>

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
            <option value="Science">Science</option>
            <option value="Health">Health</option>
          </select>
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border px-4 py-2 rounded-md outline-none dark:bg-[#1E1E2E]"
          >
            <option value="All">Status: All</option>
            <option value="Ongoing">Ongoing</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredCourses.map((item, i) => (
          <div key={i} className="p-4 rounded-lg bg-gray-50 dark:bg-[#1E1E2E]">
            {/* Course Image */}
            <div>
              <img
                src={item.img}
                alt="course-img"
                className="w-full rounded-lg"
              />
            </div>

            {/* Course Details */}
            <div className="mt-2">
              <p className="unbound fs-500">{item.name}</p>
              <p className="fs-300 text-gray-500">{item.chapter}</p>
            </div>

            {/* Progress Bar */}
            <div className="mt-3">
              <Progress size="sm" value={item.value} />
            </div>

            {/* Tutor Info */}
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

            {/* View Course Details Link */}
            <div className="mt-4 text-center">
              <Link
                to={`/students/course-details`}
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
