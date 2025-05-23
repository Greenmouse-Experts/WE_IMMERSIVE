import { Progress } from "@material-tailwind/react";

const ContinueCourse = ({ongoingCourses}:any) => {
  // const courses = [
  //   {
  //     name: "Human Anatomy V2",
  //     chapter: "Chapter 1",
  //     img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
  //     tutor: "Bryan Silva",
  //     value: 30,
  //   },
  //   {
  //     name: "Human Anatomy V4",
  //     chapter: "Chapter 5",
  //     img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
  //     tutor: "Bryan Silva",
  //     value: 50,
  //   },
  //   {
  //     name: "Human Anatomy V5",
  //     chapter: "Chapter 6",
  //     img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279184/WE%20Immersive/image_2_s034ah.png",
  //     tutor: "Bryan Silva",
  //     value: 35,
  //   },
  // ];

  return (
    <div className="bg-white dark:bg-[#15171E] px-4 py-6 rounded-[20px]">
      <p className="unbound text-lg">Continue Course</p>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {ongoingCourses.map((item:any, i:number) => (
          <div key={i} className="p-4 rounded-lg shadow-md bg-gray-50 dark:bg-[#1E1E2E]">
            <div>
              <img src={item.image} alt="course-img" className="w-full rounded-lg" />
            </div>
            <div className="mt-2">
              <p className="unbound fs-500">{item.title}</p>
              <p className="fs-300 text-gray-500">{item.chapter}</p>
            </div>
            <div className="mt-3">
              <Progress size="sm" value={item.progress} color="blue" />
            </div>
            <div className="flex gap-x-3 mt-4 items-center">
              <img
                src={item?.creator?.photo}
                alt="tutor-pic"
                className="w-10 h-10 rounded-full"
              />
              <div>
                <p className="fs-400">{item.tutor}</p>
                <p className="text-gray-500 fs-200 capitalize">{item?.creator?.accountType}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinueCourse;