import { FaStar } from "react-icons/fa6";

const StudentReviews = () => {
  const reviews = [
    {
      name: "I started with we immersive and in just 2 months, ive been able to upskill a whole lot and also started show casing my works  🏆",
      author: "Zagi Uzo",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730299953/WE%20Immersive/image_18_aekjst.png",
    },
    {
      name: "I started with we immersive and in just 2 months, ive been able to upskill a whole lot and also started show casing my works  🏆",
      author: "Zagi Uzo",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730299953/WE%20Immersive/image_18_aekjst.png",
    },
    {
      name: "I started with we immersive and in just 2 months, ive been able to upskill a whole lot and also started show casing my works  🏆",
      author: "Zagi Uzo",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730299953/WE%20Immersive/image_18_aekjst.png",
    },
    {
      name: "I started with we immersive and in just 2 months, ive been able to upskill a whole lot and also started show casing my works  🏆",
      author: "Zagi Uzo",
      img: "https://res.cloudinary.com/do2kojulq/image/upload/v1730299953/WE%20Immersive/image_18_aekjst.png",
    },
  ];
  return (
    <div className="relative overflow-hidden section pb-0">
      <div className="">
        <div className="box">
          <div>
            <p className="unbound fw-500 text-xl lg:text-5xl lg:leading-[58px]">
              Reviews from our <br /> students
            </p>
          </div>
        </div>
        <div className=" flex gap-6 lg:gap-10 w-full overflow-x-auto h-[400px] pt-12 mt-12 lg:mt-20 pl-3 md:pl-12 lg:pl-36 scroll-pro">
          {reviews.map((item, i) => (
            <div className="w-[700px] h-[200px]" key={i}>
              <div className="bg-[#6F0AFF] w-[350px] lg:w-[460px] h-full bg-[url('https://res.cloudinary.com/do2kojulq/image/upload/v1730301693/WE%20Immersive/image_19_rqu6qw.png')] bg-fit -rotate-[13deg] rounded-[15px] p-4 lg:p-6">
                <p className="text-white">{item.name}</p>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex gap-x-2">
                    <img src={item.img} alt="profile" className="w-10 h-10" />
                    <div>
                      <p className="fs-400 text-white">{item.author}</p>
                      <p className="fs-200 text-white">UI/UX Designer</p>
                    </div>
                  </div>
                  <div>
                    <div className="flex gap-x-[1px] pl-[1px]">
                      <FaStar className="text-[12px] text-[#FFD154]" />
                      <FaStar className="text-[12px] text-[#FFD154]" />
                      <FaStar className="text-[12px] text-[#FFD154]" />
                      <FaStar className="text-[12px] text-[#FFD154]" />
                      <FaStar className="text-[12px] text-[#FFD154]" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute top-0 right-0">
        <img
          src="https://res.cloudinary.com/do2kojulq/image/upload/v1730299494/WE%20Immersive/Frame_1000005767_u1zi9m.png"
          alt="net-ball"
        />
      </div>
    </div>
  );
};

export default StudentReviews;
