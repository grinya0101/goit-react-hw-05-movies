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

    return genres;
  } catch (error) {
    console.error(error);
  }
};
// https://api.themoviedb.org/3/genre/movie/list?api_key=83cba2c85d0df477852b094af9fbdddb

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
// https://api.themoviedb.org/3/movie/766220?api_key=83cba2c85d0df477852b094af9fbdddb&language=en-US

export const GetMovieBySearch = async q => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${q}&include_adult=false`
    );

    return data.results;
  } catch (error) {
    console.error(error);
  }
};
// https://api.themoviedb.org/3/search/movie?api_key=83cba2c85d0df477852b094af9fbdddb&query=cat&page=1&include_adult=false

export const GetCast = async id => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/credits?api_key=83cba2c85d0df477852b094af9fbdddb&language=en-US`
    );

    return data.cast;
  } catch (error) {
    console.error(error);
  }
};

// https://api.themoviedb.org/3/movie/361743/credits?api_key=83cba2c85d0df477852b094af9fbdddb&language=en-US

export const GetReviews = async id => {
  try {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=83cba2c85d0df477852b094af9fbdddb&language=en-US`
    );

    return data.results;
  } catch (error) {
    console.error(error);
  }
};

// https://api.themoviedb.org/3/movie/361743/reviews?api_key=83cba2c85d0df477852b094af9fbdddb&language=en-US
