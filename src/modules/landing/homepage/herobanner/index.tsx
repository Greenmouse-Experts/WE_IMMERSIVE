import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { useEffect, useRef, useState } from "react";
import { Autoplay } from "swiper/modules";

const HeroBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(100);
  const [timeLeft, setTimeLeft] = useState(10);

  const swiperRef = useRef<any>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        swiperRef.current.slideNext(); // Move to the next slide automatically
      }
      swiperRef.current.autoplay.pause = false;
    }, 10000); // Adjust the interval (e.g., 5000ms = 5 seconds)

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);


  const slides = [
    {
      image: "https://res.cloudinary.com/do2kojulq/image/upload/v1737302971/WE%20Immersive/2149548139_nxgjh5.jpg",
      mode: "Creators",
      title: "Unlock Fair Royalties for Your Digital Creations",
      description: "Take control of your earnings with transparent royalty collection",
      buttonText: "Explore now",
    },
    {
      image: "https://res.cloudinary.com/do2kojulq/image/upload/v1737302970/WE%20Immersive/1789_eqvshj.jpg",
      mode: "Institutions",
      title: "Unlock Future Creators with VR Education and Digital Art Training",
      description: "Equip students with next-gen skills through VR and gamified learning.",
      buttonText: "Explore now",
    },
    {
      image: "https://res.cloudinary.com/do2kojulq/image/upload/v1737303603/WE%20Immersive/2045_yg6e5n.jpg",
      mode: "Students",
      title: "Access Immersive, Hands-On Learning Experiences in Digital Content Creation",
      description: "Learn at your own pace with gamified courses and VR-driven education.",
      buttonText: "Explore now",
    },
    {
      image: "https://res.cloudinary.com/do2kojulq/image/upload/v1737304762/WE%20Immersive/DALL_E_2025-01-19_17.38.15_-_A_futuristic_3D_banner_showcasing_virtual_reality_in_education._The_banner_features_a_teacher_wearing_VR_goggles_standing_in_a_modern_classroom_with_h_otykgl.webp",
      mode: "Educators",
      title: "Empower Your Teaching with VR and 3D Technology",
      description: "Engage students with immersive teaching tools",
      buttonText: "Explore now",
    },
  ];


  useEffect(() => {
    // Countdown timer logic
    const interval = setInterval(() => {
      setProgress((prev) => (prev > 0 ? prev - 10 : 100)); // Decrease progress every second
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 10)); // Decrease time left every second
    }, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [activeIndex]);



  return (
    <div className="h-96 lg:h-[32rem] px-20 pt-3 w-full">
      <div className="flex w-full">
        {/* Left Carousel */}
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 10500, // 20 seconds autoplay delay
            disableOnInteraction: false,
            waitForTransition: true,
          }}
          onSwiper={(swiper) => (swiperRef.current = swiper)} 
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          slidesPerView={1}
          loop={true}
          className="md:w-[70%] w-full rounded-lg relative"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="h-96 lg:h-[30rem] bg-cover py-5 bg-gradient bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute top-0 w-full h-full bg-[rgba(0,0,0,0.5)]" />

                <div className="absolute inset-0 w-full z-[9999] flex items-center justify-start md:px-10 px-4 text-white bg-gradient-to-r from-black/60 via-black/40 to-transparent">
                  <div className="space-y-6 max-w-lg mt-1">
                    <h4 className="uppercase font-semibold text-sm tracking-wide">
                      {slide.mode}
                    </h4>
                    <h1 className="md:text-4xl text-xl font-bold">{slide.title}</h1>
                    <p className="text-lg">{slide.description}</p>
                    <button className="px-6 py-3 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition">
                      {slide.buttonText}
                    </button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}

          {/* Ring Timer */}
          <div className="absolute bottom-4 z-[90] right-4 md:w-12 md:h-12 w-10 h-10">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <circle
                cx="18"
                cy="18"
                r="16"
                stroke="gray"
                strokeWidth="2"
                fill="none"
                className="text-gray-200"
              />
              <circle
                cx="18"
                cy="18"
                r="16"
                stroke="white"
                strokeWidth="2"
                fill="none"
                strokeDasharray="100"
                strokeDashoffset={100 - progress}
                className="transition-all duration-1000 ease-linear"
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center text-white text-sm font-bold">
              {timeLeft}s
            </div>
          </div>
        </Swiper>

        {/* Right Indicators */}
        <div className="w-[30%] md:flex lg:h-[30rem] hidden flex-col justify-between py-1 pl-4">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`rounded-md transform transition-transform duration-200 dark:bg-gray-900 flex shadow-lg scale-100`}
            >
              <img src={`${slide.image}`} width={150} className="rounded-l-lg object-cover" />
              {/*activeIndex === index*/}
              <div className="py-[1.15rem] px-4 flex flex-col">
                <p className="font-bold text-sm uppercase">{slide.mode}</p>
                <p className="text-xs my-2">{slide.title}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
export default HeroBanner;
