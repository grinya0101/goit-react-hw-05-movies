import { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './Header/Header';
import Loader from './Loader/Loader';
import { TrendingMovie } from './utils/api-request';
import TrendMovie from './TrendMovie/TrendMovie';

export const App = () => {
  const [trendMovie, setTrendMovie] = useState([]);

  useEffect(() => {
    TrendingMovie().then(res => setTrendMovie(res.results));
  }, []);

  console.log(trendMovie);

  return (
    <>
      <Header />
      <Loader />
      <TrendMovie trends={trendMovie} />
      <Routes>
        <Route />
      </Routes>
    </>
  );
};
