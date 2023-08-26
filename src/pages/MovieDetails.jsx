// import { useEffect, useState } from 'react';
// import api from '../../servises/fetchMovies';
// import { useParams } from 'react-router-dom';
import React from 'react';
import MovieCard from '../components/MovieCard/MovieCard';
const MovieDetails = () => {
  return (
    <div>
      <MovieCard />
    </div>
  );
};
export default MovieDetails;
// const MovieDetails = () => {
//   const { id } = useParams();
//   const [movieId, setMovieId] = useState('');

//   useEffect(() => {
//     api.fetchMovieDetails().then(data => setMovieId(data));
//   }, []);
//   console.log(movieId);

//   return <div>{movieId}</div>;
// };
