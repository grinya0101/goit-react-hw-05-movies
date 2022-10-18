import React from 'react';
import { StyledLink, StyledTitle } from './MovieList.styled';

export default function MovieList({ movies, title = null }) {
  return (
    <>
      {title && <StyledTitle>{title}</StyledTitle>}
      <ol>
        {movies.map(({ id, original_title }) => {
          return (
            <li key={id}>
              <StyledLink to={`/movies/${id}`}>{original_title}</StyledLink>
            </li>
          );
        })}
      </ol>
    </>
  );
}

MovieList.defaultProps = {
  movies: [],
};
