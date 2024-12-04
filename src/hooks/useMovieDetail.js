import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../lib/constant";

const useMovieDetail = (id) => {
  const [movie, setMovie] = useState(null);
  const [videos, setVideos] = useState([]);
  const [actors, setActors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchMovieDetail = async () => {
      try {
        setLoading(true);
        const [detailRes, videoRes, actorRes] = await Promise.all([
          fetch(`${API_URL}/movie/${id}?api_key=${API_KEY}`),
          fetch(`${API_URL}/movie/${id}/videos?api_key=${API_KEY}`),
          fetch(`${API_URL}/movie/${id}/credits?api_key=${API_KEY}`),
        ]);

        setMovie(await detailRes.json());
        setVideos((await videoRes.json()).results.slice(0, 3) || []);
        setActors((await actorRes.json()).cast || []);
      } catch (err) {
        console.log(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetail();
  }, [id]);

  return { movie, loading, videos, actors };
};

export default useMovieDetail;
