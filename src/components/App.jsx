import { Route, Routes, NavLink } from 'react-router-dom';
import { lazy } from 'react';

// import { Layout } from './Layout';

const Home = lazy(() => import('../pages/Home'));
const Movies = lazy(() => import('../pages/Movies'));
const MovieDetails = lazy(() => import('../pages/MovieDetails'));

const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/:movieId" element={<MovieDetails />} />
        <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
        <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>} />
      </Routes>
    </div>
  );
};

export default App;

// import { Route, Routes, NavLink } from 'react-router-dom';
// import Home from './pages/Home';
// import Movies from './pages/Movies';
// import MovieDetails from './pages/MovieDetails';
// // import { Layout } from './Layout';

// const App = () => {
//   return (
//     <div>
//       <nav>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/movies">Movies</NavLink>
//       </nav>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/movies" element={<Movies />} />
//         <Route path="/:movieId" element={<MovieDetails />} />
//         <Route path="/movies/:movieId/cast" element={<div>Cast</div>} />
//         <Route path="/movies/:movieId/reviews" element={<div>Reviews</div>} />
//       </Routes>
//     </div>
//   );
// };

// export default App;