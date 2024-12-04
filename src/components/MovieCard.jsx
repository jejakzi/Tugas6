import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => (
  <Link
    to={`/movies/${movie.id}`}
    className="relative overflow-hidden text-white bg-gray-800 rounded-xl group"
  >
    <img
      src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
      alt={movie.title}
      className="rounded-xl"
    />
    <div className="absolute w-full -bottom-8">
      <div className="flex items-center w-full p-4 transition opacity-0 bg-black/50 translate -translate-y-1/4 group-hover:opacity-100 group-hover:-translate-y-1/2 hover:scale-110">
        <h3 className="text-sm font-bold">{movie.title}</h3>
      </div>
    </div>
  </Link>
);

export default MovieCard;
