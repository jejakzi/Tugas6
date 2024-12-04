import React, { useEffect } from "react";
import Lottie from "lottie-react";
import MovieCard from "../components/MovieCard";
import { useAuth } from "../context/AuthProvider";
import animation from "../assets/empty.json";

const Favorites = () => {
  const { favorites } = useAuth();

  useEffect(() => {
    document.title = "My Favorites - Cinema Online";
  }, []);

  if (favorites.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center h-[576px] mt-36">
        <Lottie animationData={animation} loop autoPlay />
        <p className="text-sm font-light text-center text-gray-400">
          Favorites is empty !
        </p>
      </div>
    );
  }

  return (
    <div className="px-4 py-10 mb-12 mt-36 md:px-32">
      <h2 className="mb-8 text-2xl font-bold">
        Daftar Film Favorit{" "}
        <span className="font-normal text-gray-400">({favorites.length})</span>
      </h2>
      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {favorites.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
