import { useState, useEffect } from "react";
import axios from "axios";

const useTrailer = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const [movieList, setMovieList] = useState([]);
  const [trailer, setTrailer] = useState([]);
  const [error, setError] = useState(null);

  const fetchMovies = async () => {
    try {
      const response = await axios.get(url, {
        params: {
          api_key: process.env.REACT_APP_MOVIE_API_KEY,
          append_to_response: "videos,images",
        },
      });

      const data = response.data;
      if (data) {
        setMovies(data.results);
        setMovieList(data);
        setTrailer(data.videos.results);
      }

      setIsLoading(null);
      setError(null);
    } catch (error) {
      console.log("Error: ", error.message);
      setError(error.message);
      setIsLoading(null)
      
    }
  };

  useEffect(() => {
    fetchMovies();
    // eslint-disable-next-line
  }, [url]);

  return { movies, movieList, isLoading, trailer, error };
};

export default useTrailer;