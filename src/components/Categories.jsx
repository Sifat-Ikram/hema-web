import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import santa from "../assets/categories/santa.webp";
import baby from "../assets/categories/baby.webp";
import child from "../assets/categories/child.webp";
import lady from "../assets/categories/lady.webp";
import men from "../assets/categories/men.webp";
import living from "../assets/categories/living.webp";
import food from "../assets/categories/food.webp";
import office from "../assets/categories/office.webp";
import cooking from "../assets/categories/cooking.webp";
import gift from "../assets/categories/gift.webp";
import beauty from "../assets/categories/beauty.webp";
import toy from "../assets/categories/toy.webp";
import photo from "../assets/categories/photo.webp";
import friends from "../assets/categories/friends.webp";
import offer from "../assets/categories/offer.webp";
import latest from "../assets/categories/new.webp";
import { useRef, useState } from "react";
import { GoArrowLeft, GoArrowRight } from "react-icons/go";

const Categories = () => {
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
    <div className="w-11/12 mx-auto mt-10 mb-16 relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        slidesPerGroup={1}
        slidesPerGroupSkip={0}
        navigation={false}
        breakpoints={{
          640: {
            slidesPerView: 2,
            slidesPerGroup: 2,
          },
          // Medium screens (tablets)
          768: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          // Large screens (laptops/desktops)
          1024: {
            slidesPerView: 8,
            slidesPerGroup: 8,
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
        {/* Each div now has its own SwiperSlide */}
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer group">
            <img
              src={santa}
              className="rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="text-sm mt-4 font-semibold text-center">
              Santa Claus
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer group">
            <img
              src={baby}
              className="rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="text-sm mt-4 font-semibold text-center">baby</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer group">
            <img
              src={child}
              className="rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="text-sm mt-4 font-semibold text-center">child</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer group">
            <img
              src={lady}
              className="rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="text-sm mt-4 font-semibold text-center">ladies</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer group">
            <img
              src={men}
              className="rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="text-sm mt-4 font-semibold text-center">Gentleman</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer group">
            <img
              src={living}
              className="rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="text-sm mt-4 font-semibold text-center">
              living and sleeping
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer group">
            <img
              src={food}
              className="rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="text-sm mt-4 font-semibold text-center">
              cake, food and drinks
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer group">
            <img
              src={office}
              className="rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="text-sm mt-4 font-semibold text-center">
              leisure and office
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer group">
            <img
              src={cooking}
              className="rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="text-sm mt-4 font-semibold text-center">
              cooking and dining
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer group">
            <img
              src={gift}
              className="rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="text-sm mt-4 font-semibold text-center">
              party and gift
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer group">
            <img
              src={beauty}
              className="rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="text-sm mt-4 font-semibold text-center">
              beautiful and healthy
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer group">
            <img
              src={toy}
              className="rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="text-sm mt-4 font-semibold text-center">toys</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer group">
            <img
              src={photo}
              className="rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="text-sm mt-4 font-semibold text-center">
              photo service
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer group">
            <img
              src={friends}
              className="rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="text-sm mt-4 font-semibold text-center">
              friends prices
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer group">
            <img
              src={offer}
              className="rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="text-sm mt-4 font-semibold text-center">
              offers and sales
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col justify-center items-center cursor-pointer group">
            <img
              src={latest}
              className="rounded-full transition-transform duration-300 ease-in-out group-hover:scale-110"
            />
            <p className="text-sm mt-4 font-semibold text-center">new</p>
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
  );
};

export default Categories;
