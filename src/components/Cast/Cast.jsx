import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { GetCast } from 'components/utils/api-request';
import { StyledContainer, StyledList } from './Cast.styled';

export default function Cast() {
  const [casts, setCasts] = useState([]);

  //определяем id фильма из адресной строки
  const { movieId } = useParams();

  useEffect(() => {
    const fetchCastMovies = async () => {
      try {
        const data = await GetCast(movieId);
        setCasts(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCastMovies();
  }, [movieId]);

  // размеры картинок профиля w45, w185, h632, "original"
  const baseImgUrl = 'https://image.tmdb.org/t/p/w185';

  //заглушка, если нет картинки профиля
  const noImage =
    'https://upload.wikimedia.org/wikipedia/commons/6/65/No-Image-Placeholder.svg';

  const elements = casts.map(({ id, character, name, profile_path }) => (
    <StyledList key={id}>
      <img
        src={profile_path ? `${baseImgUrl}${profile_path}` : noImage}
        alt={name}
        height="277px"
        width="185px"
      />
      <p>{name}</p>
      <p>Character: {character}</p>
    </StyledList>
  ));
  return <StyledContainer>{elements}</StyledContainer>;
}
