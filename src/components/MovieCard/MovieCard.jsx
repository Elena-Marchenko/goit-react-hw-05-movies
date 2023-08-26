// import { useParams } from 'react-router-dom';
import React from 'react';
import { useParams } from 'react-router-dom';
const MovieCard = () => {
  const { id } = useParams();

  return <div>Movies Card-{id}</div>;
};
export default MovieCard;
