import React from 'react';

const Movies = () => {
  return <div>Movies page</div>;
};

export default Movies;

// import { useState } from 'react';
// import { useSearchParams, Link } from 'react-router-dom';

// const Movies = () => {
//   const [searchParams, setSearchParams] = useSearchParams();
//   const [movies, setMovies] = useState([
//     'movie-1',
//     'movie-2',
//     'movie-3',
//     'movie-4',
//     'movie-5',
//   ]);
//   const movieId = searchParams.get('movieId') ?? '';

//   const visibleMovie = movies.filter(movie => movie.includes(movieId));

//   const updateQueryString = e => {
//     if (e.target.value === '') {
//       return setSearchParams({});
//     }

//     setSearchParams({ movieId: e.target.value });
//     // const nextParams = name !== '' ? { name } : {};
//     // setSearchParams(nextParams);
//   };

//   return (
//     <div>
//       <input type="text" value={movieId} onChange={updateQueryString} />
//       <button onClick={() => setSearchParams({ c: 'hello' })}>Change sp</button>
//       <ul>
//         {visibleMovie.map(movie => {
//           return (
//             <li key={movie}>
//               <Link to={`${movie}`}>{movie}</Link>
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

// export default Movies;
