// import {  useForm } from "react-hook-form";
// import SelectInput from "../../../components/ui/SelectInput";
import Button from "../../../components/ui/Button";

import {  useParams } from "react-router-dom";
import { getModuleLessons } from "../../../api/creator";
import {
  Dialog,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
} from "@material-tailwind/react";
import { GripVertical, MoreVertical } from "lucide-react";
import AddQuiz from "./add-quiz";
import { useState } from "react";
import QuizCreator from "./AddQuizModal";
import Loader from "../../../components/reusables/loader";

const ViewLessons = () => {
  // const navigate = useNavigate();

  const { id } = useParams();
  const [contentType, setContentType] = useState("Quiz");
  const [open, setOpen] = useState(false);

  const { data: moduleLessons, isLoading } = getModuleLessons(id);

  const handleOpen = () => setOpen(!open);

  console.log(moduleLessons);

  // const {
  //   control,
  //   handleSubmit,
  //   setValue,
  //   formState: { errors, isValid },
  // } = useForm({
  //   mode: "onChange",
  //   defaultValues: {
  //     title: "",
  //     contentType: "",
  //     content: "",
  //     duration: "",
  //     contentUrl: "",
  //   },
  // });

  
  if(isLoading) return <Loader/>

  const selectedLesson = moduleLessons? moduleLessons[0] :{}

  // console.log(selectedLesson)

  return (
    <>
      <div className="flex flex-row items-start gap-5">
        <div className="rounded-[20px] py-5 px-7 md:w-3/4 w-full bg-white dark:bg-black">
          <h4 className="fw-600  text-black">Module 1 : Lesson 1</h4>
          <p className="fw-600 text-sm text-grey mt-3">
            Lets add content to this lesson
          </p>

          <div className="w-full border-[#C4C4C4] border rounded-[20px] overflow-hidden mt-8">
            <div
              className="bg-gray-100 rounded-xl shadow-sm border border-gray-200"
              // key={index}
            >
              {/* Module Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-indigo-50 rounded-t-xl">
                {/* Drag Handle */}
                <div className="cursor-grab p-2">
                  <GripVertical className="text-gray-500" />
                </div>

                {/* Module Title */}
                <h3 className="flex-1 text-gray-800 font-medium">{selectedLesson?.title}</h3>

                {/* More Options Button */}
                <button className="text-gray-500 hover:text-gray-700">
                  <Menu placement="left">
                    <MenuHandler>
                      <MoreVertical />
                    </MenuHandler>
                    <MenuList>
                      <MenuItem className="flex flex-col gap-3">
                        <span
                          className="cursor-pointer w-full"
                          // onClick={() => handleModuleDelete(module.id)}
                        >
                          Edit Lesson
                        </span>
                      </MenuItem>
                      <MenuItem className="flex flex-col gap-3">
                        <span
                          className="cursor-pointer w-full"
                          // onClick={() => handleModuleDelete(module.id)}
                        >
                          Delete Lesson
                        </span>
                      </MenuItem>
                    </MenuList>
                  </Menu>
                </button>
              </div>

              {/* Content Section */}
            </div>

            <div className="mt-10 mb-8 gap-8 text-center flex flex-col items-center justify-center w-full ">
              <p className="">
                Turn your knowledge to Impact – create and share your course!{" "}
              </p>
              <Button
                onClick={handleOpen}
                title="Add Content"
                withArrows
                style={{ width: 211 }}
              />
            </div>
          </div>
        </div>
        <div className=" w-1/4">
          <AddQuiz
            setContentType={setContentType}
            selectedContent={contentType}
          />
        </div>
      </div>

      <Dialog open={open} handler={handleOpen}>
        <div>
          <QuizCreator lessonQuizId={selectedLesson?.id} handleOpen={handleOpen} />
        </div>
      </Dialog>
    </>
  );
};

export default ViewLessons;
