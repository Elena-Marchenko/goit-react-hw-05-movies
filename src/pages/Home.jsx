import React, { Suspense } from 'react';
import PopularMovies from '../components/PopularMovies/PopularMovies';
// import { useEffect, useState } from 'react';
// import api from '../../servises/fetchMovies';

const Home = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PopularMovies />
    </Suspense>
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
