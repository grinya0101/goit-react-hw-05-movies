import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loader from 'components/Loader/Loader';

// Импорт ниже применятеся для того, чтобы постепенно загружать страницы.
// При необходимости (При нажатии на ссылку). Для экономии траффика. Работает в паре
// с < Suspense fallback = {< Loader />}>
const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const Cast = lazy(() => import('./components/Cast/Cast'));
const Reviews = lazy(() => import('./components/Reviews/Reviews'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const UserRoutes = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default UserRoutes;
