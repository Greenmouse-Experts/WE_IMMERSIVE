import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/element/css/effect-fade";
import "swiper/css/bundle";
import "swiper/css/effect-cube";
import { register } from "swiper/element/bundle";

register();
const HeroImage = () => {
  const data = [
    "https://res.cloudinary.com/do2kojulq/image/upload/v1728572607/WE%20Immersive/Property_1_Component_4_qjew6m.png",
    "https://res.cloudinary.com/do2kojulq/image/upload/v1728572607/WE%20Immersive/Property_1_Component_5_avshi2.png",
    "https://res.cloudinary.com/do2kojulq/image/upload/v1728572607/WE%20Immersive/Property_1_Component_7_npbiqy.png",
  ];
  return (
    <div className="lg:p-5">
      <Swiper
        effect={"cube"}
        grabCursor={true}
        cubeEffect={{
          shadow: true,
          slideShadows: true,
          shadowOffset: 20,
          shadowScale: 0.94,
        }}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={18}
        className="w-full pb-6"
      >
        {data.map((item) => (
          <SwiperSlide className="" key={item}>
            <img src={item} alt="banner-image" className="w-full"/>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroImage;
