import { MoreVertical } from "lucide-react";
import { ICourseItem } from "./courses.types";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { publishLesson } from "../../../api/creator";
// import { duration } from "@mui/material";

interface ILessonItemProps {
  item: ICourseItem;
  handleView: () => void;
}

const LessonItem = ({ item, handleView }: ILessonItemProps) => {
  const icon: any = {
    text: "https://res.cloudinary.com/do2kojulq/image/upload/v1740561768/Group_2_sfbum4.png",
    video:
      "https://res.cloudinary.com/do2kojulq/image/upload/v1740561768/Vector_5_hd67rz.png",
  };

  const { mutate: publish, isPending } = publishLesson();
  console.log(isPending)


  const handlePublish = () => {
    const payload: any = {
      lessonId: item.id,
      ...item,
      status: "published",
      duration: 51
    };
    publish({ ...payload });
  };

  return (
    <div className="flex items-center gap-3 bg-white dark:bg-darkMode p-2 rounded-[10px]">
      <img src={icon[item.contentType]} alt="lesson-icon" className="h-7" />
      <p>{item.title}</p>
      <div className="ml-auto">
        <Menu placement="left">
          <MenuHandler>
            <MoreVertical />
          </MenuHandler>
          <MenuList>
            <MenuItem className="flex flex-col gap-3">
              <span className="cursor-pointer w-full" onClick={handleView}>
                View Lesson
              </span>
            </MenuItem>
            <MenuItem className="flex flex-col gap-3">
              <span className="cursor-pointer w-full" onClick={handlePublish}>
                Publish Lesson
              </span>
            </MenuItem>
            {/* <MenuItem className="flex flex-col gap-3">
              <span
                className="cursor-pointer w-full"
                // onClick={() => handleDisplayLessons(module.id)}
              >
                Delete Lessons
              </span>
            </MenuItem> */}
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default LessonItem;
