import { useState, useEffect } from 'react';
import { Outlet, useParams, useNavigate, useLocation } from 'react-router-dom';
import { HiOutlineArrowCircleLeft } from 'react-icons/hi';
import { GetMovieById } from 'components/utils/api-request';

import { Box } from 'components/Box';
import {
  StyledButtom,
  SyledLink,
  StyledContainer,
  StyledTitle,
} from './MovieDetails.styled';
import items from './AddInformItems';

export default function MovieDetails() {
  const [movie, setMovie] = useState({});
  const navigate = useNavigate();
  const location = useLocation();

  // если скопировать адрес фильма и перейти в отдельной закладке,
  //   сслыки для возврата GO BACK нет, и будет ошибка.
  // читать код ниже так:
  // - если в location.state нет свойства "from" назначь на его место '/'
  const from = location.state?.from || '/';

  //обьект, котрорый показывает все динамические параметры в адресной строке
  // в нашем случае - это id фильма, по которому будет идти поиск ниже
  const { movieId } = useParams();

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const result = await GetMovieById(movieId);
        setMovie(result);
      } catch (error) {
        console.log(error);
      }
    };
    fetchMovieById();
  }, [movieId]);

  //в данном случае при нажатии на кнопку сайт переходит на один "адрес"
  //назад. Это нам не подхожит
  // const goBackPage = () => navigate(-1);

  const goBackPage = () => navigate(from);

  const {
    original_title,
    overview,
    genres = [],
    vote_average,
    poster_path,
  } = movie;

  const filterGenre = genres.map(genre => genre.name).join(' ');
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500/';

  const noImage =
    'https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg';

  return (
    <div>
      <StyledButtom onClick={goBackPage}>
        <HiOutlineArrowCircleLeft size="16px" /> Go back
      </StyledButtom>
      <StyledContainer>
        <img
          src={poster_path ? `${baseImgUrl}${poster_path}` : noImage}
          alt={original_title}
          width="300"
        />
        <Box ml={4}>
          <StyledTitle>{original_title}</StyledTitle>
          <p>
            <b>User Score:</b>
            {vote_average}%
          </p>

          <p>
            <b>Overview:</b>
          </p>
          {overview}
          <p>
            <b>Genres:</b>
          </p>
          {filterGenre}
        </Box>
      </StyledContainer>
      <div>
        <ul>
          {items.map(({ text, href }) => (
            <li key={text}>
              <SyledLink state={{ from }} to={href}>
                {text}
              </SyledLink>
            </li>
          ))}
        </ul>
      </div>
      <Outlet />
    </div>
  );
}
