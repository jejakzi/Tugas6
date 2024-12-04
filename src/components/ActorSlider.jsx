import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FALLBACK_IMG, IMAGE_URL } from "../lib/constant";

const ActorSlider = ({ actors, title }) => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  if (actors.length === 0) {
    return null;
  }

  return (
    <div className="px-4 pt-10 md:px-32">
      <h2 className="mb-4 text-2xl font-bold text-center md:text-left">
        {title}
      </h2>
      <div className="relative flex items-center">
        <button
          ref={(node) => setPrevEl(node)}
          className="absolute z-10 items-center justify-center hidden w-12 h-12 -translate-y-1/2 rounded-full bg-white/50 lg:flex top-1/2 left-5 backdrop-blur-sm"
        >
          <IoIosArrowBack className="w-8 h-8 -ml-1 text-white" />
        </button>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={3}
          navigation={{ prevEl, nextEl }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 5 },
            768: { slidesPerView: 7 },
            1024: { slidesPerView: 9 },
          }}
          className="pb-6"
        >
          {actors.map((cast) => (
            <SwiperSlide key={cast.id}>
              <div
                key={cast.id}
                className="flex flex-col items-center gap-1 mt-8 text-center"
              >
                <img
                  loading="lazy"
                  onError={(e) => (e.target.src = FALLBACK_IMG)}
                  src={`${IMAGE_URL}/w500/${cast.profile_path}`}
                  alt={cast.name}
                  className="object-cover object-center w-full rounded-full aspect-square"
                />
                <h3 className="text-xs font-bold md:text-sm">{cast.name}</h3>
                <span className="text-[10px] md:text-xs font-light text-gray-400">
                  as {cast.character}
                </span>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          ref={(node) => setNextEl(node)}
          className="absolute z-10 items-center justify-center hidden w-12 h-12 -translate-y-1/2 rounded-full bg-white/50 lg:flex top-1/2 right-5 backdrop-blur-sm"
        >
          <IoIosArrowForward className="w-8 h-8 -mr-1 text-white" />
        </button>
      </div>
    </div>
  );
};

export default ActorSlider;
