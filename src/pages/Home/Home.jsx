import React from 'react';
import { useState, useEffect } from 'react';
import { TrendingMovie } from 'components/utils/api-request';
import MovieList from 'components/MovieList/MovieList';

export default function Home() {
  const [trendMovie, setTrendMovie] = useState([]);

  useEffect(() => {
    const fetchTrendMovie = async () => {
      try {
        const result = await TrendingMovie();
        setTrendMovie(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTrendMovie();
  }, []);

  return (
    <div>
      <MovieList movies={trendMovie} title="Trending movie:" />
    </div>
  );
}
