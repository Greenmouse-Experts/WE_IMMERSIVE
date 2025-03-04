import { Progress } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getEnrolledCourses } from "../../../api/student";
import Loader from "../../../components/reusables/loader";

const ContinueCourse = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [status, setStatus] = useState("All");

  const { data: courses, isLoading } = getEnrolledCourses();


  if (isLoading) return <Loader />;
  const filteredCourses = courses?.filter(
    (course:any) =>
      (category === "All" || course.category === category) &&
      (status === "All" || course.status === status) &&
      course?.name?.toLowerCase().includes(search?.toLowerCase())
  );

  console.log(filteredCourses)

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
        {courses?.map((item:any, i:number) => (
          <div key={i} className="p-4 rounded-lg bg-gray-50 dark:bg-[#1E1E2E]">
            {/* Course Image */}
            <div className="rounded-[20px] overflow-hidden">
              <img
                src={item.course.image}
                alt="course-img"
                className="w-full rounded-lg h-[175px]"
              />
            </div>

            {/* Course Details */}
            <div className="mt-2">
              <p className="unbound fs-500">{item.course.title}</p>
              <p className="fs-300 text-gray-500">{item.chapter}</p>
            </div>

            {/* Progress Bar */}
            <div className="mt-3">
              <Progress size="sm" value={20} />
            </div>

            {/* Tutor Info */}
            <div className="flex gap-x-3 mt-4 items-center">
              <img
                src={item.course.creator.photo}
                alt="tutor-pic"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="fs-400">{item.course.creator.name}</p>
                <p className="text-gray-500 fs-200">Tutor</p>
              </div>
            </div>

            {/* View Course Details Link */}
            <div className="mt-4 text-center">
              <Link
                to={`/user/course/${item?.id}`}
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
