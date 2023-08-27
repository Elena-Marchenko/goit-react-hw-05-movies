// import { useParams } from 'react-router-dom';
import React from 'react';

import { Link, Outlet, useParams } from 'react-router-dom';
const MovieCard = () => {
  const { id } = useParams();

  return (
    <>
      <div>Movies Card-{id}</div>
      <Link to={`cast`}>Cast</Link>
      <Link to={`review`}>Review</Link>
      <div>
        <Outlet />
      </div>
    </>
  );
};
export default MovieCard;
