const API_KEY = 'a1ae8e461896b0559f89287417b76023';

const fetchMovie = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
};
const fetchMovieByName = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&include_adult=false&language=en-US&page=1`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
};
const fetchMovieDetails = async () => {
  return await fetch(
    `https://api.themoviedb.org/3/movie/movie_id?api_key=${API_KEY}&language=en-US`
  ).then(response => {
    if (response.ok) {
      return response.json();
    }
  });
};
const api = { fetchMovie, fetchMovieByName, fetchMovieDetails };
export default api;
