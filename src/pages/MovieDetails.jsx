// import { useEffect, useState } from 'react';
// import api from '../../servises/fetchMovies';
// import { useParams } from 'react-router-dom';

import { useParams } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  return <>MovieDetals: {movieId}</>;
};

// const MovieDetails = () => {
//   const { id } = useParams();
//   const [movieId, setMovieId] = useState('');

//   useEffect(() => {
//     api.fetchMovieDetails().then(data => setMovieId(data));
//   }, []);
//   console.log(movieId);

//   return <div>{movieId}</div>;
// };

export default MovieDetails;
