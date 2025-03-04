import CoursesList from "./courses-list";
import { getGeneralCourses } from "../../../../api/general";
import Loader from "../../../../components/reusables/loader";

const NewCourses = () => {
  // const creatorCoursesQuery = useGetData(["general-courses"], getAllCoursesGeneral);
  // const [data, setData] = useState<any[]>([]);

  // useEffect(() => {
  //   if (creatorCoursesQuery.data) {
  //     setData(creatorCoursesQuery.data.data);
  //   }
  // }, [creatorCoursesQuery.data]); // Dependency array ensures this runs when data updates

  const {data, isLoading } = getGeneralCourses();

  if (isLoading) {
    return <Loader/>;
  }

  return (
    <div className="">
      <div className="box">
        <CoursesList name="New  Courses 🧑‍🏫" data={data} />
      </div>
    </div>
  );
}

export default NewCourses