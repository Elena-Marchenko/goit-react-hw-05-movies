import React from 'react';
import { Link } from 'react-router-dom';

const PopularMovies = () => {
  return (
    <div>
      {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5'].map(movie => {
        return (
          <Link key={movie} to={`movies/${movie}`}>
            {movie}
          </Link>
        );
      })}
    </div>
  );
};
export default PopularMovies;
