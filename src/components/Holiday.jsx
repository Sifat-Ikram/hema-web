import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";
import img1 from "../assets/holiday/img1.webp";
import img2 from "../assets/holiday/img2.jpg";
import img3 from "../assets/holiday/img3.webp";
import img4 from "../assets/holiday/img4.webp";
import img5 from "../assets/holiday/img5.webp";

const Holiday = () => {
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
    <div className="w-11/12 mx-auto my-20">
      <h1 className="text-3xl font-bold">get ready for the holidays</h1>
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
              slidesPerView: 3,
              slidesPerGroup: 2,
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
          <SwiperSlide>
            <div className="flex flex-col cursor-pointer group">
              <div>
                <img
                  src={img1}
                  className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 h-full w-full"
                  alt={"title"}
                />
              </div>
              <div className="p-5 bg-[#f37b02] space-y-3 rounded-b-md">
                <h1 className="text-2xl font-bold">cozy grrriezelen</h1>
                <p>make it a spooky halloween party</p>
                <div>
                  <button className="bg-transparent mt-8 border-2 border-solid border-black group-hover:bg-black shadow p-4 rounded-full">
                    <GoArrowRight className="text-2xl text-black group-hover:text-white" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col cursor-pointer group">
              <div>
                <img
                  src={img2}
                  className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 h-full w-full"
                  alt={"title"}
                />
              </div>
              <div className="p-5 bg-[#007F63] space-y-3 rounded-b-md text-white">
                <h1 className="text-2xl font-bold">branch & seepie</h1>
                <p>
                  Let the magic of the holidays come to life with our iconic
                  friends Takkie and Siepiel
                </p>
                <div>
                  <button className="bg-transparent mt-2 border-2 border-solid border-white group-hover:bg-white shadow p-4 rounded-full">
                    <GoArrowRight className="text-2xl text-white group-hover:text-black" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col cursor-pointer group">
              <div>
                <img
                  src={img3}
                  className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 h-full w-full"
                  alt={"title"}
                />
              </div>
              <div className="p-5 bg-[#DA1F73] space-y-3 rounded-b-md text-white">
                <h1 className="text-2xl font-bold">Santa Claus</h1>
                <p>discover our range and find the nicest Sinterklaas items</p>
                <div>
                  <button className="bg-transparent mt-2 border-2 border-solid border-white group-hover:bg-white shadow p-4 rounded-full">
                    <GoArrowRight className="text-2xl text-white group-hover:text-black" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col cursor-pointer group">
              <div>
                <img
                  src={img4}
                  className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 h-full w-full"
                  alt={"title"}
                />
              </div>
              <div className="p-5 bg-[#B68A52] space-y-3 rounded-b-md text-white">
                <h1 className="text-2xl font-bold">the anticipation begins</h1>
                <p>discover our newest christmas items</p>
                <div>
                  <button className="bg-transparent mt-8 border-2 border-solid border-white group-hover:bg-white shadow p-4 rounded-full">
                    <GoArrowRight className="text-2xl text-white group-hover:text-black" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="flex flex-col cursor-pointer group">
              <div>
                <img
                  src={img5}
                  className="rounded-md transition-transform duration-300 ease-in-out group-hover:scale-105 h-full w-full"
                  alt={"title"}
                />
              </div>
              <div className="p-5 bg-[#B68A52] space-y-3 rounded-b-md text-white">
                <h1 className="text-2xl font-bold">chocolate letters at HEMA</h1>
                <p>very honest</p>
                <div>
                  <button className="bg-transparent mt-8 border-2 border-solid border-white group-hover:bg-white shadow p-4 rounded-full">
                    <GoArrowRight className="text-2xl text-white group-hover:text-black" />
                  </button>
                </div>
              </div>
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

export default Holiday;
