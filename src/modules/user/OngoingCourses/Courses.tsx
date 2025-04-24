import { Progress } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { getEnrolledCourses } from "../../../api/student";
import Loader from "../../../components/reusables/loader";
import { ICourse } from "../../../types/course.types";

const ContinueCourse = () => {
  const { data: courses, isLoading } = getEnrolledCourses();

  if (isLoading) return <Loader />;

  return (
    <div className="bg-white dark:bg-[#15171E] px-4 py-6 rounded-[20px]">
      <p className="unbound text-lg">Ongoing Courses</p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses?.map((item: { course: ICourse; id: string }, i: number) => (
          <div key={i} className="p-4 rounded-lg bg-gray-50 dark:bg-[#1E1E2E]">
            {/* Course Image */}
            <div>
              <img
                src={item.course.image}
                alt="course-img"
                className="w-full rounded-lg"
              />
            </div>

            {/* Course Details */}
            <div className="mt-2">
              <p className="unbound fs-500">{item.course.title}</p>
              {/* <p className="fs-300 text-gray-500">{item.chapter}</p> */}
            </div>

            {/* Progress Bar */}
            <div className="mt-3">
              <Progress size="sm" value={40} />
            </div>

            {/* Tutor Info */}
            <div className="flex gap-x-3 mt-4 items-center">
              <img
                src={item?.course?.creator?.photo}
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
