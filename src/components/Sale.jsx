import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

import img1 from "../assets/sale/img1.webp";
import img2 from "../assets/sale/img2.webp";
import img3 from "../assets/sale/img3.webp";
import img4 from "../assets/sale/img4.webp";
import img5 from "../assets/sale/img5.webp";
import img6 from "../assets/sale/img6.webp";
import img7 from "../assets/sale/img7.jpg";
import img8 from "../assets/sale/img8.jpg";
import { Link } from "react-router-dom";

// Array of slide items
const slideItems = [
  {
    image: img1,
    title: "ladies nightwear and slippers",
    amount: "30%",
    text: "korting",
  },
  {
    image: img2,
    title: "children's nightwear and slippers",
    amount: "30%",
    text: "korting",
  },
  {
    image: img3,
    title: "men's basic t-shirts",
    amount: "30%",
    text: "korting",
  },
  {
    image: img4,
    title: "photo gifts",
    amount: "30%",
    text: "korting",
  },
  {
    image: img5,
    title: "baby nightwear and slippers",
    amount: "30%",
    text: "korting",
  },
  {
    image: img6,
    title: "Prosthetic bra",
    amount: "30%",
    text: "korting",
  },
  {
    image: img7,
    title: "women's vest",
    amount: "25%",
    text: "korting",
  },
  {
    image: img8,
    title: "plaids",
    amount: "30%",
    text: "korting",
  },
];

const Sale = () => {
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
          <h1 className="text-3xl text-gray-700 font-bold">now on sale</h1>
          <p className="text-base">valid until October 20</p>
        </div>
        <div className="flex justify-center items-center gap-2 cursor-pointer">
          <p className="text-xl font-semibold">view all</p>
          <GoArrowRight className="text-3xl text-black" />
        </div>
      </div>
      <div className="mt-4 relative">
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
                  <div className="bg-red-600 p-2 rounded-sm w-fit absolute top-4 left-4">
                    <h1 className="text-white text-4xl font-bold">
                      {item.amount}
                    </h1>
                    <h1 className="text-white text-xl">{item.text}</h1>
                  </div>
                </div>
                <p className="text-base font-bold">{item.title}</p>
              </div>
            </SwiperSlide>
          ))}

          {/* Last slide with button */}
          <SwiperSlide>
            <div className="cursor-pointer group space-y-2 py-[132px] rounded-md px-28 bg-base-200 h-full w-full flex justify-center items-center">
              <Link to={"/moreOffer"}>
                <div className="flex flex-col items-center">
                  <button className="bg-transparent border-2 border-solid border-black group-hover:bg-black z-10 shadow p-5 rounded-full mb-2">
                    <GoArrowRight className="text-3xl text-black group-hover:text-white" />
                  </button>
                  <p className="text-white text-sm font-bold flex space-x-2">
                    <span>more</span>
                    <span>offers</span>
                  </p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
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

export default Sale;
