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
const api = { fetchMovie };
export default api;
