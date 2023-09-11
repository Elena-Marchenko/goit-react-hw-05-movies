import React, { useEffect, useState } from 'react';
import api from '../../servises/fetchMovies';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState(null);
  useEffect(() => {
    api.fetchCast(movieId).then(data => setCast(data.cast));
  }, [movieId]);

  console.log(cast);

  return (
    <>
      <ul>
        {cast &&
          cast.map(actor => {
            return (
              <li key={actor.id}>
                <p>{actor.name}</p>
                <img
                  src={
                    actor.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}`
                      : `https://gdr.one/simg/133x200/bdc3c6/fff?text=Photo`
                  }
                  alt=""
                  height={200}
                />
              </li>
            );
          })}
      </ul>
    </>
  );
};
export default Cast;
