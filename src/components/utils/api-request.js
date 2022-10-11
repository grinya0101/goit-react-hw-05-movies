// https://api.themoviedb.org/3/trending/movie/day?api_key=83cba2c85d0df477852b094af9fbdddb

const API_KEY = '83cba2c85d0df477852b094af9fbdddb';

export const TrendingMovie = () => {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}`
  )
    .then(response => {
      if (response.ok) {
        return response.json();
      }
    })
    .catch(console.error());
};
