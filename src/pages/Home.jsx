import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import api from '../servises/fetchMovies';

const PopularMovies = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  // console.log('popular:', trendingMovies);
  useEffect(() => {
    api.fetchMovie().then(data => setTrendingMovies(data.results));
  }, []);

  return (
    <div>
      {trendingMovies.map(res => {
        const { id, title } = res;
        // console.log('popular id, title:', id, title);
        return (
          <Link key={id} to={`movies/${id}`}>
            {title}
          </Link>
        );
      })}
    </div>
  );
};
export default PopularMovies;

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
