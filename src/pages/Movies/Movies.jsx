import React from 'react';
import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';
import { GetMovieBySearch } from 'components/utils/api-request';

export default function Movies() {
  // const [query, setQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();

  // считываем значение query в строке поиска и передаем в функцию поиска ниже
  const query = searchParams.get('query');

  useEffect(() => {
    if (query) {
      const fetchSearchMovies = async () => {
        try {
          const data = await GetMovieBySearch(query);
          setSearchMovies(data);
        } catch (error) {
          console.log(error);
        }
      };
      fetchSearchMovies();
    }
    return;
  }, [query]);

  const changeQuery = q => {
    // setSearchParams меняет строку поиска
    setSearchParams({ query: q });
  };

  return (
    <div>
      <SearchForm onSubmit={changeQuery} />
      {searchMovies.length > 0 && <MovieList movies={searchMovies} />}
    </div>
  );
}
