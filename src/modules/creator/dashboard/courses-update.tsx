import { MdOutlineArrowDropDown } from "react-icons/md";


const CoursesUpdate = () => {
  const updates:any = [
    // {
    //   title: "Cartoon Family",
    //   duration:"N 300,000",
    //   name: "10 Purchases",
    //   value: 80,
    //   img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279178/WE%20Immersive/image_7_vsjd0q.png",
    // },
    // {
    //   title: "Cartoon Family",
    //   duration: "N 300,000",
    //   name: "10 Purchases",
    //   value: 70,
    //   img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279178/WE%20Immersive/image_8_ejx9cb.png",
    // },
    // {
    //   title: "Cartoon Family",
    //   duration: "N 300,000",
    //   name: "10 Purchases",
    //   value: 70,
    //   img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279178/WE%20Immersive/image_8_ejx9cb.png",
    // },
    // {
    //   title: "Cartoon Family",
    //   duration: "N 300,000",
    //   name: "10 Purchases",
    //   value: 70,
    //   img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730279178/WE%20Immersive/image_8_ejx9cb.png",
    // },
  ];

  return (
    <div>
      <div className="bg-white dark:bg-[#15171E] px-4 lg:py-10 py-5 rounded-[20px]">
        <p className="unbound text-[#06052A]">Top Selling Content</p>
        <div className="flex items-center gap-x-2 px-3 py-1 form-shadow rounded-full cursor-pointer w-fit mt-4">
          <span className="text-sm text-gray-600">Monthly</span>
          <MdOutlineArrowDropDown className="text-gray-600" />
        </div>
        <div className="mt-6 grid gap-5">
          {updates?.map((item:any, i:number) => (
            <div className="flex items-center gap-x-2" key={i}>
              <div className="">
                <img src={item.img} alt="course-img" className=" w-[75px] h-[76px]" />
              </div>
              <div className="w-full">
                <div className="flex justify-between items-center">
                  <p className="fs-500 fw-500">{item.title}</p>
                  <p
                    className="text-black"
                  >
                    {item.duration}
                  </p>
                </div>
                <p className="text-[#696767] fs-200 mt-1">{item.name}</p>
                <div className="pt-1">
                 <div className="h-[6px] w-full bg-[#EBDCFF] rounded-full mt-2">
                  <div className="h-full w-1/4 bg-primary rounded-full"/>
                 </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoursesUpdate;
