import { useParams } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import Loader from "../components/Loader";
import Detail from "../components/Detail";
import { useAuth } from "../context/AuthProvider";
import useMovieDetail from "../hooks/useMovieDetail";
import { getYear } from "../lib/formater";
import { useEffect } from "react";
import ActorSlider from "../components/ActorSlider";
import VideosSection from "../components/VideosSection";

const MovieDetail = () => {
  const { id } = useParams();

  const { movie, loading, videos, actors } = useMovieDetail(id);
  const { favorites, addFavorite, removeFavorite } = useAuth();

  const toggleFavorite = () => {
    if (favorites.find((fav) => fav.id === movie?.id)) {
      removeFavorite(movie);
    } else {
      addFavorite(movie);
    }
  };

  useEffect(() => {
    if (movie) {
      document.title = `${movie?.title} (${getYear(
        movie?.release_date
      )}) - Movie Details`;
    }

    return () => {
      document.title = "Cinema Online";
    };
  }, [movie]);

  if (loading) {
    return (
      <div className="w-full h-[576px] flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <Detail
        movie={movie}
        toggleFavorite={toggleFavorite}
        favorites={favorites}
      />
      <ActorSlider actors={actors} title="Pemeran Unggulan" />
      <VideosSection title={movie?.title} videos={videos} />
    </>
  );
};

export default MovieDetail;
