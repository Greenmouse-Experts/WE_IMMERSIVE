import { useEffect, useState } from "react";
import { getAllCreatorCourses } from "../../../../api";
import { useGetData } from "../../../../hooks/useGetData";
import CoursesList from "./courses-list";

const NewCourses = () => {
  const creatorCoursesQuery = useGetData(["courses"], getAllCreatorCourses);
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    if (creatorCoursesQuery.data) {
      setData(creatorCoursesQuery.data.data);
    }
  }, [creatorCoursesQuery.data]); // Dependency array ensures this runs when data updates

  return (
    <div className="">
      <div className="box">
        <CoursesList name="New  Courses 🧑‍🏫" data={data} />
      </div>
    </div>
  );
}

export default NewCourses