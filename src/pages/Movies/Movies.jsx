import React from 'react';
import { useState, useEffect } from 'react';
import SearchForm from 'components/SearchForm/SearchForm';
import MovieList from 'components/MovieList/MovieList';
import { GetMovieBySearch } from 'components/utils/api-request';

export default function Movies() {
  const [query, setQuery] = useState('');
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    if (query !== '') {
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
  }, [query]);

  const changeQuery = q => {
    console.log(q);
    setQuery(q);
  };

  return (
    <div>
      <SearchForm onSubmit={changeQuery} />
      {searchMovies.length > 0 && <MovieList movies={searchMovies} />}
    </div>
  );
}
