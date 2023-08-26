import React from 'react';
// import { useEffect, useState } from 'react';
// import api from '../../servises/fetchMovies';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      {['movie-1', 'movie-2', 'movie-3', 'movie-4', 'movie-5'].map(movie => {
        return (
          <Link key={movie} to={`${movie}`}>
            {movie}
          </Link>
        );
      })}
    </div>
  );
};
export default Home;

// const Home = () => {
//   const [trendingMovies, setTrendingMovies] = useState([]);

//   useEffect(() => {
//     api.fetchMovie().then(data => setTrendingMovies(data.results));
//   }, []);

//   return (
//     <div>
//       {trendingMovies.map(res => {
//         const { id, title } = res;
//         // console.log(res);
//         return (
//           <Link key={id} to={`${title}`}>
//             {title}
//           </Link>
//         );
//       })}
//     </div>
//   );
// };
