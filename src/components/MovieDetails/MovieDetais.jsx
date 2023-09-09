import { useEffect, useState } from 'react';
import api from '../../servises/fetchMovies';
import { Outlet, useParams, Link } from 'react-router-dom';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    api.fetchMovieDetails(movieId).then(data => setMovie(data));
  }, [movieId]);
  console.log('movieDetails:', movieId);
  console.log('movieDetails:', movie);

  return (
    movie && (
      <>
        <div>
          <h1>Movies Card-{movie.title}</h1>
          {/* <img alt="Poster">IMG{}</img> */}
          <p>User score:{movie.vote_average} %</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <h2>Genres</h2>
          <p>
            {movie.genres.map(genre => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </p>
        </div>
        <Link to={`cast`}>Cast</Link>
        <Link to={`review`}>Review</Link>
        <div>
          <Outlet />
        </div>
      </>
    )
  );
};
export default MovieDetails;
