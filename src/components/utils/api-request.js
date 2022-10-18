import axios from 'axios';
const API_KEY = '83cba2c85d0df477852b094af9fbdddb';

export const TrendingMovie = async () => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
    );

    return data.results;
  } catch (error) {
    console.error(error);
  }
};

export const GetGenre = async () => {
  try {
    const { genres } = await axios.get(
      `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_KEY}`
    );
    console.log(genres);
    return genres;
  } catch (error) {
    console.error(error);
  }
};

export const GetMovieById = async id => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`
    );

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const GetMovieBySearch = async q => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${q}&include_adult=false`
    );
    console.log(data.results);
    return data.results;
  } catch (error) {
    console.error(error);
  }
};

// https://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US

// https://api.themoviedb.org/3/movie/{movie_id}/reviews?api_key=<<api_key>>&language=en-US&page=1
