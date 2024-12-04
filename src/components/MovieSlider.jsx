import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import MovieCard from "./MovieCard";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

const MovieSlider = ({ movies, title }) => {
  const [prevEl, setPrevEl] = useState(null);
  const [nextEl, setNextEl] = useState(null);

  return (
    <div className="mb-8">
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
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
          slidesPerView={2}
          navigation={{ prevEl, nextEl }}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 5 },
            1024: { slidesPerView: 7 },
          }}
          className="pb-6"
        >
          {movies.map((movie) => (
            <SwiperSlide key={movie.id}>
              <MovieCard movie={movie} />
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

export default MovieSlider;
