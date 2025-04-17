import { Progress } from "@material-tailwind/react";

const ContinueCourse = ({statData}:any) => {
    
  return (
    <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px]">
      <p className="unbound text-lg">Continue Course</p>
      <div className="mt-6 grid lg:grid-cols-3 gap-4 overflow-x-auto">
        {statData.map((item:any, i:number) => (
          <div className="" key={i}>
            <div>
              <img src={item.img} alt="course-img" className="" />
            </div>
            <div className="mt-1">
              <p className="unbound fs-500">{item.title}</p>
              <p className="fs-300">{item.chapter}</p>
            </div>
            <div className="mt-3">
              <Progress size="sm" value={item?.progress?.completedLessons} color="blue" />
            </div>
            <div className="flex gap-x-2 mt-4">
              <img
                src={item?.creator.photo}
                alt="tutor-pic"
                className="w-9 rounded-full"
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
}

export default ContinueCourse