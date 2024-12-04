import { useState, useEffect } from "react";
import { API_KEY, API_URL } from "../lib/constant";

const useMovies = () => {
  const [nowPlaying, setNowPlaying] = useState([]);
  const [popular, setPopular] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const [nowPlayingRes, popularRes, topRatedRes, upcomingRes] =
          await Promise.all([
            fetch(`${API_URL}/movie/now_playing?api_key=${API_KEY}`),
            fetch(`${API_URL}/movie/popular?api_key=${API_KEY}`),
            fetch(`${API_URL}/movie/top_rated?api_key=${API_KEY}`),
            fetch(`${API_URL}/movie/upcoming?api_key=${API_KEY}`),
          ]);

        setNowPlaying((await nowPlayingRes.json()).results || []);
        setPopular((await popularRes.json()).results || []);
        setTopRated((await topRatedRes.json()).results || []);
        setUpcoming((await upcomingRes.json()).results || []);
      } catch (error) {
        console.error("Failed to fetch movies:", error);
      } finally {
        setTimeout(() => setLoading(false), 3000);
      }
    };

    fetchMovies();
  }, []);

  return { nowPlaying, popular, topRated, upcoming, loading };
};

export default useMovies;
