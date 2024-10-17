import man from "../assets/living/man.avif";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

// Import images
import img1 from "../assets/living/img1.webp";
import img2 from "../assets/living/img2.webp";
import img3 from "../assets/living/img3.webp";
import img4 from "../assets/living/img4.webp";
import img5 from "../assets/living/img5.webp";
import img6 from "../assets/living/img6.webp";
import img7 from "../assets/living/img7.webp";
import img8 from "../assets/living/img8.webp";
import img9 from "../assets/living/img9.webp";
import img10 from "../assets/living/img10.webp";
import { Link } from "react-router-dom";

// Array of slide items
const slideItems = [
  {
    image: img1,
    title: "duvet covers and fitted sheets",
    validity: "valid until October 20",
    amount: "30%",
    text: "korting",
  },
  {
    image: img2,
    title: "heating pads and hot water bottles",
    validity: "valid until October 20",
    amount: "30%",
    text: "korting",
  },
  {
    image: img3,
    title: "duvets and pillows",
    validity: "valid until October 20",
    amount: "30%",
    text: "korting",
  },
  {
    image: img4,
    title: "(led) candles and mood lights",
    validity: "valid until October 20",
    amount: "40%",
    text: "korting",
  },
  {
    image: img5,
    title: "crockery",
    validity: "valid until October 20",
    amount: "2+1",
    text: "gratis",
  },
  {
    image: img6,
    title: "kitchen textiles",
    validity: "valid until October 20",
    amount: "30%",
    text: "korting",
  },
  {
    image: img7,
    title: "plants, artificial flowers, vases and flower pots",
    validity: "valid until October 20",
    amount: "30%",
    text: "korting",
  },
  {
    image: img8,
    title: "candle accessories",
    validity: "valid until October 20",
    amount: "30%",
    text: "korting",
  },
  {
    image: img9,
    title: "storage boxes",
    validity: "valid until October 20",
    amount: "30%",
    text: "korting",
  },
  {
    image: img10,
    title: "window decoration",
    validity: "valid until October 20",
    amount: "25%",
    text: "korting",
  },
];

const Living = () => {
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
    <div className="mx-1 my-20 relative">
      <div className="rounded-md px-10 pt-24 pb-48 bg-[#ce8dff] relative">
        <div className="space-y-6">
          <h1 className="text-left text-5xl font-bold">
            everything to <br /> make your house a <br /> cheerful home
          </h1>
          <p>from colorful candles to bedding to dream away in</p>
          <button className="border-gray-700 border-2 border-solid px-10 py-3 bg-transparent hover:bg-gray-700 rounded-lg hover:text-white font-semibold">
            discover living and sleeping
          </button>
        </div>
        <div>
          <img
            src={man}
            alt="man"
            className="absolute right-10 h-[428px] -top-8 w-[750px] rounded-lg"
          />
        </div>
      </div>
      <div className="w-11/12 mx-auto relative -mt-28">
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
                <p className="text-base">{item.validity}</p>
              </div>
            </SwiperSlide>
          ))}

          {/* Last slide with button */}
          <SwiperSlide>
            <div className="cursor-pointer group space-y-2 py-[132px] rounded-md px-28 bg-[#9233da] h-full w-full flex justify-center items-center">
              <Link to={"/moreOffer"}>
                <div className="flex flex-col items-center">
                  <button className="bg-transparent border-2 border-solid border-white group-hover:bg-white z-10 shadow p-5 rounded-full mb-2">
                    <GoArrowRight className="text-3xl text-white group-hover:text-black" />
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

export default Living;
