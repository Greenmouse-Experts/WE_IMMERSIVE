import { useState } from "react";
import ArrowsIcon from "../../../../assets/svg-components/arrows";
import { getGeneralCourses, getSubCategories } from "../../../../api/general";
import Loader from "../../../../components/reusables/loader";
import { ICategoryChildren } from "../../../../types/category.types";
import CoursesList from "./courses-list";

const ExploreCategory = () => {
  const [activeTab, setActiveTab] = useState<ICategoryChildren | null>(null);

  const { data: subCategories, isLoading } = getSubCategories();

  const {data:courses, isLoading:isLoadingCourse } = getGeneralCourses();

  if (isLoading || isLoadingCourse) {
    return <Loader/>;
  }

  if (isLoading) {
    return <Loader />;
  }

  const filteredCategory = subCategories?.filter(
    (cat) => cat.name === "XR Learning and Experiences"
  )[0].children;

  console.log(filteredCategory);

  return (
    <div className="section">
      <div className="box">
        <div>
          <p className="unbound fw-500">Explore by Category 🧑‍🏫</p>
        </div>
        <div className="mt-7 flex gap-4 flex-wrap">
          {filteredCategory?.map((item, key) => (
            <div
              className={`bg-[#EEEEEE] dark:bg-[#15171E] cursor-pointer w-fit rounded-[8px] flex items-center whitespace-nowrap gap-x-4 px-4 lg:px-6 text-[#696767] dark:text-[#AEACAC] py-2 border 
                ${
                  activeTab?.name === item.name
                    ? "border-gray-600"
                    : "border-transparent"
                }
              `}
              key={key}
              onClick={() => setActiveTab(item)}
            >
              <ArrowsIcon color="#AEACAC" />
              {item.name}
            </div>
          ))}
         
        </div>
      </div>

      <div className="box">
      <CoursesList data={courses} activeTab={activeTab} />
      </div>
    </div>
  );
};

export default ExploreCategory;
