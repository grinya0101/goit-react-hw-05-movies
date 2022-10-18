import { useLocation } from 'react-router-dom';
import {
  StyledLink,
  StyledTitle,
  StyledList,
  StyledItem,
} from './MovieList.styled';

export default function MovieList({ movies, title = null }) {
  // показывае по какому адресу сейчас находишься

  const location = useLocation();

  // размеры картинок w92, w154, w185, w342, w500, w780, "original"
  const baseImgUrl = 'https://image.tmdb.org/t/p/w342/';

  const noImage =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

  return (
    <>
      {title && <StyledTitle>{title}</StyledTitle>}
      <StyledList>
        {movies.map(({ id, original_title, poster_path }) => {
          return (
            <StyledItem key={id}>
              <StyledLink state={{ from: location }} to={`/movies/${id}`}>
                <img
                  src={poster_path ? `${baseImgUrl}${poster_path}` : noImage}
                  alt={original_title}
                />
                <p>{original_title}</p>
              </StyledLink>
            </StyledItem>
          );
        })}
      </StyledList>
    </>
  );
}

MovieList.defaultProps = {
  movies: [],
};
