import { MoreVertical } from "lucide-react";
import { ICourseItem } from "./courses.types";
import {
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
// import { publishLesson } from "../../../api/creator";
import { Link } from "react-router-dom";
// import { duration } from "@mui/material";

interface IQuizItemProps {
  item: ICourseItem;
  handleView?: () => void;
  handleAddQuestion?: () => void;
  handleDelete?:() => void;
}

const QuizItem = ({ item, handleAddQuestion, handleDelete }: IQuizItemProps) => {
  // const { mutate: publish, isPending } = publishLesson();
  // console.log(isPending);

  // const handlePublish = () => {
  //   const payload: any = {
  //     lessonId: item.id,
  //     ...item,
  //     status: "published",
  //     duration: 51,
  //   };
  //   publish({ ...payload });
  // };

  return (
    <div className="flex items-center gap-3 bg-white dark:bg-darkMode p-4 rounded-[10px]">
      <div className="flex items-center gap-10">
        <div className="">
          <img
            src={
              "https://res.cloudinary.com/do2kojulq/image/upload/v1740561768/Group_2_sfbum4.png"
            }
            alt="icon"
            className="h-7"
          />
          <p className="capitalize mt-2">{item.contentType}</p>
        </div>
        <p>{item.title}</p>
      </div>
      <div className="ml-auto">
        <Menu placement="left">
          <MenuHandler>
            <MoreVertical />
          </MenuHandler>
          <MenuList>
            <MenuItem className="flex flex-col gap-3">
              <span
                className="cursor-pointer w-full"
                onClick={handleAddQuestion}
              >
                Add Question
              </span>
            </MenuItem>
            <MenuItem className="flex flex-col gap-3">
              <Link
                to={`/creator/courses/create/modules/view-quiz/${item.id}`}
                className="cursor-pointer w-full"
                onClick={handleAddQuestion}
              >
                View Questions
              </Link>
            </MenuItem>

            <MenuItem className="flex flex-col gap-3">
              <span className="cursor-pointer w-full" onClick={handleDelete}>
                Delete Quiz
              </span>
            </MenuItem>
          </MenuList>
        </Menu>
      </div>
    </div>
  );
};

export default QuizItem;
