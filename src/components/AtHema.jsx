import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import img1 from "../assets/hema/img1.webp";
import img2 from "../assets/hema/img2.webp";
import img3 from "../assets/hema/img3.jpg";
import img4 from "../assets/hema/img4.webp";
import img5 from "../assets/hema/img5.jpg";

// Array of slide items
const slideItems = [
  {
    image: img1,
    title: "HEMAgazine",
    details: "happy at home: everything for a beautiful and comfortable home",
  },
  {
    image: img2,
    title: "spin & win",
    details: "one of the many prizes and always 15% discount",
  },
  {
    image: img3,
    title: "made with love: fitted sheet",
    details:
      "with our handy fitted sheet with corner label, your sheet will fit right at first...",
  },
  {
    image: img4,
    title: "Halloween in Julianatoren Children's Amusement Park",
    details: "from 29.50 for 20-",
  },
  {
    image: img5,
    title: "Hema bungalow weeks with center Parcs",
    details: "now from $159- per 4-person accommodation",
  },
];

const AtHema = () => {
  const swiperRef = useRef(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="flex justify-between items-center">
        <div className="space-y-3">
          <h1 className="text-3xl text-gray-700 font-bold">now at HEMA</h1>
        </div>
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <p className="text-xl font-semibold">view all</p>
          <GoArrowRight className="text-3xl text-black" />
        </div>
      </div>
      <div className="mt-8 relative">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          slidesPerGroup={1}
          slidesPerGroupSkip={0}
          navigation={false}
          breakpoints={{
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            1024: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}
          modules={[Navigation]}
          className="mySwiper"
          ref={swiperRef}
          onReachBeginning={() => setIsBeginning(true)}
          onFromEdge={() => setIsBeginning(false)}
          onReachEnd={() => setIsEnd(true)}
          onSlidePrevTransitionEnd={() => setIsEnd(false)}
        >
          {slideItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col cursor-pointer group space-y-2">
                <div className="relative">
                  <img
                    src={item.image}
                    className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 h-full w-full"
                    alt={item.title}
                  />
                </div>
                <p className="text-base font-bold">{item.title}</p>
                <p className="text-base">{item.details}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Buttons */}
        {!isBeginning && (
          <button
            className="absolute top-1/2 transform -translate-y-1/2 left-0 z-10 bg-white shadow p-5 rounded-full"
            onClick={handlePrev}
          >
            <GoArrowLeft className="text-3xl" />
          </button>
        )}
        {!isEnd && (
          <button
            className="absolute top-1/2 transform -translate-y-1/2 right-0 z-10 bg-white shadow p-5 rounded-full"
            onClick={handleNext}
          >
            <GoArrowRight className="text-3xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default AtHema;
