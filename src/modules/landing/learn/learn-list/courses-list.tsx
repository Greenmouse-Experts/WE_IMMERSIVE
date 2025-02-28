import { FC } from "react";
import { IoCaretDown, IoStar } from "react-icons/io5";
import { ICourse } from "../../../../types/course.types";
import { Link } from "react-router-dom";

interface Props {
  name: string;
  data: ICourse[];
  addFilter?: boolean;
  classStyle?: any;
}
const CoursesList: FC<Props> = ({ name, data, addFilter, classStyle }) => {
 
  const arrayStar = new Array(5).fill("");
  return (
    <div>
      {addFilter ? (
        <div className="flex items-center gap-x-5">
          <span className={`unbound fw-500 ${classStyle}`}>{name}</span>
          <div className="bg-[#EFEFEF] text-[#757171] whitespace-nowrap cursor-pointer flex item-center gap-x-2 px-2 py-[4px] rounded-[6px] items-center">
            Best Sellers <IoCaretDown />
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-between"></div>
      )}
      <div className="mt-6">
        <div className="grid lg:grid-cols-4 gap-10 lg:gap-6">
          {data?.map((item: ICourse, i: number) => (
            <Link to={`/learn/view-course/${item.id}`} key={i}>
              <div className="cursor-pointer" >
                <img
                  src={item.image}
                  alt="image-banner"
                  className="rounded-md h-[230px] object-cover w-full"
                />
                <div className="mt-4">
                  <span className={`${classStyle}`}>{item.title}</span>
                  <p>{item.creator.name}</p>

                  <div className="flex gap-x-1 pt-1">
                    {arrayStar.map((_, index) => (
                      <IoStar
                        className="text-[#FFD154] text-[17px]"
                        key={index}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesList;
