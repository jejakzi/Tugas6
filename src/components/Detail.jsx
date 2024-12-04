import React from "react";
import { Link } from "react-router-dom";
import {
  formatDate,
  formatGenres,
  formatRating,
  formatRuntime,
  getYear,
} from "../lib/formater";
import { IMAGE_URL } from "../lib/constant";
import { GoHeartFill, GoStarFill } from "react-icons/go";
import { AiOutlineLink } from "react-icons/ai";

const Detail = ({ movie, toggleFavorite, favorites }) => {
  return (
    <div className="relative mt-36">
      <img
        src={`${IMAGE_URL}/w1280/${movie?.backdrop_path}`}
        loading="lazy"
        width="100%"
        height="100%"
        alt={movie?.title}
        className="object-cover object-center w-full h-[756px] md:h-[576px] rounded-xl opacity-10"
      />
      <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full gap-4 px-4 md:flex-row md:gap-8 md:px-32">
        <div className="flex-none w-36 md:w-64">
          <img
            src={`${IMAGE_URL}/w500/${movie?.poster_path}`}
            loading="lazy"
            alt={movie?.title}
            className="w-full h-full rounded-xl"
          />
        </div>
        <div className="flex flex-col gap-4 text-center md:text-left">
          <h2 className="text-2xl font-bold md:text-4xl">
            {movie?.title}{" "}
            <span className="font-normal text-gray-400">
              ({getYear(movie?.release_date)})
            </span>
          </h2>
          <span className="font-bold tracking-wide">{movie?.tagline}</span>
          <span className="text-sm font-light text-gray-400">
            {formatDate(movie?.release_date)} | {formatGenres(movie?.genres)} |{" "}
            {formatRuntime(movie?.runtime)}
          </span>
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <GoStarFill className="text-yellow-400" />{" "}
            {formatRating(movie?.vote_average)}{" "}
            <span className="text-sm text-gray-400">
              ({movie?.vote_count} votes)
            </span>
          </div>
          <p className="mt-4">{movie?.overview}</p>
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <div
              onClick={toggleFavorite}
              className="flex items-center justify-center w-12 h-12 rounded-full cursor-pointer bg-white/10 hover:bg-white/20"
            >
              <GoHeartFill
                className={
                  favorites.find((fav) => fav.id === movie?.id)
                    ? "text-red-500"
                    : ""
                }
              />
            </div>
            <Link
              target="_blank"
              to={movie?.homepage}
              className="flex items-center justify-center w-12 h-12 p-2 rounded-full bg-white/10"
            >
              <AiOutlineLink />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
