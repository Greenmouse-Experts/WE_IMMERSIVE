"use client";
import { useCallback, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { register } from "swiper/element/bundle";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import next from "../../../../assets/svg/left.svg"
import prev from "../../../../assets/svg/right.svg"
import { FaStar } from "react-icons/fa6";

register();

const SwiperSection = () => {
  const sliderRef = useRef<any>(null);
  const [slideId, setSlideId] = useState(0);
  const items = [
    {
      image:
        "https://res.cloudinary.com/do2kojulq/image/upload/v1728997588/WE%20Immersive/game_oul73t.png",
        name: "Chukka Kingdom Tour",
        title: "Chukka Uzo",
        profile: "https://res.cloudinary.com/do2kojulq/image/upload/v1729006630/WE%20Immersive/F16CB5E3-D175-4ADA-AC99-272BB7542F01_2_g8hta5.png",
    },
    {
      image:
        "https://res.cloudinary.com/do2kojulq/image/upload/v1728997627/WE%20Immersive/zenit_s78qfc.png",
        name: "Chukka Kingdom Tour",
        title: "Chukka Uzo",
        profile: "https://res.cloudinary.com/do2kojulq/image/upload/v1729006630/WE%20Immersive/F16CB5E3-D175-4ADA-AC99-272BB7542F01_2_g8hta5.png",
    },
    {
      image:
        "https://res.cloudinary.com/do2kojulq/image/upload/v1728997628/WE%20Immersive/castle_eoaney.png",
        name: "Chukka Kingdom Tour",
        title: "Chukka Uzo",
        profile: "https://res.cloudinary.com/do2kojulq/image/upload/v1729006630/WE%20Immersive/F16CB5E3-D175-4ADA-AC99-272BB7542F01_2_g8hta5.png",
    },
    {
      image:
        "https://res.cloudinary.com/do2kojulq/image/upload/v1728997628/WE%20Immersive/farmin_p4ijt8.png",
        name: "Chukka Kingdom Tour",
        title: "Chukka Uzo",
        profile: "https://res.cloudinary.com/do2kojulq/image/upload/v1729006630/WE%20Immersive/F16CB5E3-D175-4ADA-AC99-272BB7542F01_2_g8hta5.png",
    },
    {
      image:
        "https://res.cloudinary.com/do2kojulq/image/upload/v1728997589/WE%20Immersive/parlor_wrpuro.png",
        name: "Chukka Kingdom Tour",
        title: "Chukka Uzo",
        profile: "https://res.cloudinary.com/do2kojulq/image/upload/v1729006630/WE%20Immersive/F16CB5E3-D175-4ADA-AC99-272BB7542F01_2_g8hta5.png",
    },
    {
      image:
        "https://res.cloudinary.com/do2kojulq/image/upload/v1728919409/WE%20Immersive/image_20_kjfi7p.png",
        name: "Chukka Kingdom Tour",
        title: "Chukka Uzo",
        profile: "https://res.cloudinary.com/do2kojulq/image/upload/v1729006630/WE%20Immersive/F16CB5E3-D175-4ADA-AC99-272BB7542F01_2_g8hta5.png",
    },
    {
      image:
        "https://res.cloudinary.com/do2kojulq/image/upload/v1728902835/WE%20Immersive/image_7_ffbajt.png",
        name: "Chukka Kingdom Tour",
        title: "Chukka Uzo",
        profile: "https://res.cloudinary.com/do2kojulq/image/upload/v1729006630/WE%20Immersive/F16CB5E3-D175-4ADA-AC99-272BB7542F01_2_g8hta5.png",
    },
    {
      image:
        "https://res.cloudinary.com/do2kojulq/image/upload/v1728919409/WE%20Immersive/image_20_kjfi7p.png",
        name: "Chukka Kingdom Tour",
        title: "Chukka Uzo",
        profile: "https://res.cloudinary.com/do2kojulq/image/upload/v1729006630/WE%20Immersive/F16CB5E3-D175-4ADA-AC99-272BB7542F01_2_g8hta5.png",
    },
  ];

  const handleCurrentIndex = (slideId: number) => {
    setSlideId(slideId);
  };

  const getActives = () => {
    const previousNumber = slideId - 1;
    const nextNumber = slideId + 1;

    const resultArray = [previousNumber, slideId, nextNumber];
    return resultArray;
  };

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="mt-12 w-full">
      <div className="w-full roller border-2 border-transparent">
        <Swiper
          ref={sliderRef}
          grabCursor={true}
          modules={[Navigation]}
          centeredSlides={true}
          preventInteractionOnTransition
          slidesPerView={5}
          initialSlide={2}
          breakpoints={{
            375: {
              spaceBetween: 6,
            },
            475: {
              spaceBetween: 6,
            },
            960: {
              spaceBetween: 20,
            },
          }}
          className=""
          onRealIndexChange={(element) =>
            handleCurrentIndex(element.activeIndex)
          }
        >
          {items.map((item, i) => (
            <SwiperSlide
              key={i}
              className={`rounded-[30px] w-[200px] relative`}
            >
              <div
                className={`rounded-[30px] relative flex items-end w-full h-full overflow-hidden ${
                  getActives().includes(i)
                    ? "duration-100"
                    : "mt-20 !h-[250px]"
                }`}
              >
                <div className="absolute rounded-[30px] z-10 w-full h-full top-0 left-0 cover-gradient"></div>
                <img
                  src={item.image}
                  alt="banner-image"
                  className="w-full h-full object-cover absolute top-0 left-0"
                />
                <div className="relative text-white z-20 p-5 pb-3">
                    <p className="">{item.name}</p>
                    <div className="flex gap-x-2 mt-1">
                        <img src={item.profile} alt="profile" className="w-9 shrink-0" />
                        <div className="">
                            <p className="fs-300">{item.title}</p>
                            <div className="flex gap-x-[1px] pl-[1px]">
                                <FaStar className="text-[12px] text-[#FFD154]"/>
                                <FaStar className="text-[12px] text-[#FFD154]"/>
                                <FaStar className="text-[12px] text-[#FFD154]"/>
                                <FaStar className="text-[12px] text-[#FFD154]"/>
                                <FaStar className="text-[12px] text-[#FFD154]"/>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* controls */}
      <div className="flex gap-x-5 justify-center mt-6">
        <div
          onClick={handlePrev}
          className={
            "w-12 h-12 bg-white cursor-pointer place-center rounded-full !shadow"
          }
        >
          <img src={prev} alt="" />
        </div>
        <div
          onClick={handleNext}
          className={"w-12 h-12 bg-white cursor-pointer place-center rounded-full !shadow "}
        >
              <img src={next} alt="" />
        </div>
      </div>
    </div>
  );
};

export default SwiperSection;
