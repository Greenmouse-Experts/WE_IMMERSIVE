import { FaCirclePlus } from "react-icons/fa6";
import { LiaPencilRulerSolid } from "react-icons/lia";

const WorkTab = () => {
  return (
    <div>
      <div className="bg-[#E9EBFB] rounded-[20px] p-8 mt-8">
        <div className="flex items-center gap-3">
          <FaCirclePlus size={25} className="text-primary" />
          <p className="unbound text-lg">Create Asset/Course</p>
        </div>
        <p className="text-grey text-base mt-3">
          Upload and showcase your digital creations, unlock opportunities to
          connect and, sell your works
        </p>

        <div className="mt-6 flex items-center gap-3">
          <LiaPencilRulerSolid color="#7C7A7A" />
          <p className="text-grey text-sm">Import content in seconds</p>
        </div>
      </div>

      <div className="mt-8 grid xl:grid-cols-3 gap-5">
        {/* {[...Array(9)].map(() => (
              <div className="rounded-[10px] overflow-hidden">
                <img
                  src="https://res.cloudinary.com/do2kojulq/image/upload/v1733858200/image_2_pylkii.png"
                  alt=""
                  className="h-[280px] w-full"
                />
              </div>
            ))} */}
      </div>
    </div>
  );
};

export default WorkTab;
