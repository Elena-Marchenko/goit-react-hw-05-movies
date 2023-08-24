import { useEffect, useState } from 'react';
import api from '../../servises/fetchMovies';
import { Link } from 'react-router-dom';
const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    api.fetchMovie().then(data => setTrendingMovies(data.results));
  }, []);

  return (
    <div>
      {trendingMovies.map(res => {
        const { id, title } = res;
        console.log(title);
        return (
          <Link key={id} to={`${title}`}>
            {title}
          </Link>
        );
      })}
    </div>
  );
};

export default Home;
