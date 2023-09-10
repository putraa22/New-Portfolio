import React from "react";

// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";

// import swiper style
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

// data
export const serviceData = [
  {
    icon: <RxPencil2 />,
    title: "UI Development",
    description:
      "I will design and develop user interfaces that are engaging and focused on optimal user experience. ",
  },
  {
    icon: <RxCrop />,
    title: "Responsive",
    description:
      "The websites and apps I create will be responsive, will adjust to different device screen sizes.",
  },
  {
    icon: <RxDesktop />,
    title: "Development",
    description:
      "I will implement the necessary interactions and functions using JavaScript in the development process.",
  },
  {
    icon: <RxRocket />,
    title: "Performance",
    description:
      "I will make sure your website or app has fast load times and optimized performance.",
  },
  {
    icon: <RxReader />,
    title: "API Integration",
    description:
      "If you require integration with third-party services or APIs, I can manage this for you.",
  },
];

// import required module
import { FreeMode, Pagination } from "swiper";

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[FreeMode, Pagination]}
      className="h-[240px] sm:h-[340px] "
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className=" bg-indigo-700/5 h-max rounded-lg px-6 py-5 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-white/5 transition-all duration-300">
              {/* icon */}
              <div className="text-4xl text-accent mb-2 ">{item.icon}</div>
              {/* title & Desc */}
              <div className="mb-5">
                <div className="mb-1 text-lg ">{item.title}</div>
                <p className="max-w-[350px] leading-normal ">
                  {item.description}
                </p>
              </div>
              {/* Arrow */}
              <div className="text-3xl ">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSlider;
