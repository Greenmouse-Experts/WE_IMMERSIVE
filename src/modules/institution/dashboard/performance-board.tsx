import { MdOutlineArrowDropDown } from "react-icons/md";
import { getOrdinalSuffix } from "../../../hooks";

export const PerformanceBoard = () => {
  // const activities = [
  //   {
  //     title: "New post from Eviola & Co",
  //     img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279183/WE%20Immersive/image_3_mu6rxn.png",
  //     date: "13-14-24",
  //     time: "5:00pm",
  //   },
  //   {
  //     title: "Purchase Completed 🎊",
  //     img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279183/WE%20Immersive/image_4_hwdpua.png",
  //     date: "13-14-24",
  //     time: "10:00pm",
  //   },
  //   {
  //     title: "You finished XR Course",
  //     img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279182/WE%20Immersive/image_5_slbtqp.png",
  //     date: "13-14-24",
  //     time: "3:45pm",
  //   },
  // ];

  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] px-4 lg:py-6 rounded-[20px] mb-8 md:mb-0 lg:mb-0">
        <p className="unbound text-[#06052A] pt-5 md:pt-0 lg:pt-0 text-center md:text-left lg:text-left">Performance Board</p>
        <div className="flex items-center gap-x-1 btn-shadow px-2 py-[2px] rounded-full cursor-pointer w-fit mx-auto mt-3 md:mx-0 lg:mx-0">
          <p className="text-[#2C3E50] fs-300">Export As</p>
          <MdOutlineArrowDropDown className="text-[14px] text-[#2C3E50]" />
        </div>
        <div className="">
          <div className="flex items-end justify-center gap-6 w-full">
            <div className="flex-col items-center text-center mb-4">
              <img className="w-20 h-20" src="https://res.cloudinary.com/do2kojulq/image/upload/v1732787766/image_2_qltkyh.png" alt="" />
              <p className="text-[10px] text-[#464255]">Promise Eze</p>
              <p className="text-xs text-[#464255]">93,500</p>
            </div>
            <div className="flex-col items-center text-center">
              <img className="h-[150px] w-[118px]" src="https://res.cloudinary.com/do2kojulq/image/upload/v1732788741/Group_1171275313_tnww3l.png" alt="" />
              <p className="text-[10px] text-[#464255]">Chukka Uzo</p>
              <p className="text-xs text-[#464255]">93,500</p>
            </div>
            <div className="flex-col items-center text-center mb-4">
              <img className="w-20 h-20" src="https://res.cloudinary.com/do2kojulq/image/upload/v1732787766/Group_1171275312_k7x2k9.png" alt="" />
              <p className="text-[10px] text-[#464255]">Mustapha Ramat</p>
              <p className="text-xs text-[#464255]">93,500</p>
            </div>

          </div>

          <div>
            <table className="table-auto w-full">
              <thead>
                <tr>
                  <td className="unbound text-xs p-1 pb-2">Rank</td>
                  <td className="unbound text-xs p-1 pb-2">Username</td>
                  <td className="unbound text-xs p-1 pb-2">Points</td>
                </tr>
              </thead>
              <tbody className="">
                {[...Array(4)].map((item, i) => (
                  <tr className="odd:bg-[#E9EBFB] odd:dark:bg-black" key={i}>
                    <td className={`p-2 text-xs  pl-4`}> <p className="border border-[#FFD154] bg-[#FFCA281A] px-3 w-fit rounded-[5px]  ">{ getOrdinalSuffix(i + 1)}</p></td>
                    <td className="p-2 text-xs ">Chukka Uzo</td>
                    <td className="p-2 text-xs ">100,050{item}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
